import type { Point } from '../styles'

/** 摇杆方向类型 */
export type JoystickDirection = 'up' | 'down' | 'left' | 'right'

/** 摇杆配置 */
export type JoystickOptions =
  | boolean
  | {
      key: string
      direction: JoystickDirection | JoystickDirection[]
    }[]

/** 摇杆触发事件信息 */
export interface JoystickDirectionData {
  x: JoystickDirection | null
  y: JoystickDirection | null
  angle: JoystickDirection | null
}

export interface JoystickTouchDownEventPayload {
  coord: Point
}

/** 摇杆事件详情 */
export interface JoystickTouchMoveEventPayload {
  coord: Point
  size: number
  distance: number
  angle: number
  radian: number
  direction: JoystickDirectionData
}
