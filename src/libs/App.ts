import Game from './Game'
import Gallery from '../ui/Gallery'
import TouchEvents from '../share/event'
import * as games from '../conf/games'
import * as Typings from '../typings'

export default class App {
  private preventScrollEvent: Typings.EventHandle

  public game: Game
  public gallery: Gallery

  constructor () {
    this.game = new Game()
    this.gallery = new Gallery(games)

    this.game.onExit(() => this.gallery.toggle(true))
    this.gallery.onSelected((id) => this.play(id))

    this.gallery.appendTo(this.game.element)
    this.game.element.appendTo(document.body)

    this.bindings()
  }

  private bindings (): void {
    this.preventScrollEvent = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    document.body.addEventListener(TouchEvents.move, this.preventScrollEvent, { passive: false })
  }

  private unbindings (): void {
    document.body.removeEventListener(TouchEvents.move, this.preventScrollEvent)
    this.preventScrollEvent = undefined
  }

  public play (id: string): Promise<void> {
    this.gallery.toggle(false)
    return this.game.play(id)
  }

  public destory (): void {
    this.unbindings()

    this.game.destroy()
    this.gallery.destroy()

    this.gallery = undefined
    this.game = undefined

    this.destory = Function.prototype as any
  }
}
