import { RootFontSize } from '../services/responsive'

export const px2rem = (value: number, rootFontSize: number = RootFontSize): string => {
  return value / rootFontSize + 'rem'
}
