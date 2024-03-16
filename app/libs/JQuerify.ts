import type { Class } from 'utility-types'
import type { ElementClassNames } from '@/types'
import { classnames } from '@/utils'

export default function jQuerify<T extends Class<HTMLElement>>(Target: T) {
  return class JQuerify extends Target {
    /** 标签名称 */
    static TAG_NAME: string

    /** 创建节点 */
    static createElement<T>(this: T & { TAG_NAME: string }, options?: ElementCreationOptions): T extends Class<any> ? InstanceType<T> : null {
      const { TAG_NAME } = this
      return document.createElement(TAG_NAME, options) as any
    }

    /** 是否显示 */
    protected visible = true

    /** 是否显示 */
    public get isVisible() {
      return this.visible
    }

    /** 宽度 */
    public get width() {
      return this.clientWidth
    }

    /** 高度 */
    public get height() {
      return this.clientHeight
    }

    /** 设置属性 */
    public setAttr(key: string, value: string) {
      this.setAttribute(key, value)
    }

    /** 获取属性值 */
    public getAttr(key: string) {
      return this.getAttribute(key)
    }

    /** 设置多个属性 */
    public setAttrs(attrs: Record<string, string>) {
      for (const [value, name] of Object.entries(attrs)) {
        this.setAttr(name, value)
      }
    }

    /** 获取多个属性值 */
    public getAttrs(keys: string[]) {
      return Object.fromEntries(
        (function* (self) {
          for (const key of keys) {
            yield [key, self.getAttr(key)]
          }
        })(this)
      )
    }

    /** 设置内容 */
    public setContent(content: string) {
      this.innerText = content
    }

    /** 获取内容 */
    public getContent() {
      return this.innerText
    }

    /** 在末尾插入内容 */
    public appendContentText(content: string) {
      this.innerText += content
    }

    /** 在头部插入内容 */
    public preppendContentText(content: string) {
      this.innerText = content + this.innerText
    }

    /** 添加样式名称 */
    public addClass(classes: ElementClassNames) {
      this.classList.add(...classnames(classes))
    }

    /** 删除样式名称 */
    public removeClass(classes: ElementClassNames) {
      this.classList.remove(...classnames(classes))
    }

    /** 显示 */
    public show() {
      this.visible = true
      this.removeClass('hidden')
    }

    /** 隐藏 */
    public hide() {
      this.visible = false
      this.addClass('hidden')
    }

    /** 显示/隐藏开关 */
    public toggle(visible = !this.visible) {
      return visible ? this.show() : this.hide()
    }

    /** 淡入 */
    public fadeIn() {
      this.removeClass(['hidden', 'out'])
      this.addClass(['fade', 'in'])
    }

    /** 淡出 */
    public fadeOut() {
      this.removeClass(['in'])
      this.addClass(['hidden', 'fade', 'out'])
    }
  }
}
