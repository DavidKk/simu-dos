export function uniq<T>(target: T[] | IterableIterator<T>) {
  return Array.from(new Set(target))
}
