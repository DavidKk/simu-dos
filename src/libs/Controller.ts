import defaultsDeep from 'lodash/defaultsDeep'
import { EventEmitter } from 'events'
import * as nipplejs from 'nipplejs'

export default class Controller {
  private emitter: EventEmitter = new EventEmitter()
  private options: object = {
    mode: 'static',
    position: {
      top: 10,
      left: 10
    }
  }

  private manager: nipplejs.JoystickManager

  constructor (container: HTMLDivElement, options?: object) {
    this.options = defaultsDeep({ zone: container }, options, this.options)
    this.manager = nipplejs.create(this.options)
  }

  onActions (callback) {
    this.emitter.addListener('actions', callback)
  }
}
