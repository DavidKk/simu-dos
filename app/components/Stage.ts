import { define, Component } from '@/libs/Component'
import DosBox from '@/libs/DosBox'
import DOSBoxCanvas from '@/components/DOSBoxCanvas'
import Terminal from '@/components/Terminal'

export type StageActiveType = 'term' | 'canvas'

@define('stage')
export default class Stage extends Component {
  protected activeType: StageActiveType = 'term'
  protected terminal: Terminal
  protected canvas: DOSBoxCanvas
  protected dosbox: DosBox
  protected resizeStageHandle: () => void

  public get isTerminalActive () {
    return this.activeType === 'term'
  }

  public get isCanvasActive () {
    return this.activeType === 'canvas'
  }

  /** 当前行 */
  public get currentLine() {
    return this.terminal.currentLine
  }

  protected bindings() {
    this.terminal = this.appendElement(Terminal)

    this.canvas = DOSBoxCanvas.createElement()
    this.appendChild(this.canvas)

    this.resizeStageHandle = this.resize.bind(this)
    window.addEventListener('resize', this.resizeStageHandle)

    return () => {
      window.removeEventListener('resize', this.resizeStageHandle)
    }
  }

  public launch() {
    if (!this.dosbox) {
      this.dosbox = new DosBox(this.canvas.canvas)
    }

    return this.dosbox
  }

  public simulateInput(content: string) {
    return this.terminal.simulateInput(content)
  }

  public simulateClean() {
    return this.terminal.clear()
  }

  public simulateReset() {
    return this.terminal.reset()
  }

  public print(content: string, type: 'log' | 'info' | 'success' | 'warn' | 'error' = 'log') {
    switch (type) {
      case 'info': {
        this.terminal.info(content)
        break
      }
      case 'success': {
        this.terminal.success(content)
        break
      }
      case 'warn': {
        this.terminal.warn(content)
        break
      }
      case 'error': {
        this.terminal.error(content)
        break
      }
      case 'log':
      default:
        this.terminal.log(content)
        break
    }

    this.terminal.scrollToButtom()
  }

  public progress(content?: string): (content: string, loaded: number, total: number, size?: number) => void {
    const line = this.terminal.newline()
    content && this.terminal.relace(content, line)

    let scrollHeight = this.terminal.getScreenHeight()
    this.terminal.scrollToButtom()

    return (content: string, loaded: number, total: number, size?: number): void => {
      this.terminal.progress(content, loaded, total, size, line)

      const newScrollHeight = this.terminal.getScreenHeight()
      if (scrollHeight !== newScrollHeight) {
        scrollHeight = newScrollHeight
        this.terminal.scrollToButtom()
      }
    }
  }

  public touchToContinue() {
    return new Promise<void>((resolve) => {
      const handleTouch = () => {
        document.body.removeEventListener('keyup', handleTouch)
        resolve()
      }

      document.body.addEventListener('keyup', handleTouch)
    })
  }

  public pressToContinue() {
    return new Promise<string>((resolve) => {
      const handleKeyPress = (event: KeyboardEvent) => {
        document.body.removeEventListener('keyup', handleKeyPress)
        resolve(event.key)
      }

      document.body.addEventListener('keyup', handleKeyPress)
    })
  }

  public toggleTerminal(isOpen: boolean = !this.isTerminalActive) {
    return this.terminal.toggle(isOpen)
  }

  public toggleCanvas(isOpen: boolean = !this.isCanvasActive) {
    return isOpen ? this.canvas.fadeIn() : this.canvas.fadeOut()
  }

  public resize() {
    if (!this.dosbox) {
      return
    }

    const { innerWidth: width, innerHeight: height } = window
    this.dosbox.setSize(width, height)
  }

  public async reset() {
    this.dosbox.destroy()
  }
}
