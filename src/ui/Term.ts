import padEnd from 'lodash/padEnd'
import { DGTerm } from '../types'

export default class Term implements DGTerm {
  private container: HTMLDivElement
  private screen: HTMLDivElement
  private lines: Array<HTMLDivElement> = []

  get currentLine (): HTMLDivElement {
    return this.lines[this.lines.length - 1]
  }

  constructor (container: HTMLDivElement) {
    this.container = container
    this.screen = document.createElement('div')
    this.screen.className = 'term'
    this.container.appendChild(this.screen)

    this.newline().innerText = 'C:> '
  }

  private covertUnit (value: number, units: Array<string>): string {
    let unit = units.shift()
    if (value > 1024) {
      value = value / 1024
      return this.covertUnit(value, units)
    }

    return value.toFixed(2) + unit
  }

  public newline (): HTMLDivElement {
    const line = document.createElement('div')
    line.className = 'term-line'

    this.screen.appendChild(line)
    this.lines.push(line)

    return line
  }

  public print (context: string): void {
    let line = this.newline()
    line.append(context)
  }

  public relace (context: string, line: HTMLElement = this.currentLine): void {
    line.innerText = context
  }

  public progress (context: string, loaded: number, total: number, size: number = 10, line: HTMLElement): void {
    let units = ['bytes', 'K', 'M', 'G']
    let progress = Math.floor(loaded / total * 100)
    let repeatTimes = progress / size
    let repeatText = '-'.repeat(repeatTimes === Infinity ? 0 : repeatTimes)
    let progressText = padEnd(repeatText, size, '　')
    let loadedText = this.covertUnit(loaded, [].concat(units))
    let totalText = this.covertUnit(total, [].concat(units))
    this.relace(`Download [${progressText}] ${progress}% ${loadedText}/${totalText} ${context}`, line)
  }

  public inputChar (char: string): void {
    char = char[0]

    if (char === '\n') {
      let wrap = document.createElement('br')
      this.currentLine.appendChild(wrap)
    } else {
      this.currentLine.append(char)
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

  public show (): void {
    this.screen.style.display = 'block'
  }

  public hide (): void {
    this.screen.style.display = 'none'
  }

  public scrollToButtom (): void {
    let { scrollHeight: top } = this.screen
    this.screen.scrollTo({ top })
  }
}
