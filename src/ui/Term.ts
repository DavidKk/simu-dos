import padEnd from 'lodash/padEnd'
import Element from '../libs/Element'
import Component from '../libs/Component'
import { classnames } from '../share/style'
import * as Typings from '../typings'

export default class Term extends Component {
  private lines: Element[]

  public element: Element
  public screen: Element

  get currentLine (): Element {
    return this.lines[this.lines.length - 1]
  }

  constructor () {
    super()

    this.element = this.screen = new Element(['term', 'hidden'])
    this.lines = []

    this.init()
  }

  private covertUnit (value: number, units: Array<string>): string {
    let unit = units.shift()
    if (value > 1024) {
      value = value / 1024
      return this.covertUnit(value, units)
    }

    return value.toFixed(2) + unit
  }

  public init (): void {
    this.newline().setContext('C:> ')
  }

  public newline (classes?: Typings.ElementClassNames): Element {
    const line = new Element(['term-line', ...classnames(classes)], null, 'pre')

    this.screen.append(line)
    this.lines.push(line)

    return line
  }

  public log (context: string): void {
    let line = this.newline()
    line.appendContext(context)
  }

  public info (context: string): void {
    let line = this.newline('info')
    line.appendContext(context)
  }

  public success (context: string): void {
    let line = this.newline('success')
    line.appendContext(context)
  }

  public warn (context: string): void {
    let line = this.newline('warn')
    line.appendContext(context)
  }

  public error (context: string): void {
    let line = this.newline('error')
    line.appendContext(context)
  }

  public relace (context: string, line: Element = this.currentLine): void {
    line.setContext(context)
  }

  public progress (context: string, loaded: number, total: number, size: number = 10, line: Element): void {
    total = total === 0 ? loaded : total

    let units = ['bytes', 'K', 'M', 'G']
    let progress = Math.floor(loaded / total * 100) || 0
    let repeatTimes = progress / size
    let repeatText = '#'.repeat(repeatTimes === Infinity ? 0 : repeatTimes)
    let progressText = padEnd(repeatText, size, '-')
    let loadedText = this.covertUnit(loaded, [].concat(units))
    let totalText = this.covertUnit(total, [].concat(units))

    this.relace(`Download [${progressText}] ${progress}% ${loadedText}/${totalText} ${context}`, line)
  }

  public inputChar (char: string): void {
    char = char[0]

    if (char === '\n') {
      let wrap = document.createElement('br')
      this.currentLine.append(wrap)
    } else {
      this.currentLine.appendContext(char)
    }
  }

  public simulateInput (context: string): Promise<void> {
    return new Promise((resolve) => {
      let i = 0
      let _loop = () => {
        if (i < context.length) {
          let char = context[i ++]
          this.inputChar(char)
          setTimeout(_loop, Math.floor(Math.random() * 100))
          return
        }

        resolve()
      }

      _loop()
    })
  }

  public clear (): void {
    this.lines.splice(0).forEach((line) => {
      this.screen.removeChild(line)
    })
  }

  public reset (): void {
    this.clear()
    this.init()
  }

  public show (): void {
    this.screen.style.display = 'block'
  }

  public hide (): void {
    this.screen.style.display = 'none'
  }

  public scrollToButtom (): void {
    const { scrollHeight: top } = this.screen
    this.screen.scrollTo({ top })
  }

  public getScreenHeight (): number {
    const { scrollHeight: top } = this.screen
    return top
  }

  public destroy (): void {
    super.destroy()

    this.screen.destroy()
    this.lines.splice(0).forEach((item) => item.destroy())

    this.lines = undefined
    this.screen = undefined
    this.element = undefined

    this.destroy = Function.prototype as any
  }
}
