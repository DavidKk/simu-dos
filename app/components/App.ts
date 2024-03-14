import { define, Component } from '@/libs/Component'
import Game from '@/components/Game'
import Gallery from '@/components/Gallery'
import PointerEvent from '@/constants/event'
import Menu from '@/controls/Menu'

@define('app')
export default class App extends Component {
  protected game: Game
  protected gallery: Gallery
  protected menu: Menu

  protected bindings() {
    this.game = this.appendElement(Game)
    this.gallery = this.appendElement(Gallery)
    this.menu = this.appendElement(Menu)

    this.gallery.onSelected((id) => this.play(id))
    this.game.onExit(() => {
      this.gallery.toggle(true)
      this.menu.dispatchEvent(new Menu.Events.GamePlay({ gameplay: false }))
    })

    const onPreventScroll = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    document.body.addEventListener(PointerEvent.Move, onPreventScroll, { passive: false })

    return () => {
      document.body.removeEventListener(PointerEvent.Move, onPreventScroll)
    }
  }

  public async play(gameId: string) {
    this.gallery.toggle(false)
    await this.game.start(gameId)
    this.menu.dispatchEvent(new Menu.Events.GamePlay({ gameplay: true }))
  }
}
