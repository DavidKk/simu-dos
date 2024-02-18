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
    
      constructor(detail: T, options?: Omit<CustomEventInit, 'detail'>) {
        super(type, detail, { bubbles: true, cancelable: true, ...options })
      }
    }
  }

  static isSimEvent<T extends Record<string, any>>(input: any): input is InstanceType<typeof SimEvent<T>> {
    return input instanceof SimEvent
  }

  constructor(type: string, detail?: T, options?: Omit<CustomEventInit, 'detail'>) {
    super(type, { ...options, detail })
  }
}
