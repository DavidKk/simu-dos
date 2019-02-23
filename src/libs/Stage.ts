import DOSBox from './DosBox'
import { DGStage } from '../types'

export default class Stage implements DGStage {
  private spinner: HTMLElement = null
  private container: HTMLDivElement = null
  private stage: HTMLCanvasElement = null
  private dosbox: DOSBox = null

  constructor (container: HTMLDivElement) {
    this.container = container
    this.spinner = document.getElementById('spinner')
    this.stage = document.createElement('canvas')
    this.container.appendChild(this.stage)

    window.addEventListener('resize', this.resize.bind(this))
    this.resize()

    this.toggleSpinner(false)
  }

  public init (): DOSBox {
    if (!this.dosbox) {
      this.dosbox = new DOSBox(this.stage)
    }

    return this.dosbox
  }

  private _toggleElement (element: HTMLElement, isOpen: boolean = true): void {
    isOpen === true ? element.classList.add('in') : element.classList.remove('in')
  }

  public toggleSpinner (isOpen: boolean = true): void {
    return this._toggleElement(this.spinner, isOpen)
  }

  public resize (): void {
    if (this.dosbox) {
      let { innerWidth: width, innerHeight: height } = window
      this.dosbox.setSize(width, height)
    }
  }

  public async reset (): Promise<void> {
    if (this.dosbox) {
      await this.dosbox.destroy()
      this.dosbox = undefined
    }
  }
}
