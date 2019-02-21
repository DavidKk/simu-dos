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

  private bindings () {
    this.handleZoneTouchStart = (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => {
      event.preventDefault()

      let point = this.getTouchPosition(event)
      this.fixedPoint = point

      this.bind(this.zone, touch.move, this.handleZoneTouchMove)
      this.bind(this.zone, touch.end, this.handleZoneTouchEnd)
    }

    this.handleZoneTouchMove = (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => {
      event.preventDefault()

      let { x, y } = this.getTouchPosition(event)
      x -= this.fixedPoint.x
      y -= this.fixedPoint.y

      this.setStickPosition({ x, y })
    }

    this.handleZoneTouchEnd = (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => {
      event.preventDefault()

      this.unbind(this.zone, touch.move, this.handleZoneTouchMove)
      this.unbind(this.zone, touch.end, this.handleZoneTouchEnd)
    }

    this.bind(this.stand, touch.start, this.handleZoneTouchStart)

    /**
     * Docs: https://stackoverflow.com/questions/48124372/pointermove-event-not-working-with-touch-why-not
     */
    this.zone.style.touchAction = 'none'
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

  private getTouchPosition (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) {
    if (event instanceof TouchEvent) {
      let { pageX, pageY } = event.touches[0]
      return { x: pageX, y: pageY }
    }

    let { pageX, pageY } = event
    return { x: pageX, y: pageY }
  }

  private preparePosition (position: JoystickPoint, range: JoystickPointRange): JoystickPoint {
    let { x, y } = position
    let { minX, minY, maxX, maxY } = range

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
