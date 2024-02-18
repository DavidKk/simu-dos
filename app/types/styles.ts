/** 样式值 */
export type StyleValue = string | number

/** 大小 */
export type StyleSize =
  | StyleValue
  | {
      width: StyleValue
      height: StyleValue
    }

/** 位置点 */
export interface Point {
  x: number
  y: number
}

/** 位置 */
export interface Position {
  top?: StyleValue
  right?: StyleValue
  bottom?: StyleValue
  left?: StyleValue
}

export type ElementClassNameItem = string | { [key: string]: boolean }
export type ElementClassNameArray = (ElementClassNameItem | ElementClassNameArray)[]
export type ElementClassNames = ElementClassNameItem | ElementClassNameArray
