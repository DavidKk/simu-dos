import Component from './Component'
import TouchEvents from '../share/event'
import * as Typings from '../typings'

export default class DPad extends Component {
  public zone: HTMLDivElement
  public container: HTMLDivElement
  public up: HTMLDivElement
  public right: HTMLDivElement
  public down: HTMLDivElement
  public left: HTMLDivElement
  public handleTapUp: (event: Event) => void
  public handleTapRight: (event: Event) => void
  public handleTapDown: (event: Event) => void
  public handleTapLeft: (event: Event) => void
  public handleTapUpEnd: (event: Event) => void
  public handleTapRightEnd: (event: Event) => void
  public handleTapDownEnd: (event: Event) => void
  public handleTapLeftEnd: (event: Event) => void

  constructor (zone: HTMLDivElement) {
    super()

    this.zone = zone
    this.container = this.el = document.createElement('div')
    this.up = document.createElement('div')
    this.right = document.createElement('div')
    this.down = document.createElement('div')
    this.left = document.createElement('div')

    this.container.classList.add('dpad', 'open')
    this.up.classList.add('dpad-btn', 'dpad-up')
    this.right.classList.add('dpad-btn', 'dpad-right')
    this.down.classList.add('dpad-btn', 'dpad-down')
    this.left.classList.add('dpad-btn', 'dpad-left')

    this.container.appendChild(this.up)
    this.container.appendChild(this.right)
    this.container.appendChild(this.down)
    this.container.appendChild(this.left)
    this.zone.appendChild(this.container)

    this.bindings()
  }

  public onActions (handle: (event: any) => void): void {
    this.addListener('actions', handle)
  }

  private bind (element: HTMLElement, events: string | Array<string>, handle: Typings.DGEventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(element, event, handle))
      return
    }

    element.addEventListener(events, handle, false)
  }

  private unbind (element: HTMLElement, events: string | Array<string>, handle: Typings.DGEventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.unbind(element, event, handle))
      return
    }

    element.removeEventListener(events, handle)
  }

  private bindings (): void {
    const wrapTouchDown = (direction: Typings.DGDPadDirectionType) => (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      const element = event.target as HTMLElement
      element.classList.add('active')

      this.emit('actions', { type: 'down', direction })
    }

    const wrapTouchUp = (direction: Typings.DGDPadDirectionType) => (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      const element = event.target as HTMLElement
      element.classList.remove('active')

      this.emit('actions', { type: 'up', direction })
    }

    this.handleTapUp = wrapTouchDown('up')
    this.handleTapRight = wrapTouchDown('right')
    this.handleTapDown = wrapTouchDown('down')
    this.handleTapLeft = wrapTouchDown('left')

    this.bind(this.up, TouchEvents.start, this.handleTapUp)
    this.bind(this.right, TouchEvents.start, this.handleTapRight)
    this.bind(this.down, TouchEvents.start, this.handleTapDown)
    this.bind(this.left, TouchEvents.start, this.handleTapLeft)

    this.handleTapUpEnd = wrapTouchUp('up')
    this.handleTapRightEnd = wrapTouchUp('right')
    this.handleTapDownEnd = wrapTouchUp('down')
    this.handleTapLeftEnd = wrapTouchUp('left')

    this.bind(this.up, TouchEvents.end, this.handleTapUpEnd)
    this.bind(this.right, TouchEvents.end, this.handleTapRightEnd)
    this.bind(this.down, TouchEvents.end, this.handleTapDownEnd)
    this.bind(this.left, TouchEvents.end, this.handleTapLeftEnd)
  }

  private unbindings (): void {
    this.unbind(this.up, TouchEvents.start, this.handleTapUp)
    this.unbind(this.right, TouchEvents.start, this.handleTapRight)
    this.unbind(this.down, TouchEvents.start, this.handleTapDown)
    this.unbind(this.left, TouchEvents.start, this.handleTapLeft)

    this.handleTapUp = undefined
    this.handleTapRight = undefined
    this.handleTapDown = undefined
    this.handleTapLeft = undefined

    this.unbind(this.up, TouchEvents.end, this.handleTapUpEnd)
    this.unbind(this.right, TouchEvents.end, this.handleTapRightEnd)
    this.unbind(this.down, TouchEvents.end, this.handleTapDownEnd)
    this.unbind(this.left, TouchEvents.end, this.handleTapLeftEnd)

    this.handleTapUpEnd = undefined
    this.handleTapRightEnd = undefined
    this.handleTapDownEnd = undefined
    this.handleTapLeftEnd = undefined
  }

  public destroy (): void {
    super.destroy()

    this.unbindings()

    document.body.removeChild(this.container)
    this.container.removeChild(this.up)
    this.container.removeChild(this.right)
    this.container.removeChild(this.down)
    this.container.removeChild(this.left)

    this.up = undefined
    this.right = undefined
    this.down = undefined
    this.left = undefined
    this.container = undefined

    this.destroy = Function.prototype as any
  }
}
