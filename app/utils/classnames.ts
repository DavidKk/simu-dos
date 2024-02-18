import { ElementClassNames } from '@/types'

export function classnames(classes: ElementClassNames): string[] {
  if (Array.isArray(classes)) {
    const names = Array.from(new Set(classes)).map(classnames)
    return names.flatMap((name) => name).filter((name) => name)
  }

  if (typeof classes === 'object') {
    if (classes === null) {
      return []
    }

    const names = Array.from(
      (function* () {
        for (const [name, flag] of Object.entries(classes)) {
          if (flag) {
            yield name
          }
        }
      })()
    )

    return classnames(names)
  }

  if (typeof classes === 'string') {
    const names = classes.split(' ')
    return Array.from(new Set(names))
  }

  return []
}
