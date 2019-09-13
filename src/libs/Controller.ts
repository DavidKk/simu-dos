import { EventEmitter } from 'events'
import Button from '../ui/Button'
import Keypad from '../ui/Keypad'
import Joystick from '../ui/Joystick'
import DPad from '../ui/DPad'
import Keyboard from '../ui/Keyboard'
import Utils from '../ui/Utils'
import TouchEvent from '../conf/touch-event'
import * as Typings from '../typings'

/**
 * 控制器
 */
export default class Controller {
  /**
   * 事件触发器
   * 所有事件均通过函数处理,
   * 因此这里注册一个私有触发器而不用继承
   */
  private emitter: EventEmitter

  /**
   * 交互的面板容器
   */
  public element: HTMLDivElement

  /**
   * 按键面板
   */
  public keypad: Keypad

  /**
   * 摇杆面板
   */
  public joystick: Joystick

  /**
   * 十字键面板
   */
  public dpad: DPad

  /**
   * 功能键面板
   */
  public utils: Utils

  /**
   * 键盘面板
   */
  public keyboard: Keyboard
  public deprecates: Array<() => void> = []

  constructor (container: HTMLDivElement) {
    this.emitter = new EventEmitter()

    this.element = document.createElement('div')
    this.element.className = 'touchpad'

    container.appendChild(this.element)
  }

  /**
   * 为游戏注册控制器
   * @param {Typings.GameInfo} game 游戏信息
   */
  public register (game: Typings.GameInfo): void {
    const { joystick, dpad, keypad, keyboad } = game.play || {}

    if (joystick) {
      const handleActions = (data): void => {
        let event = { type: 'joystick', data }
        this.emitter.emit('actions', event)
      }

      this.joystick = new Joystick(this.element)
      this.joystick.onActions(handleActions)
    }

    if (dpad) {
      const handleActions = (data): void => {
        let event = { type: 'dpad', data }
        this.emitter.emit('actions', event)
      }

      this.dpad = new DPad(this.element)
      this.dpad.onActions(handleActions)
    }

    if (Array.isArray(keypad) && keypad.length > 0) {
      this.keypad = new Keypad(this.element)

      keypad.forEach((item) => {
        const button: Button = this.keypad.add(item.context, item.options)
        const deprecated = this.mapKeyCodeToButton(item.keyCode, button)
        this.deprecates.push(deprecated)
      })
    }

    if (keyboad === true) {
      const handleToogle = (isOpen: boolean): void => {
        this.joystick && this.joystick.toggle(!isOpen)
        this.dpad && this.dpad.toggle(!isOpen)
        this.keypad && this.keypad.toggle(!isOpen)
        this.utils && this.utils.toggle(!isOpen)
      }

      const handleActions = (data): void => {
        let event = { type: 'keyboard', data }
        this.emitter.emit('actions', event)
      }

      this.keyboard = new Keyboard(this.element)
      this.keyboard.onToggle(handleToogle)
      this.keyboard.onActions(handleActions)
    }

    this.utils = new Utils(this.element)
  }

  /**
   * 为按钮绑定按键
   * @param {Button} button 按钮
   * @param {number} keyCode 键值
   * @returns {Function} 注销绑定方法
   */
  public mapKeyCodeToButton (keyCode: number, button: Button): () => void {
    let handleTouchDown = () => {
      const data = { type: 'down', keyCode }
      const event = { type: 'button', data }
      this.emitter.emit('actions', event)
    }

    let handleTouchUp = () => {
      const data = { type: 'up', keyCode }
      const event = { type: 'button', data }
      this.emitter.emit('actions', event)
    }

    button.bindEvent(TouchEvent.start, handleTouchDown)
    button.bindEvent(TouchEvent.end, handleTouchUp)

    return function deprecated () {
      button.unbindEvent(TouchEvent.start, handleTouchDown)
      button.unbindEvent(TouchEvent.start, handleTouchUp)

      handleTouchDown = undefined
      handleTouchUp = undefined
    }
  }

  /**
   * 监听动作事件
   * @param {Function} handle 回调
   */
  public onActions (handle: (event: any) => void): void {
    this.emitter.addListener('actions', handle)
  }

  /**
   * 重制
   */
  public reset (): void {
    this.emitter.removeAllListeners()

    this.deprecates.forEach((fn) => fn)
    this.deprecates.splice(0)

    this.joystick && this.joystick.destroy()
    this.dpad && this.dpad.destroy()
    this.keypad && this.keypad.destroy()
    this.keyboard && this.keyboard.destroy()
    this.utils && this.utils.destroy()
  }

  /**
   * 注销控制器
   */
  public destroy (): void {
    this.reset()

    this.emitter = undefined
    this.deprecates = undefined
    this.joystick = undefined
    this.dpad = undefined
    this.keypad = undefined
    this.keyboard = undefined
    this.utils = undefined

    this.destroy = Function.prototype as any
  }
}
