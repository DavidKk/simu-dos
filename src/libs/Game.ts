import Stage from './Stage'
import * as GAME_LIST from '../conf/games'

export default class Game {
  private stage: Stage = null
  private syncIntervalId: NodeJS.Timeout = null
  private disabledContextMenu: boolean = false
  private isPlaying: boolean = false

  constructor () {
    document.oncontextmenu = () => !this.disabledContextMenu

    this.play('XJQXZ')
  }

  public async play (name: keyof typeof GAME_LIST): Promise<void> {
    this.isPlaying && this.stop()

    this.isPlaying = true
    this.stage = new Stage()

    const game = GAME_LIST[name]
    const { dosbox } = this.stage
    await dosbox.play(game)

    this.disableContextMenu()

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
    this.disableContextMenu(false)

    this.isPlaying = false
  }

  public async saveArchiveFromDB (dir: string, options?: { dbTable: string, pattern: RegExp }) {
    const { dosbox } = this.stage
    const files = await dosbox.searchFiles(dir, options.pattern || /.*/)
    files.length > 0 && await dosbox.saveFilesToDB(files, options.dbTable)
  }

  public async loadArchiveFromDB (options: { dbTable: string }) {
    const { dosbox } = this.stage
    await dosbox.loadFilesFromDB(null, options.dbTable)
  }

  public disableContextMenu (disable: boolean = true): void {
    this.disabledContextMenu = disable
  }
}
