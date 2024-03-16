import { define, Component } from '@/libs/Component'
import SimEvent from '@/libs/SimEvent'
import { deprecated } from '@/utils'

export interface NotificationToastEventDetail {
  message: string
}

@define('notification')
export default class Notification extends Component {
  static Events = {
    Toast: SimEvent.create<NotificationToastEventDetail>('NOTIFICATION_TOAST'),
  }

  protected bindings() {
    return deprecated(
      Notification.Events.Toast.listen((event: Event) => {
        if (!SimEvent.isSimEvent<NotificationToastEventDetail>(event)) {
          return
        }

        const { message } = event.detail
        if (typeof message === 'string' && message.length > 0) {
          this.toast(message)
        }
      })
    )
  }

  public toast(message: string) {
    const node = this.appendElement('notification')
    node.innerHTML = `<span>${message}</span>`
    setTimeout(() => node.remove(), 4e3)
  }
}

export function toast(message: string) {
  Notification.Events.Toast.dispatch({ message })
}
