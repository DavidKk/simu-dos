import * as path from 'path'
import { EventEmitter } from 'events'
import defaultsDeep from 'lodash/defaultsDeep'
import { AxiosRequestConfig } from 'axios'
import request, { CancelToken } from '../services/request'
import dosConf from '../conf/dos'
import version from '../conf/version'
import * as Typings from '../typings'

export default class DosBox extends EventEmitter {
  public options: Typings.DosBoxOptions
  public database: string
  public canvas: HTMLCanvasElement
  public wdosboxModule: Typings.DosBoxWdosboxModule
  public wasmModule: WebAssembly.Module
  public shellInputQueue: string[]
  public shellInputClients: Array<() => void>
  public isAlive: boolean
  public isInitialized: boolean
  public isReady: boolean
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
  }

  public async play (game: Typings.GameInfo, options?: Typings.DosBoxPlayOptions): Promise<void> {
    const { url, rom, command } = game

    const handleDownloadRom = (event) => {
      const { loaded, total } = event
      this.emit('progress', { loaded, total })

      if (typeof options.onDwonloadRomProgress === 'function') {
        options.onDwonloadRomProgress({ loaded, total })
      }
    }

    const { mainFn } = await this.compile(this.options.wasmUrl, { onProgress: options.onDwonloadWasmProgress })
    const buffer = await this.extract(rom || url, 'zip', { onDownloadProgress: handleDownloadRom })

    if (typeof options.onDownloadCompleted === 'function') {
      options.onDownloadCompleted(buffer)
    }

    await mainFn(command)
  }

  public compile (wasmUrl?: string, options: Typings.DosBoxCompileOptions = {}): Promise<any> {
    options = defaultsDeep({ wasmUrl }, options, this.options)

    this.isReady = false
    this.isInitialized = false

    const instantiateWasm = (info, receiveInstance) => {
      return WebAssembly.instantiate(this.wasmModule, info).then((instance) => {
        return receiveInstance(instance, this.wasmModule)
      })
    }

    const onRuntimeInitialized = () => {
      let mainFn = (args: string[] = []): Promise<void> => {
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

    const print = (message) => {
      this.emit('message', message)

      if (message === 'SDL_Quit called (and ignored)') {
        this.emit('exit')
      }
    }

    this.wdosboxModule = {
      canvas: this.canvas,
      version,
      instantiateWasm,
      onRuntimeInitialized,
      ping,
      print
    } as Typings.DosBoxWdosboxModule

    const onDownloadProgress = (event) => {
      const { loaded, total } = event
      if (typeof options.onProgress === 'function') {
        options.onProgress({ loaded, total })
      }
    }

    const requestOptions: AxiosRequestConfig = {
      responseType: 'arraybuffer',
      onDownloadProgress
    }

    return new Promise((resolve, reject) => {
      this.once('runtimeInitialized', resolve)

      this.fetchArrayBuffer(options.wasmUrl, requestOptions)
      .then((data) => WebAssembly.compile(data))
      .then(async (module) => {
        this.wasmModule = module

        const { default: WDOSBOX } = await import('../../node_modules/js-dos/dist/wdosbox')
        WDOSBOX(this.wdosboxModule)
      })
      .catch(reject)
    })
  }

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

  public extract (rom: string | ArrayBuffer, type: string = 'zip', options?: AxiosRequestConfig): Promise<ArrayBuffer> {
    if (type !== 'zip') {
      Promise.reject(new Error('Only ZIP archive is supported'))
      return
    }

    const extract = (data: ArrayBuffer) => {
      const wdosboxModule = this.wdosboxModule
      const bytes = new Uint8Array(data)
      const buffer = wdosboxModule._malloc(bytes.length)
      wdosboxModule.HEAPU8.set(bytes, buffer)

      const code = wdosboxModule._extract_zip(buffer, bytes.length)
      wdosboxModule._free(buffer)

      if (code === 0) {
        return Promise.resolve(data)
      }

      return Promise.reject(new Error(`Can't extract zip, retcode ${code}, see more info in logs`))
    }

    if (typeof rom === 'string') {
      return this.fetchArrayBuffer(rom, options).then(extract)
    }

    return extract(rom)
  }

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

  public searchFiles (dir: string, pattern: RegExp): Promise<Array<string>> {
    return new Promise((resolve) => {
      let { FS } = this.wdosboxModule
      let files = FS.readdir(dir)
      files = files.filter((file) => pattern.test(file))
      resolve(files)
    })
  }

  public readFile (file: string): ArrayBuffer {
    const { FS } = this.wdosboxModule
    const { exists, object } = FS.analyzePath(file)
    if (exists !== true) {
      throw new Error(`File ${file} is not exists`)
    }

    return object.contents
  }

  public writeFile (file: string, content: ArrayBuffer): void {
    const { FS } = this.wdosboxModule
    const { exists } = FS.analyzePath(file)

    exists && FS.unlink(file)

    const dir = path.dirname(file)
    const name = path.basename(file)

    FS.createDataFile(dir, name, content, true, true, true)
  }

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

  public simulateKeyPress (keyCode: number): void {
    this.simulateKeyEvent(keyCode, true)
    setTimeout(() => this.simulateKeyEvent(keyCode, false), 100)
  }

  public sendKeyPress (code: number): void {
    if (this.isInitialized === true) {
      this.wdosboxModule.send('sdl_key_event', code + '')
    }
  }

  public requestShellInput (): void {
    this.sendKeyPress(13)
  }

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

  public exit (): boolean {
    try {
      this.wdosboxModule.send('exit')
    } catch (error) {
      return false
    }

    return true
  }

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

    this.canvas.style.width = `${width}px`
    this.canvas.style.height = `${height}px`
  }

  public requestFullScreen (): void {
    this.wdosboxModule.requestFullScreen()
  }

  public onMessage (handle: (...args: any[]) => void): void {
    this.addListener('message', handle)
  }

  public onProgress (handle: (...args: any[]) => void): void {
    this.addListener('progress', handle)
  }

  public onExit (handle: (...args: any[]) => void): void {
    this.addListener('exit', handle)
  }

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
