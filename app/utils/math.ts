import type { Point } from '@/types'

export const distance = (pointA: Point, pointB: Point) => {
  const dx = pointB.x - pointA.x
  const dy = pointB.y - pointA.y
  return Math.sqrt(dx * dx + dy * dy)
}

export const angle = (pointA: Point, pointB: Point) => {
  const dx = pointB.x - pointA.x
  const dy = pointB.y - pointA.y
  return degree(Math.atan2(dy, dx))
}

export const degree = (radian: number) => {
  return radian * (180 / Math.PI)
}

export const radian = (angle: number) => {
  return angle * (Math.PI / 180)
}

export const coord = (position: Point, distance: number, angle: number): Point => {
  const coord = { x: 0, y: 0 }
  const _radian = radian(angle)
  coord.x = position.x - distance * Math.cos(_radian)
  coord.y = position.y - distance * Math.sin(_radian)
  return coord
}
