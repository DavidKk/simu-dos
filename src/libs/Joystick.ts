import { EventEmitter } from 'events'
import TouchEvents from '../share/event'
import * as MathUtil from '../share/math'

export default class Joystick {
  private emitter: EventEmitter = new EventEmitter
  private zone: HTMLDivElement = null
  private stand: HTMLDivElement = null
  private stick: HTMLDivElement = null
  private fixedPoint: Point = { x: 0, y: 0 }
  private handleZoneTouchStart: (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void
  private handleZoneTouchMove: (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void
  private handleZoneTouchEnd: (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void

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

    this.bind(this.zone, TouchEvents.move, this.handleZoneTouchMove)
    this.bind(this.zone, TouchEvents.end, this.handleZoneTouchEnd)
  }

  private _onTouchMove (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): void {
    event.preventDefault()

    let point = this.getTouchPosition(event)
    let datas = this.computes(this.fixedPoint, point)
    let { position } = datas
    let { x, y } = position

    x -= this.fixedPoint.x
    y -= this.fixedPoint.y

    this.setStickPosition({ x, y })
    this.emitter.emit('action', datas)
  }

  private _onTouchEnd (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): void {
    event.preventDefault()

    this.setStickPosition({ x: 0, y: 0 })
    this.stand.classList.remove('active')

    this.unbind(this.zone, TouchEvents.move, this.handleZoneTouchMove)
    this.unbind(this.zone, TouchEvents.end, this.handleZoneTouchEnd)
  }

  private bindings () {
    /**
     * Docs: https://stackoverflow.com/questions/48124372/pointermove-event-not-working-with-touch-why-not
     */
    this.zone.style.touchAction = 'none'
    this.handleZoneTouchStart = this._onTouchStart.bind(this)
    this.handleZoneTouchMove = this._onTouchMove.bind(this)
    this.handleZoneTouchEnd = this._onTouchEnd.bind(this)
    this.bind(this.stand, TouchEvents.start, this.handleZoneTouchStart)
  }

  private unbindings () {
    this.unbind(this.stand, TouchEvents.start, this.handleZoneTouchStart)
    this.unbind(this.zone, TouchEvents.move, this.handleZoneTouchMove)
    this.unbind(this.zone, TouchEvents.end, this.handleZoneTouchEnd)
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

  private computes (pointA: Point, pointB: Point) {
    let { x, y } = pointB
    let { clientWidth: sizeA } = this.stand
    let { clientWidth: sizeB } = this.stick
    let distance = MathUtil.distance(pointB, pointA)
    let angle = MathUtil.angle(pointB, pointA)
    let radian = MathUtil.radian(angle)
    let position = { x, y }
    let size = sizeA - sizeB

    if (distance > size) {
      distance = size
      position = MathUtil.coord(pointA, distance, angle)
    }

    let angle45 = Math.PI / 4
    let angle90 = Math.PI / 2
    let direction: Direction = { x: null, y: null, angle: null}

    if (radian > angle45 && radian < (angle45 * 3)) {
      direction.angle = DirectionType.Up
    } else if (radian > -angle45 && radian <= angle45) {
      direction.angle = DirectionType.Left
    } else if (radian > (-angle45 * 3) && radian <= -angle45) {
      direction.angle = DirectionType.Down
    } else {
      direction.angle = DirectionType.Right
    }

    if (radian > -angle90 && radian < angle90) {
      direction.x = DirectionType.Left
    } else {
      direction.x = DirectionType.Right
    }

    if (radian > 0) {
      direction.y = DirectionType.Up
    } else {
      direction.y = DirectionType.Down
    }

    return { position, size, distance, angle, radian, direction }
  }

  private getTouchPosition (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): Point {
    if (event instanceof TouchEvent) {
      let { pageX, pageY } = event.touches[0]
      return { x: pageX, y: pageY }
    }

    let { pageX, pageY } = event
    return { x: pageX, y: pageY }
  }

  public setPosition (position: JoystickPoint): void {
    const { x, y } = position
    this.stand.style.marginLeft = typeof x === 'string' ? x : x + 'px'
    this.stand.style.marginTop = typeof y === 'string' ? y : y + 'px'
  }

  public setStickPosition (position: JoystickPoint): void {
    const { x, y } = position
    this.stick.style.marginLeft = typeof x === 'string' ? x : x + 'px'
    this.stick.style.marginTop = typeof y === 'string' ? y : y + 'px'
  }

  public setSize (size: number | string) {
    this.stand.style.width = typeof size === 'string' ? size : size + 'px'
    this.stand.style.height = typeof size === 'string' ? size : size + 'px'
  }

  public onActions (handle: (data: any) => void) {
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
  x: number | string
  y: number | string
}

interface Direction {
  x: DirectionType
  y: DirectionType
  angle: DirectionType
}

enum DirectionType {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}
