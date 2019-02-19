import Stage from './Stage'
import * as GAME_LIST from '../conf/games'

export default class Game {
  private stage: Stage = null
  private syncIntervalId: NodeJS.Timeout = null

  constructor () {
    this.choose('XJQXZ')
  }

  async choose (name: keyof typeof GAME_LIST): Promise<void> {
    this.syncIntervalId && clearInterval(this.syncIntervalId)
    this.stage && await this.stage.destory()

    this.stage = new Stage()

    const { URL, COMMAND, SAVE } = GAME_LIST[name]
    const { dosbox } = this.stage
    const { mainFn } = await dosbox.compile()

    await dosbox.extract(URL)
    await mainFn(COMMAND)
    // await dosbox.load(SAVE)

    // const interval = async () => dosbox.save(SAVE)
    // this.syncIntervalId = setInterval(interval, 10e3)
  }
}
