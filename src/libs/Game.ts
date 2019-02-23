import Stage from './Stage'
import Controller from '../ui/Controller'
import * as games from '../conf/games'
import { DGGame, DGControllerActionType } from '../types'

export default class Game {
  private container: HTMLDivElement = null
  private stage: Stage = null
  private controller: Controller = null
  private syncIntervalId: NodeJS.Timeout = null
  private disabledContextMenu: boolean = false
  private isPlaying: boolean = false

  constructor () {
    document.oncontextmenu = () => !this.disabledContextMenu

    this.container = document.createElement('div')
    this.container.classList.add('container')
    document.body.appendChild(this.container)

    this.play('xjqxz')
  }

  public async play (name: keyof typeof games): Promise<void> {
    this.isPlaying && this.stop()

    this.isPlaying = true
    this.stage = new Stage(this.container)
    this.controller = new Controller(this.container)

    const game: DGGame = games[name]
    const { dosbox } = this.stage
    dosbox.onExit(() => this.stop())

    this.disableContextMenu()
    await dosbox.play(game)

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
                  dosbox.simulateKeyEvent(keyCode, true)
                  downkeys.push(keyCode)
                }

                break
              }
              case 'up': {
                let keyCode = 38
                if (-1 === downkeys.indexOf(keyCode)) {
                  dosbox.simulateKeyEvent(keyCode, true)
                  downkeys.push(keyCode)
                }

                break
              }
              case 'right': {
                let keyCode = 39
                if (-1 === downkeys.indexOf(keyCode)) {
                  dosbox.simulateKeyEvent(keyCode, true)
                  downkeys.push(keyCode)
                }

                break
              }
              case 'down': {
                let keyCode = 40
                if (-1 === downkeys.indexOf(keyCode)) {
                  dosbox.simulateKeyEvent(keyCode, true)
                  downkeys.push(keyCode)
                }

                break
              }
            }

            break
          }

          case 'up': {
            downkeys.forEach((keyCode) => dosbox.simulateKeyEvent(keyCode, false))
            downkeys.splice(0)

            break
          }
        }
      }

      if (event.type === DGControllerActionType.keydown) {
        dosbox.simulateKeyPress(event.keyCode)
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

    this.stage && await this.stage.destory()
    this.controller && this.controller.destory()

    this.stage = undefined
    this.controller = undefined

    this.disableContextMenu(false)
    this.isPlaying = false
  }

  public async saveArchiveFromDB (dir: string, options?: { dbTable: string, pattern: RegExp }): Promise<void> {
    const { dosbox } = this.stage
    const files = await dosbox.searchFiles(dir, options.pattern || /.*/)
    files.length > 0 && await dosbox.saveFilesToDB(files, options.dbTable)
  }

  public async loadArchiveFromDB (options: { dbTable: string }): Promise<void> {
    const { dosbox } = this.stage
    await dosbox.loadFilesFromDB(null, options.dbTable)
  }

  public disableContextMenu (disable: boolean = true): void {
    this.disabledContextMenu = process.env.NODE_ENV === 'development' ? false : disable
  }
}
