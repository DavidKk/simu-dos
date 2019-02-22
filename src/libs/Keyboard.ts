import remove from 'lodash/remove'
import TouchEvents from '../share/event'
import { Pos, EventHandle } from '../types'

export class Button {
  private element: HTMLDivElement
  private handleTouchStart: EventHandle
  private handleTouchEnd: EventHandle

  constructor (context: string, options?: { position?: Pos, size?: number | string }) {
    this.element = document.createElement('div')
    this.element.className = 'keyboard-btn'
    this.element.innerText = context

    options.hasOwnProperty('size') && this.setSize(options.size)
    options.hasOwnProperty('position') && this.setPosition(options.position)

    this.bindings()
  }

  private _onTouchDown () {
    this.element.classList.add('active')
  }

  private _onTouchUp () {
    this.element.classList.remove('active')
  }

  private bindings (): void {
    this.handleTouchStart = this._onTouchDown.bind(this)
    this.handleTouchEnd = this._onTouchUp.bind(this)

    this.bind(TouchEvents.start, this.handleTouchStart)
    this.bind(TouchEvents.start, this.handleTouchEnd)
  }

  private unbindings (): void {
    this.unbind(TouchEvents.start, this.handleTouchStart)
    this.unbind(TouchEvents.start, this.handleTouchEnd)
  }

  public bind (events: string | Array<string>, handle: EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(event, handle))
      return
    }

    this.element.addEventListener(events, handle, false)
  }

  public unbind (events: string | Array<string>, handle: EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(event, handle))
      return
    }

    this.element.removeEventListener(events, handle)
  }

  public setSize (size: string | number): void {
    this.element.style.width = typeof size === 'string' ? size : size + 'px'
  }

  public setPosition (position: Pos): void {
    if (position.hasOwnProperty('top')) {
      let value = position.top
      this.element.style.top = typeof value === 'string' ? value : value + 'px'
    }

    if (position.hasOwnProperty('right')) {
      let value = position.right
      this.element.style.right = typeof value === 'string' ? value : value + 'px'
    }

    if (position.hasOwnProperty('bottom')) {
      let value = position.right
      this.element.style.bottom = typeof value === 'string' ? value : value + 'px'
    }

    if (position.hasOwnProperty('left')) {
      let value = position.left
      this.element.style.left = typeof value === 'string' ? value : value + 'px'
    }
  }

  public append (element: HTMLElement): void {
    element.appendChild(this.element)
  }

  public remove (): void {
    this.unbindings()
    this.handleTouchStart = undefined
    this.handleTouchEnd = undefined
    this.element.parentNode.removeChild(this.element)
  }
}

export default class Keyboard {
  private zone: HTMLDivElement = null
  private buttons: Array<Button> = []

  constructor (zone: HTMLDivElement) {
    this.zone = zone
  }

  public add (context: string, options?: { position?: Pos, size?: number | string }): Button {
    let button = new Button(context, options)
    button.append(this.zone)
    this.buttons.push(button)
    return button
  }

  public remove (button: Button): void {
    remove(this.buttons, (item) => item === button)
  }

  public show (): void {

  }

  public hide (): void {

  }

  public destroy (): void {
    this.buttons.forEach((button: Button) => button.remove())
    this.buttons.splice(0)

    this.buttons = undefined
    this.zone = undefined
  }
}
