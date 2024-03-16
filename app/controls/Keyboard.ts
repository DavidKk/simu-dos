import { define, Component } from '@/libs/Component'
import PointerEvent from '@/constants/event'
import type { KeyboardTouchEventPayload, KeyboardSwitchEventPayload } from '@/types'
import SimEvent from '@/libs/SimEvent'
import Menu from './Menu'
import { deprecated } from '@/utils'

/** 按键 */
export const KEYS = [
  ['esc'],
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'return'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
  ['space'],
] as const

/** 大写 */
export const UPPERKEYS = [
  ['Esc'],
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
  ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Return'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift'],
  ['Space'],
] as const

/** 按键值 */
export const KEYMAP = [
  ['Escape'],
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
  ['Space'],
] as const

export const ATTRIBUTE_LOWER = 'lowercase'
export const ATTRIBUTE_UPPER = 'uppercase'
export const ATTRIBUTE_KEY = 'key'

/** 键盘UI */
@define('keyboard')
export default class Keyboard extends Component {
  static Events = {
    TouchDown: SimEvent.create<KeyboardTouchEventPayload>('KEYBOARD_TOUCHDOWN'),
    TouchUp: SimEvent.create<KeyboardTouchEventPayload>('KEYBOARD_TOUCHUP'),
    TouchPress: SimEvent.create<KeyboardTouchEventPayload>('KEYBOARD_TOUCHPRESS'),
    Switch: SimEvent.create<KeyboardSwitchEventPayload>('KEYBOARD_SWITCH'),
  }

  /** 按键 */
  protected keys: Component[]
  /** 是否按住 shift */
  protected isActiveShift = false

  protected bindings() {
    this.keys = Array.from(
      (function* (self) {
        for (let i = 0; i < KEYS.length; i++) {
          const group = KEYS[i]
          const row = self.appendElement('keyboard-row')

          for (let j = 0; j < group.length; j++) {
            const lowercase = group[j]
            const button = row.appendElement('keyboard-key')
            const uppercase = UPPERKEYS[i][j]
            const key = KEYMAP[i][j]

            button.setAttribute(ATTRIBUTE_LOWER, lowercase)
            button.setAttribute(ATTRIBUTE_UPPER, uppercase)
            button.setAttribute(ATTRIBUTE_KEY, key)
            button.setContent(lowercase)
            yield button
          }

          self.append(row)
        }
      })(this)
    )

    this.hide()

    return deprecated(
      this.addEventsListener(PointerEvent.Start, (event: Event) => {
        event.preventDefault()
        event.stopPropagation()

        const { target } = event
        if (!(target instanceof Component)) {
          return
        }

        const key = target.getAttr(ATTRIBUTE_KEY)
        if (!key) {
          return
        }

        switch (key) {
          case 'Shift':
          case 'CapsLock': {
            this.toggleUppercase()

            const event = this.isActiveShift ? new Keyboard.Events.TouchDown({ key }) : new Keyboard.Events.TouchUp({ key })
            this.dispatchEvent(event)
            break
          }

          default: {
            const event = new Keyboard.Events.TouchPress({ key })
            this.dispatchEvent(event)
          }
        }
      }),
      (() => {
        const onSwitcherActive = (event: Event) => {
          event.preventDefault()
          event.stopPropagation()

          this.toggle()
          this.dispatchEvent(new Keyboard.Events.Switch({ visible: this.isVisible }))
        }

        const onKeyDown = (event: KeyboardEvent) => {
          const key = this.keys.find((key) => key.getAttr('lowercase') === event.key || key.getAttr('uppercase') === event.key)
          key?.addClass('active')
        }

        const onKeyUp = (event: KeyboardEvent) => {
          const key = this.keys.find((key) => key.getAttr('lowercase') === event.key || key.getAttr('uppercase') === event.key)
          key?.removeClass('active')
        }

        document.body.addEventListener(Menu.Events.KeyboardSwitch.EventType, onSwitcherActive)
        document.body.addEventListener('keydown', onKeyDown)
        document.body.addEventListener('keyup', onKeyUp)

        return () => {
          document.body.removeEventListener(Menu.Events.KeyboardSwitch.EventType, onSwitcherActive)
          document.body.removeEventListener('keydown', onKeyDown)
          document.body.removeEventListener('keyup', onKeyUp)
        }
      })()
    )
  }

  public onSwitch(handle: (event: InstanceType<typeof Keyboard.Events.Switch>) => void) {
    this.addEventListener(Keyboard.Events.Switch.EventType, (event) => {
      if (Keyboard.Events.Switch.is(event)) {
        handle(event)
      }
    })
  }

  public toggleUppercase(isOpen = !this.isActiveShift) {
    this.isActiveShift = isOpen
    this.keys.forEach((key) => {
      const uppercase = this.isActiveShift ? key.getAttr(ATTRIBUTE_UPPER) : key.getAttr(ATTRIBUTE_LOWER)
      uppercase && key.setContent(uppercase)
    })
  }
}
