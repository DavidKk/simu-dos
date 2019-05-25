import { EventEmitter } from 'events'
import TouchEvents from '../share/event'
import * as Typings from '../typings'

export default class DPad {
  private emitter: EventEmitter
  private zone: HTMLDivElement
  private stage: HTMLDivElement
  private up: HTMLDivElement
  private right: HTMLDivElement
  private down: HTMLDivElement
  private left: HTMLDivElement
  private handleTapUp: (event: Event) => void
  private handleTapRight: (event: Event) => void
  private handleTapDown: (event: Event) => void
  private handleTapLeft: (event: Event) => void
  private handleTapUpEnd: (event: Event) => void
  private handleTapRightEnd: (event: Event) => void
  private handleTapDownEnd: (event: Event) => void
  private handleTapLeftEnd: (event: Event) => void

  constructor (zone: HTMLDivElement) {
    this.emitter = new EventEmitter()
    this.zone = zone
    this.stage = document.createElement('div')
    this.up = document.createElement('div')
    this.right = document.createElement('div')
    this.down = document.createElement('div')
    this.left = document.createElement('div')

    this.stage.classList.add('dpad')
    this.up.classList.add('dpad-btn', 'dpad-up')
    this.right.classList.add('dpad-btn', 'dpad-right')
    this.down.classList.add('dpad-btn', 'dpad-down')
    this.left.classList.add('dpad-btn', 'dpad-left')

    this.stage.appendChild(this.up)
    this.stage.appendChild(this.right)
    this.stage.appendChild(this.down)
    this.stage.appendChild(this.left)
    this.zone.appendChild(this.stage)

    this.bindings()
  }

  public onActions (handle: (event: any) => void): void {
    this.emitter.addListener('actions', handle)
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

      this.emitter.emit('actions', { type: 'down', direction })
    }

    const wrapTouchUp = (direction: Typings.DGDPadDirectionType) => (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      const element = event.target as HTMLElement
      element.classList.remove('active')

      this.emitter.emit('actions', { type: 'up', direction })
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
    this.unbindings()

    document.body.removeChild(this.stage)
    this.stage.removeChild(this.up)
    this.stage.removeChild(this.right)
    this.stage.removeChild(this.down)
    this.stage.removeChild(this.left)

    this.up = undefined
    this.right = undefined
    this.down = undefined
    this.left = undefined
    this.stage = undefined

    this.destroy = Function.prototype as any
  }
}
