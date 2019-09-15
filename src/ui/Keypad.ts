import remove from 'lodash/remove'
import Element from '../libs/Element'
import Component from '../libs/Component'
import Button from './Button'
import * as Typings from '../typings'

export default class Keypad extends Component {
  public element: Element
  public buttons: Array<Button>

  constructor () {
    super()

    this.element = new Element(['keypad'])
    this.buttons = []
  }

  public add (context: string, options?: Typings.ButtonOptions): Button {
    const button = new Button(context, options)
    button.appendTo(this.element)

    this.buttons.push(button)
    return button
  }

  public remove (button: Button): void {
    remove(this.buttons, (item) => item === button)
  }

  public destroy (): void {
    super.destroy()

    this.element.destroy()
    this.buttons.splice(0).forEach((button: Button) => button.destroy())

    this.buttons = undefined
    this.element = undefined

    this.destroy = Function.prototype as any
  }
}
