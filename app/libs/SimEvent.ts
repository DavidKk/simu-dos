export default class SimEvent<T = Record<string, any>> extends CustomEvent<T> {
  static create<T>(type: string) {
    return class SimEventify extends SimEvent<T> {
      static EventType = type

      static is(input: Event | CustomEvent | SimEvent<unknown>): input is SimEventify {
        if (typeof input === 'string') {
          return input === type
        }

        return input.type === type
      }

      static listen(handle: (event: SimEvent<T>) => any) {
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

      static dispatch(detail: T, options?: Omit<CustomEventInit, 'detail'>) {
        window.dispatchEvent(new SimEventify(detail, options))
      }

      constructor(detail: T, options?: Omit<CustomEventInit, 'detail'>) {
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
