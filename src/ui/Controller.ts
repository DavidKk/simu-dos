import { EventEmitter } from 'events'
import Button from './Button'
import Keyboard from './Keyboard'
import Joystick from './Joystick'
import TouchEvent from '../conf/touch-event'
import {
  DGGameInfo,
  DGControllerActionType, DGController
} from '../types'

export default class Controller implements DGController {
  private emitter: EventEmitter = new EventEmitter()
  private touchpad: HTMLDivElement
  private keyboard: Keyboard
  private joystick: Joystick
  private deprecates: Array<() => void> = []

  constructor (element: HTMLDivElement) {
    this.touchpad = document.createElement('div')
    this.touchpad.className = 'touchpad'
    element.appendChild(this.touchpad)
  }

  public mapGame (game: DGGameInfo): void {
    if (game.play.joystick) {
      const handleActions = (data) => {
        let datas = { type: DGControllerActionType.joystick, data }
        this.emitter.emit('actions', datas)
      }

      this.joystick = new Joystick(this.touchpad)
      this.joystick.onActions(handleActions)
    }

    if (Array.isArray(game.play.keyboard) && game.play.keyboard.length > 0) {
      this.keyboard = new Keyboard(this.touchpad)

      game.play.keyboard.forEach((item) => {
        let button: Button = this.keyboard.add(item.context, item.options)
        let deprecated = this.mapButtonToKeyCode(button, item.keyCode)
        this.deprecates.push(deprecated)
      })
    }
  }

  public mapButtonToKeyCode (button: Button, keyCode: number): () => void {
    let handleTouchStart = () => {
      this.emitter.emit('actions', { type: 'keydown', keyCode })
    }

    button.bind(TouchEvent.start, handleTouchStart)

    return function deprecated () {
      button.unbind(TouchEvent.start, handleTouchStart)
      handleTouchStart = undefined
    }
  }

  public onActions (handle: (event: any) => void): void {
    this.emitter.addListener('actions', handle)
  }

  public reset (): void {
    this.emitter.removeAllListeners()

    this.deprecates.forEach((fn) => fn)
    this.deprecates.splice(0)

    this.joystick && this.joystick.destory()
    this.keyboard && this.keyboard.destroy()
  }
}
