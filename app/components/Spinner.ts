import { define, Component } from '@/libs/Component'

@define('spinner')
export default class Spinner extends Component {
  protected bindings() {
    new Array(5).fill('circle').map((name) => this.appendElement(name))
  }
}
