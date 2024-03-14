/** 去除单位 */
export function trimUnit(value: string) {
  const num = parseFloat(value)
  const unit = value.replace(num + '', '')
  return { num, unit }
}
