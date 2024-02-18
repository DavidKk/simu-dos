import { define, Component } from '@/libs/Component'
import Button from '@/controls/Button'
import type { KeypadCreationOptions } from '@/types'

/** 按键组 */
@define('keypad')
export default class Keypad extends Component {
  /** 按键 */
  protected keys: Component[] = []

  /** 添加按键 */
  public add(content: string, options?: KeypadCreationOptions) {
    const button = this.appendElement(Button)
    button.setContent(content)

    if (options) {
      options?.size && button.setSize(options.size)
      options?.position && button.setPosition(options.position)
      options?.type && button.setType(options.type)
    }

    this.keys.push(button)
    return button
  }

  /** 删除按键 */
  public del(button: Button) {
    const index = this.keys.indexOf(button)
    index !== -1 && this.keys.splice(index, 1)
  }
}
