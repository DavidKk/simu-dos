import DOSBox from './DosBox'

export default class Stage {
  public spinner: HTMLElement = null
  public stage: HTMLCanvasElement = null
  public dosbox: DOSBox = null

  constructor () {
    this.spinner = document.getElementById('spinner')
    this.stage = document.createElement('canvas')
    document.body.appendChild(this.stage)

    this.dosbox = new DOSBox(this.stage)

    window.addEventListener('resize', this.resize.bind(this))
    this.resize()

    this.toggleSpinner(false)
  }

  _toggleElement (element: HTMLElement, isOpen: boolean = true): void {
    isOpen === true ? element.classList.add('in') : element.classList.remove('in')
  }

  toggleSpinner (isOpen: boolean = true): void {
    return this._toggleElement(this.spinner, isOpen)
  }

  resize (): void {
    let { innerWidth: width, innerHeight: height } = window
    this.dosbox.setSize(width, height)
  }

  async destory (): Promise<void> {
    await this.dosbox.destroy()
    this.stage.parentElement.removeChild(this.stage)

    this.dosbox = undefined
    this.stage = undefined
    this.spinner = undefined
  }
}
