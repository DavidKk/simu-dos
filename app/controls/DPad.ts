import { define, Component } from '@/libs/Component'
import SimEvent from '@/libs/SimEvent'
import { deprecated } from '@/utils'
import { ACTIVE_CLASSNAME } from '@/constants/definations'
import PointerEvent from '@/constants/event'
import type { DpadDirection, DpadTouchEventDetail } from '@/types'

@define('dpad')
export default class DPad extends Component {
  static Events = {
    TouchDown: SimEvent.create<DpadTouchEventDetail>('DPAD_TOUCHDOWN'),
    TouchUp: SimEvent.create<DpadTouchEventDetail>('DPAD_TOUCHUP'),
  }

  protected up: Component
  protected right: Component
  protected down: Component
  protected left: Component

  protected bindings() {
    this.up = this.createButton('up')
    this.right = this.createButton('right')
    this.down = this.createButton('down')
    this.left = this.createButton('left')

    const wrapTouchDown = (direction: DpadDirection, target: Component) => (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      target.addClass(ACTIVE_CLASSNAME)
      this.dispatchEvent(new DPad.Events.TouchDown({ direction }))
    }

    const wrapTouchUp = (direction: DpadDirection, target: Component) => (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      target.removeClass(ACTIVE_CLASSNAME)
      this.dispatchEvent(new DPad.Events.TouchUp({ direction }))
    }

    return deprecated(
      this.up.addEventsListener(PointerEvent.Start, wrapTouchDown('up', this.up)),
      this.right.addEventsListener(PointerEvent.Start, wrapTouchDown('right', this.right)),
      this.down.addEventsListener(PointerEvent.Start, wrapTouchDown('down', this.down)),
      this.left.addEventsListener(PointerEvent.Start, wrapTouchDown('left', this.left)),

      this.up.addEventsListener(PointerEvent.End, wrapTouchUp('up', this.up)),
      this.right.addEventsListener(PointerEvent.End, wrapTouchUp('right', this.right)),
      this.down.addEventsListener(PointerEvent.End, wrapTouchUp('down', this.down)),
      this.left.addEventsListener(PointerEvent.End, wrapTouchUp('left', this.left)),

      (() => {
        const keys = new Map([
          ['ArrowUp', this.up],
          ['ArrowRight', this.right],
          ['ArrowDown', this.down],
          ['ArrowLeft', this.left],
        ])

        const onKeyDown = (event: KeyboardEvent) => {
          const key = keys.get(event.key)
          key?.addClass('active')
        }

        const onKeyUp = (event: KeyboardEvent) => {
          const key = keys.get(event.key)
          key?.removeClass('active')
        }

        document.body.addEventListener('keydown', onKeyDown)
        document.body.addEventListener('keyup', onKeyUp)

        return () => {
          document.body.removeEventListener('keydown', onKeyDown)
          document.body.removeEventListener('keyup', onKeyUp)
        }
      })()
    )
  }

  protected createButton(direction: DpadDirection) {
    const button = this.appendElement('dpad-button')
    button.addClass(`dpad-${direction}`)
    button.setAttrs({ direction })
    return button
  }
}
