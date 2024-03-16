import type { DpadOptions } from './contorls/dpad'
import type { JoystickOptions } from './contorls/joystick'
import type { KeypadOptions } from './contorls/keypad'
import type { I18n } from './i18n'

/** 控制器初始化配置 */
export interface GameControlCreationOptions {
  joystick?: JoystickOptions
  keypad?: KeypadOptions
  dpad?: DpadOptions
  keyboad?: boolean
}

export interface Game {
  id: string
  name: string
  translates?: string | I18n<string>
  cover: string | I18n<string>
  type?: string
  summary?: string | string[] | I18n<string | string[]>
  developers?: string | string[] | I18n<string | string[]>
  publisher?: string | string[] | I18n<string | string[]>
  release?: string | Date | number
  url: string | I18n<string>
  size?: number
  rom?: ArrayBuffer
  command?: string[]
  save?: {
    path: string
    regexp: RegExp
  }
  keymapping?: Record<string, string>
  play?: GameControlCreationOptions
}
