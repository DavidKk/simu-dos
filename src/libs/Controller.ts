import { EventEmitter } from 'events'
import Element from './Element'
import Component from './Component'
import Button from '../ui/Button'
import Keypad from '../ui/Keypad'
import Joystick from '../ui/Joystick'
import DPad from '../ui/DPad'
import Keyboard from '../ui/Keyboard'
import TouchEvent from '../conf/touch-event'
import * as Typings from '../typings'

/**
 * 控制器
 * @description
 * 主要用于管理各种UI交互,
 * 作为连接UI与模拟器之间的桥梁
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
  public element: Element

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
   * 键盘面板
   */
  public keyboard: Keyboard

  /**
   * 事件销毁集合
   */
  public deprecates: Array<() => void> = []

  constructor () {
    this.emitter = new EventEmitter()
    this.element = new Element(['touchpad'])
  }

  /**
   * 插入
   * @param {Component|Element|HTMLElement} element 目标
   */
  public appendTo (element: Component | Element | HTMLElement): void {
    this.element.appendTo(element instanceof Component ? element.element : element)
  }

  /**
   * 为游戏注册控制器
   * @param {Typings.GameInformation} game 游戏信息
   */
  public register (game: Typings.GameInformation): void {
    const { joystick, dpad, keypad, keyboad } = game.play || {} as Typings.GameInformationPlay

    if (joystick) {
      const handleActions = (data): void => {
        let event = { type: 'joystick', data }
        this.emitter.emit('actions', event)
      }

      this.joystick = new Joystick()
      this.joystick.onActions(handleActions)
      this.joystick.appendTo(this.element)
    }

    if (dpad) {
      const handleActions = (data): void => {
        let event = { type: 'dpad', data }
        this.emitter.emit('actions', event)
      }

      this.dpad = new DPad()
      this.dpad.onActions(handleActions)
      this.dpad.appendTo(this.element)
    }

    if (Array.isArray(keypad) && keypad.length > 0) {
      this.keypad = new Keypad()

      keypad.forEach((item) => {
        const button: Button = this.keypad.add(item.context, item.options)
        const deprecated = this.mapKeyCodeToButton(item.keyCode, button)
        this.deprecates.push(deprecated)
      })

      this.keypad.appendTo(this.element)
    }

    if (keyboad === true) {
      const handleSwitch = (isOpen: boolean): void => {
        this.joystick && this.joystick.toggle(!isOpen)
        this.dpad && this.dpad.toggle(!isOpen)
        this.keypad && this.keypad.toggle(!isOpen)
      }

      const handleActions = (data): void => {
        let event = { type: 'keyboard', data }
        this.emitter.emit('actions', event)
      }

      this.keyboard = new Keyboard()
      this.keyboard.onSwitch(handleSwitch)
      this.keyboard.onActions(handleActions)
      this.keyboard.appendTo(this.element)
    }
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

    button.bind(TouchEvent.start, handleTouchDown)
    button.bind(TouchEvent.end, handleTouchUp)

    return function deprecated () {
      button.unbind(TouchEvent.start, handleTouchDown)
      button.unbind(TouchEvent.start, handleTouchUp)

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

    this.destroy = Function.prototype as any
  }
}
