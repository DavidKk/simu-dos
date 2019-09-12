import padEnd from 'lodash/padEnd'

export default class Term {
  private container: HTMLElement
  private screen: HTMLDivElement
  private lines: Array<HTMLPreElement>

  get currentLine (): HTMLPreElement {
    return this.lines[this.lines.length - 1]
  }

  constructor (container: HTMLElement) {
    this.container = container
    this.screen = document.createElement('div')
    this.lines = []

    this.screen.className = 'term'
    this.container.appendChild(this.screen)

    this.initialize()
  }

  private covertUnit (value: number, units: Array<string>): string {
    let unit = units.shift()
    if (value > 1024) {
      value = value / 1024
      return this.covertUnit(value, units)
    }

    return value.toFixed(2) + unit
  }

  public initialize (): void {
    this.newline().innerText = 'C:> '
  }

  public newline (): HTMLPreElement {
    const line = document.createElement('pre')
    line.className = 'term-line'

    this.screen.appendChild(line)
    this.lines.push(line)

    return line
  }

  public print (context: string): void {
    let line = this.newline()
    line.innerText += context
  }

  public relace (context: string, line: HTMLElement = this.currentLine): void {
    line.innerText = context
  }

  public progress (context: string, loaded: number, total: number, size: number = 10, line: HTMLElement): void {
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
      this.currentLine.appendChild(wrap)
    } else {
      this.currentLine.innerText += char
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
    this.initialize()
  }

  public show (): void {
    this.screen.style.display = 'block'
  }

  public hide (): void {
    this.screen.style.display = 'none'
  }

  public scrollToButtom (): void {
    let { scrollHeight: top } = this.screen
    this.screen.scrollTop = top
  }
}
