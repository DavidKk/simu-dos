import * as path from 'path'
import { EventEmitter } from 'events'
import defaultsDeep from 'lodash/defaultsDeep'
import { AxiosRequestConfig } from 'axios'
import request, { CancelToken } from '../services/request'
import dosConf from '../conf/dos'
import version from '../conf/version'
import * as Typings from '../typings'

/**
 * DOS 模拟器类
 * @description
 * 主要对 wdosbox 进行二次封装
 */
export default class DosBox extends EventEmitter {
  /**
   * 初始化配置
   */
  public options: Typings.DosBoxOptions

  /**
   * 数据库名称
   */
  public database: string

  /**
   * 画布
   */
  public canvas: HTMLCanvasElement

  /**
   * wdosbox 模块对象
   */
  public wdosboxModule: Typings.DosBoxWdosboxModule

  /**
   * wasm 模块对象
   */
  public wasmModule: WebAssembly.Module

  /**
   * 脚本输入队列
   */
  public shellInputQueue: string[]

  /**
   * 脚本输入回调事件集合
   */
  public shellInputClients: Array<() => void>

  /**
   * 是否为活动状态
   */
  public isAlive: boolean

  /**
   * 是否完成初始化
   */
  public isInitialized: boolean

  /**
   * 是否准备完成
   */
  public isReady: boolean

  /**
   * 下载任务集合
   */
  public fetchTasks: Array<Typings.DosBoxFetchTask>

  constructor (canvas: HTMLCanvasElement, options: Typings.DosBoxOptions = {}) {
    super()

    this.options = defaultsDeep({ wasmUrl: './wdosbox.wasm.js' }, options)
    this.database = options.database || 'gdcenter_game'
    this.canvas = canvas || null
    this.wdosboxModule = null
    this.wasmModule = null
    this.shellInputQueue = []
    this.shellInputClients = []
    this.isAlive = true
    this.isInitialized = false
    this.isReady = false
    this.fetchTasks = []

    /**
     * 因为 WDOSBOX 会删除部分样式
     * 重写 removeProperty 将重新获取更改
     * 样式的主导权, 若要删除使用
     * document.body.style.removeProperty.call(this.canvas.style, 'propertyName')
     */
    const canvasStyle = this.canvas.style
    canvasStyle.removeProperty = Function.prototype as any
  }

  /**
   * 转换文件成 ArrayBuffer
   * @param {Typings.DosBoxConvertFileToArrayBufferParams} params 参数
   * @returns {ArrayBuffer[]}
   * @description
   * 这里最主要作用是并行下载文件
   */
  private convertFileToArrayBuffer (params: Typings.DosBoxConvertFileToArrayBufferParams): Promise<ArrayBuffer[]> {
    const promises = params.map(({ file, options }) => {
      if (file instanceof ArrayBuffer) {
        return Promise.resolve(file)
      }

      const onCompleted = (data: ArrayBuffer) => {
        if (typeof options.onCompleted === 'function') {
          options.onCompleted(data)
        }

        return data
      }

      const onProgress = (event) => {
        const { loaded, total } = event
        if (typeof options.onProgress === 'function') {
          options.onProgress({ loaded, total })
        }
      }

      const requestOptions: AxiosRequestConfig = {
        responseType: 'arraybuffer',
        onDownloadProgress: onProgress
      }

      return this.fetchArrayBuffer(file, requestOptions).then(onCompleted)
    })

    return Promise.all(promises)
  }

  /**
   * 运行游戏
   * @param {Typings.GameInformation} game 游戏信息
   * @param {Typings.DosBoxPlayOptions} options 执行配置
   * @returns {Promise}
   */
  public async play (game: Typings.GameInformation, options?: Typings.DosBoxPlayOptions): Promise<void> {
    const { url, rom, command } = game
    const { wasm, wasmUrl } = defaultsDeep(options, this.options)

    /**
     * 并行下载文件
     * 若文件已有内容则直接返回该文件
     */
    const [wasmFile, romFile] = await this.convertFileToArrayBuffer([
      {
        file: wasm || wasmUrl,
        options: {
          onProgress: options.onDownloadWasmProgress,
          onCompleted: options.onDownloadWasmCompleted
        }
      },
      {
        file: rom || url,
        options: {
          onProgress: options.onDownloadRomProgress,
          onCompleted: options.onDownloadRomCompleted
        }
      }
    ])

    /**
     * 下载并编译 wasm 文件
     * WASM 初始化后才回调
     */
    const { mainFn } = await this.compile(wasmFile)

    /**
     * 下载并解压缩 ROM 文件
     * 最后载入到模拟器中
     */

    const buffer = await this.extract(romFile, 'zip')
    if (typeof options.onExtractCompleted === 'function') {
      options.onExtractCompleted(buffer)
    }

    /**
     * 执行命令运行程序
     */
    await mainFn(command)
  }

  /**
   * 编译 wasm 文件
   * @param {string|ArrayBuffer} wasm 文件地址或者文件内容
   * @param {Typings.DosBoxCompileOptions} options 编译配置
   * @returns {Promise}
   * @description
   * 若文件为远程文件, 则先下载再解压
   */
  public compile (wasm: ArrayBuffer): Promise<any> {
    this.isReady = false
    this.isInitialized = false

    /**
     * 实例化WASM
     */
    const instantiateWasm = (info: any, receiveInstance: Function) => {
      return WebAssembly.instantiate(this.wasmModule, info).then((instance) => {
        return receiveInstance(instance, this.wasmModule)
      })
    }

    /**
     * 实例化后执行的命令
     */
    const onRuntimeInitialized = () => {
      const mainFn = (args: string[] = []): Promise<void> => {
        return new Promise((resolve) => {
          this.createFile('/home/web_user/.dosbox/dosbox-jsdos.conf', dosConf)

          args.unshift('-userconf', '-c', 'mount c .', '-c', 'c:')
          args.indexOf('-exit') === -1 && args.push('-exit')

          this.wdosboxModule.callMain(args)

          this.once('ready', resolve)
        })
      }

      this.isInitialized = true
      this.emit('runtimeInitialized', { mainFn })
    }

    /**
     * 对模拟器进行PING
     * @description
     * 若有特定输出返回即可对外广播
     * 注意这里无法监听崩溃退出程序情况
     */
    const ping = (message: string, ...args: any[]) => {
      if (this.isAlive !== true) {
        return
      }

      switch (message) {
        case 'ready': {
          this.isReady = true
          this.emit('ready')
          break
        }

        case 'shell_input': {
          if (this.shellInputQueue.length === 0) {
            break
          }

          const buffer: number = args[0]
          const maxLength: number = args[1]

          const cmd = this.shellInputQueue.shift()
          const cmdLength = this.wdosboxModule.lengthBytesUTF8(cmd) + 1

          if (cmdLength > maxLength) {
            throw new Error(`Can't execute cmd '${cmd}', because it's bigger then max cmd length ${maxLength}`)
          }

          this.wdosboxModule.stringToUTF8(cmd, buffer, cmdLength)

          if (this.shellInputQueue.length === 0) {
            for (const resolve of this.shellInputClients) {
              resolve()
            }

            this.shellInputClients = []
          } else {
            this.requestShellInput()
          }
        }
      }
    }

    /**
     * 打印信息
     * @description
     * 注意这里无法知道是否运行的程序是否退出了
     * 因此可在这里监听 message 来实现
     */
    const print = (message) => {
      this.emit('message', message)

      if (message === 'SDL_Quit called (and ignored)') {
        this.emit('exit')
      }
    }

    /**
     * 传递给模拟器的属性接口
     * @description
     * 用于与模拟器交互并交换数据的一个对象接口
     */
    this.wdosboxModule = {
      canvas: this.canvas,
      version,
      instantiateWasm,
      onRuntimeInitialized,
      ping,
      print
    } as Typings.DosBoxWdosboxModule

    return new Promise(async (resolve, reject) => {
      /**
       * 因为是否完成注册与能够执行主程序并不能
       * 同时进行, 因此这里通过事件来确定注册与
       * 启动正式完成
       */
      this.once('runtimeInitialized', resolve)

      try {
        /**
         * 编译 wasm 文件
         */
        const module = await WebAssembly.compile(wasm)
        this.wasmModule = module

        const { default: WDOSBOX } = await import('../../node_modules/js-dos/dist/wdosbox')
        WDOSBOX(this.wdosboxModule)

      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * 解压 ROM 文件
   * @param {string|ArrayBuffer} rom ROM 文件
   * @param {string} type 文件类型, 默认为 zip
   * @param {Typings.DosBoxExtractOptions} options 解压配置
   * @returns {Promise}
   * @description
   * 若文件为远程文件, 则先下载再解压
   */
  public extract (rom: ArrayBuffer, type: string = 'zip'): Promise<ArrayBuffer> {
    if (type !== 'zip') {
      Promise.reject(new Error('Only ZIP archive is supported'))
      return
    }

    const wdosboxModule = this.wdosboxModule
    const bytes = new Uint8Array(rom)
    const buffer = wdosboxModule._malloc(bytes.length)
    wdosboxModule.HEAPU8.set(bytes, buffer)

    const code = wdosboxModule._extract_zip(buffer, bytes.length)
    wdosboxModule._free(buffer)

    if (code === 0) {
      return Promise.resolve(rom)
    }

    return Promise.reject(new Error(`Can't extract zip, retcode ${code}, see more info in logs`))
  }

  /**
   * 下载远程文件
   * @param {string} url 远程文件目录
   * @param {AxiosRequestConfig} options 配置
   * @returns {Promise<ArrayBuffer>}
   */
  public fetchArrayBuffer (url: string, options?: AxiosRequestConfig): Promise<ArrayBuffer> {
    const source = CancelToken.source()
    const token = source.token

    options = defaultsDeep({ responseType: 'arraybuffer', cancelToken: token }, options)

    const cancel = (message?: string) => source.cancel(message || 'Extract canceled.')
    const promise = request.get(url, options).then((response) => {
      const { data } = response
      if (!(data instanceof ArrayBuffer)) {
        return Promise.reject(new Error('Data is invalid'))
      }

      return Promise.resolve(data)
    })

    this.fetchTasks.push({ promise, cancel })
    return promise
  }

  /**
   * 获取 wdosbox 模块
   */
  public getWdosboxModule (): Promise<any> {
    if (this.isInitialized === true) {
      return Promise.resolve(this.wdosboxModule)
    }

    return new Promise((resolve) => {
      this.once('runtimeInitialized', () => {
        resolve(this.wdosboxModule)
      })
    })
  }

  /**
   * 创建文件
   * @param {string} file 文件名称
   * @param {ArrayBuffer | Uint8Array | string} 文件内容
   */
  public createFile (file: string, body: ArrayBuffer | Uint8Array | string): void {
    if (body instanceof ArrayBuffer) {
      body = new Uint8Array(body)
    }

    file = file.replace(new RegExp('^[a-zA-z]+:'), '') .replace(new RegExp('\\\\', 'g'), '/')
    const parts = file.split('/')

    if (parts.length === 0) {
      throw new Error(`Can't create file '${file}', because it's not valid file path`)
    }

    const filename = parts[parts.length - 1].trim()
    if (filename.length === 0) {
      throw new Error(`Can't create file '${file}', because file name is empty`)
    }

    let path = '/'
    for (let i = 0; i < parts.length - 1; ++i) {
      const part = parts[i].trim()
      if (part.length === 0) {
        continue
      }

      this.wdosboxModule.FS_createPath(path, part, true, true)
      path = path + '/' + part
    }

    this.wdosboxModule.FS_createDataFile(path, filename, body, true, true, true)
  }

  /**
   * 搜索文件
   * @param {string} dir 文件目录
   * @param {RegExp} pattern 匹配正则
   * @returns {Promise<string[]>} 文件名称
   */
  public searchFiles (dir: string, pattern: RegExp): Promise<string[]> {
    return new Promise((resolve) => {
      let { FS } = this.wdosboxModule
      let files = FS.readdir(dir)
      files = files.filter((file) => pattern.test(file))
      resolve(files)
    })
  }

  /**
   * 读取文件
   * @param {string} file 文件名称
   * @returns {ArrayBuffer} 文件内容
   */
  public readFile (file: string): ArrayBuffer {
    const { FS } = this.wdosboxModule
    const { exists, object } = FS.analyzePath(file)
    if (exists !== true) {
      throw new Error(`File ${file} is not exists`)
    }

    return object.contents
  }

  /**
   * 写文件
   * @param {string} file 文件名称
   * @param {ArrayBuffer} content 文件内容
   */
  public writeFile (file: string, content: ArrayBuffer): void {
    const { FS } = this.wdosboxModule
    const { exists } = FS.analyzePath(file)

    exists && FS.unlink(file)

    const dir = path.dirname(file)
    const name = path.basename(file)

    FS.createDataFile(dir, name, content, true, true, true)
  }

  /**
   * 模拟输入事件
   * @param {number} keyCode 键值
   * @param {boolean} pressed 是否为按键
   */
  public simulateKeyEvent (keyCode: number, pressed: boolean): void {
    let name = pressed ? 'keydown' : 'keyup'
    let event = document.createEvent('KeyboardEvent') as any
    let getter = {
      get: function () {
        return this.keyCodeVal
      }
    }

    // Chromium Hack
    Object.defineProperty(event, 'keyCode', getter)
    Object.defineProperty(event, 'which', getter)
    Object.defineProperty(event, 'charCode', getter)

    event.initKeyboardEvent
    ? event.initKeyboardEvent(name, true, true, document.defaultView, false, false, false, false, keyCode, keyCode)
    : event.initKeyEvent(name, true, true, document.defaultView, false, false, false, false, keyCode, 0)

    event.keyCodeVal = keyCode
    this.canvas && this.canvas.dispatchEvent(event)
  }

  /**
   * 模拟按键
   * @param {number} keyCode 键值
   */
  public simulateKeyPress (keyCode: number): void {
    this.simulateKeyEvent(keyCode, true)
    setTimeout(() => this.simulateKeyEvent(keyCode, false), 100)
  }

  /**
   * 发送模拟按键
   * @param {number} code 键值
   */
  public sendKeyPress (code: number): void {
    if (this.isInitialized === true) {
      this.wdosboxModule.send('sdl_key_event', code + '')
    }
  }

  /**
   * 请求 shell 输入
   */
  public requestShellInput (): void {
    this.sendKeyPress(13)
  }

  /**
   * 执行命令
   * @param {string[]} ...cmd 命令
   * @returns {Promise}
   */
  public shell (...cmd: string[]): Promise<void> {
    if (cmd.length === 0) {
      return Promise.resolve()
    }

    return new Promise((resolve) => {
      this.shellInputClients.push(resolve)

      for (const next of cmd) {
        this.shellInputQueue.push(next)
      }

      this.requestShellInput()
    })
  }

  /**
   * 退出
   * @returns {boolean} 是否成功退出
   */
  public exit (): boolean {
    try {
      this.wdosboxModule.send('exit')
    } catch (error) {
      return false
    }

    return true
  }

  /**
   * 设置画布大小
   * @param {number} width 宽度
   * @param {number} height 高度
   */
  public setSize (width: number, height: number): void {
    let { innerWidth: maxWidth, innerHeight: maxHeight } = window
    let originWidth = parseFloat(this.canvas.getAttribute('width')) || 640
    let originHeight = parseFloat(this.canvas.getAttribute('height')) || 400
    let originRatio = originWidth / originHeight

    if (width > maxWidth) {
      width = maxWidth
    }

    if (height > maxHeight) {
      height = maxHeight
    }

    if (width > height) {
      width = height * originRatio
    } else {
      height = width / originRatio
    }

    this.canvas.style.setProperty('width', `${width}px`)
    this.canvas.style.setProperty('height', `${height}px`)
  }

  /**
   * 监听消息
   * @param {Function} handle 回调
   */
  public onMessage (handle: (...args: any[]) => void): void {
    this.addListener('message', handle)
  }

  /**
   * 监听进度
   * @param {Function} handle 回调
   */
  public onProgress (handle: (...args: any[]) => void): void {
    this.addListener('progress', handle)
  }

  /**
   * 监听退出
   * @param {Function} handle 回调
   */
  public onExit (handle: (...args: any[]) => void): void {
    this.addListener('exit', handle)
  }

  /**
   * 销毁
   * @param {boolean} force 强制销毁
   */
  public destroy (force: boolean = true): void {
    const handleDestroyDosBox = () => {
      this.exit()

      this.fetchTasks.forEach((task) => task.cancel())
      this.removeAllListeners()

      this.shellInputQueue && this.shellInputQueue.splice(0)
      this.shellInputClients.splice(0)
      this.fetchTasks.splice(0)

      this.options = undefined
      this.canvas = undefined
      this.wdosboxModule = undefined
      this.wasmModule = undefined
      this.shellInputQueue = undefined
      this.shellInputClients = undefined
      this.isAlive = undefined
      this.isInitialized = undefined
      this.isReady = undefined
      this.fetchTasks = undefined
    }

    if (force === true) {
      handleDestroyDosBox()
    } else if (this.isInitialized === false) {
      this.once('runtimeInitialized', handleDestroyDosBox)
    } else if (this.isReady === false) {
      this.once('ready', handleDestroyDosBox)
    } else {
      handleDestroyDosBox()
    }
  }
}
