import { eventify } from '@/libs/Eventify'
import Loader, { type RequestOptions } from '@/libs/Loader'
import { pickByLanguage } from '@/services/lang'
import { isKey } from '@/utils'
import { DOSBOX_VERSION, DOSBOX_CONFIG, WASM_FILE } from '@/constants/definations'
import KeyCodes from '@/constants/keycode'
import type { DosBoxOptions, DosBoxPlayOptions, DosBoxWdosboxModule, DosboxMainFn, DosboxMessageEventPayload, DosboxRuntimeInitializedEventPayload, Game } from '@/types'
import SimEvent from './SimEvent'

export interface ConvertFileToArrayBufferParams {
  file: string | ArrayBuffer
  options: RequestOptions
}

/**
 * DOS 模拟器类
 * @description
 * 主要对 wdosbox 进行二次封装
 */
export default class DosBox extends eventify() {
  static Events = {
    Ready: SimEvent.create<void>('DOSBOX_READY'),
    RuntimeInitialized: SimEvent.create<DosboxRuntimeInitializedEventPayload>('DOSBOX_RUNTIME_INITIALIZED_EVENT'),
    Message: SimEvent.create<DosboxMessageEventPayload>('DOSBOX_MESSAGE'),
    Exit: SimEvent.create<void>('DOSBOX_EXIT'),
  }

  protected loader = new Loader()

  /** wasm 位置 */
  protected wasmUrl: string
  /** wasm 模块对象 */
  protected wasmModule: WebAssembly.Module
  /** wdosbox 模块对象 */
  protected wdosboxModule: DosBoxWdosboxModule

  /** 画布 */
  protected canvas: HTMLCanvasElement
  /** 脚本输入队列 */
  protected shellInputQueue: string[]
  /** 脚本输入回调事件集合 */
  protected shellInputClients: Array<() => void>

  /** 是否为活动状态 */
  protected isAlive: boolean
  /** 是否完成初始化 */
  protected isInitialized: boolean
  /** 是否准备完成 */
  protected isReady: boolean

  constructor(canvas: HTMLCanvasElement, options: DosBoxOptions = {}) {
    super()

    this.wasmUrl = options?.wasmUrl || WASM_FILE
    this.canvas = canvas
    this.shellInputQueue = []
    this.shellInputClients = []
    this.isAlive = true
    this.isInitialized = false
    this.isReady = false

    /**
     * 因为 WDOSBOX 会删除部分样式
     * 重写 removeProperty 将重新获取更改
     * 样式的主导权, 若要删除使用
     * document.body.style.removeProperty.call(this.canvas.style, 'propertyName')
     */
    const canvasStyle = this.canvas.style
    canvasStyle.removeProperty = Function.prototype as any
  }

  /** 下载远程文件 */
  protected async fetchArrayBuffer(url: string, options?: RequestOptions) {
    return this.loader.load(url, options)
  }

  protected convertFileToArrayBuffer(files: ConvertFileToArrayBufferParams | ConvertFileToArrayBufferParams[]) {
    const fileSet = Array.isArray(files) ? files : [files]
    return Promise.all(
      fileSet.map(async ({ file, options }) => {
        if (file instanceof ArrayBuffer) {
          return file
        }

        const buffer = await this.fetchArrayBuffer(file, options)
        return buffer
      })
    )
  }

  /**
   * 运行游戏
   * @param game 游戏信息
   * @param options 执行配置
   */
  public async play(game: Game, options?: DosBoxPlayOptions): Promise<void> {
    const { url, rom, command } = game
    const file = options?.wasm || options?.wasmUrl || this.wasmUrl

    /**
     * 并行下载文件
     * 若文件已有内容则直接返回该文件
     */
    const [wasmFile, romFile] = await this.convertFileToArrayBuffer([
      {
        file,
        options: {
          onProgress(event) {
            const { receivedLength: loaded, contentLength: total } = event.detail
            options?.onDownloadWasmProgress?.({ loaded, total })
          },
          onCompleted(content) {
            options?.onDownloadWasmCompleted?.(content)
          },
        },
      },
      {
        file: rom ? rom : typeof url === 'string' ? url : pickByLanguage(url)!,
        options: {
          onProgress(event) {
            const { receivedLength: loaded, contentLength: total } = event.detail
            options?.onDownloadRomProgress?.({ loaded, total })
          },
          onCompleted(content) {
            options?.onDownloadRomCompleted?.(content)
          },
        },
      },
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
    if (typeof options?.onExtractCompleted === 'function') {
      await options.onExtractCompleted(buffer)
    }

    // 执行命令运行程序
    await mainFn(command)
  }

  /**
   * 编译 wasm 文件
   * @param wasm 文件地址或者文件内容
   * @param options 编译配置
   * @description
   * 若文件为远程文件, 则先下载再解压
   */
  protected compile(wasm: ArrayBuffer) {
    this.isReady = false
    this.isInitialized = false

    /** 实例化WASM */
    const instantiateWasm = async (info: any, receiveInstance: (instance: WebAssembly.Instance, wasmModule: WebAssembly.Module) => any) => {
      const instance = await WebAssembly.instantiate(this.wasmModule, info)
      return receiveInstance(instance, this.wasmModule)
    }

    /** 实例化后执行的命令 */
    const onRuntimeInitialized = () => {
      const mainFn = (args: string[] = []) => {
        return new Promise<void>((resolve) => {
          this.createFile('/home/web_user/.dosbox/dosbox-jsdos.conf', DOSBOX_CONFIG)

          args.unshift('-userconf', '-c', 'mount c .', '-c', 'c:')
          args.indexOf('-exit') === -1 && args.push('-exit')

          this.wdosboxModule.callMain(args)
          DosBox.Events.Ready.once(() => resolve())
        })
      }

      this.isInitialized = true
      DosBox.Events.RuntimeInitialized.dispatch({ mainFn })
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
          DosBox.Events.Ready.dispatch()
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
    const print = (message: string) => {
      DosBox.Events.Message.dispatch({ message })

      if (message === 'SDL_Quit called (and ignored)') {
        DosBox.Events.Exit.dispatch()
      }
    }

    /**
     * 传递给模拟器的属性接口
     * @description
     * 用于与模拟器交互并交换数据的一个对象接口
     */
    this.wdosboxModule = {
      canvas: this.canvas,
      version: DOSBOX_VERSION,
      instantiateWasm,
      onRuntimeInitialized,
      ping,
      print,
    } as any

    return new Promise<{ mainFn: DosboxMainFn }>(async (resolve, reject) => {
      /**
       * 因为是否完成注册与能够执行主程序并不能
       * 同时进行, 因此这里通过事件来确定注册与
       * 启动正式完成
       */
      DosBox.Events.RuntimeInitialized.once((event) => {
        resolve(event.detail)
      })

      try {
        // 编译 wasm 文件
        const module = await WebAssembly.compile(wasm)
        this.wasmModule = module

        const { default: WDOSBOX } = await import('js-dos/dist/wdosbox' as any)
        WDOSBOX(this.wdosboxModule)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * 解压 ROM 文件
   * @param rom ROM 文件
   * @param type 文件类型, 默认为 zip
   * @param options 解压配置
   * @description
   * 若文件为远程文件, 则先下载再解压
   */
  public async extract(rom: ArrayBuffer, type = 'zip') {
    if (type !== 'zip') {
      throw new Error('Only ZIP archive is supported')
    }

    const wdosboxModule = this.wdosboxModule
    const bytes = new Uint8Array(rom)
    const buffer = wdosboxModule._malloc(bytes.length)
    wdosboxModule.HEAPU8.set(bytes, buffer)

    const code = wdosboxModule._extract_zip(buffer, bytes.length)
    wdosboxModule._free(buffer)

    if (code === 0) {
      return rom
    }

    throw new Error(`Can't extract zip, retcode ${code}, see more info in logs`)
  }

  /** 获取 wdosbox 模块 */
  public async getWdosboxModule() {
    if (this.isInitialized === true) {
      return this.wdosboxModule
    }

    return new Promise<DosBoxWdosboxModule>((resolve) => {
      this.once('runtimeInitialized', () => {
        resolve(this.wdosboxModule)
      })
    })
  }

  /**
   * 创建文件
   * @param file 文件名称
   * @param body 文件内容
   */
  public createFile(file: string, body: ArrayBuffer | Uint8Array | string) {
    if (body instanceof ArrayBuffer) {
      body = new Uint8Array(body)
    }

    file = file.replace(new RegExp('^[a-zA-z]+:'), '').replace(new RegExp('\\\\', 'g'), '/')

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
   * @param dir 文件目录
   * @param pattern 匹配正则
   */
  public searchFiles(dir: string, pattern: RegExp) {
    return new Promise<string[]>((resolve) => {
      const { FS } = this.wdosboxModule
      if (!FS) {
        resolve([])
        return
      }

      const files = FS.readdir(dir)
      const filteredFiles = files.filter((file) => pattern.test(file))
      resolve(filteredFiles)
    })
  }

  /**
   * 读取文件
   * @param file 文件名称
   * @returns 文件内容
   */
  public readFile(file: string) {
    const { FS } = this.wdosboxModule
    const { exists, object } = FS.analyzePath(file)
    if (exists !== true) {
      throw new Error(`File ${file} is not exists`)
    }

    return object.contents
  }

  /**
   * 写文件
   * @param file 文件名称
   * @param content 文件内容
   */
  public writeFile(file: string, content: ArrayBuffer, sep = '/') {
    const { FS } = this.wdosboxModule
    const { exists } = FS.analyzePath(file)

    exists && FS.unlink(file)
    const paths = file.split(sep)
    const name = paths.pop()!
    const dir = paths.join(sep) || '.'
    FS.createDataFile(dir, name, content, true, true, true)
  }

  /**
   * 模拟输入事件
   * @param keyCode 键值
   * @param pressed 是否为按键
   */
  public simulateKeyEvent(key: string, pressed: boolean) {
    const type = pressed ? 'keydown' : 'keyup'
    if (!isKey(key)) {
      return
    }

    const keyCode = KeyCodes[key]
    const event = new KeyboardEvent(type, { key, keyCode, bubbles: true, cancelable: true })
    this.canvas && this.canvas.dispatchEvent(event)
  }

  /**
   * 模拟按键
   * @param keyCode 键值
   */
  public simulateKeyPress(key: string) {
    this.simulateKeyEvent(key, true)
    setTimeout(() => this.simulateKeyEvent(key, false), 100)
  }

  /**
   * 发送模拟按键
   * @param code 键值
   */
  public sendKeyPress(key: string) {
    if (this.isInitialized === true) {
      this.wdosboxModule.send('sdl_key_event', key)
    }
  }

  /** 请求 shell 输入 */
  public requestShellInput() {
    this.sendKeyPress('Enter')
  }

  /**
   * 执行命令
   * @param ...cmd 命令
   */
  public async shell(...cmd: string[]) {
    if (cmd.length === 0) {
      return
    }

    return new Promise<void>((resolve) => {
      this.shellInputClients.push(resolve)

      for (const next of cmd) {
        this.shellInputQueue.push(next)
      }

      this.requestShellInput()
    })
  }

  /** 退出 */
  public exit() {
    try {
      this.wdosboxModule.send('exit')
    } catch (error) {
      return false
    }

    return true
  }

  /**
   * 设置画布大小
   * @param width 宽度
   * @param height 高度
   */
  public setSize(width: number, height: number) {
    const { innerWidth: maxWidth, innerHeight: maxHeight } = window
    const originWidth = this.canvas.clientWidth || 640
    const originHeight = this.canvas.clientHeight || 400
    const originRatio = originWidth / originHeight

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
   * 销毁
   * @param force 强制销毁
   */
  public destroy(force = true) {
    const handleDestroyDosBox = () => {
      this.exit()

      this.removeAllListeners()
      this.shellInputQueue && this.shellInputQueue.splice(0)
      this.shellInputClients.splice(0)
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
