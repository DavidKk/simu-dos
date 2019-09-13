import { EventEmitter } from 'events'
import * as Typings from '../typings'

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

  public bind (element: HTMLElement, events: string | Array<string>, handle: Typings.EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(element, event, handle))
      return
    }

    element.addEventListener(events, handle, false)
  }

  public unbind (element: HTMLElement, events: string | Array<string>, handle: Typings.EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.unbind(element, event, handle))
      return
    }

    element.removeEventListener(events, handle)
  }

  public destroy (): void {
    this.removeAllListeners()

    this.destroy = Function.prototype as any
  }
}
