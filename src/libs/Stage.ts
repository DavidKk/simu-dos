import DOSBox from './DosBox'
import Element from './Element'
import Term from '../ui/Term'
import * as Typings from '../typings'
import Component from './Component'

export default class Stage {
  private show: Typings.StageShowType
  private handleResizeStage: Typings.EventHandle

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

    this.handleResizeStage = this.resize.bind(this)
    window.addEventListener('resize', this.handleResizeStage)

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

  public print (context: string, type: 'log' | 'info' | 'success' | 'warn' | 'error' = 'log'): void {
    switch (type) {
      case 'info':
        this.term.info(context)
        break
      case 'success':
        this.term.success(context)
        break
      case 'warn':
        this.term.warn(context)
        break
      case 'error':
        this.term.error(context)
        break
      case 'log':
      default:
        this.term.log(context)
        break
    }

    this.term.scrollToButtom()
  }

  public progress (context?: string): (context: string, loaded: number, total: number, size?: number) => void {
    const line = this.term.newline()
    context && this.term.relace(context, line)

    let scrollHeight = this.term.getScreenHeight()
    this.term.scrollToButtom()

    return (context: string, loaded: number, total: number, size?: number): void => {
      this.term.progress(context, loaded, total, size, line)

      const newScrollHeight = this.term.getScreenHeight()
      if (scrollHeight !== newScrollHeight) {
        scrollHeight = newScrollHeight
        this.term.scrollToButtom()
      }
    }
  }

  public touchToContinue (): Promise<number> {
    return new Promise((resolve) => {
      let handleTouch = () => {
        document.body.removeEventListener('keyup', handleTouch)
        handleTouch = undefined
        resolve()
      }

      document.body.addEventListener('keyup', handleTouch)
    })
  }

  public pressToContinue (): Promise<number> {
    return new Promise((resolve) => {
      let handleKeyPress = (event: KeyboardEvent) => {
        document.body.removeEventListener('keyup', handleKeyPress)
        handleKeyPress = undefined

        resolve(event.keyCode)
      }

      document.body.addEventListener('keyup', handleKeyPress)
    })
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
      const { innerWidth: width, innerHeight: height } = window
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
    window.removeEventListener('resize', this.handleResizeStage)

    this.canvas.destroy()
    this.term.destroy()
    this.dosbox.destroy()

    this.handleResizeStage = undefined
    this.canvas = undefined
    this.term = undefined
    this.dosbox = undefined
    this.show = undefined

    this.destroy = Function.prototype as any
  }
}
