/** 方向键方向 */
export type DpadDirection = 'up' | 'down' | 'left' | 'right'

/** 方向键配置 */
export type DpadOptions =
  | boolean
  | {
      key: string
      direction: DpadDirection
    }[]

export interface DpadTouchEventPayload {
  direction: DpadDirection
}
