import Notification from '@/components/Notification'
import { isMobile } from '@/services/device'
import { googleSyncService } from '@/services/googleSyncService'
import { define, Component } from '@/libs/Component'
import SimEvent from '@/libs/SimEvent'
import { deprecated } from '@/utils'
import { GOOGLE_ICON, KEYBOARD_ICON } from '@/constants/icons'
import { PointerEvent } from '@/constants/event'
import type { EmnuSyncEventPayload, MenuGamePlayEventPayload, MenuSwitchEventPayload } from '@/types'
import jQuery from '@/services/jQuery'

/** 菜单 */
@define('menu')
export default class Menu extends Component {
  static Events = {
    GamePlay: SimEvent.create<MenuGamePlayEventPayload>('MENU_GAME_PLAY'),
    KeyboardSwitch: SimEvent.create<MenuSwitchEventPayload>('MENU_KEYBOARD_SWITCH'),
    Sync: SimEvent.create<EmnuSyncEventPayload>('MENU_SYNC_EVENT'),
  }

  static Messages = {
    Sync: SimEvent.createMessager<void, EmnuSyncEventPayload>('MENU_SYNC_MESSAGE'),
  }

  protected isKeyboardVisible = false
  protected isGamePlay = false
  protected isDownloading = false
  protected isUploading = false
  protected keyboard: Component
  protected google: Component

  protected bindings() {
    this.google = this.appendElement('menu-item')
    this.google.setAttr('menu', 'google')
    this.google.innerHTML = GOOGLE_ICON

    this.keyboard = this.appendElement('menu-item')
    this.keyboard.setAttr('menu', 'keyboard')
    this.keyboard.innerHTML = KEYBOARD_ICON
    this.keyboard.hide()

    return deprecated(
      jQuery(document).addEventsListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
          this.google.hide()
          return
        }

        this.google.show()
      }),
      this.google.addEventsListener(PointerEvent.Start, async () => {
        if (this.isGamePlay) {
          if (this.isUploading) {
            return
          }

          const complete = await Notification.loading('Uploading archive files, please wait.')
          try {
            this.isUploading = true
            await googleSyncService.upload()
            Menu.Events.Sync.dispatch({ status: 'uploading' })
            complete('Upload archive files success.')
          } catch (error) {
            complete('Upload archive files failed.')
          } finally {
            Menu.Events.Sync.dispatch({ status: 'idle' })
            this.isUploading = false
          }

          return
        }

        if (this.isDownloading) {
          return
        }

        const complete = await Notification.loading('Downloading archive files, please wait.')
        try {
          this.isDownloading = true
          await googleSyncService.download()
          Menu.Events.Sync.dispatch({ status: 'downloading' })
          complete('Download archive files success.')
        } catch (error) {
          complete('Download archive files failed.')
        } finally {
          Menu.Events.Sync.dispatch({ status: 'idle' })
          this.isDownloading = false
        }
      }),
      Menu.Messages.Sync.onMessage(async () => {
        const status = this.isDownloading ? 'downloading' : this.isUploading ? 'uploading' : 'idle'
        return { status }
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
      Menu.Events.GamePlay.listen((event: Event) => {
        if (!SimEvent.isSimEvent<MenuGamePlayEventPayload>(event)) {
          return
        }

        const isGamePlay = !!event.detail?.gameplay
        isMobile && this.keyboard.toggle(isGamePlay)
        this.isGamePlay = isGamePlay
      })
    )
  }
}
