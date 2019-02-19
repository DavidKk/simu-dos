import Stage from './Stage'
import * as GAME_LIST from '../conf/game'

export default class Game {
  private stage: Stage = null

  constructor () {
    this.choose('XJQXZ')
    setTimeout(() => this.choose('XJQXZ'), 3000)
  }

  async choose (name: keyof typeof GAME_LIST): Promise<void> {
    this.stage && await this.stage.destory()

    this.stage = new Stage()

    let { URL, COMMAND } = GAME_LIST[name]
    let { dosbox } = this.stage
    let { mainFn } = await dosbox.compile()

    await dosbox.extract(URL)
    await mainFn(COMMAND)
  }
}
