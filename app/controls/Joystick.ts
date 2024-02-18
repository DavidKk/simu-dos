import { define, Component } from '@/libs/Component'
import SimEvent from '@/libs/SimEvent'
import { isPointerLikeEvent } from '@/utils/isPointerLikeEvent'
import * as MathUtil from '@/utils/math'
import PointerEvent from '@/constants/event'
import { ACTIVE_CLASSNAME } from '@/constants/definations'
import { JOYSTICK_TOUCHMOVE, JOYSTICK_TOUCHDOWN, JOYSTICK_TOUCHUP } from '@/constants/actions'
import type { Point, JoystickDirectionData, JoystickTouchDownEventDetail, JoystickTouchMoveEventDetail } from '@/types'

@define('joystick')
export default class Joystick extends Component {
  static Events = {
    TouchDown: SimEvent.create<JoystickTouchDownEventDetail>(JOYSTICK_TOUCHDOWN),
    TouchMove: SimEvent.create<JoystickTouchMoveEventDetail>(JOYSTICK_TOUCHMOVE),
    TouchUp: SimEvent.create<void>(JOYSTICK_TOUCHUP),
  }

  protected fixedPoint: Point
  protected stick: Component

  protected bindings() {
    this.stick = this.appendElement('joystick-stick')

    const onTouchStart = (event: Event) => {
      if (!isPointerLikeEvent(event)) {
        return
      }
      
      event.preventDefault()
      event.stopPropagation()
  
      const point = this.getTouchPosition(event)!
      if (point) {
        this.fixedPoint = point
      }
  
      this.addClass(ACTIVE_CLASSNAME)
      this.dispatchEvent(new Joystick.Events.TouchDown({ coord: point }))
      
      Component.prototype.bind.call(document.body, PointerEvent.Move, onTouchMove)
      Component.prototype.bind.call(document.body, PointerEvent.End, onTouchEnd)
    }
  
    const onTouchMove = (event: Event) => {
      if (!isPointerLikeEvent(event)) {
        return
      }
  
      event.preventDefault()
      event.stopPropagation()
  
      const point = this.getTouchPosition(event)
      if (!point) {
        return
      }
  
      const datas = this.computes(this.fixedPoint, point)
  
      const { coord } = datas
  
      let { x, y } = coord
      x -= this.fixedPoint.x
      y -= this.fixedPoint.y
  
      this.setStickCoord({ x, y })
      this.dispatchEvent(new Joystick.Events.TouchMove(datas))
    }
  
    const onTouchEnd = (event: Event) => {
      if (!isPointerLikeEvent(event)) {
        return
      }
  
      event.preventDefault()
      event.stopPropagation()
  
      this.setStickCoord({ x: 0, y: 0 })
      this.removeClass(ACTIVE_CLASSNAME)
      this.dispatchEvent(new Joystick.Events.TouchUp())
  
      Component.prototype.unbind.call(document.body, PointerEvent.Move, onTouchMove)
      Component.prototype.unbind.call(document.body, PointerEvent.End, onTouchEnd)
    }
  
    this.bind(PointerEvent.Start, onTouchStart)

    return () => {
      this.unbind(PointerEvent.Start, onTouchStart)

      Component.prototype.unbind.call(document.body, PointerEvent.Move, onTouchMove)
      Component.prototype.unbind.call(document.body, PointerEvent.End, onTouchEnd)
    }
  }

  protected getTouchPosition(event: Event) {
    if (!isPointerLikeEvent(event)) {
      return null
    }

    if (event instanceof TouchEvent) {
      const { pageX, pageY } = event.touches[0]
      return { x: pageX, y: pageY }
    }

    const { pageX, pageY } = event
    return { x: pageX, y: pageY }
  }

  protected setStickCoord(coord: Point) {
    const { x, y } = coord
    this.stick.style.marginLeft = x + 'px'
    this.stick.style.marginTop = y + 'px'
  }

  protected computes(pointA: Point, pointB: Point): JoystickTouchMoveEventDetail {
    const { x, y } = pointB
    const { width: sizeA } = this
    const { height: sizeB } = this.stick

    let distance = MathUtil.distance(pointB, pointA)

    const angle = MathUtil.angle(pointB, pointA)
    const radian = MathUtil.radian(angle)

    let coord = { x, y }

    const size = sizeA - sizeB
    if (distance > size) {
      distance = size
      coord = MathUtil.coord(pointA, distance, angle)
    }

    const angle45 = Math.PI / 4
    const angle90 = Math.PI / 2
    const direction: JoystickDirectionData = { x: null, y: null, angle: null }

    if (radian > angle45 && radian < angle45 * 3) {
      direction.angle = 'up'
    } else if (radian > -angle45 && radian <= angle45) {
      direction.angle = 'left'
    } else if (radian > -angle45 * 3 && radian <= -angle45) {
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
}
