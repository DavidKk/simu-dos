export function requestFullscreen() {
  if (document.fullscreenEnabled) {
    if (!document.pointerLockElement) {
      document.documentElement.requestPointerLock()
    }

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    }
  }
}
