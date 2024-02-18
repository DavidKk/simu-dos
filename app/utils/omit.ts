import type { Optional } from 'utility-types'

export function omit<T extends Record<string, unknown>, K extends keyof T>(target: T, names: K[]) {
  return Object.fromEntries(function*() {
    for (const [name, value] of Object.entries(target)) {
      if (!names.includes(name as K)) {
        yield [name, value]
      }
    }
  }()) as Optional<T, K>
}
