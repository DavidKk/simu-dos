import { ROOT_FONT_SIZE } from '@/constants/definations'

export function px2rem(value: number, rootFontSize = ROOT_FONT_SIZE) {
  return value / rootFontSize + 'rem'
}
