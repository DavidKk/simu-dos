import { RootFontSize } from '../services/responsive'

export const px2rem = (value: number, rootFontSize: number = RootFontSize): string => {
  return value / rootFontSize + 'rem'
}

export const trimUnit = (value: string): { num: number, unit: string } => {
  let num = parseFloat(value)
  let unit = value.replace(num + '', '')
  return { num, unit }
}
