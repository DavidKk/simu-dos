import { RootFontSize } from '../services/responsive'

export const px2rem = (value: number, rootFontSize: number = RootFontSize): string => {
  return value / rootFontSize + 'rem'
}

export const trimUnit = (value: string): { number: number, unit: string } => {
  let number: number = parseFloat(value)
  let unit: string = value.replace(number + '', '')
  return { number, unit }
}
