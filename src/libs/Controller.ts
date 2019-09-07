import { EventEmitter } from 'events'
import Button from '../ui/Button'
import Keypad from '../ui/Keypad'
import Joystick from '../ui/Joystick'
import DPad from '../ui/DPad'
import Keyboard from '../ui/Keyboard'
import TouchEvent from '../conf/touch-event'
import * as Typings from '../typings'

export default class Controller extends EventEmitter {
  private touchpad: HTMLDivElement
  private keypad: Keypad
  private joystick: Joystick
  private dpad: DPad
  private keyboard: Keyboard
  private deprecates: Array<() => void> = []

  constructor (element: HTMLDivElement) {
    super()

    this.touchpad = document.createElement('div')
    this.touchpad.className = 'touchpad'
    element.appendChild(this.touchpad)
  }

  public mapGame (game: Typings.DGGameInfo): void {
    if (game.play.joystick) {
      const handleActions = (data): void => {
        let event = { type: 'joystick', data }
        this.emit('actions', event)
      }

      this.joystick = new Joystick(this.touchpad)
      this.joystick.onActions(handleActions)
    }

    if (game.play.dpad) {
      const handleActions = (data): void => {
        let event = { type: 'dpad', data }
        this.emit('actions', event)
      }

      this.dpad = new DPad(this.touchpad)
      this.dpad.onActions(handleActions)
    }

    if (Array.isArray(game.play.keypad) && game.play.keypad.length > 0) {
      this.keypad = new Keypad(this.touchpad)

      game.play.keypad.forEach((item) => {
        const button: Button = this.keypad.add(item.context, item.options)
        const deprecated = this.mapButtonToKeyCode(button, item.keyCode)
        this.deprecates.push(deprecated)
      })
    }

    if (game.play.keyboad === true) {
      const handleToogle = (isOpen: boolean): void => {
        this.joystick.toggle(!isOpen)
        this.dpad.toggle(!isOpen)
        this.keypad.toggle(!isOpen)
      }

      const handleActions = (data): void => {
        let event = { type: 'keyboard', data }
        this.emit('actions', event)
      }

      this.keyboard = new Keyboard(this.touchpad)
      this.keyboard.onToggle(handleToogle)
      this.keyboard.onActions(handleActions)
    }
  }

  public mapButtonToKeyCode (button: Button, keyCode: number): () => void {
    let handleTouchDown = () => {
      const data = { type: 'down', keyCode }
      const event = { type: 'button', data }
      this.emit('actions', event)
    }

    let handleTouchUp = () => {
      const data = { type: 'up', keyCode }
      const event = { type: 'button', data }
      this.emit('actions', event)
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

  public onActions (handle: (event: any) => void): void {
    this.addListener('actions', handle)
  }

  public reset (): void {
    this.removeAllListeners()

    this.deprecates.forEach((fn) => fn)
    this.deprecates.splice(0)

    this.joystick && this.joystick.destroy()
    this.dpad && this.dpad.destroy()
    this.keypad && this.keypad.destroy()
  }
}
