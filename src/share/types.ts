export type EventHandle = (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void

export interface Point {
  x: number
  y: number
}

export interface Pos {
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
}

export enum KeyboardButtonType {
  round ='round'
}

export interface Game {
  ID: string,
  NAME: string,
  URL: string,
  COMMAND: Array<string>,
  SAVE: {
    PATH: string,
    REGEXP: RegExp
  },
  JOYSTICK?: boolean
  KEYBOARDS?: Array<{
    context: string,
    keyCode?: number,
    action?: string,
    options?: {
      type?: keyof typeof KeyboardButtonType,
      size?: number | string,
      position?: Pos
    }
  }>
}
