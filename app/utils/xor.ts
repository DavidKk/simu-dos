export function xor<T>(array: T[], values: T[]): T[] {
  const seen = new Map<T, boolean>()
  const result = Array.from(
    (function* () {
      for (const value of array) {
        if (seen.has(value)) {
          continue
        }

        seen.set(value, true)
        yield value
      }
    })()
  )

  for (const value of values) {
    if (seen.has(value)) {
      result.splice(result.indexOf(value), 1)
      seen.delete(value)
    }
  }

  return result
}
