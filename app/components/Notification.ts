import { define, Component } from '@/libs/Component'
import SimEvent from '@/libs/SimEvent'
import type { NotificationToastEventDetail } from '@/types'

@define('notification')
export default class Notification extends Component {
  static Events = {
    Toast: SimEvent.create<NotificationToastEventDetail>('NOTIFICATION_TOAST'),
  }

  protected bindings() {
    const onToast = (event: Event) => {
      if (!SimEvent.isSimEvent<NotificationToastEventDetail>(event)) {
        return
      }

      const { message } = event.detail
      if (typeof message === 'string' && message.length > 0) {
        this.toast(message)
      }
    }

    document.addEventListener(Notification.Events.Toast.EventType, onToast)
    return () => {
      document.removeEventListener(Notification.Events.Toast.EventType, onToast)
    }
  }

  public toast(message: string) {
    const node = this.appendElement('notification')
    node.innerHTML = `<span>${message}</span>`
    setTimeout(() => node.remove(), 4e3)
  }
}

export function toast(message: string) {
  document.dispatchEvent(new Notification.Events.Toast({ message }))
}
