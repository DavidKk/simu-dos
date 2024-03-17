import jQuery from './jQuery'
import { deprecated } from '@/utils'
import { PointerEvent } from '@/constants/event'

export default function disableZoom() {
  let lastTouchEnd = 0
  return deprecated(
    jQuery(document.documentElement).addEventsListener(
      PointerEvent.End,
      (event) => {
        const now = Date.now()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }

        lastTouchEnd = now
      },
      { passive: false }
    )
  )
}
