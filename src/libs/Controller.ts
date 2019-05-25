import { EventEmitter } from 'events'
import Button from '../ui/Button'
import Keyboard from '../ui/Keyboard'
import Joystick from '../ui/Joystick'
import DPad from '../ui/DPad'
import TouchEvent from '../conf/touch-event'
import * as Typings from '../typings'

export default class Controller {
  private emitter: EventEmitter = new EventEmitter()
  private touchpad: HTMLDivElement
  private keyboard: Keyboard
  private joystick: Joystick
  private dpad: DPad
  private deprecates: Array<() => void> = []

  constructor (element: HTMLDivElement) {
    this.touchpad = document.createElement('div')
    this.touchpad.className = 'touchpad'
    element.appendChild(this.touchpad)
  }

  public mapGame (game: Typings.DGGameInfo): void {
    if (game.play.joystick) {
      const handleActions = (data) => {
        let event = { type: 'joystick', data }
        this.emitter.emit('actions', event)
      }

      this.joystick = new Joystick(this.touchpad)
      this.joystick.onActions(handleActions)
    }

    if (game.play.dpad) {
      const handleActions = (data) => {
        let event = { type: 'dpad', data }
        this.emitter.emit('actions', event)
      }

      this.dpad = new DPad(this.touchpad)
      this.dpad.onActions(handleActions)
    }

    if (Array.isArray(game.play.keyboard) && game.play.keyboard.length > 0) {
      this.keyboard = new Keyboard(this.touchpad)

      game.play.keyboard.forEach((item) => {
        const button: Button = this.keyboard.add(item.context, item.options)
        const deprecated = this.mapButtonToKeyCode(button, item.keyCode)
        this.deprecates.push(deprecated)
      })
    }
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
    this.emitter.addListener('actions', handle)
  }

  public reset (): void {
    this.emitter.removeAllListeners()

    this.deprecates.forEach((fn) => fn)
    this.deprecates.splice(0)

    this.joystick && this.joystick.destroy()
    this.keyboard && this.keyboard.destroy()
  }
}
