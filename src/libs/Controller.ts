import { EventEmitter } from 'events'
import Button from '../ui/Button'
import Keypad from '../ui/Keypad'
import Joystick from '../ui/Joystick'
import DPad from '../ui/DPad'
import Keyboard from '../ui/Keyboard'
import Utils from '../ui/Utils'
import TouchEvent from '../conf/touch-event'
import * as Typings from '../typings'

export default class Controller {
  private emitter: EventEmitter
  public touchpad: HTMLDivElement
  public keypad: Keypad
  public joystick: Joystick
  public dpad: DPad
  public utils: Utils
  public keyboard: Keyboard
  public deprecates: Array<() => void> = []

  constructor (element: HTMLDivElement) {
    this.emitter = new EventEmitter()
    this.touchpad = document.createElement('div')
    this.touchpad.className = 'touchpad'
    element.appendChild(this.touchpad)
  }

  public mapGame (game: Typings.GameInfo): void {
    const { joystick, dpad, keypad, keyboad } = game.play || {}

    if (joystick) {
      const handleActions = (data): void => {
        let event = { type: 'joystick', data }
        this.emitter.emit('actions', event)
      }

      this.joystick = new Joystick(this.touchpad)
      this.joystick.onActions(handleActions)
    }

    if (dpad) {
      const handleActions = (data): void => {
        let event = { type: 'dpad', data }
        this.emitter.emit('actions', event)
      }

      this.dpad = new DPad(this.touchpad)
      this.dpad.onActions(handleActions)
    }

    if (Array.isArray(keypad) && keypad.length > 0) {
      this.keypad = new Keypad(this.touchpad)

      keypad.forEach((item) => {
        const button: Button = this.keypad.add(item.context, item.options)
        const deprecated = this.mapButtonToKeyCode(button, item.keyCode)
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

      this.keyboard = new Keyboard(this.touchpad)
      this.keyboard.onToggle(handleToogle)
      this.keyboard.onActions(handleActions)
    }

    this.utils = new Utils(this.touchpad)
  }

  public mapButtonToKeyCode (button: Button, keyCode: number): () => void {
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

  public onActions (handle: (event: any) => void): void {
    this.emitter.addListener('actions', handle)
  }

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
