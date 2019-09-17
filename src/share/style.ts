import uniq from 'lodash/uniq'
import flattenDeep from 'lodash/flattenDeep'
import { RootFontSize } from '../services/responsive'
import * as Typings from '../typings'

export const px2rem = (value: number, rootFontSize: number = RootFontSize): string => {
  return value / rootFontSize + 'rem'
}

export const trimUnit = (value: string): { num: number, unit: string } => {
  let num = parseFloat(value)
  let unit = value.replace(num + '', '')
  return { num, unit }
}

export const classnames = (classes: Typings.ElementClassNames): string[] => {
  if (Array.isArray(classes)) {
    const names = uniq(classes).map(classnames)
    return flattenDeep(names).filter((name) => name) as string[]
  }

  if (typeof classes === 'object') {
    if (classes === null) {
      return []
    }

    const names = classes = Object.keys(classes).filter(name => classes[name] === true)
    return classnames(names)
  }

  if (typeof classes === 'string') {
    const names = classes.split(' ')
    return uniq(names)
  }

  return []
}
