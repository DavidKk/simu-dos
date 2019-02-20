import Joystick from './Joystick'

export default class Controller {
  private touchpad: HTMLDivElement = null
  private leftpad: HTMLDivElement = null
  private rightpad: HTMLDivElement = null
  private joystick: Joystick = null

  constructor (element: HTMLDivElement) {
    this.touchpad = document.createElement('div')
    this.leftpad = document.createElement('div')
    this.rightpad = document.createElement('div')

    this.touchpad.className = 'touchpad'
    this.leftpad.className = 'leftpad'
    this.rightpad.className = 'rightpad'

    this.touchpad.appendChild(this.leftpad)
    this.touchpad.appendChild(this.rightpad)
    element.appendChild(this.touchpad)

    this.joystick = new Joystick(this.leftpad)
  }
}
