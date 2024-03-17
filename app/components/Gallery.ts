import { define, Component } from '@/libs/Component'
import { fetchGames } from '@/store/game'
import PointerEvent from '@/constants/event'
import SimEvent from '@/libs/SimEvent'
import { ACTIVE_CLASSNAME } from '@/constants/definations'
import type { Game, GalleryPlayEventPayload } from '@/types'
import { deprecated, requestFullscreen } from '@/utils'
import jQuery from '@/services/jQuery'

@define('gallery')
export default class Gallery extends Component {
  static Events = {
    Play: SimEvent.create<GalleryPlayEventPayload>('GALLERY_PLAY'),
  }

  protected selected = 0
  protected games: Component[]

  public get numberInRow() {
    const num = this.games.findIndex((item, index, collection) => {
      if (!collection[index - 1]) {
        return false
      }

      return item.offsetTop !== collection[index - 1].offsetTop
    })

    return num === -1 ? this.games.length : num
  }

  public async connectedCallback() {
    const games = await fetchGames()
    this.games = Array.from(
      (function* (self) {
        for (const game of Array.from(games.values())) {
          yield self.add(game)
        }
      })(this)
    )

    super.connectedCallback()
  }

  protected bindings() {
    return deprecated(
      jQuery(document.body).addEventsListener('keyup', (event: KeyboardEvent) => {
        switch (event.key) {
          case 'ArrowUp': {
            const num = this.selected - this.numberInRow
            if (num >= 0) {
              this.selected = num
            }

            break
          }

          case 'ArrowRight': {
            const num = this.selected + 1
            if (num < this.games.length) {
              this.selected = num
            }

            break
          }

          case 'ArrowDown': {
            const num = this.selected + this.numberInRow
            if (num < this.games.length) {
              this.selected = num
            }

            break
          }

          case 'ArrowLeft': {
            const num = this.selected - 1
            if (num >= 0) {
              this.selected = num
            }

            break
          }
        }

        this.games.forEach((game) => game.removeClass('active'))

        const node = this.games[this.selected]
        node && node.addClass(ACTIVE_CLASSNAME)
      }),
      jQuery(document.body).addEventsListener('keypress', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          const node = this.games[this.selected]
          const gameId = node.getAttr('game')
          gameId && this.dispatchEvent(new Gallery.Events.Play({ gameId }))
          requestFullscreen()
        }
      })
    )
  }

  protected mapTouchSelectToElmement(target: Component) {
    jQuery(target).addEventsListener(PointerEvent.Start, (event) => {
      event.preventDefault()
      event.stopPropagation()

      const gameId = target.getAttribute('game')
      gameId && this.dispatchEvent(new Gallery.Events.Play({ gameId }))
      requestFullscreen()
    })
  }

  protected add(game: Game) {
    const element = this.appendElement('gallery-item')
    element.setAttr('game', game.id)
    element.style.backgroundImage = `url(${game.cover})`
    this.mapTouchSelectToElmement(element)
    return element
  }

  public onSelected(handle: (id: string) => void) {
    return this.addEventsListener(Gallery.Events.Play.EventType, (event) => {
      if (Gallery.Events.Play.is(event)) {
        const { gameId } = event.detail
        gameId && handle(gameId)
      }
    })
  }
}
