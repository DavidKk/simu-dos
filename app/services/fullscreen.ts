import { isMobile } from './device'

export async function requestFullscreen(element = document.documentElement) {
  try {
    if (document.fullscreenEnabled) {
      if (!isMobile && !document.pointerLockElement) {
        element.requestPointerLock()
      }

      if (!document.fullscreenElement) {
        await element.requestFullscreen()
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
