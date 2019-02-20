import DOSBox from './DosBox'

export default class Stage {
  private spinner: HTMLElement = null
  private container: HTMLDivElement = null
  private stage: HTMLCanvasElement = null
  public dosbox: DOSBox = null

  constructor () {
    this.spinner = document.getElementById('spinner')
    this.container = document.createElement('div')
    this.stage = document.createElement('canvas')

    this.container.classList.add('stage')
    this.container.appendChild(this.stage)
    document.body.appendChild(this.container)

    this.dosbox = new DOSBox(this.stage)

    window.addEventListener('resize', this.resize.bind(this))
    this.resize()

    this.toggleSpinner(false)
  }

  private _toggleElement (element: HTMLElement, isOpen: boolean = true): void {
    isOpen === true ? element.classList.add('in') : element.classList.remove('in')
  }

  public toggleSpinner (isOpen: boolean = true): void {
    return this._toggleElement(this.spinner, isOpen)
  }

  public resize (): void {
    let { innerWidth: width, innerHeight: height } = window
    this.dosbox.setSize(width, height)
  }

  public async destory (): Promise<void> {
    await this.dosbox.destroy()
    this.stage.parentElement.removeChild(this.stage)

    this.dosbox = undefined
    this.stage = undefined
    this.spinner = undefined
  }
}
