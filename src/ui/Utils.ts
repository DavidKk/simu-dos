import TouchEvent from '../conf/touch-event'
import Component from './Component'
import { isFullscreenEnabled, requestFullscreen, exitFullscreen } from '../share/fullscreen'
import * as Typings from '../typings'

export default class Keyboard extends Component {
  private handleFullScreen: Typings.DGEventHandle

  public zone: HTMLDivElement
  public container: HTMLDivElement
  public full: HTMLDivElement
  public isFullScreen: boolean

  constructor (zone: HTMLDivElement) {
    super()

    this.zone = zone

    this.container = this.el = document.createElement('div')
    this.container.classList.add('utils', 'open')

    if (isFullscreenEnabled() === true) {
      this.full = document.createElement('div')
      this.full.classList.add('utils-btn', 'full')
      this.container.appendChild(this.full)
    }

    this.zone.appendChild(this.container)
    this.bindings()
  }

  public _onRequestFullScreen (event: TouchEvent | MouseEvent | PointerEvent): void {
    event.preventDefault()
    event.stopPropagation()

    if (this.isFullScreen === true) {
      exitFullscreen()

      this.full.classList.remove('compress')
      this.full.classList.add('full')

    } else {
      requestFullscreen()

      this.full.classList.remove('full')
      this.full.classList.add('compress')

      this.isFullScreen = true
    }
  }

  public bindings (): void {
    if (this.full) {
      this.handleFullScreen = this._onRequestFullScreen.bind(this)
      this.bind(this.full, TouchEvent.end, this.handleFullScreen)
    }
  }

  public unbindings (): void {
    this.unbind(this.full, TouchEvent.end, this.handleFullScreen)
    this.handleFullScreen = undefined
  }

  public destroy (): void {
    super.destroy()

    this.unbindings()

    this.container.parentNode.removeChild(this.container)
    this.container.removeChild(this.full)

    this.container = undefined
    this.full = undefined

    this.destroy = Function.prototype as any
  }
}
