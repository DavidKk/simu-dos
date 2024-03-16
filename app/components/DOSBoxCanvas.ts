import { Component, define } from '@/libs/Component'
import { deprecated, requestFullscreen } from '@/utils'
import { PointerEvent } from '@/constants/event'

@define('dosbox-canvas')
export default class DOSBoxCanvas extends Component {
  public canvas: HTMLCanvasElement

  public bindings() {
    this.canvas = document.createElement('canvas')
    this.appendChild(this.canvas)

    return deprecated(
      this.addEventsListener(PointerEvent.Start, () => {
        requestFullscreen()
      })
    )
  }
}
