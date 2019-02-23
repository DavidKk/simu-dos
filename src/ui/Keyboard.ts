import remove from 'lodash/remove'
import Button from './Button'
import {
  DGButtonOptions,
  DGKeyboard
} from '../types'

export default class Keyboard implements DGKeyboard {
  private zone: HTMLDivElement = null
  private buttons: Array<Button> = []

  constructor (zone: HTMLDivElement) {
    this.zone = zone
  }

  public add (context: string, options?: DGButtonOptions): Button {
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
