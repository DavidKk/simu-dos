import xor from 'lodash/xor'
import Stage from './Stage'
import DosBox from './DosBox'
import Controller from './Controller'
import * as games from '../conf/games'
import {
  DGJoystickConf,
  DGJoystickDirectionType,
  DGGameInfo,
  DGControllerActionType,
  DGGameDBOptions,
  DGGame
} from '../types'

export const DefaultJoystickConfig: DGJoystickConf = [
  {
    keyCode: 37,
    direction: DGJoystickDirectionType.left
  },
  {
    keyCode: 38,
    direction: DGJoystickDirectionType.up
  },
  {
    keyCode: 39,
    direction: DGJoystickDirectionType.right
  },
  {
    keyCode: 40,
    direction: DGJoystickDirectionType.down
  },
]

export default class Game implements DGGame {
  private container: HTMLDivElement
  private stage: Stage
  private dosbox: DosBox
  private controller: Controller
  private syncIntervalId: NodeJS.Timeout
  private disabledContextMenu: boolean = false
  private isPlaying: boolean = false

  constructor () {
    document.oncontextmenu = () => !this.disabledContextMenu

    this.container = document.createElement('div')
    this.container.classList.add('container')
    document.body.appendChild(this.container)

    this.stage = new Stage(this.container)
    this.controller = new Controller(this.container)

    this.play('xjqxz')
  }

  public async play (name: keyof typeof games): Promise<void> {
    this.isPlaying && await this.stop()
    this.isPlaying = true

    this.disableContextMenu()

    const game: DGGameInfo = games[name]
    this.dosbox = this.stage.launch()
    this.dosbox.onExit(() => this.stop())

    this.stage.toggleTerm(true)
    await this.stage.simulateInput(`dosbox start ${game.url}`)

    let processFn = this.stage.progress()
    this.dosbox.onProgress((data) => {
      let { loaded, total } = data
      processFn(game.url, loaded, total)
      loaded === total && this.stage.print(`Game ${game.name} has been initialized, start now and wait please...`)
    })

    await this.dosbox.play(game)

    this.stage.toggleTerm(false)
    this.stage.toggle(true)

    const downkeys: Array<number> = []
    const sendKeydown = (keyCode: number) => {
      if (-1 === downkeys.indexOf(keyCode)) {
        sendKeyup()

        this.dosbox.simulateKeyEvent(keyCode, true)
        downkeys.push(keyCode)
      }
    }

    const sendKeyup = () => {
      downkeys.forEach((keyCode) => this.dosbox.simulateKeyEvent(keyCode, false))
      downkeys.splice(0)
    }

    const handleActions = (event) => {
      if (event.type === DGControllerActionType.joystick) {
        let { type, direction } = event.data

        if (type === 'move') {
          let { x, y, angle } = direction
          if (game.play.joystick === true) {
            game.play.joystick = DefaultJoystickConfig
          }

          if (Array.isArray(game.play.joystick)) {
            let item = game.play.joystick.find((item) => {
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
      }

      if (event.type === DGControllerActionType.keydown) {
        this.dosbox.simulateKeyPress(event.keyCode)
      }
    }

    this.controller.mapGame(game)
    this.controller.onActions(handleActions)

    const { id, save } = game
    await this.loadArchiveFromDB({ dbTable: id })

    const interval = async () => {
      let options = { dbTable: id, pattern: save.regexp }
      await this.saveArchiveFromDB(save.path, options)
    }

    this.syncIntervalId = setInterval(interval, 3e3)
  }

  public async stop (): Promise<void> {
    this.syncIntervalId && clearInterval(this.syncIntervalId)

    await this.stage.reset()
    this.controller.reset()

    this.disableContextMenu(false)
    this.isPlaying = false
  }

  public async saveArchiveFromDB (dir: string, options?: DGGameDBOptions): Promise<void> {
    const files = await this.dosbox.searchFiles(dir, options.pattern || /.*/)
    files.length > 0 && await this.dosbox.saveFilesToDB(files, options.dbTable)
  }

  public async loadArchiveFromDB (options?: DGGameDBOptions): Promise<void> {
    await this.dosbox.loadFilesFromDB(null, options.dbTable)
  }

  public disableContextMenu (disable: boolean = true): void {
    this.disabledContextMenu = process.env.NODE_ENV === 'development' ? false : disable
  }
}
