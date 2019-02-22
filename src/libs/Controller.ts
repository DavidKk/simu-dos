import Joystick from './Joystick'
import Keyboard from './Keyboard'

export default class Controller {
  private touchpad: HTMLDivElement = null
  private joystick: Joystick = null
  private keyboard: Keyboard = null

  constructor (element: HTMLDivElement) {
    this.touchpad = document.createElement('div')
    this.touchpad.className = 'touchpad'
    element.appendChild(this.touchpad)

    this.joystick = new Joystick(this.touchpad)
    this.keyboard = new Keyboard(this.touchpad)
  }
}
