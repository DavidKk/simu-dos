import Component from './Component'

export default class Keyboard extends Component {
  public zone: HTMLDivElement
  public container: HTMLDivElement

  constructor (zone: HTMLDivElement) {
    super()

    this.zone = zone

    this.container = this.el = document.createElement('div')
    this.container.classList.add('utils', 'open')

    this.zone.appendChild(this.container)
    this.bindings()
  }

  public bindings (): void {
    // keep
  }

  public unbindings (): void {
    // keep
  }

  public destroy (): void {
    super.destroy()

    this.unbindings()

    this.container.parentNode.removeChild(this.container)

    this.container = undefined

    this.destroy = Function.prototype as any
  }
}
