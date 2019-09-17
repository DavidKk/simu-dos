import Element from '../libs/Element'
import Component from '../libs/Component'
import TouchEvents from '../share/event'
import * as Typings from '../typings'

export default class Gallery extends Component {
  private handleTouchSelected: Typings.EventHandle
  private handleKeySelected: Typings.EventHandle
  private handleKeyChoosed: Typings.EventHandle

  public element: Element
  public items: Element[]
  public selected: number

  public get numberInRow (): number {
    const num = this.items.findIndex((item, index, collection) => {
      if (!collection[index - 1]) {
        return false
      }

      return item.element.offsetTop !== collection[index - 1].element.offsetTop
    })

    return num === -1 ? this.items.length : num
  }

  constructor (games: { [key: string]: Typings.GameInformation }) {
    super()

    this.element = new Element(['gallery'])
    this.items = Object.keys(games).map((name) => this.register(games[name]))
    this.selected = 0

    this.bindings()
  }

  private async onTouchSelect (event: Event): Promise<void> {
    event.preventDefault()
    event.stopPropagation()

    const element = event.target as HTMLElement
    if (element.tagName.toLocaleLowerCase() !== 'a') {
      return
    }

    const id = element.getAttribute('data-game')
    this.emit('play', id)
  }

  private onKeySelected (event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      const node = this.items[this.selected]
      const id = node.getAttr('data-game')
      this.emit('play', id)
    }
  }

  private onKeyChoosed (event: KeyboardEvent): void {
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

    this.items.forEach((item) => item.removeClass('active'))

    const node = this.items[this.selected]
    node && node.addClass('active')
  }

  private bindings (): void {
    this.handleTouchSelected = this.onTouchSelect.bind(this)
    document.body.addEventListener(TouchEvents.start, this.handleTouchSelected)

    this.handleKeyChoosed = this.onKeyChoosed.bind(this)
    document.body.addEventListener('keyup', this.handleKeyChoosed)

    this.handleKeySelected = this.onKeySelected.bind(this)
    document.body.addEventListener('keypress', this.handleKeySelected)
  }

  private unbindings (): void {
    document.body.removeEventListener(TouchEvents.start, this.handleTouchSelected)
    document.body.removeEventListener('keyup', this.handleKeyChoosed)
    document.body.removeEventListener('keypress', this.handleKeySelected)

    this.handleTouchSelected = undefined
    this.handleKeyChoosed = undefined
    this.handleKeySelected = undefined
  }

  public register (game: Typings.GameInformation): Element {
    const element = new Element(['gallery-item'], null, 'a')
    element.setAttr('data-game', game.id)
    element.style.backgroundImage = `url(${game.cover})`
    element.appendTo(this.element)
    return element
  }

  public onSelected (handle: (id: string) => void): void {
    this.addListener('play', handle)
  }

  public destroy (): void {
    super.destroy()

    this.unbindings()

    this.element.destroy()
    this.items.splice(0).forEach((item) => item.destroy())

    this.items = undefined
    this.element = undefined

    this.destroy = Function.prototype as any
  }
}
