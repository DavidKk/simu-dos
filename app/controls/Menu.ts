import { googleSyncService } from '@/services/googleSyncService'
import { define, Component } from '@/libs/Component'
import SimEvent from '@/libs/SimEvent'
import { deprecated } from '@/utils'
import { PointerEvent } from '@/constants/event'
import type { MenuGamePlayEventDetail, MenuSwitchEventDetail } from '@/types'
import { toast } from '@/components/Notification'
import { isMobile } from '@/services/device'
import { GOOGLE_ICON, KEYBOARD_ICON } from '@/constants/icons'

/** 菜单 */
@define('menu')
export default class Menu extends Component {
  static Events = {
    GamePlay: SimEvent.create<MenuGamePlayEventDetail>('MENU_GAME_PLAY'),
    KeyboardSwitch: SimEvent.create<MenuSwitchEventDetail>('MENU_KEYBOARD_SWITCH'),
  }

  protected isKeyboardVisible = false
  protected isGamePlay = false
  protected keyboard: Component
  protected google: Component
  protected fullScreen: Component

  protected bindings() {
    this.google = this.appendElement('menu-item')
    this.google.setAttr('menu', 'google')
    this.google.innerHTML = GOOGLE_ICON

    this.keyboard = this.appendElement('menu-item')
    this.keyboard.setAttr('menu', 'keyboard')
    this.keyboard.innerHTML = KEYBOARD_ICON
    this.keyboard.hide()

    return deprecated(
      this.google.addEventsListener(PointerEvent.Start, async () => {
        if (this.isGamePlay) {
          await googleSyncService.upload()
          toast('Upload archive files success.')
          return
        }

        await googleSyncService.download()
        toast('Download archive files success.')
      }),
      this.keyboard.addEventsListener(PointerEvent.Start, (event: Event) => {
        event.preventDefault()
        event.stopPropagation()

        this.dispatchEvent(new Menu.Events.KeyboardSwitch({ visible: !this.isKeyboardVisible }, { bubbles: true }))
      }),
      googleSyncService.onAuthChanged(({ authorized }) => {
        if (authorized) {
          this.google.addClass('authorized')
          return
        }

        this.google.removeClass('authorized')
      }),
      (() => {
        const onGamePlay = (event: Event) => {
          if (!SimEvent.isSimEvent<MenuGamePlayEventDetail>(event)) {
            return
          }

          const isGamePlay = !!event.detail?.gameplay
          isMobile && this.keyboard.toggle(isGamePlay)
          this.isGamePlay = isGamePlay
        }

        document.addEventListener(Menu.Events.GamePlay.EventType, onGamePlay)
        return () => {
          document.removeEventListener(Menu.Events.GamePlay.EventType, onGamePlay)
        }
      })()
    )
  }
}
