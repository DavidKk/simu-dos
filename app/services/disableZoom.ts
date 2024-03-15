export default function disableZoom() {
  const handleTouchStart = (event: TouchEvent) => {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  }

  const handleTouchEnd = (event: TouchEvent) => {
    const now = new Date().getTime()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }

    lastTouchEnd = now
  }

  const handleGesturestart = (event: Event) => {
    event.preventDefault()
  }

  let lastTouchEnd = 0
  document.addEventListener('touchstart', handleTouchStart)
  document.addEventListener('touchend', handleTouchEnd, false)
  document.addEventListener('gesturestart', handleGesturestart)

  return () => {
    document.removeEventListener('touchstart', handleTouchStart)
    document.removeEventListener('touchend', handleTouchEnd, false)
    document.removeEventListener('gesturestart', handleGesturestart)
  }
}
