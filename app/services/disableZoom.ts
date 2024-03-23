import jQuery from './jQuery'
import { deprecated } from '@/utils'
import PointerEvent from '@/constants/event'

export default function disableZoom() {
  return deprecated(
    // make sure there are no other document touchend events
    jQuery(document).addEventsListener(
      PointerEvent.End,
      (event) => {
        event.preventDefault()
        event.stopPropagation()
      },
      false
    )
  )
}
