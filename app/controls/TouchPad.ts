import { define, Component } from '@/libs/Component'
import Keypad from '@/controls/Keypad'
import Joystick from '@/controls/Joystick'
import DPad from '@/controls/DPad'
import Keyboard from '@/controls/Keyboard'
import TouchEvents from '@/constants/event'
import Button from '@/controls/Button'
import { TOUCHPAD_TOUCHDOWN, TOUCHPAD_TOUCHUP } from '@/constants/actions'
import type { Game, KeypadTouchEventDetail } from '@/types'
import SimEvent from '@/libs/SimEvent'

/**
 * 控制器
 * @description
 * 主要用于管理各种UI交互,
 * 作为连接UI与模拟器之间的桥梁
 */
@define('touchpad')
export default class TouchPad extends Component {
  static Events = {
    TouchDown: SimEvent.create<KeypadTouchEventDetail>(TOUCHPAD_TOUCHDOWN),
    TouchUp: SimEvent.create<KeypadTouchEventDetail>(TOUCHPAD_TOUCHUP),
  }

  /** 按键面板 */
  protected keypad: Keypad
  /** 摇杆面板 */
  protected joystick: Joystick
  /** 十字键面板 */
  protected dpad: DPad
  /** 键盘 */
  protected keyboard: Keyboard
  /** 事件销毁集合 */
  protected deprecates: Array<() => void> = []

  /** 为游戏注册控制器 */
  public register(game: Game) {
    const { joystick, dpad, keypad, keyboad } = game.play || {}

    // 注册摇杆
    if (joystick) {
      this.joystick = this.appendElement(Joystick)
    }

    // 注册十字键
    if (dpad) {
      this.dpad = this.appendElement(DPad)
    }

    /** 注册虚拟按键 */
    if (Array.isArray(keypad) && keypad.length > 0) {
      this.keypad = this.appendElement(Keypad)
      keypad.forEach((item) => {
        const button = this.keypad.add(item.content, item.options)
        const deprecated = this.mapKeyCodeToButton(item.key, button)
        this.deprecates.push(deprecated)
      })
    }

    // // 注册键盘
    // if (keyboad) {
    //   this.keyboard = this.appendElement(Keyboard)
    //   this.keyboard.onSwitch((event) => {
    //     const { visible } = event.detail
    //     this.joystick && this.joystick.toggle(visible)
    //     this.dpad && this.dpad.toggle(visible)
    //     this.keypad && this.keypad.toggle(visible)
    //   })
    // }
  }

  /** 为按钮绑定按键 */
  protected mapKeyCodeToButton(key: string, button: Button) {
    const handleTouchDown = () => this.dispatchEvent(new TouchPad.Events.TouchUp({ key }))
    const handleTouchUp = () => this.dispatchEvent(new TouchPad.Events.TouchDown({ key }))

    button.bind(TouchEvents.Start, handleTouchDown)
    button.bind(TouchEvents.End, handleTouchUp)

    return function deprecated() {
      button.unbind(TouchEvents.Start, handleTouchDown)
      button.unbind(TouchEvents.End, handleTouchUp)
    }
  }

  /** 重置 */
  public reset() {
    this.removeAllListeners()

    this.joystick && this.joystick.remove()
    this.dpad && this.dpad.remove()
    this.keypad && this.keypad.remove()
    this.keyboard && this.keyboard.remove()
  }
}
