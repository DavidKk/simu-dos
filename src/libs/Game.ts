import Stage from './Stage'
import DosBox from './DosBox'
import Controller from '../ui/Controller'
import * as games from '../conf/games'
import {
  DGGameInfo, DGControllerActionType,
  DGGameDBOptions, DGGame
} from '../types'

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
    this.dosbox = this.stage.init()
    this.dosbox.onExit(() => this.stop())
    await this.dosbox.play(game)

    const downkeys: Array<number> = []
    const handleActions = (event) => {
      if (event.type === DGControllerActionType.joystick) {
        let { type, direction } = event.data

        switch (type) {
          case 'move': {
            switch (direction.angle) {
              case 'left': {
                let keyCode = 37
                if (-1 === downkeys.indexOf(keyCode)) {
                  this.dosbox.simulateKeyEvent(keyCode, true)
                  downkeys.push(keyCode)
                }

                break
              }
              case 'up': {
                let keyCode = 38
                if (-1 === downkeys.indexOf(keyCode)) {
                  this.dosbox.simulateKeyEvent(keyCode, true)
                  downkeys.push(keyCode)
                }

                break
              }
              case 'right': {
                let keyCode = 39
                if (-1 === downkeys.indexOf(keyCode)) {
                  this.dosbox.simulateKeyEvent(keyCode, true)
                  downkeys.push(keyCode)
                }

                break
              }
              case 'down': {
                let keyCode = 40
                if (-1 === downkeys.indexOf(keyCode)) {
                  this.dosbox.simulateKeyEvent(keyCode, true)
                  downkeys.push(keyCode)
                }

                break
              }
            }

            break
          }

          case 'up': {
            downkeys.forEach((keyCode) => this.dosbox.simulateKeyEvent(keyCode, false))
            downkeys.splice(0)

            break
          }
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
