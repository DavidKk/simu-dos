import { define, Component } from '@/libs/Component'
import { fetchGames } from '@/store/game'
import PointerEvent from '@/constants/event'
import SimEvent from '@/libs/SimEvent'
import { ACTIVE_CLASSNAME } from '@/constants/definations'
import type { Game, GalleryPlayEventPayload } from '@/types'
import { deprecated, requestFullscreen } from '@/utils'
import jQuery from '@/services/jQuery'

const GALLERY_ITEM_SELECTER = 'gallery-item'
const GAME_ATTR = 'game'
const GAME_STYLE_VAR = '--sim-gallery-item-background-image'

@define('gallery')
export default class Gallery extends Component {
  static get Events() {
    return {
      Play: SimEvent.create<GalleryPlayEventPayload>('GALLERY_PLAY'),
    }
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
          const gameId = node.getAttr(GAME_ATTR)

          if (gameId) {
            const gameCover = node.style.getPropertyValue(GAME_STYLE_VAR)
            this.dispatchEvent(new Gallery.Events.Play({ gameId, gameCover }))
          }

          requestFullscreen()
        }
      })
    )
  }

  protected mapTouchSelectToElmement(target: Component) {
    return deprecated(
      jQuery(target).addEventsListener(PointerEvent.Start, (event) => {
        event.preventDefault()
        event.stopPropagation()

        const gameId = target.getAttribute(GAME_ATTR)
        const gameCover = target.style.getPropertyValue(GAME_STYLE_VAR)
        gameId && this.dispatchEvent(new Gallery.Events.Play({ gameId, gameCover }))
        requestFullscreen()
      })
    )
  }

  protected add(game: Game) {
    const element = this.appendElement(GALLERY_ITEM_SELECTER)
    element.setAttr(GAME_ATTR, game.id)

    const coverStyle = `url(${game.cover})`
    element.style.setProperty(GAME_STYLE_VAR, coverStyle)

    this.mapTouchSelectToElmement(element)
    return element
  }
}
