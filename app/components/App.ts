import Game from '@/components/Game'
import Gallery from '@/components/Gallery'
import Notification from '@/components/Notification'
import Menu from '@/controls/Menu'
import PointerEvent from '@/constants/event'
import { define, Component } from '@/libs/Component'
import jQuery from '@/services/jQuery'
import { deprecated } from '@/utils'
import DosBox from '@/libs/DosBox'

@define('app')
export default class App extends Component {
  protected game: Game
  protected gallery: Gallery
  protected menu: Menu
  protected notification: Notification

  protected bindings() {
    this.game = this.appendElement(Game)
    this.gallery = this.appendElement(Gallery)
    this.menu = this.appendElement(Menu)
    this.notification = this.appendElement(Notification)
    this.game.hide()

    return deprecated(
      this.gallery.onSelected(async (id) => {
        this.game.show()
        await this.play(id)
      }),
      DosBox.Events.Exit.listen(() => {
        this.gallery.toggle(true)
        Menu.Events.GamePlay.dispatch({ gameplay: false })
      }),
      jQuery(document.body).addEventsListener('keydown', (event: KeyboardEvent) => {
        // 全屏
        if (document.fullscreenEnabled && (event.metaKey || event.ctrlKey) && event.key === 'Enter') {
          this.requestPointerLock()
          this.requestFullscreen()
          return
        }

        // 刷新
        if (event.metaKey && event.key.toLowerCase() === 'r') {
          window.location.reload()
          return
        }
      }),
      jQuery(document.body).addEventsListener(
        PointerEvent.Move,
        (event: Event) => {
          event.preventDefault()
          event.stopPropagation()
        },
        { passive: false }
      )
    )
  }

  public async play(gameId: string) {
    this.gallery.toggle(false)
    await this.game.start(gameId)
    Menu.Events.GamePlay.dispatch({ gameplay: true })
  }
}
