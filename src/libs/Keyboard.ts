import { Pos } from '../types'

export default class Keyboard {
  private zone: HTMLDivElement = null
  private buttons: Array<HTMLDivElement> = []

  constructor (zone: HTMLDivElement) {
    this.zone = zone

    this.addButton('Space', { top: 0 })
  }

  public addButton (context: string, position: Pos) {
    const { top, right, bottom, left } = position
    const button = document.createElement('div')

    button.className = 'keyboard-btn'
    button.innerText = context
    button.style.top = typeof top === 'string' ? top : top + 'px'
    button.style.right = typeof right === 'string' ? right : right + 'px'
    button.style.bottom = typeof bottom === 'string' ? bottom : bottom + 'px'
    button.style.left = typeof left === 'string' ? left : left + 'px'

    this.zone.appendChild(button)
    this.buttons.push(button)
  }
}
