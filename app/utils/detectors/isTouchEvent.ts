export function isTouchEvent(event: Event): event is TouchEvent {
  return typeof window.TouchEvent !== 'undefined' && event instanceof window.TouchEvent
}
