import Element from '../libs/Element'
import Component from '../libs/Component'
import TouchEvents from '../share/event'
import * as Typings from '../typings'

export default class DPad extends Component {
  public element: Element
  public up: Element
  public right: Element
  public down: Element
  public left: Element

  constructor () {
    super()

    this.up = new Element(['dpad-btn', 'dpad-up'])
    this.right = new Element(['dpad-btn', 'dpad-right'])
    this.down = new Element(['dpad-btn', 'dpad-down'])
    this.left = new Element(['dpad-btn', 'dpad-left'])
    this.element = new Element('dpad', [this.up, this.right, this.down, this.left])

    this.bindings()
  }

  private bindings (): void {
    const wrapTouchDown = (direction: Typings.DPadDirectionType) => (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      const element = event.target as HTMLElement
      element.classList.add('active')

      this.emit('actions', { type: 'down', direction })
    }

    const wrapTouchUp = (direction: Typings.DPadDirectionType) => (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      const element = event.target as HTMLElement
      element.classList.remove('active')

      this.emit('actions', { type: 'up', direction })
    }

    this.up.addListener(TouchEvents.start, wrapTouchDown('up'))
    this.right.addListener(TouchEvents.start, wrapTouchDown('right'))
    this.down.addListener(TouchEvents.start, wrapTouchDown('down'))
    this.left.addListener(TouchEvents.start, wrapTouchDown('left'))

    this.up.addListener(TouchEvents.end, wrapTouchUp('up'))
    this.right.addListener(TouchEvents.end, wrapTouchUp('right'))
    this.down.addListener(TouchEvents.end, wrapTouchUp('down'))
    this.left.addListener(TouchEvents.end, wrapTouchUp('left'))
  }

  private unbindings (): void {
    this.up.removeAllListeners()
    this.right.removeAllListeners()
    this.down.removeAllListeners()
    this.left.removeAllListeners()
  }

  public onActions (handle: (event: any) => void): void {
    this.addListener('actions', handle)
  }

  public destroy (): void {
    super.destroy()

    this.unbindings()

    this.element.destroy()
    this.up.destroy()
    this.right.destroy()
    this.down.destroy()
    this.left.destroy()
    this.element.destroy()

    this.up = undefined
    this.right = undefined
    this.down = undefined
    this.left = undefined
    this.element = undefined

    this.destroy = Function.prototype as any
  }
}
