import { define, Component } from '@/libs/Component'
import PointerEvent from '@/constants/event'
import { KEYBOARD_TOUCHDOWN, KEYBOARD_TOUCHUP, KEYBOARD_TOUCHPRESS, KEYBOARD_SWITCH } from '@/constants/actions'
import type { KeyboardTouchEventDetail, KeyboardSwitchEventDetail } from '@/types'
import SimEvent from '@/libs/SimEvent'

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
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',],
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
    TouchDown: SimEvent.create<KeyboardTouchEventDetail>(KEYBOARD_TOUCHDOWN),
    TouchUp: SimEvent.create<KeyboardTouchEventDetail>(KEYBOARD_TOUCHUP),
    TouchPress: SimEvent.create<KeyboardTouchEventDetail>(KEYBOARD_TOUCHPRESS),
    Switch: SimEvent.create<KeyboardSwitchEventDetail>(KEYBOARD_SWITCH),
  }

  /** 开关 */
  protected switcher: Component
  /** 键盘 */
  protected keyboard: Component
  /** 按键 */
  protected keys: Component[]
  /** 是否按住 shift */
  protected isActiveShift = false

  protected bindings() {
    this.switcher = this.appendElement('keyboard-switcher')
    this.keyboard = this.appendElement('keyboard-container')
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
        }
      })(this)
    )

    this.keyboard.hide()

    const onKeyboardActive = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
  
      const key = this.keyboard.getAttr(ATTRIBUTE_LOWER)
      if (!key?.length) {
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
    }
  
    const onSwitcherActive = (event: Event) => {
      event.preventDefault()
      event.stopPropagation()
  
      this.keyboard.toggle()
      this.dispatchEvent(new Keyboard.Events.Switch({ visible: this.keyboard.isVisible }))
    }
  
    this.keyboard.addEventsListener(PointerEvent.Start, onKeyboardActive)
    this.switcher.addEventsListener(PointerEvent.Start, onSwitcherActive)

    return () => {
      this.keyboard.removeEventsListener(PointerEvent.Start, onKeyboardActive)
      this.switcher.removeEventsListener(PointerEvent.Start, onSwitcherActive)
    }
  }

  public onSwitch(handle: (event: InstanceType<typeof Keyboard.Events.Switch>) => void) {
    this.addEventListener(Keyboard.Events.Switch.EventType, (event) => {
      if (Keyboard.Events.Switch.is(event)) {
        handle(event)
      }
    })
  }

  public toggleUppercase(isOpen: boolean = !this.isActiveShift) {
    this.isActiveShift = isOpen
    this.keys.forEach((key) => {
      const uppercase = this.isActiveShift ? key.getAttr(ATTRIBUTE_UPPER) : key.getAttr(ATTRIBUTE_LOWER)
      uppercase && key.setContent(uppercase)
    })
  }
}
