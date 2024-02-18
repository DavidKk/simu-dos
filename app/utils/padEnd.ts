export function padEnd(str: string, targetLength: number, padChar: string = ' ') {
  if (str.length >= targetLength) {
    return str
  }

  const padCount = targetLength - str.length
  const padString = padChar.repeat(padCount)
  return str + padString
}
