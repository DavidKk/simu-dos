import { EventEmitter } from 'events'
import { Game, EventHandle } from '../types'
import Joystick, { DirectionType } from './Joystick'
import Keyboard, { Button } from './Keyboard'
import TouchEvents from '../share/event'

export enum ActionTypes {
  JOYSTICK = 'joystick',
  KEYDOWN = 'keydown'
}

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
      this.joystick.onActions((data) => {
        let datas = { type: ActionTypes.JOYSTICK, data }
        this.emitter.emit('actions', datas)
      })
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
    let handleTouchStart: EventHandle = () => {
      this.emitter.emit('actions', { type: 'keydown', keyCode })
    }

    button.bind(TouchEvents.start, handleTouchStart)

    return function deprecated () {
      button.unbind(TouchEvents.start, handleTouchStart)
      handleTouchStart = undefined
    }
  }

  public onActions (handle: (event: any) => void): void {
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
