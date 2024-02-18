import { define, Component } from '@/libs/Component'
import { covertUnit, padEnd, sleep } from '@/utils'
import type { ElementClassNames } from '@/types'

@define('terminal')
export default class Terminal extends Component {
  protected lines: Component[] = []

  public get currentLine() {
    return this.lines[this.lines.length - 1]
  }

  public connectedCallback() {
    super.connectedCallback()
    this.newline().innerText = 'C:> '
  }

  public newline(classNames?: ElementClassNames) {
    const line = this.appendElement('term-line', classNames)
    this.lines.push(line)
    return line
  }

  public log(content: string) {
    let line = this.newline()
    line.appendContentText(content)
  }

  public info(content: string) {
    let line = this.newline('info')
    line.appendContentText(content)
  }

  public success(content: string) {
    let line = this.newline('success')
    line.appendContentText(content)
  }

  public warn(content: string) {
    let line = this.newline('warn')
    line.appendContentText(content)
  }

  public error(content: string) {
    let line = this.newline('error')
    line.appendContentText(content)
  }

  public relace(content: string, line: Component = this.currentLine): void {
    line.setContent(content)
  }

  public progress(content: string, loaded: number, total: number, size: number = 10, line: Component): void {
    const finalTotal = total === 0 ? loaded : total

    const units = ['bytes', 'K', 'M', 'G']
    const progress = Math.floor((loaded / finalTotal) * 100) || 0
    const repeatTimes = progress / size
    const repeatText = '#'.repeat(repeatTimes === Infinity ? 0 : repeatTimes)
    const progressText = padEnd(repeatText, size, '-')
    const loadedText = covertUnit(loaded, [...units])
    const totalText = covertUnit(finalTotal, [...units])
    const message = `Download [${progressText}] ${progress}% ${loadedText}/${totalText} ${content}`
    this.relace(message, line)
  }

  public inputChar(char: string) {
    char = char[0]

    if (char === '\n') {
      let wrap = document.createElement('br')
      this.currentLine.append(wrap)
      return
    }
    
    this.currentLine.appendContentText(char)
  }

  public async simulateInput(content: string) {
    for (const char of Array.from(new Set(content))) {
      this.inputChar(char)
      await sleep()
    }
  }

  public clear() {
    this.lines.splice(0).forEach((line) => {
      this.removeChild(line)
    })
  }

  public reset() {
    this.clear()
    this.connectedCallback()
  }

  public scrollToButtom() {
    const top = this.scrollHeight
    this.scrollTo({ top })
  }

  public getScreenHeight() {
    return this.scrollHeight
  }
}
