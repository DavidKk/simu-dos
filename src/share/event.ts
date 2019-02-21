export const pointer = {
  start: 'pointerdown',
  move: 'pointermove',
  end: ['pointerup', 'pointercancel']
}

export const msPointer = {
  start: 'MSPointerMove',
  move: 'MSPointerMove',
  end: 'MSPointerUp'
}

export const touch = {
  start: 'touchstart',
  move: 'touchmove',
  end: ['touchend', 'touchcancel']
}

export const mouse = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
}

export default (() => {
  if (window.hasOwnProperty('PointerEvent')) {
    return pointer
  }

  if (window.hasOwnProperty('MSPointerEvent')) {
    return msPointer
  }

  if ('ontouchstart' in window) {
    return touch
  }

  return mouse
})()
