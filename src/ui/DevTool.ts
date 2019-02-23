import Stats from 'stats-js'
import { getRootFontSize } from '../services/responsive'

export default class DevTool {
  private stats: Stats
  private isBegan: boolean = false

  constructor () {
    if (process.env.NODE_ENV === 'development') {
      this.stats = new Stats()
      this.stats.showPanel(0)

      window.addEventListener('resize', () => this.resize())
      this.resize()

      document.body.appendChild(this.stats.dom)
    }
  }

  public resize (): void {
    if (this.stats) {
      let rootFontSize = getRootFontSize()

      Array.prototype.forEach.call(this.stats.dom.children, (canvas) => {
        if (canvas.tagName && canvas.tagName.toLowerCase() === 'canvas') {
          canvas.style.width = `${canvas.width / rootFontSize}rem`
          canvas.style.height = `${canvas.height / rootFontSize}rem`
        }
      })
    }
  }

  public begin (): void {
    this.stats && this.isBegan === false && this.stats.begin()
    this.isBegan = true
  }

  public end (): void {
    this.stats && this.isBegan === true && this.stats.end()
    this.isBegan = false
  }
}
