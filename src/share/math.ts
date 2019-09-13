import * as Typings from '../typings'

export const distance = (pointA: Typings.Point, pointB: Typings.Point): number => {
  let dx = pointB.x - pointA.x
  let dy = pointB.y - pointA.y
  return Math.sqrt((dx * dx) + (dy * dy))
}

export const angle = (pointA: Typings.Point, pointB: Typings.Point): number => {
  const dx = pointB.x - pointA.x
  const dy = pointB.y - pointA.y
  return degree(Math.atan2(dy, dx))
}

export const degree = (radian: number): number => {
  return radian * (180 / Math.PI)
}

export const radian = (angle: number): number => {
  return angle * (Math.PI / 180)
}

export const coord = (position: Typings.Point, distance: number, angle: number): Typings.Point => {
  let coord = { x: 0, y: 0 }
  let _radian = radian(angle)
  coord.x = position.x - distance * Math.cos(_radian)
  coord.y = position.y - distance * Math.sin(_radian)
  return coord
}
