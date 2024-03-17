import { Component, define } from '@/libs/Component'

@define('firefly')
export default class Firefly extends Component {
  protected flys: Component[]

  public bindings() {
    this.flys = new Array(4).fill('firefly').map((tag) => {
      return this.appendElement(tag)
    })
  }
}
