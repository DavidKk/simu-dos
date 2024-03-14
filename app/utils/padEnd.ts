export function padEnd(str: string, targetLength: number, padChar = ' ') {
  if (str.length >= targetLength) {
    return str
  }

  const padCount = targetLength - str.length
  const padString = padChar.repeat(padCount)
  return str + padString
}
