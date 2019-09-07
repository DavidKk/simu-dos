import TouchEvent from '../conf/touch-event'
import Component from './Component'
import { trimUnit, px2rem } from '../share/style'
import * as Typings from '../typings'

enum DSOperation {
  plus = '+',
  minus = '-',
  multi = '*',
  divide = '/'
}

export default class Button extends Component {
  public element: HTMLDivElement
  public type: Typings.DGButtonType

  private handleTouchStart: Typings.DGEventHandle
  private handleTouchEnd: Typings.DGEventHandle

  constructor (context: string, options?: Typings.DGButtonOptions) {
    super()

    this.element = document.createElement('div')
    this.element.className = 'keypad-btn'
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

    this.bind(this.element, TouchEvent.start, this.handleTouchStart)
    this.bind(this.element, TouchEvent.end, this.handleTouchEnd)
  }

  private unbindings (): void {
    this.unbind(this.element, TouchEvent.start, this.handleTouchStart)
    this.unbind(this.element, TouchEvent.start, this.handleTouchEnd)

    this.handleTouchStart = Function.prototype as any
    this.handleTouchEnd = Function.prototype as any
  }

  public bindEvent (events: string | Array<string>, handle: Typings.DGEventHandle): void {
    super.bind(this.element, events, handle)
  }

  public unbindEvent (events: string | Array<string>, handle: Typings.DGEventHandle): void {
    super.unbind(this.element, events, handle)
  }

  private calcSize (size: Typings.DGStyleValue, operation: DSOperation, value: number): Typings.DGStyleValue {
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

  public setType (type: Typings.DGButtonType): void {
    this.type = type
    ;['normal'].forEach((style) => this.element.classList.remove(style))
    type !== 'normal' && this.element.classList.add(type)
  }

  public setWidth (width: Typings.DGStyleValue): void {
    this.element.style.width = typeof width === 'string' ? width : px2rem(width)
  }

  public setHeight (height: Typings.DGStyleValue): void {
    this.element.style.height = typeof height === 'string' ? height : px2rem(height)
  }

  public setFontSize (size: Typings.DGStyleValue): void {
    this.element.style.fontSize = typeof size === 'string' ? size : px2rem(size)
  }

  public setSize (size: Typings.DGStyleSize): void {
    const ratio = this.type === 'round' ? 1 / 3 : 3 / 4
    if (typeof size === 'object') {
      const { width, height } = size
      this.setWidth(width)
      this.setHeight(height)

      const value = this.type === 'round' ? width : height
      const fontSize = this.calcSize(value, DSOperation.multi, ratio)
      this.setFontSize(fontSize)

    } else {
      this.setWidth(size)

      const value = this.type === 'round' ? size : 20
      let fontSize = this.calcSize(value, DSOperation.multi, ratio)
      this.setFontSize(fontSize)
    }
  }

  public setPosition (position: Typings.DGPosition): void {
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
