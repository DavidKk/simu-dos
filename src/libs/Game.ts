import xor from 'lodash/xor'
import { EventEmitter } from 'events'
import Stage from './Stage'
import DosBox from './DosBox'
import Controller from './Controller'
import Model from './Model'
import Element from './Element'
import title from '../conf/title'
import * as games from '../conf/games'
import { Joystick2DConfig, DPadDefaultConfig } from '../conf/controller'
import { isMobile } from '../share/device'
import { supported } from '../share/webAssembly'
import * as Lang from '../share/lang'
import * as Typings from '../typings'
import Package from '../../package.json'

/**
 * 游戏类
 */
export default class Game extends EventEmitter {
  /**
   * 容器
   */
  public element: Element
  public stage: Stage
  public dosbox: DosBox

  /**
   * 控制器面板
   */
  public controller: Controller

  /**
   * 同步函数ID
   */
  public syncIntervalId: NodeJS.Timeout

  /**
   * 是否允许右键菜单栏
   */
  public disabledContextMenu: boolean

  /**
   * 是否正在游戏
   */
  public isPlaying: boolean

  /**
   * 数据模型
   */
  public model: Model

  constructor () {
    super()

    this.element = new Element(['container'])
    this.stage = new Stage()
    this.controller = new Controller()
    this.disabledContextMenu = false
    this.isPlaying = false

    const [major, minor] = (Package.version as string).split('.')
    this.model = new Model(`${major}@${(Package.name as string)}`, Number(minor) + 1)

    this.stage.appendTo(this.element)
    this.controller.appendTo(this.element)
    this.element.appendTo(document.body)

    document.oncontextmenu = () => !this.disabledContextMenu
  }

  /**
   * 开始游戏
   * @param {string} id 游戏ID, 对应游戏列表
   * @returns {Promise}
   */
  public async play (id: string): Promise<void> {
    /**
     * 不支持 Webassembly 的时候提示用户升级
     */
    if (!supported) {
      this.stage.simulateClean()
      this.stage.toggleTerm(true)

      Lang.description.supportWebassembly.forEach(this.stage.print.bind(this.stage))

      let exit = () => {
        this.stage.toggleTerm(false)
        this.emit('exit')

        document.body.removeEventListener('keyup', exit)
        exit = undefined
      }

      document.body.addEventListener('keyup', exit)
      return Promise.reject(new Error('WebAssembly is not supported.'))
    }

    this.isPlaying && await this.stop()
    this.isPlaying = true

    this.disableContextMenu()

    /**
     * 尝试读取本地存储的ROM
     */
    const game: Typings.GameInfo = games[id]
    game.rom = await this.model.loadRom(id)

    /**
     * 开启模拟器
     */
    this.dosbox = this.stage.launch()
    this.dosbox.onExit(() => {
      this.stop()
      this.emit('exit')
    })

    /**
     * 重置控制台并显示
     * 模拟按键输入字符串
     */
    this.stage.simulateReset()
    this.stage.toggleTerm(true)
    await this.stage.simulateInput(`simu-dos play ${game.url}`)

    /**
     * 打印游戏信息
     */
    this.stage.print('=================================')

    const translatedName = Lang.get(game.translates)
    game.name && this.stage.print(`${Lang.description.game.name}: ${game.name} ${game.name !== translatedName ? `(${translatedName})` : ''}`)
    game.type && this.stage.print(`${Lang.description.game.type}: ${game.type}`)
    game.developers && this.stage.print(`${Lang.description.game.developers}: ${game.developers}`)
    game.publisher && this.stage.print(`${Lang.description.game.publisher}: ${game.publisher}`)
    game.release && this.stage.print(`${Lang.description.game.release}: ${game.release}`)

    const summary = !Array.isArray(game.summary) && typeof game.summary === 'object' ? Lang.get(game.summary) : game.summary
    if (typeof summary === 'string') {
      this.stage.print(`${Lang.description.game.summary}: ${summary}`)
    } else if (Array.isArray(summary)) {
      this.stage.print(`${Lang.description.game.summary}:\n${summary.join('\n')}`)
    }

    this.stage.print('=================================')

    /**
     * 注册下载进程进度条
     */
    let wasmProcessFn = this.stage.progress('Download wdosbox.wasm.js, please wait...')
    let romProcessFn = this.stage.progress(`Download ${game.name}, please wait...`)

    const onDwonloadWasmProgress = (data) => {
      let { loaded, total } = data
      wasmProcessFn('wdosbox.wasm.js', loaded, total || 2167039)
    }

    const onDwonloadRomProgress = (data) => {
      let { loaded, total } = data
      romProcessFn(game.url, loaded, total || game.size)
    }

    const onDownloadCompleted = (content: ArrayBuffer) => {
      this.model.saveRom(id, content)
      this.stage.print(`Download completed. ${game.name} has been initialized, start now and wait please...`)
    }

    /**
     * 开始游戏
     */
    const playOptions = { onDwonloadWasmProgress, onDwonloadRomProgress, onDownloadCompleted }
    await this.dosbox.play(game, playOptions)

    this.stage.toggleTerm(false)
    this.stage.toggleCanvas(true)
    this.stage.resize()

    document.title = game.name

    if (isMobile === true) {
      /**
       * 根据游戏需求注册不同的虚拟按键
       * sendKeydown, sendKeyup 分别记住
       * 按键是否按下与弹起, 并发送给模拟器
       */
      const downkeys: number[] = []
      const sendKeydown = (keyCode: number) => {
        if (-1 === downkeys.indexOf(keyCode)) {
          sendKeyup()

          this.dosbox.simulateKeyEvent(keyCode, true)
          downkeys.push(keyCode)
        }
      }

      const sendKeyup = (keyCode?: number) => {
        if (typeof keyCode !== 'undefined') {
          const index = downkeys.indexOf(keyCode)

          if (-1 !== index) {
            downkeys.splice(index, 1)
            this.dosbox.simulateKeyEvent(keyCode, false)
          }
        } else {
          downkeys.forEach((keyCode) => this.dosbox.simulateKeyEvent(keyCode, false))
          downkeys.splice(0)
        }
      }

      const handleActions = (event) => {
        if (event.type === 'joystick') {
          let { type, direction } = event.data
          let { joystick } = game.play
          if (joystick === true) {
            joystick = Joystick2DConfig
          }

          if (type === 'move') {
            let { x, y, angle } = direction

            if (Array.isArray(joystick)) {
              let item = joystick.find((item) => {
                if (Array.isArray(item.direction)) {
                  return 0 === xor(item.direction, [x, y]).length
                }

                return item.direction === angle
              })

              item && sendKeydown(item.keyCode)
            }

          } else if (type === 'up') {
            sendKeyup()
          }

        } else if (event.type === 'dpad') {
          let { type, direction } = event.data
          let { dpad } = game.play

          if (dpad === true) {
            dpad = DPadDefaultConfig
          }

          if (type === 'down') {
            if (Array.isArray(dpad)) {
              let item = dpad.find((item) => item.direction === direction)
              item && sendKeydown(item.keyCode)
            }

          } else if (type === 'up') {
            sendKeyup()
          }

        } else if (event.type === 'button') {
          let { type, keyCode } = event.data

          if (type === 'down') {
            this.dosbox.simulateKeyPress(keyCode)
          }
        } else if (event.type === 'keyboard') {
          let { type, keyCode } = event.data
          if (type === 'keypress') {
            this.dosbox.simulateKeyPress(keyCode)
          } else if (type === 'down') {
            sendKeydown(keyCode)
          } else if (type === 'up') {
            sendKeyup(keyCode)
          }
        }
      }

      this.controller.register(game)
      this.controller.onActions(handleActions)
    }

    /**
     * 注册存档存储
     * 每三秒进行一次存档保存
     */
    if (game.save) {
      await this.loadArchiveFromDB(game)

      const interval = async () => {
        await this.saveArchiveFromDB(game)
      }

      this.syncIntervalId = setInterval(interval, 3e3)
    }
  }

  /**
   * 停止游戏
   * @returns {Promise}
   */
  public async stop (): Promise<void> {
    this.syncIntervalId && clearInterval(this.syncIntervalId)

    await this.stage.reset()
    this.controller.reset()

    document.title = title

    this.disableContextMenu(false)
    this.isPlaying = false
  }

  /**
   * 监听退出游戏事件
   * @param {Function} handle 回调函数
   */
  public onExit (handle: (...args: any[]) => void): void {
    this.addListener('exit', handle)
  }

  /**
   * 存储存档到本地 IndexedDB
   * @param {Typings.GameInfo} game 游戏信息
   * @returns {Promise}
   */
  public async saveArchiveFromDB (game: Typings.GameInfo): Promise<void> {
    const { id, save } = game
    const files = await this.dosbox.searchFiles(save.path, save.regexp || /.*/)
    if (files.length === 0) {
      return
    }

    const datas = files.map((file) => {
      const content = this.dosbox.readFile(file)
      return { romId: id, file, content }
    })

    return this.model.saveArchive(datas)
  }

  /**
   * 从本地 IndexedDB 中读取游戏存档
   * @param {Typings.GameInfo} game 游戏信息
   * @returns {Promise}
   */
  public loadArchiveFromDB (game: Typings.GameInfo): Promise<void> {
    return this.model.loadArchive(game.id).then((files) => {
      files.forEach(({ file, content }) => {
        this.dosbox.writeFile(file, content)
      })
    })
  }

  /**
   * 禁止右键菜单
   * @description
   * 开发环境下不禁止
   */
  public disableContextMenu (disable: boolean = true): void {
    this.disabledContextMenu = process.env.NODE_ENV === 'development' ? false : disable
  }

  public destroy (): void {
    this.removeAllListeners()

    this.element.destroy()
    this.stage.destroy()
    this.dosbox.destroy()
    this.controller.destroy()
    this.syncIntervalId && clearInterval(this.syncIntervalId)
    this.model.destroy()

    this.model = undefined
    this.syncIntervalId = undefined
    this.controller = undefined
    this.dosbox = undefined
    this.stage = undefined
    this.element = undefined
    this.disabledContextMenu = undefined
    this.isPlaying = undefined

    this.destroy = Function.prototype as any
  }
}
