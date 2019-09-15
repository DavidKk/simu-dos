import TouchEvent from '../conf/touch-event'
import Element from '../libs/Element'
import Component from '../libs/Component'
import { trimUnit, px2rem } from '../share/style'
import * as Typings from '../typings'

enum DSOperation {
  plus = '+',
  minus = '-',
  multi = '*',
  divide = '/'
}

export default class Button extends Component {
  public element: Element
  public type: Typings.ButtonType

  constructor (context: string, options?: Typings.ButtonOptions) {
    super()

    this.element = new Element(['keypad-btn'], [context])

    options.hasOwnProperty('size') && this.setSize(options.size)
    options.hasOwnProperty('position') && this.setPosition(options.position)
    options.hasOwnProperty('type') && this.setType(options.type)

    this.bindings()
  }

  private bindings (): void {
    const onTouchDown = (event) => {
      event.preventDefault()
      event.stopPropagation()

      this.element.addClass('active')
    }

    const onTouchUp = (event) => {
      event.preventDefault()
      event.stopPropagation()

      this.element.removeClass('active')
    }

    this.element.bind(TouchEvent.start, onTouchDown)
    this.element.bind(TouchEvent.end, onTouchUp)
  }

  private unbindings (): void {
    this.element.removeAllListeners()
  }

  private calcSize (size: Typings.StyleValue, operation: DSOperation, value: number): Typings.StyleValue {
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

  public bind (events: string | Array<string>, handle: Typings.EventHandle): void {
    return this.element.bind(events, handle)
  }

  public unbind (events: string | Array<string>, handle: Typings.EventHandle): void {
    this.element.unbind(events, handle)
  }

  public setType (type: Typings.ButtonType): void {
    this.type = type
    ;['normal'].forEach((style) => this.element.removeClass(style))
    type !== 'normal' && this.element.addClass(type)
  }

  public setWidth (width: Typings.StyleValue): void {
    this.element.style.width = typeof width === 'string' ? width : px2rem(width)
  }

  public setHeight (height: Typings.StyleValue): void {
    this.element.style.height = typeof height === 'string' ? height : px2rem(height)
  }

  public setFontSize (size: Typings.StyleValue): void {
    this.element.style.fontSize = typeof size === 'string' ? size : px2rem(size)
  }

  public setSize (size: Typings.StyleSize): void {
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

  public setPosition (position: Typings.Position): void {
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

  public appendTo (element: Element | HTMLElement): void {
    this.element.appendTo(element)
  }

  public remove (): void {
    this.unbindings()
    this.element.remove()
  }

  public destroy (): void {
    super.destroy()

    this.unbindings()
    this.element.destroy()
    this.element = undefined

    this.destroy = Function.prototype as any
  }
}
