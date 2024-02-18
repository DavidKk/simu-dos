import { define, Component } from '@/libs/Component'
import PointerEvent from '@/constants/event'
import { ACTIVE_CLASSNAME } from '@/constants/definations'
import { px2rem, trimUnit } from '@/utils'
import { DSOperation } from '@/types'
import type { StyleValue, StyleSize, Position, ButtonType } from '@/types'

export const KEYPAD_TYPES: ButtonType[] = ['normal', 'round']

@define('button')
export default class Button extends Component {
  public type: ButtonType

  protected bindings() {
    const onKeydown = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      this.addClass(ACTIVE_CLASSNAME)
    }

    const onKeyup = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      this.removeClass(ACTIVE_CLASSNAME)
    }

    this.addEventsListener(PointerEvent.Start, onKeydown)
    this.addEventsListener(PointerEvent.End, onKeyup)

    return () => {
      this.removeEventsListener(PointerEvent.Start, onKeydown)
      this.removeEventsListener(PointerEvent.End, onKeyup)
    }
  }

  private calcSize(size: StyleValue, operation: DSOperation, value: number): StyleValue {
    if (typeof size === 'string') {
      let { num, unit } = trimUnit(size)
      return this.calcSize(num, operation, value) + unit
    }

    switch (operation) {
      case DSOperation.Plus:
        return size + value
      case DSOperation.Minus:
        return size - value
      case DSOperation.Multi:
        return size * value
      case DSOperation.Divide:
        return size / value
      default:
        return size
    }
  }

  public setType(type: ButtonType): void {
    this.type = type

    KEYPAD_TYPES.forEach((style) => this.removeClass(style))
    type !== 'normal' && this.addClass(type)
  }

  public setWidth(width: StyleValue): void {
    this.style.width = typeof width === 'string' ? width : px2rem(width)
  }

  public setHeight(height: StyleValue): void {
    this.style.height = typeof height === 'string' ? height : px2rem(height)
  }

  public setFontSize(size: StyleValue): void {
    this.style.fontSize = typeof size === 'string' ? size : px2rem(size)
  }

  public setSize(size: StyleSize): void {
    const ratio = this.type === 'round' ? 1 / 3 : 3 / 4
    if (typeof size === 'object') {
      const { width, height } = size
      this.setWidth(width)
      this.setHeight(height)

      const value = this.type === 'round' ? width : height
      const fontSize = this.calcSize(value, DSOperation.Multi, ratio)
      this.setFontSize(fontSize)
    } else {
      this.setWidth(size)

      const value = this.type === 'round' ? size : 20
      let fontSize = this.calcSize(value, DSOperation.Multi, ratio)
      this.setFontSize(fontSize)
    }
  }

  public setPosition(position: Position): void {
    if (position.hasOwnProperty('top')) {
      const value = position.top
      if (typeof value === 'undefined') {
        return
      }

      if (typeof value === 'string') {
        this.style.top = value
        return
      }

      this.style.top = px2rem(value)
    }

    if (position.hasOwnProperty('right')) {
      const value = position.right
      if (typeof value === 'undefined') {
        return
      }

      if (typeof value === 'string') {
        this.style.right = value
        return
      }

      this.style.right = px2rem(value)
    }

    if (position.hasOwnProperty('bottom')) {
      const value = position.bottom
      if (typeof value === 'undefined') {
        return
      }

      if (typeof value === 'string') {
        this.style.bottom = value
        return
      }

      this.style.bottom = px2rem(value)
    }

    if (position.hasOwnProperty('left')) {
      const value = position.left
      if (typeof value === 'undefined') {
        return
      }

      if (typeof value === 'string') {
        this.style.left = value
        return
      }

      this.style.left = px2rem(value)
    }
  }
}
