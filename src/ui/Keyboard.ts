import Element from '../libs/Element'
import Component from '../libs/Component'
import TouchEvent from '../conf/touch-event'

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

  public element: Element
  public keyboard: Element
  public switcher: Element
  public buttons: Element[]
  public isOpenShift: boolean

  constructor () {
    super()

    this.switcher = new Element(['keyboard-switcher'])
    this.keyboard = new Element(['keyboard-container'])
    this.element = new Element(['keyboard'], [this.switcher, this.keyboard], 'div')
    this.buttons = []
    this.isOpenShift = false

    Keyboard.KEYS.forEach((group, gIndex) => {
      const row = new Element(['keyboard-row'])
      group.forEach((key, kIndex) => {
        const node = new Element(['keyboard-key'])
        const uppercase = Keyboard.UPPERKEYS[gIndex][kIndex]
        const code = Keyboard.KEYOCDES[gIndex][kIndex]

        node.setAttr('key', key)
        node.setAttr('uppercase', uppercase)
        node.setAttr('code', code + '')
        node.setContext(key)
        node.appendTo(row)

        this.buttons.push(node)
      })

      row.appendTo(this.keyboard)
    })

    this.bindings()
    this.keyboard.hide()
  }

  private bindings (): void {
    const onKeyboardTouchDown = (event: TouchEvent | MouseEvent | PointerEvent): void => {
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

    const onSwitcherTouchDown = (event: TouchEvent | MouseEvent | PointerEvent): void => {
      event.preventDefault()
      event.stopPropagation()

      this.keyboard.toggle()
      this.emit('siwtch', this.keyboard.isOpen)
    }

    this.keyboard.addListener(TouchEvent.start, onKeyboardTouchDown)
    this.switcher.addListener(TouchEvent.start, onSwitcherTouchDown)
  }

  private unbindings (): void {
    this.keyboard.removeAllListeners()
    this.switcher.removeAllListeners()
  }

  public toggleUppercase (isOpen: boolean = !this.isOpenShift): void {
    this.isOpenShift = isOpen

    this.buttons.forEach((node) => {
      const uppercase = this.isOpenShift ? node.getAttr('uppercase') : node.getAttr('key')
      node.setContext(uppercase)
    })
  }

  public onSwitch (handle: (event: any) => void): void {
    this.addListener('siwtch', handle)
  }

  public onActions (handle: (event: any) => void): void {
    this.addListener('actions', handle)
  }

  public destroy (): void {
    super.destroy()

    this.unbindings()

    this.element.destroy()
    this.keyboard.destroy()
    this.switcher.destroy()

    this.switcher = undefined
    this.keyboard = undefined
    this.element = undefined

    this.destroy = Function.prototype as any
  }
}
