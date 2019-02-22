import { EventEmitter } from 'events'
import { Game, EventHandle } from '../types'
import Joystick from './Joystick'
import Keyboard, { Button } from './Keyboard'
import TouchEvents from '../share/event'

export default class Controller {
  private emitter: EventEmitter = new EventEmitter()
  private touchpad: HTMLDivElement
  private joystick: Joystick
  private keyboard: Keyboard
  private deprecates: Array<() => void> = []

  constructor (element: HTMLDivElement) {
    this.touchpad = document.createElement('div')
    this.touchpad.className = 'touchpad'
    element.appendChild(this.touchpad)
  }

  public mapGame (game: Game): void {
    if (game.JOYSTICK) {
      this.joystick = new Joystick(this.touchpad)
      this.joystick.onActions((data) => this.emitter.emit('actions', { type: 'joystick', data }))
    }

    if (Array.isArray(game.KEYBOARDS)) {
      this.keyboard = new Keyboard(this.touchpad)

      game.KEYBOARDS.forEach((item) => {
        let button: Button = this.keyboard.add(item.context, item.options)
        let deprecated = this.mapButtonToKeyCode(button, item.keycode)
        this.deprecates.push(deprecated)
      })
    }
  }

  public mapButtonToKeyCode (button: Button, keyCode: number): () => void {
    let tid
    let handleTouchStart: EventHandle = () => {
      let trigger = () => this.emitter.emit('actions', { type: 'keydown', keyCode })
      tid = setInterval(trigger, 0.2e3)
      button.bind(TouchEvents.end, handleTouchEnd)
    }

    let handleTouchEnd: EventHandle = () => {
      tid && clearInterval(tid)
      button.unbind(TouchEvents.end, handleTouchEnd)
      tid = undefined
    }

    button.bind(TouchEvents.start, handleTouchStart)

    return function deprecated () {
      button.unbind(TouchEvents.start, handleTouchStart)
      button.unbind(TouchEvents.end, handleTouchEnd)

      handleTouchStart = undefined
      handleTouchEnd = undefined
    }
  }

  public onActions (handle: () => void): void {
    this.emitter.addListener('actions', handle)
  }

  public destory (): void {
    this.emitter.removeAllListeners()

    this.deprecates.forEach((fn) => fn)
    this.deprecates.splice(0)

    this.joystick && this.joystick.destory()
    this.keyboard && this.keyboard.destroy()

    this.touchpad.parentNode.removeChild(this.touchpad)

    this.emitter = undefined
    this.deprecates = undefined
    this.joystick = undefined
    this.keyboard = undefined
    this.touchpad = undefined
  }
}
