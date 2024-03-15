import type { Class } from 'utility-types'
import { narrowType } from '@/utils'
import type { EventHandle } from '@/types'
import SimEvent from '@/libs/SimEvent'

export type EventType = string | string[] | Set<string>

export function eventify<T extends Class<EventTarget>>(Target: T = EventTarget as T) {
  return class EventifyTarget extends Target {
    protected emitter: EventTarget
    /** 事件销毁函数集合 */
    protected deprecatedListeners: [() => void, string[], EventHandle<any>][] = []

    constructor(...args: any[]) {
      super(...args)

      if (this.emitter instanceof EventTarget) {
        this.emitter = new EventTarget()
      }
    }

    /** 绑定事件 */
    public addEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
      if (typeof super.addEventListener === 'function') {
        return super.addEventListener(type, callback, options)
      }

      return this.emitter!.addEventListener(type, callback, options)
    }

    /** 解除事件绑定 */
    public removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: EventListenerOptions | boolean) {
      if (typeof super.removeEventListener === 'function') {
        return super.removeEventListener(type, callback, options)
      }

      return this.emitter!.removeEventListener(type, callback, options)
    }

    /** 触发事件 */
    public dispatchEvent(event: Event) {
      if (typeof super.dispatchEvent === 'function') {
        return super.dispatchEvent(event)
      }

      return this.emitter!.dispatchEvent(event)
    }

    /**
     * 绑定多个事件
     * @param events 事件(可为集合)
     * @param handle 回调
     */
    public bind<T extends Event = Event>(events: EventType, handle: EventHandle<T>) {
      narrowType(events).forEach((event) => {
        this.addEventListener(event, handle as EventListenerOrEventListenerObject, false)
      })
    }

    /**
     * 解除事件绑定
     * @param events 事件(可为集合)
     * @param handle 回调
     */
    public unbind<T extends Event = Event>(events: EventType, handle: EventHandle<T>) {
      narrowType(events).forEach((event) => {
        this.removeEventListener(event, handle as EventListenerOrEventListenerObject, false)
      })
    }

    /** 绑定一次事件 */
    public once<T extends Event = Event>(events: EventType, handle: EventHandle<T>) {
      const wrapper = (event: T) => {
        this.unbind(events, wrapper)
        handle(event)
      }

      this.bind(events, wrapper)
    }

    /** 触发事件 */
    public trigger(events: EventType, detail?: Record<string, any>, options?: Omit<CustomEventInit, 'detail'>) {
      narrowType(events).forEach((type) => {
        const event = new SimEvent(type, detail, options)
        this.dispatchEvent(event)
      })
    }

    /**
     * 绑定事件
     * @param events 事件(可为集合)
     * @param handle 回调
     * @description
     * 与 bind 主要区别在于它返回一个销毁函数,
     * 同时保存一份销毁清单, 在元素注销的时候统一销毁
     */
    public addEventsListener<T extends Event = Event>(events: EventType, handle: EventHandle<T>) {
      this.bind(events, handle)

      const deprecatedEvents = narrowType(events)
      const deprecate = () => {
        deprecatedEvents.forEach((event) => this.unbind(event, handle))
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.deprecatedListeners = this.deprecatedListeners.filter(([_deprecate, _events, deprecatedHandle]) => {
          return handle === deprecatedHandle
        })
      }

      this.deprecatedListeners.push([deprecate, deprecatedEvents, handle])
      return deprecate
    }

    /**
     * 销毁事件绑定
     * @param events 事件(可为集合)
     * @param handle 回调
     * @description
     * 与 unbind 主要区别在于它能销毁 addEventsListener 注册的销毁清单上对应的函数
     */
    public removeEventsListener<T extends Event = Event>(events: EventType, handle?: EventHandle<T>) {
      const isRemoveAll = arguments.length === 1
      const types = narrowType(events)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.deprecatedListeners = this.deprecatedListeners.filter(([_, deprecatedEvents, deprecatedHandle]) => {
        if (isRemoveAll === true || handle === deprecatedHandle) {
          deprecatedEvents = deprecatedEvents.filter((event) => types.includes(event))
          this.unbind(types, deprecatedHandle)
        }

        return deprecatedEvents.length > 0
      })
    }

    /** 清除所有绑定的事件 */
    public removeAllListeners() {
      const listeners = this.deprecatedListeners.splice(0)
      listeners.forEach(([deprecate]) => deprecate())
    }
  }
}
