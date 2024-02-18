import type { PointerLikeEvent } from '@/types'

export function isPointerLikeEvent(event: any): event is PointerLikeEvent {
  return event instanceof TouchEvent || event instanceof MouseEvent || event instanceof PointerEvent
}
