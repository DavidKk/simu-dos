import TouchEvent from '../conf/touch-event'
import {
  DGEventHandle,
  DGPosition,
  DGButtonType, DGButtonOptions, DGButton
} from '../types'

export default class Button implements DGButton {
  private element: HTMLDivElement
  private handleTouchStart: DGEventHandle
  private handleTouchEnd: DGEventHandle

  constructor (context: string, options?: DGButtonOptions) {
    this.element = document.createElement('div')
    this.element.className = 'keyboard-btn'
    this.element.innerText = context

    options.hasOwnProperty('size') && this.setSize(options.size)
    options.hasOwnProperty('position') && this.setPosition(options.position)
    options.hasOwnProperty('type') && this.setType(options.type)

    this.bindings()
  }

  private _onTouchDown (event) {
    event.preventDefault()
    event.stopPropagation()

    this.element.classList.add('active')
  }

  private _onTouchUp (event) {
    event.preventDefault()
    event.stopPropagation()

    this.element.classList.remove('active')
  }

  private bindings (): void {
    this.handleTouchStart = this._onTouchDown.bind(this)
    this.handleTouchEnd = this._onTouchUp.bind(this)

    this.bind(TouchEvent.start, this.handleTouchStart)
    this.bind(TouchEvent.end, this.handleTouchEnd)
  }

  private unbindings (): void {
    this.unbind(TouchEvent.start, this.handleTouchStart)
    this.unbind(TouchEvent.start, this.handleTouchEnd)
  }

  public bind (events: string | Array<string>, handle: DGEventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(event, handle))
      return
    }

    this.element.addEventListener(events, handle, false)
  }

  public unbind (events: string | Array<string>, handle: DGEventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(event, handle))
      return
    }

    this.element.removeEventListener(events, handle)
  }

  public setType (type: keyof typeof DGButtonType): void {
    this.element.classList.add(type)
  }

  public setSize (size: string | number): void {
    this.element.style.width = typeof size === 'string' ? size : size + 'px'
  }

  public setPosition (position: DGPosition): void {
    if (position.hasOwnProperty('top')) {
      let value = position.top
      this.element.style.top = typeof value === 'string' ? value : value + 'px'
    }

    if (position.hasOwnProperty('right')) {
      let value = position.right
      this.element.style.right = typeof value === 'string' ? value : value + 'px'
    }

    if (position.hasOwnProperty('bottom')) {
      let value = position.bottom
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
