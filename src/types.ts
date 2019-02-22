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
    keycode: number,
    options?: {
      size?: number,
      position?: Pos
    }
  }>
}
