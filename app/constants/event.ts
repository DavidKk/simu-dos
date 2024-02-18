export const PointerEvent = {
  Start: 'pointerdown',
  Move: 'pointermove',
  End: ['pointerup', 'pointercancel'],
}

export const MSPointerEvent = {
  Start: 'MSPointerMove',
  Move: 'MSPointerMove',
  End: 'MSPointerUp',
}

export const TouchEvent = {
  Start: 'touchstart',
  Move: 'touchmove',
  End: ['touchend', 'touchcancel'],
}

export const MouseEvent = {
  Start: 'mousedown',
  Move: 'mousemove',
  End: 'mouseup',
}

export default (() => {
  if (window.hasOwnProperty('PointerEvent')) {
    return PointerEvent
  }

  if (window.hasOwnProperty('MSPointerEvent')) {
    return MSPointerEvent
  }

  if ('ontouchstart' in window) {
    return TouchEvent
  }

  return MouseEvent
})()
