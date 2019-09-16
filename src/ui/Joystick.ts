import Element from '../libs/Element'
import Component from '../libs/Component'
import TouchEvents from '../share/event'
import * as MathUtil from '../share/math'
import * as Typings from '../typings'

export default class Joystick extends Component {
  private handleZoneTouchStart: Typings.EventHandle
  private handleZoneTouchMove: Typings.EventHandle
  private handleZoneTouchEnd: Typings.EventHandle

  public body: Element
  public element: Element
  public stand: Element
  public stick: Element
  public fixedPoint: Typings.Point

  constructor () {
    super()

    this.body = new Element(document.body)
    this.stick = new Element(['joystick-stick'])
    this.stand = this.element = new Element(['joystick-stand'], [this.stick])
    this.fixedPoint = { x: 0, y: 0 }

    this.bindings()
  }

  public appendTo (element: Component | Element | HTMLElement): void {
    /**
     * Docs: https://stackoverflow.com/questions/48124372/pointermove-event-not-working-with-touch-why-not
     */
    element = element instanceof Component ? element.element : element
    element = element instanceof Element ? element.element : element
    element.style.touchAction = 'none'

    return super.appendTo(element)
  }

  private _onTouchStart (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): void {
    event.preventDefault()
    event.stopPropagation()

    let point = this.getTouchPosition(event)
    this.fixedPoint = point
    this.stand.addClass('active')
    this.emit('actions', { type: 'start', coord: point })

    this.body.bind(TouchEvents.move, this.handleZoneTouchMove)
    this.body.bind(TouchEvents.end, this.handleZoneTouchEnd)
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
    this.emit('actions', { type: 'move', ...datas })
  }

  private _onTouchEnd (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): void {
    event.preventDefault()
    event.stopPropagation()

    this.setStickCoord({ x: 0, y: 0 })
    this.stand.removeClass('active')
    this.emit('actions', { type: 'up' })

    this.body.unbind(TouchEvents.move, this.handleZoneTouchMove)
    this.body.unbind(TouchEvents.end, this.handleZoneTouchEnd)
  }

  private bindings (): void {
    this.handleZoneTouchStart = this._onTouchStart.bind(this)
    this.handleZoneTouchMove = this._onTouchMove.bind(this)
    this.handleZoneTouchEnd = this._onTouchEnd.bind(this)
    this.stand.bind(TouchEvents.start, this.handleZoneTouchStart)
  }

  private unbindings (): void {
    this.stand.unbind(TouchEvents.start, this.handleZoneTouchStart)
    this.body.unbind(TouchEvents.move, this.handleZoneTouchMove)
    this.body.unbind(TouchEvents.end, this.handleZoneTouchEnd)

    this.handleZoneTouchStart = undefined
    this.handleZoneTouchMove = undefined
    this.handleZoneTouchEnd = undefined
  }

  private setStickCoord (coord: Typings.Point): void {
    const { x, y } = coord
    this.stick.style.marginLeft = x + 'px'
    this.stick.style.marginTop = y + 'px'
  }

  private computes (pointA: Typings.Point, pointB: Typings.Point): Typings.JoystickEventDatas {
    let { x, y } = pointB
    let { width: sizeA } = this.stand
    let { height: sizeB } = this.stick
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
    let direction: Typings.JoystickDirection = { x: null, y: null, angle: null }

    if (radian > angle45 && radian < (angle45 * 3)) {
      direction.angle = 'up'
    } else if (radian > -angle45 && radian <= angle45) {
      direction.angle = 'left'
    } else if (radian > (-angle45 * 3) && radian <= -angle45) {
      direction.angle = 'down'
    } else {
      direction.angle = 'right'
    }

    if (radian > -angle90 && radian < angle90) {
      direction.x = 'left'
    } else {
      direction.x = 'right'
    }

    if (radian > 0) {
      direction.y = 'up'
    } else {
      direction.y = 'down'
    }

    return { coord, size, distance, angle, radian, direction }
  }

  private getTouchPosition (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent): Typings.Point {
    if (event instanceof TouchEvent) {
      let { pageX, pageY } = event.touches[0]
      return { x: pageX, y: pageY }
    }

    let { pageX, pageY } = event
    return { x: pageX, y: pageY }
  }

  public setPosition (position: Typings.Position): void {
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
    this.addListener('actions', handle)
  }

  public destroy (): void {
    super.destroy()

    this.unbindings()

    this.stand.destroy()
    this.stick.destroy()

    this.stick = undefined
    this.stand = undefined
    this.element = undefined

    this.destroy = Function.prototype as any
  }
}
