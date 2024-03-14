export function deprecated(...fns: (() => void)[]) {
  return () => fns.forEach((fn) => fn())
}
