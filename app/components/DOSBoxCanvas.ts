import { Component, define } from '@/libs/Component'
import { deprecated } from '@/utils'
import PointerEvent from '@/constants/event'
import { requestFullscreen } from '@/services/fullscreen'

@define('dosbox-canvas')
export default class DOSBoxCanvas extends Component {
  public canvas: HTMLCanvasElement

  public bindings() {
    this.canvas = document.createElement('canvas')
    this.appendChild(this.canvas)

    return deprecated(
      this.addEventsListener(PointerEvent.Start, async () => {
        await requestFullscreen(this.canvas)
      })
    )
  }
}
