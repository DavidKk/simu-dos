import TouchEvent from '../conf/touch-event'
import Component from './Component'
import * as Typings from '../typings'

export default class Keyboard extends Component {
  static KEYS = [
    ['esc'],
    ['`','1','2','3','4','5','6','7','8','9','0','-','=','delete'],
    ['tab','q','w','e','r','t','y','u','i','o','p','[',']','\\'],
    ['caps lock','a','s','d','f','g','h','j','k','l',';','\'','return'],
    ['shift','z','x','c','v','b','n','m',',','.','/','shift'],
    ['space']
  ]

  static UPPERKEYS = [
    ['Esc'],
    ['~','!','@','#','$','%','^','&','*','(',')','_','+','Delete'],
    ['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|'],
    ['Caps Lock','A','S','D','F','G','H','J','K','L',':','"','Return'],
    ['Shift','Z','X','C','V','B','N','M','<','>','?','Shift'],
    ['Space']
  ]

  static KEYOCDES = [
    [27],
    [192,49,50,51,52,53,54,55,56,57,48,189,187,8],
    [9,81,87,69,82,84,89,85,73,79,80,219,221,220],
    [20,65,83,68,70,71,72,74,75,76,186,222,13],
    [16,90,88,67,86,66,78,77,188,190,191,16],
    [32]
  ]

  private handleKeyboardTouched: Typings.EventHandle
  private handleSwitcherTouched: Typings.EventHandle

  public zone: HTMLDivElement
  public container: HTMLDivElement
  public keyboard: HTMLDivElement
  public switcher: HTMLDivElement
  public buttons: HTMLDivElement[]
  public isOpenShift: boolean

  constructor (zone: HTMLDivElement) {
    super()

    this.buttons = []

    this.zone = zone
    this.container = this.el = document.createElement('div')
    this.container.classList.add('keyboard')

    this.switcher = document.createElement('div')
    this.switcher.classList.add('keyboard-switcher')
    this.container.appendChild(this.switcher)

    this.keyboard = document.createElement('div')
    this.keyboard.classList.add('keyboard-container')
    this.container.appendChild(this.keyboard)

    Keyboard.KEYS.forEach((group, gIndex) => {
      const row = document.createElement('div')
      row.classList.add('keyboard-row')

      group.forEach((key, kIndex) => {
        const node = document.createElement('div')
        const uppercase = Keyboard.UPPERKEYS[gIndex][kIndex]
        const code = Keyboard.KEYOCDES[gIndex][kIndex]

        node.innerText = key
        node.classList.add('keyboard-key')
        node.setAttribute('key', key)
        node.setAttribute('uppercase', uppercase)
        node.setAttribute('code', code + '')

        this.buttons.push(node)
        row.appendChild(node)
      })

      this.keyboard.appendChild(row)
    })

    zone.appendChild(this.container)
    this.bindings()
  }

  private _onKeyboardTouchDown (event: TouchEvent | MouseEvent | PointerEvent): void {
    event.preventDefault()
    event.stopPropagation()

    const container = event.target as HTMLDivElement
    const keyCode = parseInt(container.getAttribute('code'), 10)

    if (isNaN(keyCode)) {
      return
    }

    switch (keyCode) {
      case 16:
      case 20:
        this.toggleUppercase()
        this.emit('actions', { keyCode, type: this.isOpenShift ? 'down' : 'up' })
        break

      default:
        this.emit('actions', { keyCode, type: 'keypress' })
    }
  }

  private _onSwitcherTouchDown (event: TouchEvent | MouseEvent | PointerEvent): void {
    event.preventDefault()
    event.stopPropagation()

    this.toggle()
  }

  private bindings (): void {
    this.handleKeyboardTouched = this._onKeyboardTouchDown.bind(this)
    this.handleSwitcherTouched = this._onSwitcherTouchDown.bind(this)

    this.bind(this.keyboard, TouchEvent.start, this.handleKeyboardTouched)
    this.bind(this.switcher, TouchEvent.start, this.handleSwitcherTouched)
  }

  private unbindings (): void {
    this.unbind(this.keyboard, TouchEvent.start, this.handleKeyboardTouched)
    this.unbind(this.switcher, TouchEvent.start, this.handleSwitcherTouched)

    this.handleKeyboardTouched = undefined
    this.handleSwitcherTouched = undefined
  }

  public toggleUppercase (isOpen: boolean = !this.isOpenShift): void {
    this.isOpenShift = isOpen

    this.buttons.forEach((node) => {
      const uppercase = this.isOpenShift ? node.getAttribute('uppercase') : node.getAttribute('key')
      node.innerText = uppercase
    })
  }

  public onToggle (handle: (event: any) => void): void {
    this.addListener('toggle', handle)
  }

  public onActions (handle: (event: any) => void): void {
    this.addListener('actions', handle)
  }

  public destroy (): void {
    super.destroy()

    this.unbindings()

    this.container.parentNode.removeChild(this.container)
    this.container.removeChild(this.switcher)
    this.container.removeChild(this.keyboard)

    this.switcher = undefined
    this.keyboard = undefined
    this.container = undefined

    this.destroy = Function.prototype as any
  }
}
