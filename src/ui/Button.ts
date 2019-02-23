import TouchEvent from '../conf/touch-event'
import { trimUnit, px2rem } from '../share/style'
import {
  DGEventHandle,
  DGStyleValue,
  DGStyleSize,
  DGPosition,
  DGButtonType,
  DGButtonOptions,
  DGButton
} from '../types'

enum DSOperation {
  plus = '+',
  minus = '-',
  multi = '*',
  divide = '/'
}

export default class Button implements DGButton {
  private element: HTMLDivElement
  private handleTouchStart: DGEventHandle
  private handleTouchEnd: DGEventHandle
  private type: keyof typeof DGButtonType = 'normal'

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

  private calcSize (size: DGStyleValue, operation: DSOperation, value: number): DGStyleValue {
    if (typeof size === 'string') {
      let { num, unit } = trimUnit(size)
      return this.calcSize(num, operation, value) + unit
    }

    switch (operation) {
      case DSOperation.plus:
        return size + value
      case DSOperation.minus:
        return size - value
      case DSOperation.multi:
        return size * value
      case DSOperation.divide:
        return size / value
      default:
        return size
    }
  }

  public setType (type: keyof typeof DGButtonType): void {
    this.type = type
    ;[DGButtonType.normal].forEach((style) => this.element.classList.remove(style))
    type !== 'normal' && this.element.classList.add(type)
  }

  public setWidth (width: DGStyleValue): void {
    this.element.style.width = typeof width === 'string' ? width : px2rem(width)
  }

  public setHeight (height: DGStyleValue): void {
    this.element.style.height = typeof height === 'string' ? height : px2rem(height)
  }

  public setFontSize (size: DGStyleValue): void {
    this.element.style.fontSize = typeof size === 'string' ? size : px2rem(size)
  }

  public setSize (size: DGStyleSize): void {
    const ratio = this.type === DGButtonType.round ? 1 / 3 : 3 / 4
    if (typeof size === 'object') {
      const { width, height } = size
      this.setWidth(width)
      this.setHeight(height)

      const value = this.type === DGButtonType.round ? width : height
      const fontSize = this.calcSize(value, DSOperation.multi, ratio)
      this.setFontSize(fontSize)

    } else {
      this.setWidth(size)

      const value = this.type === DGButtonType.round ? size : 20
      let fontSize = this.calcSize(value, DSOperation.multi, ratio)
      this.setFontSize(fontSize)
    }
  }

  public setPosition (position: DGPosition): void {
    if (position.hasOwnProperty('top')) {
      let value = position.top
      this.element.style.top = typeof value === 'string' ? value : px2rem(value)
    }

    if (position.hasOwnProperty('right')) {
      let value = position.right
      this.element.style.right = typeof value === 'string' ? value : px2rem(value)
    }

    if (position.hasOwnProperty('bottom')) {
      let value = position.bottom
      this.element.style.bottom = typeof value === 'string' ? value : px2rem(value)
    }

    if (position.hasOwnProperty('left')) {
      let value = position.left
      this.element.style.left = typeof value === 'string' ? value : px2rem(value)
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
