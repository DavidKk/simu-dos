export function sleep(wait = Math.floor(Math.random() * 100)) {
  return new Promise<void>((resolve) => setTimeout(resolve, wait))
}
