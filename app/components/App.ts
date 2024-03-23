import { define, Component } from '@/libs/Component'
import DosBox from '@/libs/DosBox'
import Game from '@/components/Game'
import Gallery from '@/components/Gallery'
import Notification from '@/components/Notification'
import Firefly from '@/components/Firefly'
import Menu from '@/controls/Menu'
import jQuery from '@/services/jQuery'
import { requestFullscreen } from '@/services/fullscreen'
import { deprecated } from '@/utils'
import { isGameName } from '@/store/game'
import PointerEvent from '@/constants/event'

@define('app')
export default class App extends Component {
  protected game: Game
  protected gallery: Gallery
  protected menu: Menu
  protected firefly: Firefly
  protected notification: Notification

  protected bindings() {
    this.game = this.appendElement(Game)
    this.game.hide()

    this.gallery = this.appendElement(Gallery)
    this.menu = this.appendElement(Menu)
    this.notification = this.appendElement(Notification)
    this.firefly = this.appendElement(Firefly)

    const id = this.getGameIdByUrl()
    id && this.play(id)

    return deprecated(
      Gallery.Events.Play.listen(async (event) => {
        const { gameId } = event.detail
        await this.play(gameId)
      }),
      DosBox.Events.Exit.listen(() => {
        this.gallery.show()
        Menu.Events.GamePlay.dispatch({ gameplay: false })
      }),
      jQuery(document.body).addEventsListener('keydown', async (event: KeyboardEvent) => {
        // 全屏
        if (document.fullscreenEnabled && (event.metaKey || event.ctrlKey) && event.key === 'Enter') {
          await requestFullscreen(this)
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

  public async play(id: string) {
    if (!isGameName(id)) {
      throw new Error(`Game ${id} is not exists.`)
    }

    this.gallery.hide()
    this.game.show()
    await this.game.start(id)
    Menu.Events.GamePlay.dispatch({ gameplay: true })
  }

  protected getGameIdByUrl() {
    const uri = new URL(window.location.href)
    return uri.searchParams.get('game')
  }
}
