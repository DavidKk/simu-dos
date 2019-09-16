import { EventEmitter } from 'events'
import Element from '../libs/Element'

/**
 * 组件基类
 */
export default class Component extends EventEmitter {
  /**
   * 元素
   */
  public element: Element

  /**
   * 插入
   * @param {Component|Element|HTMLElement} element 目标
   */
  public appendTo (node: Component | Element | HTMLElement): void {
    if (node instanceof Component) {
      return this.appendTo(node.element)
    }

    return this.element.appendTo(node)
  }

  /**
   * 显示与隐藏
   * @param {boolean} isOpen 是否显示
   */
  public toggle (isOpen: boolean = !this.element.isOpen): void {
    this.element.toggle(isOpen)
    this.emit('toggle', isOpen)
  }

  /**
   * 销毁
   */
  public destroy (): void {
    this.removeAllListeners()
  }
}
