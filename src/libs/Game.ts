import { Game as iGame } from '../types'
import Stage from './Stage'
import Controller, { ActionTypes } from './Controller'
import * as GAME_LIST from '../conf/games'

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

    this.play('XJQXZ')
  }

  public async play (name: keyof typeof GAME_LIST): Promise<void> {
    this.isPlaying && this.stop()

    this.isPlaying = true
    this.stage = new Stage(this.container)
    this.controller = new Controller(this.container)

    const game: iGame = GAME_LIST[name]
    const { dosbox } = this.stage
    dosbox.onExit(() => this.stop())

    this.disableContextMenu()
    await dosbox.play(game)

    const handleActions = (event) => {
      if (event.type === ActionTypes.JOYSTICK) {
        let { direction } = event.data
        switch (direction.angle) {
          case 'left': {
            dosbox.sendKeyPress(37)
            break
          }
          case 'up': {
            dosbox.sendKeyPress(38)
            break
          }
          case 'right': {
            dosbox.sendKeyPress(39)
            break
          }
          case 'down': {
            dosbox.sendKeyPress(40)
            break
          }
        }
      }

      if (event.type === ActionTypes.KEYDOWN) {
        dosbox.sendKeyPress(event.keyCode)
      }
    }

    this.controller.mapGame(game)
    this.controller.onActions(handleActions)

    const { ID, SAVE } = game
    await this.loadArchiveFromDB({ dbTable: ID })

    const interval = async () => {
      let options = { dbTable: ID, pattern: SAVE.REGEXP }
      await this.saveArchiveFromDB(SAVE.PATH, options)
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
