import type { DpadDirection } from '@/types/contorls/dpad'

export function isDirection(direction: any): direction is DpadDirection {
  return ['up', 'down', 'left', 'right'].includes(direction)
}
