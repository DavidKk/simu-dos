import remove from 'lodash/remove'
import Button from './Button'
import * as Typings from '../typings'

export default class Keypad {
  private zone: HTMLDivElement
  private buttons: Array<Button>

  constructor (zone: HTMLDivElement) {
    this.zone = zone
    this.buttons = []
  }

  public add (context: string, options?: Typings.DGButtonOptions): Button {
    let button = new Button(context, options)
    button.append(this.zone)
    this.buttons.push(button)
    return button
  }

  public remove (button: Button): void {
    remove(this.buttons, (item) => item === button)
  }

  public destroy (): void {
    this.buttons.forEach((button: Button) => button.remove())
    this.buttons.splice(0)

    this.buttons = undefined
    this.zone = undefined
  }
}
