import { EventEmitter } from 'events'
import { Point, Pos, EventHandle } from '../share/types'
import TouchEvents from '../share/event'
import * as MathUtil from '../share/math'

export enum DGJoystickDirectionType {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

export interface DGJoystickDirection {
  x: DGJoystickDirectionType
  y: DGJoystickDirectionType
  angle: DGJoystickDirectionType
}

export interface DGJoystickEventDatas {
  coord: Point
  size: number
  distance: number
  angle: number
  radian: number
  direction: DGJoystickDirection
}

export interface DGJoystick {
  setPosition (position: Pos): void
  setSize (size: number | string): void
  onActions (handle: (event: any) => void): void
  destory (): void
}

export default class Joystick implements DGJoystick {
  private emitter: EventEmitter = new EventEmitter()
  private zone: HTMLDivElement
  private stand: HTMLDivElement
  private stick: HTMLDivElement
  private fixedPoint: Point = { x: 0, y: 0 }
  private handleZoneTouchStart: EventHandle
  private handleZoneTouchMove: EventHandle
  private handleZoneTouchEnd: EventHandle

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
    event.stopPropagation()

    let point = this.getTouchPosition(event)
    this.fixedPoint = point

    this.stand.classList.add('active')
    this.emitter.emit('actions', { type: 'start', coord: point })

    this.bind(this.zone, TouchEvents.move, this.handleZoneTouchMove)
    this.bind(this.zone, TouchEvents.end, this.handleZoneTouchEnd)
  }

  private _onTouchMove (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): void {
    event.preventDefault()
    event.stopPropagation()

    let point = this.getTouchPosition(event)
    let datas = this.computes(this.fixedPoint, point)
    let { coord } = datas
    let { x, y } = coord

    x -= this.fixedPoint.x
    y -= this.fixedPoint.y

    this.setStickCoord({ x, y })
    this.emitter.emit('actions', { type: 'move', ...datas })
  }

  private _onTouchEnd (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): void {
    event.preventDefault()
    event.stopPropagation()

    this.setStickCoord({ x: 0, y: 0 })
    this.stand.classList.remove('active')
    this.emitter.emit('actions', { type: 'up' })

    this.unbind(this.zone, TouchEvents.move, this.handleZoneTouchMove)
    this.unbind(this.zone, TouchEvents.end, this.handleZoneTouchEnd)
  }

  private bindings (): void {
    /**
     * Docs: https://stackoverflow.com/questions/48124372/pointermove-event-not-working-with-touch-why-not
     */
    this.zone.style.touchAction = 'none'
    this.handleZoneTouchStart = this._onTouchStart.bind(this)
    this.handleZoneTouchMove = this._onTouchMove.bind(this)
    this.handleZoneTouchEnd = this._onTouchEnd.bind(this)
    this.bind(this.stand, TouchEvents.start, this.handleZoneTouchStart)
  }

  private unbindings (): void {
    this.unbind(this.stand, TouchEvents.start, this.handleZoneTouchStart)
    this.unbind(this.zone, TouchEvents.move, this.handleZoneTouchMove)
    this.unbind(this.zone, TouchEvents.end, this.handleZoneTouchEnd)
  }

  private setStickCoord (coord: Point): void {
    const { x, y } = coord
    this.stick.style.marginLeft = x + 'px'
    this.stick.style.marginTop = y + 'px'
  }

  private bind (element: HTMLElement, events: string | Array<string>, handle: EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.bind(element, event, handle))
      return
    }

    element.addEventListener(events, handle, false)
  }

  private unbind (element: HTMLElement, events: string | Array<string>, handle: EventHandle): void {
    if (Array.isArray(events)) {
      events.forEach((event) => this.unbind(element, event, handle))
      return
    }

    element.removeEventListener(events, handle)
  }

  private computes (pointA: Point, pointB: Point): DGJoystickEventDatas {
    let { x, y } = pointB
    let { clientWidth: sizeA } = this.stand
    let { clientWidth: sizeB } = this.stick
    let distance = MathUtil.distance(pointB, pointA)
    let angle = MathUtil.angle(pointB, pointA)
    let radian = MathUtil.radian(angle)
    let coord = { x, y }
    let size = sizeA - sizeB

    if (distance > size) {
      distance = size
      coord = MathUtil.coord(pointA, distance, angle)
    }

    let angle45 = Math.PI / 4
    let angle90 = Math.PI / 2
    let direction: DGJoystickDirection = { x: null, y: null, angle: null }

    if (radian > angle45 && radian < (angle45 * 3)) {
      direction.angle = DGJoystickDirectionType.Up
    } else if (radian > -angle45 && radian <= angle45) {
      direction.angle = DGJoystickDirectionType.Left
    } else if (radian > (-angle45 * 3) && radian <= -angle45) {
      direction.angle = DGJoystickDirectionType.Down
    } else {
      direction.angle = DGJoystickDirectionType.Right
    }

    if (radian > -angle90 && radian < angle90) {
      direction.x = DGJoystickDirectionType.Left
    } else {
      direction.x = DGJoystickDirectionType.Right
    }

    if (radian > 0) {
      direction.y = DGJoystickDirectionType.Up
    } else {
      direction.y = DGJoystickDirectionType.Down
    }

    return { coord, size, distance, angle, radian, direction }
  }

  private getTouchPosition (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): Point {
    if (event instanceof TouchEvent) {
      let { pageX, pageY } = event.touches[0]
      return { x: pageX, y: pageY }
    }

    let { pageX, pageY } = event
    return { x: pageX, y: pageY }
  }

  public setPosition (position: Pos): void {
    const { top, right, bottom, left } = position
    this.stand.style.top = typeof top === 'string' ? top : top + 'px'
    this.stand.style.right = typeof right === 'string' ? right : right + 'px'
    this.stand.style.bottom = typeof bottom === 'string' ? bottom : bottom + 'px'
    this.stand.style.left = typeof left === 'string' ? left : left + 'px'
  }

  public setSize (size: number | string): void {
    this.stand.style.width = typeof size === 'string' ? size : size + 'px'
    this.stand.style.height = typeof size === 'string' ? size : size + 'px'
  }

  public onActions (handle: (event: any) => void): void {
    this.emitter.addListener('actions', handle)
  }

  public destory (): void {
    this.unbindings()

    this.stick.parentElement.removeChild(this.stick)
    this.stand.parentElement.removeChild(this.stand)

    this.stick = undefined
    this.stand = undefined
    this.zone = undefined
  }
}
