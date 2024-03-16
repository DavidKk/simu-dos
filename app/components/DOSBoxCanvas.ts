import { Component, define } from '@/libs/Component'

@define('dosbox-canvas')
export default class DOSBoxCanvas extends Component {
  public canvas: HTMLCanvasElement

  public bindings() {
    this.canvas = document.createElement('canvas')
    this.appendChild(this.canvas)
  }
}
