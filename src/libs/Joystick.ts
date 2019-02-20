export default class Joystick {
  private stand: HTMLDivElement = null
  private stick: HTMLDivElement = null

  constructor (zone: HTMLDivElement) {
    this.stand = document.createElement('div')
    this.stick = document.createElement('div')

    this.stand.className = 'joystick-stand'
    this.stick.className = 'joystick-stick'

    this.stand.appendChild(this.stick)
    zone.appendChild(this.stand)
  }
}
