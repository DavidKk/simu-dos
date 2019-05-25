import Game from './Game'
import * as games from '../conf/games'
import TouchEvents from '../share/event'
import * as Typings from '../typings'

export default class App {
  public game: Game
  public container: HTMLDivElement
  public items: Array<HTMLAnchorElement>

  constructor () {
    this.game = new Game()
    this.container = this.createContainer()
    this.items = Object.keys(games).map((name) => this.createItem(games[name]))
    this.items.forEach((item) => this.container.appendChild(item))

    const handleTouch = async (event: Event) => {
      event.stopPropagation()

      const element = event.target as Element
      if (element.tagName.toLocaleLowerCase() !== 'a') {
        return
      }

      const id = element.getAttribute('data-game')

      await this.game.play(id)
      this.game.dosbox.onExit(this.show.bind(this))

      this.hide()
    }

    document.body.addEventListener(TouchEvents.start, handleTouch)
    document.body.appendChild(this.container)
  }

  public show () {
    this.container.classList.add('in')
  }

  public hide () {
    this.container.classList.remove('in')
  }

  private createContainer (): HTMLDivElement {
    const node = document.createElement('div')
    node.classList.add('game-list', 'fade', 'in')
    return node
  }

  private createItem (game: Typings.DGGameInfo): HTMLAnchorElement {
    const image = document.createElement('img')
    image.setAttribute('src', game.cover)

    const node = document.createElement('a')
    node.setAttribute('data-game', game.id)
    node.appendChild(image)
    node.classList.add('item')

    return node
  }
}
