import { isTouchEvent } from './isTouchEvent'
import type { PointerLikeEvent } from '@/types'

export function isPointerLikeEvent(event: any): event is PointerLikeEvent {
  if (isTouchEvent(event)) {
    return true
  }

  if (typeof window.MouseEvent !== 'undefined' && event instanceof window.MouseEvent) {
    return true
  }

  if (typeof window.PointerEvent !== 'undefined' && event instanceof window.PointerEvent) {
    return true
  }

  return false
}
