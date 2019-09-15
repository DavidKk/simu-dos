import uniq from 'lodash/uniq'
import remove from 'lodash/remove'
import includes from 'lodash/includes'
import * as Typings from '../typings'

export default class Element {
  private deprecatedListeners: Array<[() => void, string[], Typings.EventHandle]>
  public element: HTMLElement

  public get tagName (): string {
    return this.element.tagName.toLocaleLowerCase()
  }

  public get style (): CSSStyleDeclaration {
    return this.element.style
  }

  public get width (): number {
    return this.element.clientWidth
  }

  public get height (): number {
    return this.element.clientHeight
  }

  public get scrollWidth (): number {
    return this.element.scrollWidth
  }

  public get scrollHeight (): number {
    return this.element.scrollHeight
  }

  public get isOpen (): boolean {
    return this.hasClass('hidden') === false
  }

  public scrollTo (options: { left?: number, top?: number }) {
    if (Object.prototype.hasOwnProperty.call(options, 'top') && typeof options.top === 'number' && !isNaN(options.top)) {
      this.element.scrollTop = options.top
    }

    if (Object.prototype.hasOwnProperty.call(options, 'left') && typeof options.left === 'number' && !isNaN(options.left)) {
      this.element.scrollLeft = options.left
    }
  }

  constructor (element: HTMLElement)
  constructor (classes?: string | string[] | { [key: string]: boolean }, children?: Element[] | HTMLElement[] | Text[] | string[], tag?: string)
  constructor () {
    const args = Array.prototype.slice.call(arguments)
    const [element] = args

    this.deprecatedListeners = []
    this.element = element instanceof HTMLElement ? element : this.create(...args)
  }

  private create (classes: string | string[] | { [key: string]: boolean } = '', children: Element[] | HTMLElement[] | Text[] | string[] = [], tag: string = 'div') {
    const element = document.createElement(tag)
    element.classList.add(...this.classes(classes))

    if (Array.isArray(children) && children.length > 0) {
      children.forEach((node) => this.append(node, element))
    }

    return element
  }

  private classes (classes: string | string[] | { [key: string]: boolean }): string[] {
    if (Array.isArray(classes)) {
      return uniq(classes)
    }

    if (typeof classes === 'object') {
      if (classes === null) {
        return []
      }

      classes = Object.keys(classes).filter(name => classes[name] === true)
      return this.classes(classes)
    }

    classes = classes.split(' ')
    return this.classes(classes)
  }

  public addClass (classes: string | string[] | { [key: string]: boolean }): void {
    classes = [].concat(Array.from(this.element.classList), this.classes(classes))
    this.element.className = uniq(classes).join(' ')
  }

  public removeClass (classes: string | string[] | { [key: string]: boolean }): void {
    const originClasses = Array.from(this.element.classList)
    const removeClasses = this.classes(classes)

    classes = originClasses.filter((item) => !includes(removeClasses, item))
    this.element.className = classes.join(' ')
  }

  public hasClass (className: string): boolean {
    return this.element.classList.contains(className)
  }

  public setAttr (key: string, value: string): void {
    this.element.setAttribute(key, value)
  }

  public getAttr (key: string): string {
    return this.element.getAttribute(key)
  }

  public setContext (context: string): void {
    this.element.innerText = context
  }

  public getContext (): string {
    return this.element.innerText
  }

  public appendContext (context: string): void {
    this.element.innerText += context
  }

  public show (): void {
    this.removeClass('hidden')
  }

  public hide (): void {
    this.addClass('hidden')
  }

  public toggle (isOpen: boolean = !this.isOpen): void {
    return isOpen ? this.show() : this.hide()
  }

  public fadeIn (): void {
    this.removeClass(['hidden', 'out'])
    this.addClass(['fade', 'in'])
  }

  public fadeOut (): void {
    this.removeClass(['in'])
    this.addClass(['hidden', 'fade', 'out'])
  }

  public bind (events: string | Array<string>, handle: Typings.EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(event, handle))
      return
    }

    this.element.addEventListener(events, handle, false)
  }

  public unbind (events: string | Array<string>, handle: Typings.EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.unbind(event, handle))
      return
    }

    this.element.removeEventListener(events, handle)
  }

  public addListener (events: string | Array<string>, handle: Typings.EventHandle): () => void {
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

  public removeListener (events: string | Array<string>, handle?: Typings.EventHandle): void {
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

  public removeAllListeners (): void {
    const listeners = this.deprecatedListeners.splice(0)
    listeners.forEach(([deprecate]) => deprecate())
  }

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

  public appendTo (node: Element | HTMLElement): void {
    if (node instanceof Element) {
      return this.appendTo(node.element)
    }

    node.appendChild(this.element)
  }

  public removeChild (node: Element | HTMLElement): void {
    if (node instanceof Element) {
      return this.removeChild(node.element)
    }

    this.element.removeChild(node)
  }

  public remove (): void {
    this.element.parentElement.removeChild(this.element)
  }

  public destroy (): void {
    this.removeAllListeners()
    this.remove()

    this.deprecatedListeners = undefined
    this.element = undefined

    this.destroy = Function.prototype as any
  }
}
