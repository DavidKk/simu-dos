import xor from 'lodash/xor'
import { EventEmitter } from 'events'
import Stage from './Stage'
import DosBox from './DosBox'
import Controller from './Controller'
import Model from './Model'
import title from '../conf/title'
import * as games from '../conf/games'
import { Joystick2DConfig, DPadDefaultConfig } from '../conf/controller'
import { isMobile } from '../share/device'
import { supported } from '../share/webAssembly'
import * as Typings from '../typings'
import Package from '../../package.json'

export default class Game {
  public emitter: EventEmitter = new EventEmitter()
  public container: HTMLDivElement
  public stage: Stage
  public dosbox: DosBox
  public controller: Controller
  public syncIntervalId: NodeJS.Timeout
  public disabledContextMenu: boolean = false
  public isPlaying: boolean = false
  public model: Model

  constructor () {
    const [major, minor] = (Package.version as string).split('.')

    this.disabledContextMenu = true
    this.isPlaying = false
    this.container = document.createElement('div')
    this.model = new Model(`${major}@${(Package.name as string)}`, Number(minor) + 1)

    this.container.classList.add('container')
    document.body.appendChild(this.container)

    this.stage = new Stage(this.container)
    this.controller = new Controller(this.container)

    document.oncontextmenu = () => !this.disabledContextMenu
  }

  public async play (id: string): Promise<void> {
    if (!supported) {
      this.stage.simulateClean()
      this.stage.toggleTerm(true)

      this.stage.print('Browser is not support WebAssembly, please upgrade your browser.')
      this.stage.print('We recommend that you use the Chrome browser.')
      this.stage.print('Press any key to exit...')

      let exit = () => {
        this.stage.toggleTerm(false)
        this.emitter.emit('exit')

        document.body.removeEventListener('keyup', exit)
        exit = undefined
      }

      document.body.addEventListener('keyup', exit)
      return Promise.reject(new Error('WebAssembly is not supported.'))
    }

    this.isPlaying && await this.stop()
    this.isPlaying = true

    this.disableContextMenu()

    const game: Typings.DGGameInfo = games[id]
    game.room = await this.model.loadRoom(id)

    this.dosbox = this.stage.launch()
    this.dosbox.onExit(() => {
      this.stop()
      this.emitter.emit('exit')
    })

    this.stage.simulateReset()
    this.stage.toggleTerm(true)
    await this.stage.simulateInput(`simu-dos start ${game.url}`)

    this.stage.print('=================================')
    game.name && this.stage.print(`Name (名称): ${game.name}${game.commonName ? `(${game.commonName})` : ''}`)
    game.type && this.stage.print(`Type (类型): ${game.type}`)
    game.developers && this.stage.print(`Developers (开发商): ${game.developers}`)
    game.publisher && this.stage.print(`Publisher (发行商): ${game.publisher}`)
    game.release && this.stage.print(`Release (发行日期): ${game.release}`)
    this.stage.print('=================================')

    let wasmProcessFn = this.stage.progress()
    let roomProcessFn = this.stage.progress()

    const onDwonloadWasmProgress = (data) => {
      let { loaded, total } = data
      wasmProcessFn('wdosbox.wasm.js', loaded, total || 2167039)
    }

    const onDwonloadRoomProgress = (data) => {
      let { loaded, total } = data
      roomProcessFn(game.url, loaded, total || game.size)
    }

    const onDownloadCompleted = (content: ArrayBuffer) => {
      this.model.saveRoom(id, content)
      this.stage.print(`Game ${game.name} has been initialized, start now and wait please...`)
    }

    const playOptions = { onDwonloadWasmProgress, onDwonloadRoomProgress, onDownloadCompleted }
    await this.dosbox.play(game, playOptions)

    this.stage.toggleTerm(false)
    this.stage.toggle(true)
    this.stage.resize()

    document.title = game.name

    const downkeys: Array<number> = []
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

    if (isMobile === true) {
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

      this.controller.mapGame(game)
      this.controller.onActions(handleActions)
    }

    if (game.save) {
      await this.loadArchiveFromDB(game)

      const interval = async () => {
        await this.saveArchiveFromDB(game)
      }

      this.syncIntervalId = setInterval(interval, 3e3)
    }
  }

  public async stop (): Promise<void> {
    this.syncIntervalId && clearInterval(this.syncIntervalId)

    await this.stage.reset()
    this.controller.reset()

    document.title = title

    this.disableContextMenu(false)
    this.isPlaying = false
  }

  public onExit (handle: (...args: any[]) => void): void {
    this.emitter.addListener('exit', handle)
  }

  public async saveArchiveFromDB (game: Typings.DGGameInfo): Promise<void> {
    const { id, save } = game
    const files = await this.dosbox.searchFiles(save.path, save.regexp || /.*/)
    if (files.length === 0) {
      return
    }

    const datas = files.map((file) => {
      const content = this.dosbox.readFile(file)
      return { roomid: id, file, content }
    })

    return this.model.saveArchive(datas)
  }

  public loadArchiveFromDB (game: Typings.DGGameInfo): Promise<void> {
    return this.model.loadArchive(game.id).then((files) => {
      files.forEach(({ file, content }) => {
        this.dosbox.writeFile(file, content)
      })
    })
  }

  public disableContextMenu (disable: boolean = true): void {
    this.disabledContextMenu = process.env.NODE_ENV === 'development' ? false : disable
  }
}
