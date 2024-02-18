import type { Class } from 'utility-types'

import { eventify } from '@/libs/Eventify'
import jQuerify from '@/libs/JQuerify'
import SimEvent from '@/libs/SimEvent'
import { classnames } from '@/utils'
import type { ElementClassNames } from '@/types'

import { define } from './define'
import { ACTION_EVENT_TOKEN, COMMON_TAGNAME } from './constants'

export class Component extends jQuerify(eventify(HTMLElement)) {
  static classNames: string[]

  /** 是否显示 */
  protected visible = true

  /** 宽度 */
  public get width() {
    return this.clientWidth
  }

  /** 高度 */
  public get height() {
    return this.clientHeight
  }

  /** 是否显示 */
  public get isVisible() {
    return this.visible
  }

  private deprecatedBindings: (() => void) | void

  /**
   * called each time the element is added to the document.
   * The specification recommends that, as far as possible,
   * developers should implement custom element setup in this
   * callback rather than the constructor.
   */
  public connectedCallback() {
    const { classNames } = Object.getPrototypeOf(this).constructor
    Array.isArray(classNames) && classNames.forEach((classname) => {
      this.classList.add(classname)
    })

    this.deprecatedBindings = this.bindings()
  }

  /** called each time the element is removed from the document. */
  public disconnectedCallback() {
    if (typeof this.deprecatedBindings === 'function') {
      this.deprecatedBindings()
    }

    this.unbindings()
  }

  /** 绑定事件 */
  protected bindings(): (() => void) | void {
    // nothing todo...
  }

  /** 注销事件 */
  protected unbindings() {
    // nothing todo...
  }

  /** 通过组件类创建组件元素 */
  protected createElementByComponent<T extends Component>(Component: Class<T>, classNames?: ElementClassNames, options?: ElementCreationOptions) {
    if (!('createElement' in Component && typeof Component.createElement === 'function')) {
      return
    }

    const element: T = Component.createElement(options)
    typeof classNames !== 'undefined' && element.classList.add(...classnames(classNames))
    return element
  }

  /** 通过标签创建组件元素 */
  protected createCommonElement(tagName: string, classNames?: ElementClassNames, options?: ElementCreationOptions) {
    const element = document.createElement(COMMON_TAGNAME, options) as Component
    element.setAttr(tagName, '')
    classNames && element.classList.add(...classnames(classNames))
    return element
  }

  /** 创建组件元素 */
  protected createElement(Component: string, classNames?: ElementClassNames, options?: ElementCreationOptions): Component
  protected createElement<T extends Component>(Component: Class<T> | string, classNames?: ElementClassNames, options?: ElementCreationOptions): T
  protected createElement<T extends Component>(Component: Class<T> | string, classNames?: ElementClassNames, options?: ElementCreationOptions) {
    if (typeof Component === 'function') {
      return this.createElementByComponent(Component, classNames, options)
    }
    
    return this.createCommonElement(Component, classNames, options)
  }

  /** 在末尾插入组件元素 */
  public appendElement<T extends Component>(Component: Class<T> | string, classNames?: ElementClassNames, options?: ElementCreationOptions) {
    const element = this.createElement<T>(Component, classNames, options)
    this.append(element)
    return element
  }

  /** 在头部插入组件元素 */
  public prependElement<T extends Component>(Component: Class<T> | string, classNames?: ElementClassNames, options?: ElementCreationOptions) {
    const element = this.createElement<T>(Component, classNames, options)
    this.prepend(element)
    return element
  }
}

customElements.define(COMMON_TAGNAME, class extends Component {})
