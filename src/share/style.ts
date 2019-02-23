import { getRootFontSize } from '../services/responsive'

export const px2rem = (value: number, rootFontSize: number = getRootFontSize()): string => {
  return value / rootFontSize + 'rem'
}
