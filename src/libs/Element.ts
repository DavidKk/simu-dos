import uniq from 'lodash/uniq'
import remove from 'lodash/remove'
import includes from 'lodash/includes'
import { classnames } from '../share/style'
import * as Typings from '../typings'

/**
 * 元素基类
 */
export default class Element {
  /**
   * 事件销毁函数集合
   */
  private deprecatedListeners: Array<[() => void, string[], Typings.EventHandle]>

  /**
   * HTML 元素
   */
  public element: HTMLElement

  /**
   * TAG 类型
   */
  public get tagName (): string {
    return this.element.tagName.toLocaleLowerCase()
  }

  /**
   * 样式
   */
  public get style (): CSSStyleDeclaration {
    return this.element.style
  }

  /**
   * 宽度
   */
  public get width (): number {
    return this.element.clientWidth
  }

  /**
   * 高度
   */
  public get height (): number {
    return this.element.clientHeight
  }

  /**
   * 滚动高度
   */
  public get scrollWidth (): number {
    return this.element.scrollWidth
  }

  /**
   * 滚动高度
   */
  public get scrollHeight (): number {
    return this.element.scrollHeight
  }

  /**
   * 是否为显示状态
   */
  public get isOpen (): boolean {
    return this.hasClass('hidden') === false
  }

  /**
   * 内滚动到指定位置
   * @param {{left?: number, top?: number}} position 位置
   */
  public scrollTo (position: { left?: number, top?: number }) {
    if (Object.prototype.hasOwnProperty.call(position, 'top') && typeof position.top === 'number' && !isNaN(position.top)) {
      this.element.scrollTop = position.top
    }

    if (Object.prototype.hasOwnProperty.call(position, 'left') && typeof position.left === 'number' && !isNaN(position.left)) {
      this.element.scrollLeft = position.left
    }
  }

  constructor (element: HTMLElement)
  constructor (classes?: Typings.ElementClassNames, children?: Element[] | HTMLElement[] | Text[] | string[], tag?: string)
  constructor () {
    const args = Array.prototype.slice.call(arguments)
    const [element] = args

    this.deprecatedListeners = []
    this.element = element instanceof HTMLElement ? element : this.create(...args)
  }

  /**
   * 创建元素
   * @param {string|string[]|Object}} classes 样式类名称
   * @param {Element[]|HTMLElement[]|Text[]|string[]} children 子对象
   * @param {string} tag 标签
   * @returns {HTMLElement}
   */
  private create (classes: Typings.ElementClassNames = '', children: Element[] | HTMLElement[] | Text[] | string[] = [], tag: string = 'div'): HTMLElement {
    const element = document.createElement(tag)
    element.classList.add(...classnames(classes))

    if (Array.isArray(children) && children.length > 0) {
      children.forEach((node) => this.append(node, element))
    }

    return element
  }

  /**
   * 添加样式名称
   * @param {string|string[]|Object}} classes 样式类名称
   */
  public addClass (classes: Typings.ElementClassNames): void {
    classes = [].concat(Array.from(this.element.classList), classnames(classes))
    this.element.className = uniq(classes).join(' ')
  }

  /**
   * 删除样式名称
   * @param {string|string[]|Object}} classes 样式类名称
   */
  public removeClass (classes: Typings.ElementClassNames): void {
    const originClasses = Array.from(this.element.classList)
    const removeClasses = classnames(classes)

    classes = originClasses.filter((item) => !includes(removeClasses, item))
    this.element.className = classes.join(' ')
  }

  /**
   * 判断是否存在样式名称
   * @param {string|string[]|Object}} classes 样式类名称
   * @returns {boolean}
   */
  public hasClass (className: string): boolean {
    return this.element.classList.contains(className)
  }

  /**
   * 设置属性
   * @param {string} key 属性名称
   * @param {string} value 属性值
   */
  public setAttr (key: string, value: string): void {
    this.element.setAttribute(key, value)
  }

  /**
   * 获取属性值
   * @param {string} key 属性名称
   * @returns {string}
   */
  public getAttr (key: string): string {
    return this.element.getAttribute(key)
  }

  /**
   * 设置内容
   * @param {string} context 内容
   */
  public setContext (context: string): void {
    this.element.innerText = context
  }

  /**
   * 获取内容
   * @returns {string}
   */
  public getContext (): string {
    return this.element.innerText
  }

  /**
   * 再末尾插入内容
   * @param {string} context 内容
   */
  public appendContext (context: string): void {
    this.element.innerText += context
  }

  /**
   * 显示
   */
  public show (): void {
    this.removeClass('hidden')
  }

  /**
   * 隐藏
   */
  public hide (): void {
    this.addClass('hidden')
  }

  /**
   * 显示/隐藏开关
   */
  public toggle (isOpen: boolean = !this.isOpen): void {
    return isOpen ? this.show() : this.hide()
  }

  /**
   * 淡入
   */
  public fadeIn (): void {
    this.removeClass(['hidden', 'out'])
    this.addClass(['fade', 'in'])
  }

  /**
   * 淡出
   */
  public fadeOut (): void {
    this.removeClass(['in'])
    this.addClass(['hidden', 'fade', 'out'])
  }

  /**
   * 事件绑定
   * @param {string|stirng[]} events 事件(可为集合)
   * @param {Typings.EventHandle} handle 回调
   */
  public bind (events: string | string[], handle: Typings.EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(event, handle))
      return
    }

    this.element.addEventListener(events, handle, false)
  }

  /**
   * 解除事件绑定
   * @param {string|stirng[]} events 事件(可为集合)
   * @param {Typings.EventHandle} handle 回调
   */
  public unbind (events: string | string[], handle: Typings.EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.unbind(event, handle))
      return
    }

    this.element.removeEventListener(events, handle)
  }

  /**
   * 绑定事件
   * @param {string|stirng[]} events 事件(可为集合)
   * @param {Typings.EventHandle} handle 回调
   * @description
   * 与 bind 主要区别在于它返回一个销毁函数,
   * 同时保存一份销毁清单, 在元素注销的时候统一销毁
   */
  public addListener (events: string | string[], handle: Typings.EventHandle): () => void {
    if (!Array.isArray(events)) {
      events = [events]
    }

    this.bind(events, handle)

    const deprecatedEvents = [].concat(events)
    const deprecate = (): void => {
      deprecatedEvents.forEach((event) => this.unbind(event, handle))
      remove(this.deprecatedListeners, ([_deprecate, _events, deprecatedHandle]) => deprecate === deprecatedHandle)
    }

    this.deprecatedListeners.push([deprecate, deprecatedEvents, handle])
    return deprecate
  }

  /**
   * 销毁事件绑定
   * @param {string|stirng[]} events 事件(可为集合)
   * @param {Typings.EventHandle} handle 回调
   * @description
   * 与 unbind 主要区别在于它能销毁 addListener 注册的销毁清单上对应的函数
   */
  public removeListener (events: string | string[], handle?: Typings.EventHandle): void {
    const isRemoveAll = arguments.length === 1
    if (!Array.isArray(events)) {
      events = [events]
    }

    remove(this.deprecatedListeners, ([_deprecate, deprecatedEvents, deprecatedHandle]) => {
      if (isRemoveAll === true || handle === deprecatedHandle) {
        remove(deprecatedEvents, (event) => events.includes(event))
        this.unbind(events, deprecatedHandle)
      }

      return deprecatedEvents.length === 0
    })
  }

  /**
   * 清除所有绑定的事件
   */
  public removeAllListeners (): void {
    const listeners = this.deprecatedListeners.splice(0)
    listeners.forEach(([deprecate]) => deprecate())
  }

  /**
   * 插入元素
   * @param {Element|HTMLElement|Text|string} 元素
   * @param {HTMLElement} element 指定的元素, 默认为自身 element
   */
  public append (node: Element | HTMLElement | Text | string, element: HTMLElement = this.element): void {
    if (typeof node === 'string') {
      const text = document.createTextNode(node)
      return this.append(text, element)
    }

    if (node instanceof Element) {
      return this.append(node.element, element)
    }

    element.appendChild(node)
  }

  /**
   * 插入到指定位置
   * @param {Element|HTMLElement} 元素
   */
  public appendTo (node: Element | HTMLElement): void {
    if (node instanceof Element) {
      return this.appendTo(node.element)
    }

    node.appendChild(this.element)
  }

  /**
   * 删除子元素
   * @param {Element|HTMLElement} 元素
   */
  public removeChild (node: Element | HTMLElement): void {
    if (node instanceof Element) {
      return this.removeChild(node.element)
    }

    this.element.removeChild(node)
  }

  /**
   * 删除自身
   */
  public remove (): void {
    this.element.parentElement.removeChild(this.element)
  }

  /**
   * 销毁
   */
  public destroy (): void {
    this.removeAllListeners()
    this.remove()

    this.deprecatedListeners = undefined
    this.element = undefined

    this.destroy = Function.prototype as any
  }
}
