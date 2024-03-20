export interface Message<T> {
  type: 'request' | 'response'
  id: string
  payload: T
}

export default class SimEvent<T = Record<string, any>> extends CustomEvent<T> {
  static create<T>(type: string) {
    return class SimEventify extends SimEvent<T> {
      static get EventType() {
        return type
      }

      static is(input: Event | CustomEvent | SimEvent<unknown>): input is SimEventify {
        if (typeof input === 'string') {
          return input === type
        }

        return input.type === type
      }

      static listen(handle: (event: SimEvent<T>) => void) {
        const onHandle = (event: Event) => {
          if (!SimEvent.isSimEvent<T>(event)) {
            return
          }

          handle(event)
        }

        window.addEventListener(type, onHandle)

        return () => {
          window.removeEventListener(type, onHandle)
        }
      }

      static once(handle: (event: SimEvent<T>) => void) {
        const onHandle = (event: Event) => {
          if (!SimEvent.isSimEvent<T>(event)) {
            return
          }

          window.removeEventListener(type, onHandle)
          handle(event)
        }

        window.addEventListener(type, onHandle)
      }

      static dispatch(detail: T, options?: Omit<CustomEventInit, 'detail'>) {
        window.dispatchEvent(new SimEventify(detail, options))
      }

      static wait() {
        return new Promise<T>((resolve) => {
          const deprecate = SimEventify.listen((event) => {
            deprecate()
            resolve(event.detail)
          })
        })
      }

      constructor(detail: T, options?: Omit<CustomEventInit, 'detail'>) {
        super(type, detail, { bubbles: true, cancelable: true, ...options })
      }
    }
  }

  static createMessager<Q, R>(type: string) {
    return class SimEventify extends SimEvent<Message<any>> {
      static onMessage(handle: (payload: Q) => Promise<R>) {
        const onRequest = async (event: Event) => {
          if (!SimEvent.isSimEvent<Message<Q>>(event)) {
            return
          }

          const { type, id, payload } = event.detail
          if (!(type === 'request' && id)) {
            return
          }

          const response = await handle(payload)
          const repsonseEvent = new SimEventify({ type: 'response', id, payload: response })
          window.dispatchEvent(repsonseEvent)
        }

        window.addEventListener(type, onRequest)
        return () => {
          window.removeEventListener(type, onRequest)
        }
      }

      static request(payload: Q) {
        return new Promise<R>((resolve) => {
          const requestId = (Math.floor(Math.random() * 1e13) + Date.now()).toFixed(35)
          const onResponse = async (event: Event) => {
            if (!SimEvent.isSimEvent<Message<R>>(event)) {
              return
            }

            const { type, id, payload } = event.detail
            if (!(type === 'response' && id === requestId)) {
              return
            }

            window.removeEventListener(type, onResponse)
            resolve(payload)
          }

          window.addEventListener(type, onResponse)

          const requestEvent = new SimEventify({ type: 'request', id: requestId, payload })
          window.dispatchEvent(requestEvent)
        })
      }

      constructor(detail: Message<Q | R>, options?: Omit<CustomEventInit, 'detail'>) {
        super(type, detail, { bubbles: true, cancelable: true, ...options })
      }
    }
  }

  static isSimEvent<T>(input: any): input is InstanceType<typeof SimEvent<T>> {
    return input instanceof SimEvent
  }

  constructor(type: string, detail?: T, options?: Omit<CustomEventInit, 'detail'>) {
    super(type, { ...options, detail })
  }
}
