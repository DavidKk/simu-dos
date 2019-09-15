import { EventEmitter } from 'events'
import Element from '../libs/Element'

export default class Component extends EventEmitter {
  public element: Element

  public appendTo (node: Component | Element | HTMLElement): void {
    if (node instanceof Component) {
      return this.appendTo(node.element)
    }

    return this.element.appendTo(node)
  }

  public toggle (isOpen: boolean = !this.element.isOpen): void {
    this.element.toggle(isOpen)
    this.emit('toggle', isOpen)
  }

  public destroy (): void {
    this.removeAllListeners()
  }
}
