import Game from './Game'
import Gallery from '../ui/Gallery'
import * as games from '../conf/games'

export default class App {
  public game: Game
  public gallery: Gallery

  constructor () {
    this.game = new Game()
    this.gallery = new Gallery(games)

    this.game.onExit(() => this.gallery.toggle(true))
    this.gallery.onSelected((id) => this.play(id))

    this.gallery.appendTo(this.game.element)
  }

  public play (id: string): Promise<void> {
    this.gallery.toggle(false)
    return this.game.play(id)
  }
}
