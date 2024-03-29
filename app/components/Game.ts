import Stage from '@/components/Stage'
import Notification from '@/components/Notification'
import Menu from '@/controls/Menu'
import TouchPad from '@/controls/TouchPad'
import Joystick from '@/controls/Joystick'
import DPad from '@/controls/DPad'
import Keyboard from '@/controls/Keyboard'
import jQuery from '@/services/jQuery'
import { pickByLanguage } from '@/services/lang'
import { supported, isMobile } from '@/services/device'
import { googleSyncService } from '@/services/googleSyncService'
import { fetchGames, isGameName } from '@/store/game'
import i18n from '@/store/i18n'
import { Joystick2DConfig, DPadConfig } from '@/store/controls'
import { define, Component } from '@/libs/Component'
import DosBox from '@/libs/DosBox'
import Model from '@/libs/Model'
import { xor } from '@/utils/xor'
import { deprecated } from '@/utils'
import { TITLE, WASM_FILE } from '@/constants/definations'
import type { DosBoxProgressEvent, Game as GameInfo } from '@/types'

const EQ_DIVIDE = ''.padEnd(32, '=')

@define('game')
export default class Game extends Component {
  protected dosbox: DosBox
  protected model = new Model({ use: 'indexedDB' })

  protected stage: Stage
  protected touchpad: TouchPad

  /** 是否正在游戏 */
  protected isPlaying = false
  /** 当前游戏 */
  protected game: GameInfo
  /** 是否允许右键菜单栏 */
  protected disabledContextMenu = false
  /** 同步函数 ID */
  protected syncIntervalId: NodeJS.Timeout

  protected bindings() {
    this.stage = this.appendElement(Stage)
    this.touchpad = this.appendElement(TouchPad)
    document.oncontextmenu = () => !this.disabledContextMenu

    const createListener = (pressed: boolean) => {
      return (event: KeyboardEvent) => {
        if (!(this.game && this.isPlaying)) {
          return
        }

        const { keymapping } = this.game
        if (!keymapping) {
          return
        }

        const { key } = event
        const target = keymapping[key]
        if (target) {
          event.preventDefault()
          event.stopPropagation()
          this.dosbox.simulateKeyEvent(target, pressed)
        }
      }
    }

    return deprecated(
      jQuery(document.body).addEventsListener('keydown', createListener(true)),
      jQuery(document.body).addEventsListener('keyup', createListener(false)),
      Menu.Events.Download.listen(async () => {
        if (!(this.isPlaying && this.game)) {
          return
        }

        const complete = await Notification.loading('Prepare archive files for you.')
        await this.exportArchiveFromDB(this.game.id)
        complete('Archive file export completed.')
      }),
      Menu.Events.Upload.listen(async (event) => {
        if (this.isPlaying) {
          return
        }

        const { romId, files } = event.detail
        if (!(await this.requestGame(romId))) {
          return
        }

        const complete = await Notification.loading('Importing archive files for you.')
        await this.importArchiveFromDB(romId, files)
        complete('Archive file import completed.')
      })
    )
  }

  protected unbindings() {
    this.syncIntervalId && clearInterval(this.syncIntervalId)
  }

  /**
   * 开始游戏
   * @param id 游戏ID, 对应游戏列表
   */
  public async start(id: string) {
    if (this.isPlaying === true) {
      return
    }

    if (!isGameName(id)) {
      throw new Error(`Game ${id} is not exists.`)
    }

    // 检测是否支持
    this.checkSupport()

    // 重置
    this.isPlaying && (await this.stop())
    this.isPlaying = true
    document.body.classList.add('playing')
    this.disableContextMenu()

    // 尝试读取本地存储的ROM
    this.game = await this.requestGame(id)
    // 运行游戏
    await this.play(this.game)

    // 注册控制器
    if (isMobile) {
      this.registerMobileControls(this.game)
    }

    // 注册存档存储
    if (this.game.save) {
      this.activeAutoSave(this.game)
    }
  }

  /** 停止 */
  public async stop() {
    this.syncIntervalId && clearInterval(this.syncIntervalId)

    await this.stage.reset()
    this.touchpad.reset()

    document.title = TITLE

    this.disableContextMenu(false)
    this.isPlaying = false
    document.body.classList.remove('playing')
  }

  /** 执行游戏 */
  protected async play(game = this.game) {
    const url = typeof game.url === 'string' ? game.url : pickByLanguage(game.url)!
    const key = await this.getGameStoreUniqKey(game)
    game.rom = await this.model.loadRom(key)

    // 开启模拟器
    this.dosbox = this.stage.launch()
    DosBox.Events.Exit.once(() => this.stop())

    // 重置控制台并显示，模拟按键输入字符串
    this.stage.simulateReset()
    this.stage.toggleTerminal(true)
    await this.stage.simulateInput(`play ${url}`)
    // 打印游戏信息
    this.printGameInfo(game)

    // 尝试读取本地存储的WASM
    const wasm = await this.model.loadWasm()
    // 注册下载进程进度条
    const wasmProcessFn = this.stage.progress(`Download ${WASM_FILE}, please wait...`)
    const wasmTermLine = this.stage.currentLine
    if (wasm instanceof ArrayBuffer) {
      wasmTermLine.setContent(`Find ${WASM_FILE} from local file.`)
    }

    const onDownloadWasmProgress = (event: DosBoxProgressEvent) => {
      const { loaded, total } = event
      wasmProcessFn(WASM_FILE, loaded, total || 2167039)
    }

    const onDownloadWasmCompleted = async (content: ArrayBuffer) => {
      this.model.saveWasm(content)
    }

    const romProcessFn = this.stage.progress(`Download ${game.name}, please wait...`)
    const romTermLine = this.stage.currentLine
    if (wasm instanceof ArrayBuffer) {
      romTermLine.setContent(`Find ${url} from local file.`)
    }

    const onDownloadRomProgress = (event: DosBoxProgressEvent) => {
      const { loaded, total } = event
      romProcessFn(url, loaded, total || game.size!)
    }

    const onDownloadRomCompleted = (content: ArrayBuffer) => {
      this.model.saveRom(key, content)
    }

    const onExtractCompleted = async () => {
      game.save && (await this.loadArchiveFromDB(game))
      this.stage.print(`Game ${game.name} has been initialized, start now and wait please...`)
    }

    // 开始游戏
    await this.dosbox.play(game, {
      wasm,
      onDownloadWasmProgress,
      onDownloadWasmCompleted,
      onDownloadRomProgress,
      onDownloadRomCompleted,
      onExtractCompleted,
    })

    // 确认运行
    if (typeof this.model.used === 'undefined') {
      i18n.support.indexedDB.forEach((message) => this.stage.print(message, 'warn'))
      isMobile ? await this.stage.touchToContinue() : await this.stage.pressToContinue()
    }

    // 展示游戏界面
    this.stage.toggleTerminal(false)
    this.stage.toggleCanvas(true)
    this.stage.resize()

    document.title = `${game.name} - SimDOS`
  }

  /** 获取游戏信息 */
  protected getGameInfo(game = this.game) {
    const translatedName = typeof game.translates === 'string' ? game.translates : pickByLanguage(game.translates!)
    const name = `${i18n.game.name}: ${game.name} ${game.name !== translatedName ? `(${translatedName})` : ''}`
    const type = `${i18n.game.type}: ${game.type}`
    const developers = `${i18n.game.developers}: ${game.developers}`
    const publisher = `${i18n.game.publisher}: ${game.publisher}`
    const release = `${i18n.game.release}: ${game.release}`
    const cover = typeof game.cover === 'string' ? game.cover : pickByLanguage(game.cover)
    const summary = (() => {
      const summary = !Array.isArray(game.summary) && typeof game.summary === 'object' ? pickByLanguage(game.summary) : game.summary
      if (typeof summary === 'string') {
        return `${i18n.game.summary}: ${summary}`
      }

      if (Array.isArray(summary)) {
        return `${i18n.game.summary}:\n${summary.join('\n')}`
      }
    })()

    return { name, type, developers, publisher, release, cover, summary }
  }

  /** 打印游戏信息 */
  protected printGameInfo(game = this.game) {
    const info = this.getGameInfo(game)

    this.stage.print(EQ_DIVIDE)
    info.name && this.stage.print(info.name)
    info.type && this.stage.print(info.type)
    info.developers && this.stage.print(info.developers)
    info.publisher && this.stage.print(info.publisher)
    info.release && this.stage.print(info.release)
    info.summary && this.stage.print(info.summary)
    this.stage.print(EQ_DIVIDE)
  }

  /**
   * 获取游戏存储的唯一值
   * @description
   * 主要用于同一款游戏不同ROM的存储
   * 例如不同版本语言的游戏
   */
  protected async getGameStoreUniqKey(game: string | GameInfo): Promise<string> {
    if (typeof game === 'string') {
      const info = await this.requestGame(game)
      return this.getGameStoreUniqKey(info)
    }

    return game.id
  }

  protected async requestGame(id: string) {
    if (!isGameName(id)) {
      throw new Error(`Game ${id} is not exists.`)
    }

    const games = await fetchGames()
    if (!games.has(id)) {
      throw new Error(`Game ${id} is not exists.`)
    }

    return games.get(id)!
  }

  /** 注册控制器 */
  protected registerMobileControls(game = this.game) {
    /**
     * 根据游戏需求注册不同的虚拟按键
     * sendKeydown, sendKeyup 分别记住
     * 按键是否按下与弹起, 并发送给模拟器
     */
    const downkeys: string[] = []
    const sendKeydown = (key: string) => {
      if (-1 === downkeys.indexOf(key)) {
        sendKeyup()

        this.dosbox.simulateKeyEvent(key, true)
        downkeys.push(key)
      }
    }

    const sendKeyup = (key?: string) => {
      if (typeof key !== 'undefined') {
        const index = downkeys.indexOf(key)

        if (-1 !== index) {
          downkeys.splice(index, 1)
          this.dosbox.simulateKeyEvent(key, false)
        }
      } else {
        downkeys.forEach((keyCode) => this.dosbox.simulateKeyEvent(keyCode, false))
        downkeys.splice(0)
      }
    }

    const handleActions = (event: Event) => {
      if (Joystick.Events.TouchUp.is(event) || DPad.Events.TouchUp.is(event)) {
        sendKeyup()
        return
      }

      if (Joystick.Events.TouchMove.is(event)) {
        let { joystick } = game.play!
        if (joystick === true) {
          joystick = Joystick2DConfig
        }

        const { direction } = event.detail
        const { x, y, angle } = direction

        if (Array.isArray(joystick)) {
          const item = joystick.find((item) => {
            if (Array.isArray(item.direction)) {
              return 0 === xor(item.direction, [x, y]).length
            }

            return item.direction === angle
          })

          item && sendKeydown(item.key)
        }

        return
      }

      if (DPad.Events.TouchDown.is(event)) {
        const { direction } = event.detail

        let { dpad } = game.play!
        if (dpad === true) {
          dpad = DPadConfig
        }

        if (Array.isArray(dpad)) {
          const item = dpad.find((item) => item.direction === direction)
          item && sendKeydown(item.key)
        }

        return
      }

      if (Keyboard.Events.TouchPress.is(event)) {
        const { key } = event.detail
        this.dosbox.simulateKeyPress(key)
        return
      }

      if (Keyboard.Events.TouchDown.is(event)) {
        const { key } = event.detail
        sendKeydown(key)
        return
      }

      if (Keyboard.Events.TouchUp.is(event)) {
        const { key } = event.detail
        sendKeyup(key)
        return
      }

      if (TouchPad.Events.TouchDown.is(event)) {
        const { key } = event.detail
        this.dosbox.simulateKeyPress(key)
        return
      }
    }

    this.touchpad.register(game)
    this.touchpad.bind(
      [
        Joystick.Events.TouchUp.EventType,
        Joystick.Events.TouchMove.EventType,
        DPad.Events.TouchUp.EventType,
        DPad.Events.TouchDown.EventType,
        Keyboard.Events.TouchPress.EventType,
        Keyboard.Events.TouchDown.EventType,
        Keyboard.Events.TouchUp.EventType,
        TouchPad.Events.TouchDown.EventType,
      ],
      handleActions
    )
  }

  /** 激活自动存档 */
  protected activeAutoSave(game = this.game, intervalMillisecond = 3e3) {
    const sync = () => this.saveArchiveFromDB(game)
    this.syncIntervalId && clearInterval(this.syncIntervalId)
    this.syncIntervalId = setInterval(sync, intervalMillisecond)
  }

  /**
   * 禁止右键菜单
   * @description
   * 开发环境下不禁止
   */
  public disableContextMenu(disable = true) {
    this.disabledContextMenu = disable
  }

  /**
   * 存储存档到本地 IndexedDB
   * @param game 游戏信息
   */
  public async saveArchiveFromDB(game = this.game) {
    const { save } = game
    if (!save) {
      return
    }

    const romId = await this.getGameStoreUniqKey(game)
    const files = await this.dosbox.searchFiles(save.path, save.regexp || /.*/)
    if (files.length === 0) {
      return
    }

    const datas = files.map((file) => {
      const content = this.dosbox.readFile(file)
      return { romId, file, content }
    })

    if (!(await this.model.saveArchive(datas))) {
      return
    }

    // 上传
    if (!googleSyncService.isAuthorized) {
      return
    }

    const complete = await Notification.loading('Uploading archive files, please wait.')
    try {
      await googleSyncService.upload()
      complete('Upload archive files success.')
    } catch (error) {
      complete('Upload archive files failed.')
    }
  }

  /**
   * 从本地 IndexedDB 中读取游戏存档
   * @param game 游戏信息
   */
  public async loadArchiveFromDB(game = this.game) {
    const { save } = game
    if (!save) {
      return
    }

    if (googleSyncService.isAuthorized) {
      const complete = await Notification.loading('Downloading archive files, please wait.')
      try {
        await googleSyncService.download()
        complete('Download archive files success.')
      } catch (error) {
        complete('Download archive files failed.')
      }
    }

    const key = await this.getGameStoreUniqKey(game)
    const files = await this.model.loadArchive(key)
    if (Array.isArray(files)) {
      files.forEach(({ file, content }) => {
        this.dosbox.writeFile(file, content, save.path)
      })
    }
  }

  /** 导出存档文件 */
  public async exportArchiveFromDB(id: string) {
    if (!isGameName(id)) {
      throw new Error(`Game ${id} is not exists.`)
    }

    await this.model.exportArchive(id)
  }

  /** 导入存档文件 */
  public async importArchiveFromDB(id: string, files: Record<string, Uint8Array>) {
    if (!isGameName(id)) {
      throw new Error(`Game ${id} is not exists.`)
    }

    await this.model.importArchive(id, files)
  }

  protected checkSupport() {
    // 不支持 Webassembly 的时候提示用户升级
    if (!supported.webAssembly) {
      this.stage.simulateClean()
      this.stage.toggleTerminal(true)

      i18n?.support.webassembly.forEach((content) => {
        this.stage.print(content)
      })

      if (isMobile) {
        this.stage.touchToContinue()
      } else {
        this.stage.pressToContinue().then(() => {
          this.stage.toggleTerminal(false)
          DosBox.Events.Exit.dispatch()
        })
      }

      throw new Error('WebAssembly is not supported.')
    }
  }
}
