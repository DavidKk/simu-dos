import type { StyleValue, Position } from '../styles'
import type { ButtonType } from './button'

/** 按键初始化配置 */
export interface KeypadCreationOptions {
  type?: ButtonType
  position?: Position
  size?: StyleValue
}

/** 按键配置 */
export type KeypadOptions = {
  content: string
  key: string
  action?: string
  options?: KeypadCreationOptions
}[]

export interface KeypadTouchEventPayload {
  key: string
}
