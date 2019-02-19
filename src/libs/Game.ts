import Stage from './Stage'
import * as GAME_LIST from '../conf/games'

export default class Game {
  private stage: Stage = null
  private syncIntervalId: NodeJS.Timeout = null

  constructor () {
    this.choose('XJQXZ')
  }

  public async choose (name: keyof typeof GAME_LIST): Promise<void> {
    this.syncIntervalId && clearInterval(this.syncIntervalId)
    this.stage && await this.stage.destory()

    this.stage = new Stage()

    const game = GAME_LIST[name]
    const { dosbox } = this.stage
    await dosbox.play(game)

    const { ID, SAVE } = game
    await this.loadArchiveFromDB({ dbTable: ID })

    const interval = async () => {
      let options = { dbTable: ID, pattern: SAVE.REGEXP }
      await this.saveArchiveFromDB(SAVE.PATH, options)
    }

    this.syncIntervalId = setInterval(interval, 10e3)
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
}
