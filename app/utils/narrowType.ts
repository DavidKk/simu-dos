export function narrowType<T>(events: T | T[] | Set<T>) {
  if (Array.isArray(events)) {
    return Array.from(new Set(events))
  }

  if (events instanceof Set) {
    return Array.from(events)
  }

  return [events]
}
