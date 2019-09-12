import Game from './Game'
import * as games from '../conf/games'
import TouchEvents from '../share/event'
import * as Typings from '../typings'

export default class App {
  private handleChoosed: Typings.DGEventHandle
  private handleSelected: Typings.DGEventHandle

  public game: Game
  public container: HTMLDivElement
  public items: Array<HTMLAnchorElement>
  public selected: number

  public get numberInRow (): number {
    const num = this.items.findIndex((item, index, collection) => {
      if (!collection[index - 1]) {
        return false
      }

      return item.offsetTop !== collection[index - 1].offsetTop
    })

    return num === -1 ? this.items.length : num
  }

  constructor () {
    this.selected = 0

    this.game = new Game()
    this.container = this.createContainer()
    this.items = Object.keys(games).map((name) => this.createItem(games[name]))
    this.items.forEach((item) => this.container.appendChild(item))

    const handleTouch = async (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      const element = event.target as Element
      if (element.tagName.toLocaleLowerCase() !== 'a') {
        return
      }

      const id = element.getAttribute('data-game')
      this.play(id)
    }

    document.body.addEventListener(TouchEvents.start, handleTouch)
    document.body.appendChild(this.container)

    this.game.onExit(this.show.bind(this))
    this.bindings()
  }

  public play (id: string): Promise<void> {
    this.hide()
    return this.game.play(id)
  }

  private _onChoosed (event: KeyboardEvent): void {
    switch (event.keyCode) {
      case 38: {
        const num = this.selected - this.numberInRow
        if (num >= 0) {
          this.selected = num
        }

        break
      }

      case 39: {
        const num = this.selected + 1
        if (num < this.items.length) {
          this.selected = num
        }

        break
      }

      case 40: {
        const num = this.selected + this.numberInRow
        if (num < this.items.length) {
          this.selected = num
        }

        break
      }

      case 37: {
        const num = this.selected - 1
        if (num >= 0) {
          this.selected = num
        }

        break
      }
    }

    this.items.forEach((item) => item.classList.remove('active'))

    const node = this.items[this.selected]
    node.classList.add('active')
  }

  private _onSelected (event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      const node = this.items[this.selected]
      const id = node.getAttribute('data-game')
      this.play(id)
    }
  }

  public bindings (): void {
    this.handleChoosed = this._onChoosed.bind(this)
    document.body.addEventListener('keyup', this.handleChoosed)

    this.handleSelected = this._onSelected.bind(this)
    document.body.addEventListener('keypress', this.handleSelected)
  }

  public unbindings (): void {
    document.body.removeEventListener('keyup', this.handleChoosed)
    document.body.removeEventListener('keypress', this.handleSelected)

    this.handleChoosed = undefined
    this.handleSelected = undefined
  }

  public show (): void {
    this.container.classList.add('in')
    setTimeout(() => this.bindings(), 1e3)
  }

  public hide (): void {
    this.unbindings()
    this.container.classList.remove('in')
  }

  private createContainer (): HTMLDivElement {
    const node = document.createElement('div')
    node.classList.add('game-list', 'fade', 'in')
    return node
  }

  private createItem (game: Typings.DGGameInfo): HTMLAnchorElement {
    const node = document.createElement('a')
    node.setAttribute('data-game', game.id)
    node.classList.add('game-item')
    node.style.backgroundImage = `url(${game.cover})`

    return node
  }
}
