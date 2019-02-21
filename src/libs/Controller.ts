import Joystick from './Joystick'

export default class Controller {
  private touchpad: HTMLDivElement = null
  private joystick: Joystick = null

  constructor (element: HTMLDivElement) {
    this.touchpad = document.createElement('div')
    this.touchpad.className = 'touchpad'
    element.appendChild(this.touchpad)

    this.joystick = new Joystick(this.touchpad)
  }
}
