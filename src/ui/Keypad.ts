import remove from 'lodash/remove'
import Button from './Button'
import Component from './Component'
import * as Typings from '../typings'

export default class Keypad extends Component {
  public zone: HTMLDivElement
  public container: HTMLDivElement
  public buttons: Array<Button>

  constructor (zone: HTMLDivElement) {
    super()

    this.zone = zone
    this.container = this.el = document.createElement('div')
    this.buttons = []

    this.container.classList.add('keypad', 'open')
    this.zone.appendChild(this.container)
  }

  public add (context: string, options?: Typings.DGButtonOptions): Button {
    let button = new Button(context, options)
    button.append(this.container)

    this.buttons.push(button)
    return button
  }

  public remove (button: Button): void {
    remove(this.buttons, (item) => item === button)
  }

  public destroy (): void {
    super.destroy()

    this.buttons.forEach((button: Button) => button.remove())
    this.buttons.splice(0)

    this.buttons = undefined
    this.zone = undefined

    this.destroy = Function.prototype as any
  }
}
