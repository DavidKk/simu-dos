import { define, Component } from '@/libs/Component'
import PointerEvent from '@/constants/event'
import { ACTIVE_CLASSNAME } from '@/constants/definations'
import { px2rem, trimUnit, deprecated } from '@/utils'
import { DSOperation } from '@/types'
import type { StyleValue, StyleSize, Position, ButtonType } from '@/types'

export const KEYPAD_TYPES: ButtonType[] = ['normal', 'round']

@define('button')
export default class Button extends Component {
  public type: ButtonType

  protected bindings() {
    return deprecated(
      this.addEventsListener(PointerEvent.Start, (event: Event) => {
        event.preventDefault()
        event.stopPropagation()
        this.addClass(ACTIVE_CLASSNAME)
      }),
      this.addEventsListener(PointerEvent.End, (event: Event) => {
        event.preventDefault()
        event.stopPropagation()
        this.removeClass(ACTIVE_CLASSNAME)
      })
    )
  }

  private calcSize(size: StyleValue, operation: DSOperation, value: number): StyleValue {
    if (typeof size === 'string') {
      const { num, unit } = trimUnit(size)
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

  public setType(type: ButtonType) {
    this.type = type

    KEYPAD_TYPES.forEach((style) => this.removeClass(style))
    type !== 'normal' && this.addClass(type)
  }

  public setWidth(width: StyleValue) {
    const name = this.type === 'round' ? '--sim-button-round-size' : '--sim-button-width'
    const value = typeof width === 'string' ? width : px2rem(width)
    this.style.setProperty(name, value)
  }

  public setHeight(height: StyleValue) {
    const value = typeof height === 'string' ? height : px2rem(height)
    this.style.setProperty('--sim-button-height', value)
  }

  public setFontSize(size: StyleValue) {
    const value = typeof size === 'string' ? size : px2rem(size)
    this.style.setProperty('--sim-button-font-size', value)
  }

  public setSize(size: StyleSize) {
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
      const fontSize = this.calcSize(value, DSOperation.Multi, ratio)
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
        this.style.setProperty('--sim-button-top', value)
        return
      }

      this.style.setProperty('--sim-button-top', px2rem(value))
    }

    if (position.hasOwnProperty('right')) {
      const value = position.right
      if (typeof value === 'undefined') {
        return
      }

      if (typeof value === 'string') {
        this.style.setProperty('--sim-button-right', value)
        return
      }

      this.style.setProperty('--sim-button-right', px2rem(value))
    }

    if (position.hasOwnProperty('bottom')) {
      const value = position.bottom
      if (typeof value === 'undefined') {
        return
      }

      if (typeof value === 'string') {
        this.style.setProperty('--sim-button-bottom', value)
        return
      }

      this.style.setProperty('--sim-button-bottom', px2rem(value))
    }

    if (position.hasOwnProperty('left')) {
      const value = position.left
      if (typeof value === 'undefined') {
        return
      }

      if (typeof value === 'string') {
        this.style.setProperty('--sim-button-left', value)
        return
      }

      this.style.setProperty('--sim-button-left', px2rem(value))
    }
  }
}
