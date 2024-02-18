import { define } from '@/libs/Component'
import jQuerify from '@/libs/JQuerify'

@define('dosbox-canvas')
export default class DOSBoxCanvas extends jQuerify(HTMLElement) {
  public canvas: HTMLCanvasElement
  
  public connectedCallback() {
    this.canvas = document.createElement('canvas')
    this.appendChild(this.canvas)
  }
}
