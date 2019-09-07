import responsive from './services/responsive'
import TouchEvents from './share/event'

window.addEventListener('resize', () => responsive())
responsive()

/**
 * Safari prevent zoom screen
 */
let lastTouchEnd = 0
const handleStopZoom = (event: TouchEvent) => {
  let now = Date.now()
  now - lastTouchEnd <= 300 && event.preventDefault()
  lastTouchEnd = now
}

document.addEventListener(TouchEvents.start, (event: TouchEvent) => event.touches && event.touches.length > 1 && event.preventDefault())

if (typeof TouchEvents.end === 'string') {
  document.addEventListener(TouchEvents.end, handleStopZoom, false)

} else if (Array.isArray(TouchEvents.end)) {
  TouchEvents.end.forEach((type) => {
    document.addEventListener(type, handleStopZoom, false)
  })
}

document.addEventListener('gesturestart', (event) => event.preventDefault())
