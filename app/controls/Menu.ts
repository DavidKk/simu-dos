import { SyncService } from '@dumlj/cloudfs'
import { define, Component } from '@/libs/Component'
import SimEvent from '@/libs/SimEvent'
import { deprecated } from '@/utils/deprecated'
import { PointerEvent } from '@/constants/event'
import { MENU_KEYBOARD_SWITCH, MENU_GAME_PLAY } from '@/constants/actions'
import { ARCHIVE_STORE_NAME } from '@/constants/indexedDB'
import type { MenuGamePlayEventDetail, MenuSwitchEventDetail } from '@/types'

/** 菜单 */
@define('menu')
export default class Menu extends Component {
  static Events = {
    GamePlay: SimEvent.create<MenuGamePlayEventDetail>(MENU_GAME_PLAY),
    KeyboardSwitch: SimEvent.create<MenuSwitchEventDetail>(MENU_KEYBOARD_SWITCH),
  }

  protected keyboard: Component
  protected isKeyboardVisible = false
  protected google: Component
  protected googleSyncService = new SyncService({
    database: ARCHIVE_STORE_NAME,
    googleClientId: import.meta.env.VITE_CLIENT_ID,
    googleApiKey: import.meta.env.VITE_API_KEY,
  })

  protected isGamePlay = false

  protected bindings() {
    this.google = this.appendElement('menu-item')
    this.google.setAttr('menu', 'google')
    this.google.innerHTML = `<svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 	 viewBox="0 0 210 210" xml:space="preserve"><path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40	c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105	S0,162.897,0,105z"/></svg>`

    this.keyboard = this.appendElement('menu-item')
    this.keyboard.setAttr('menu', 'keyboard')
    this.keyboard.innerHTML = `<svg viewBox="0 0 35 35"><path d="M30.559,30.534H4.441A4.2,4.2,0,0,1,.25,26.343V8.657A4.2,4.2,0,0,1,4.441,4.466H30.559A4.2,4.2,0,0,1,34.75,8.657V26.343A4.2,4.2,0,0,1,30.559,30.534ZM4.441,6.966A1.693,1.693,0,0,0,2.75,8.657V26.343a1.692,1.692,0,0,0,1.691,1.691H30.559a1.693,1.693,0,0,0,1.691-1.691V8.657a1.693,1.693,0,0,0-1.691-1.691Z"/><path d="M23.323,24.428H11.677a1.25,1.25,0,0,1,0-2.5H23.323a1.25,1.25,0,0,1,0,2.5Z"/><path d="M9.966,13.162a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/><path d="M14.989,13.072a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/><path d="M20.011,13.072a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/><path d="M25.034,13.072a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/><path d="M7.455,18.646a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/><path d="M12.477,18.556a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/><path d="M17.5,18.556a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/><path d="M22.523,18.556a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/><path d="M27.545,18.556a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/></svg>`
    this.keyboard.hide()

    return deprecated(
      this.google.addEventsListener(PointerEvent.Start, async () => {
        this.isGamePlay ? await this.googleSyncService.upload() : await this.googleSyncService.download()
      }),
      this.keyboard.addEventsListener(PointerEvent.Start, (event: Event) => {
        event.preventDefault()
        event.stopPropagation()

        this.dispatchEvent(new Menu.Events.KeyboardSwitch({ visible: !this.isKeyboardVisible }, { bubbles: true }))
      }),
      this.googleSyncService.onAuthChanged(({ authorized }) => {
        authorized ? this.google.addClass('authorized') : this.google.removeClass('authorized')
      }),
      (() => {
        const onGamePlay = (event: Event) => {
          if (SimEvent.isSimEvent<MenuGamePlayEventDetail>(event)) {
            const isGamePlay = !!event.detail?.gameplay
            this.keyboard.toggle(isGamePlay)
            this.isGamePlay = isGamePlay
          }
        }

        document.addEventListener(Menu.Events.GamePlay.EventType, onGamePlay)
        return () => {
          document.removeEventListener(Menu.Events.GamePlay.EventType, onGamePlay)
        }
      })()
    )
  }
}
