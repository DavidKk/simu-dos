import { define, Component } from '@/libs/Component'
import Game from '@/components/Game'
import Gallery from '@/components/Gallery'
import PointerEvent from '@/constants/event'

@define('app')
export default class App extends Component {
  protected game: Game
  protected gallery: Gallery

  protected bindings() {
    this.game = this.appendElement(Game)
    this.gallery = this.appendElement(Gallery)

    this.game.onExit(() => this.gallery.toggle(true))
    this.gallery.onSelected((id) => this.play(id))

    document.body.addEventListener(PointerEvent.Move, this.onPreventScroll, { passive: false })
    
    return () => {
      document.body.removeEventListener(PointerEvent.Move, this.onPreventScroll)
    }
  }

  protected onPreventScroll(event: Event) {
    event.preventDefault()
    event.stopPropagation()
  }

  public play (gameId: string) {
    this.gallery.toggle(false)
    return this.game.start(gameId)
  }
}
