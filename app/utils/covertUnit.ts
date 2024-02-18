export function covertUnit(value: number, units: Array<string>) {
  const unit = units.shift()
  if (value > 1024) {
    value = value / 1024
    return covertUnit(value, units)
  }

  return value.toFixed(2) + unit
}
