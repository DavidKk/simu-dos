/** 去除单位 */
export function trimUnit(value: string) {
  let num = parseFloat(value)
  let unit = value.replace(num + '', '')
  return { num, unit }
}
