import DOSBox from './DosBox'
import Element from './Element'
import Term from '../ui/Term'
import * as Typings from '../typings'
import Component from './Component'

export default class Stage {
  private show: Typings.StageShowType
  public canvas: Element
  public term: Term
  public dosbox: DOSBox

  public get isOpenTerm (): boolean {
    return this.show === 'term'
  }

  public get isOpenCanvas (): boolean {
    return this.show === 'canvas'
  }

  constructor () {
    this.show = 'term'
    this.term = new Term()
    this.canvas = new Element(['stage', 'hidden'], null, 'canvas')

    window.addEventListener('resize', this.resize.bind(this))
    this.resize()

    const spinner = new Element(document.getElementById('spinner'))
    spinner.addClass('fadeout')
    setTimeout(() => spinner.remove(), 3e3)
  }

  public appendTo (element: Component | Element | HTMLElement): void {
    this.term.appendTo(element)
    this.canvas.appendTo(element instanceof Component ? element.element : element)
  }

  public launch (): DOSBox {
    if (!this.dosbox) {
      this.dosbox = new DOSBox(this.canvas.element as HTMLCanvasElement)
    }

    return this.dosbox
  }

  public simulateInput (context: string): Promise<void> {
    return this.term.simulateInput(context)
  }

  public simulateClean (): void {
    this.term && this.term.clear()
  }

  public simulateReset (): void {
    this.term && this.term.reset()
  }

  public print (context: string): void {
    this.term.print(context)
    this.term.scrollToButtom()
  }

  public progress (context?: string): (context: string, loaded: number, total: number, size?: number) => void {
    let line = this.term.newline()
    context && this.term.relace(context, line)

    let scrollHeight = this.term.getScreenHeight()
    return (context: string, loaded: number, total: number, size?: number): void => {
      this.term.progress(context, loaded, total, size, line)

      let newScrollHeight = this.term.getScreenHeight()
      if (scrollHeight !== newScrollHeight) {
        scrollHeight = newScrollHeight
        this.term.scrollToButtom()
      }
    }
  }

  public toggleTerm (isOpen: boolean = !this.isOpenTerm): void {
    return this.term.toggle(isOpen)
  }

  public toggleCanvas (isOpen: boolean = !this.isOpenCanvas): void {
    return isOpen ? this.canvas.fadeIn() : this.canvas.fadeOut()
  }

  public switch (type: Typings.StageShowType): void {
    switch (type) {
      case 'term':
        this.toggleCanvas(false)
        this.toggleTerm(true)
        break
      case 'canvas':
        this.toggleTerm(false)
        this.toggleCanvas(true)
        break
    }
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

  public destroy (): void {
    this.canvas.destroy()
    this.term.destroy()
    this.dosbox.destroy()

    this.canvas = undefined
    this.term = undefined
    this.dosbox = undefined
    this.show = undefined

    this.destroy = Function.prototype as any
  }
}
