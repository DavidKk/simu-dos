import Notification from '@/components/Notification'
import jQuery from '@/services/jQuery'
import { isMobile } from '@/services/device'
import { googleSyncService } from '@/services/googleSyncService'
import { define, Component } from '@/libs/Component'
import SimEvent from '@/libs/SimEvent'
import { deprecated, extract, upload } from '@/utils'
import { DOWNLOAD_ARCHIVE_ICON, GOOGLE_ICON, KEYBOARD_ICON, UPLOAD_ARCHIVE_ICON } from '@/constants/icons'
import { PointerEvent } from '@/constants/event'
import type { EmnuSyncEventPayload, EmunUploadEventPayload, MenuGamePlayEventPayload, MenuSwitchEventPayload } from '@/types'

/** 菜单 */
@define('menu')
export default class Menu extends Component {
  static Events = {
    GamePlay: SimEvent.create<MenuGamePlayEventPayload>('MENU_GAME_PLAY'),
    KeyboardSwitch: SimEvent.create<MenuSwitchEventPayload>('MENU_KEYBOARD_SWITCH'),
    Sync: SimEvent.create<EmnuSyncEventPayload>('MENU_SYNC_EVENT'),
    Download: SimEvent.create<void>('MENU_DOWNLOAD_EVENT'),
    Upload: SimEvent.create<EmunUploadEventPayload>('MENU_UPLOAD_EVENT'),
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
  protected download: Component
  protected upload: Component

  protected bindings() {
    this.download = this.appendElement('menu-item')
    this.download.setAttr('menu', 'download')
    this.download.innerHTML = DOWNLOAD_ARCHIVE_ICON
    this.download.hide()

    this.upload = this.appendElement('menu-item')
    this.upload.setAttr('menu', 'upload')
    this.upload.innerHTML = UPLOAD_ARCHIVE_ICON

    this.google = this.appendElement('menu-item')
    this.google.setAttr('menu', 'google')
    this.google.innerHTML = GOOGLE_ICON

    this.keyboard = this.appendElement('menu-item')
    this.keyboard.setAttr('menu', 'keyboard')
    this.keyboard.innerHTML = KEYBOARD_ICON
    this.keyboard.hide()

    return deprecated(
      jQuery(document).addEventsListener('fullscreenchange', () => {
        this.toggle(!document.fullscreenElement)
      }),
      this.google.addEventsListener(PointerEvent.Start, async () => {
        if (this.isGamePlay) {
          if (this.isUploading) {
            return
          }

          try {
            this.isUploading = true
            await googleSyncService.upload()
            Menu.Events.Sync.dispatch({ status: 'uploading' })
            Notification.toast('Upload archive files success.')
          } catch (error) {
            Notification.toast('Upload archive files failed.')
          } finally {
            Menu.Events.Sync.dispatch({ status: 'idle' })
            this.isUploading = false
          }

          return
        }

        if (this.isDownloading) {
          return
        }

        try {
          this.isDownloading = true
          await googleSyncService.download()
          Menu.Events.Sync.dispatch({ status: 'downloading' })
          Notification.toast('Download archive files success.')
        } catch (error) {
          Notification.toast('Download archive files failed.')
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
      this.download.addEventsListener(PointerEvent.Start, () => {
        Menu.Events.Download.dispatch()
      }),
      this.upload.addEventsListener(PointerEvent.Start, async () => {
        const [zip] = await upload()
        const { name, content: source } = zip
        const files = await extract(source)
        const romId = name.replace(/\.zip$/, '')
        Menu.Events.Upload.dispatch({ romId, files })
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
        !isMobile && this.download.toggle(isGamePlay)
        !isMobile && this.upload.toggle(!isGamePlay)
        this.isGamePlay = isGamePlay
      })
    )
  }
}
