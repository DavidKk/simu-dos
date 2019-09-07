import { EventEmitter } from 'events'

export default class Component extends EventEmitter {
  public el: HTMLElement
  public isOpen: boolean

  public toggle (isOpen: boolean = !this.isOpen): void {
    this.isOpen = !!isOpen

    if (this.el) {
      this.isOpen ? this.el.classList.add('open') : this.el.classList.remove('open')
    }

    this.emit('toggle', isOpen)
  }

  public destroy (): void {
    this.removeAllListeners()
  }
}
