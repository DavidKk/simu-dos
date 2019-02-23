import Stats from 'stats-js'
import eruda from 'eruda'
import { getRootFontSize } from '../services/responsive'
import { DGDevTool } from '../types'

export default class DevTool implements DGDevTool {
  private stats: Stats
  private isBegan: boolean = false

  constructor () {
    this.initEruda()
    this.initStats()
  }

  private initEruda () {
    eruda.init()
  }

  private initStats () {
    this.stats = new Stats()
    this.stats.showPanel(0)

    window.addEventListener('resize', () => this.resize())
    this.resize()

    document.body.appendChild(this.stats.dom)
  }

  public resize (): void {
    let rootFontSize = getRootFontSize()
    Array.prototype.forEach.call(this.stats.dom.children, (canvas) => {
      if (canvas.tagName && canvas.tagName.toLowerCase() === 'canvas') {
        canvas.style.width = `${canvas.width / rootFontSize}rem`
        canvas.style.height = `${canvas.height / rootFontSize}rem`
      }
    })
  }

  public begin (): void {
    this.isBegan === false && this.stats.begin()
    this.isBegan = true
  }

  public end (): void {
    this.isBegan === true && this.stats.end()
    this.isBegan = false
  }
}
