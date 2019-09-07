import DOSBox from './DosBox'
import Term from '../ui/Term'

export default class Stage {
  public container: HTMLDivElement
  public canvas: HTMLCanvasElement
  public term: Term
  public dosbox: DOSBox

  constructor (container: HTMLDivElement) {
    this.container = container
    this.term = new Term(this.container)

    this.canvas = document.createElement('canvas')

    this.canvas.className = 'stage'
    this.container.appendChild(this.canvas)

    window.addEventListener('resize', this.resize.bind(this))
    this.resize()

    let spinner = document.getElementById('spinner')
    this._toggle(spinner, false)
    setTimeout(() => spinner.parentNode.removeChild(spinner), 3e3)
  }

  public launch (): DOSBox {
    if (!this.dosbox) {
      this.dosbox = new DOSBox(this.canvas)
    }

    return this.dosbox
  }

  public async simulateInput (context: string): Promise<void> {
    await this.term.simulateInput(context)
  }

  public simulateClean (): void {
    this.term.clear()
  }

  public print (context: string): void {
    this.term.print(context)
    this.term.scrollToButtom()
  }

  public progress (): (context: string, loaded: number, total: number, size?: number) => void {
    let line = this.term.newline()

    return (context: string, loaded: number, total: number, size?: number): void => {
      this.term.progress(context, loaded, total, size, line)
    }
  }

  private _toggle (element: HTMLElement, isOpen: Boolean = true) {
    isOpen ? element.classList.add('in') : element.classList.remove('in')
  }

  public toggleTerm (isOpen: boolean = true): void {
    return isOpen ? this.term.show() : this.term.hide()
  }

  public toggle (isOpen: boolean = true): void {
    this._toggle(this.canvas, isOpen)
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
