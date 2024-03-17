import Spinner from '@/components/Spinner'
import { define, Component } from '@/libs/Component'
import SimEvent from '@/libs/SimEvent'
import type { NotificationToastEventPayload } from '@/types'
import { deprecated, sleep } from '@/utils'

@define('notification')
export default class Notification extends Component {
  static Events = {
    Toast: SimEvent.create<NotificationToastEventPayload>('NOTIFICATION_TOAST'),
  }

  static Messages = {
    Toast: SimEvent.createMessager<NotificationToastEventPayload, (message: string) => void>('NOTIFICATION_TOAST'),
  }

  static toast(message: string) {
    return Notification.Events.Toast.dispatch({ message })
  }

  static loading(message: string) {
    return Notification.Messages.Toast.request({ message })
  }

  protected bindings() {
    return deprecated(
      Notification.Events.Toast.listen((event: Event) => {
        if (!SimEvent.isSimEvent<NotificationToastEventPayload>(event)) {
          return
        }

        const { message } = event.detail
        if (typeof message === 'string' && message.length > 0) {
          this.toast(message)
        }
      }),
      Notification.Messages.Toast.onMessage(async ({ message }) => {
        return this.loading(message)
      })
    )
  }

  protected create(options?: { loading?: boolean }) {
    const { loading = false } = options || {}
    const node = this.appendElement('notification')
    node.appendElement(Spinner)
    node.appendElement('notification-content')
    loading && node.addClass('loading')
    return node
  }

  public async toast(message: string) {
    const node = this.create({ loading: false })
    this.writeContentToToast(node, message)
    await this.fadeOutToast(node)
  }

  public async loading(message: string) {
    const node = this.create({ loading: true })
    this.writeContentToToast(node, message)

    await sleep(1.44e3)
    return async (message: string) => {
      node.removeClass('loading')
      this.writeContentToToast(node, message)
      await this.fadeOutToast(node)
    }
  }

  protected writeContentToToast(node: Component, message: string) {
    node.style.setProperty('--notification-content-length', message.length.toString())
    const content = node.querySelector('[notification-content]')
    content && (content.innerHTML = message)
  }

  protected async fadeOutToast(node: Component) {
    await sleep(2.56e3)
    node.addClass('complete')
    await sleep(0.8e3)
    node.remove()
  }
}
