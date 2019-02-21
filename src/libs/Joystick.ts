import { EventEmitter } from 'events'

const touch = (() => {
  const Pointer = {
    start: 'pointerdown',
    move: 'pointermove',
    end: ['pointerup', 'pointercancel']
  }

  const MSPointer = {
    start: 'MSPointerMove',
    move: 'MSPointerMove',
    end: 'MSPointerUp'
  }

  const Touch = {
    start: 'touchstart',
    move: 'touchmove',
    end: ['touchend', 'touchcancel']
  }

  const Mouse = {
    start: 'mousedown',
    move: 'mousemove',
    end: 'mouseup'
  }

  if (window.hasOwnProperty('PointerEvent')) {
    return Pointer
  }

  if (window.hasOwnProperty('MSPointerEvent')) {
    return MSPointer
  }

  if ('ontouchstart' in window) {
    return Touch
  }

  return Mouse
})()

export default class Joystick {
  private emitter: EventEmitter = new EventEmitter
  private zone: HTMLDivElement = null
  private stand: HTMLDivElement = null
  private stick: HTMLDivElement = null
  private fixedPoint: JoystickPoint = { x: 0, y: 0 }
  private position: JoystickPoint = { x: 0, y: 0 }
  private stickPosition: JoystickPoint = { x: 0, y: 0 }
  private handleZoneTouchStart: (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void
  private handleZoneTouchMove: (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void
  private handleZoneTouchEnd: (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void

  private get positionRange (): JoystickPointRange {
    let { clientWidth: width, clientHeight: height } = this.zone
    return { minX: 0, minY: 0, maxX: width, maxY: height }
  }

  private get stickPositionRange (): JoystickPointRange {
    let { clientWidth: sw, clientHeight: sh } = this.stand
    return { minX: sw / -2, minY: sh / -2, maxX: sw / 2, maxY: sh / 2 }
  }

  constructor (zone: HTMLDivElement) {
    this.zone = zone
    this.stand = document.createElement('div')
    this.stick = document.createElement('div')

    this.stand.className = 'joystick-stand'
    this.stick.className = 'joystick-stick'

    this.stand.appendChild(this.stick)
    this.zone.appendChild(this.stand)

    this.bindings()
  }

  private _onTouchStart (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): void {
    event.preventDefault()

    let point = this.getTouchPosition(event)
    this.fixedPoint = point

    this.stand.classList.add('active')

    this.bind(this.zone, touch.move, this.handleZoneTouchMove)
    this.bind(this.zone, touch.end, this.handleZoneTouchEnd)
  }

  private _onTouchMove (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): void {
    event.preventDefault()

    let { x, y, degree } = this.computes(event)
    x -= this.fixedPoint.x
    y -= this.fixedPoint.y

    this.setStickPosition({ x, y })
    this.emitter.emit('action', { x, y, degree })
  }

  private _onTouchEnd (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): void {
    event.preventDefault()

    this.setStickPosition({ x: 0, y: 0 })
    this.stand.classList.remove('active')

    this.unbind(this.zone, touch.move, this.handleZoneTouchMove)
    this.unbind(this.zone, touch.end, this.handleZoneTouchEnd)
  }

  private bindings () {
    /**
     * Docs: https://stackoverflow.com/questions/48124372/pointermove-event-not-working-with-touch-why-not
     */
    this.zone.style.touchAction = 'none'
    this.handleZoneTouchStart = this._onTouchStart.bind(this)
    this.handleZoneTouchMove = this._onTouchMove.bind(this)
    this.handleZoneTouchEnd = this._onTouchEnd.bind(this)
    this.bind(this.stand, touch.start, this.handleZoneTouchStart)
  }

  private unbindings () {
    this.unbind(this.stand, touch.start, this.handleZoneTouchStart)
    this.unbind(this.zone, touch.move, this.handleZoneTouchMove)
    this.unbind(this.zone, touch.end, this.handleZoneTouchEnd)
  }

  private bind (element: HTMLElement, events: string | Array<string>, handle: (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(element, event, handle))
      return
    }

    element.addEventListener(events, handle, false)
  }

  private unbind (element: HTMLElement, events: string | Array<string>, handle: (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(element, event, handle))
      return
    }

    element.removeEventListener(events, handle)
  }

  private computes (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): JoystickTouchInfo {
    let { x, y } = this.getTouchPosition(event)
    let degree = Math.atan(y / x) / (Math.PI / 180)

    return { x, y, degree }
  }

  private preparePosition (position: JoystickPoint, range: JoystickPointRange): JoystickPoint {
    let { x, y } = position
    let { minX, minY, maxX, maxY } = range
    let degree = Math.atan(y / x) / (Math.PI / 180)

    if (Math.abs(x) > Math.abs(y)) {
      if (y > 0) {
        maxY = Math.tan(degree * Math.PI / 180) * x
      } else {
        minY = Math.tan(degree * Math.PI / 180) * x
      }
    } else {
      // if (x > 0) {
      //   maxX = y / Math.tan(degree * Math.PI / 180)
      // } else {
      //   minX = y / Math.tan(degree * Math.PI / 180)
      // }
    }

    console.log(degree)

    if (x < minX) {
      x = minX
    }

    if (x > maxX) {
      x = maxX
    }

    if (y < minY) {
      y = minY
    }

    if (y > maxY) {
      y = maxY
    }

    return { x, y }
  }

  private getTouchPosition (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): JoystickPoint {
    if (event instanceof TouchEvent) {
      let { pageX, pageY } = event.touches[0]
      return { x: pageX, y: pageY }
    }

    let { pageX, pageY } = event
    return { x: pageX, y: pageY }
  }

  public setPosition (position: JoystickPoint): void {
    this.position = this.preparePosition(position, this.positionRange)
  }

  public setStickPosition (position: JoystickPoint): void {
    this.stickPosition = this.preparePosition(position, this.stickPositionRange)
    let { x, y } = this.stickPosition

    this.stick.style.marginLeft = `${x}px`
    this.stick.style.marginTop = `${y}px`
  }

  public setSize (size: number | string) {
    this.stand.style.width = typeof size === 'string' ? size : size + 'px'
    this.stand.style.height = typeof size === 'string' ? size : size + 'px'
  }

  public onActions (handle: (info: JoystickTouchInfo) => void) {
    this.emitter.addListener('action', handle)
  }

  public destory () {
    this.unbindings()

    this.stick.parentElement.removeChild(this.stick)
    this.stand.parentElement.removeChild(this.stand)

    this.stick = undefined
    this.stand = undefined
    this.zone = undefined
  }
}

interface JoystickPoint {
  x: number
  y: number
}

interface JoystickPointRange {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

interface JoystickTouchInfo {
  x: number
  y: number
  degree: number
}
