export function requestFullscreen() {
  try {
    if (document.fullscreenEnabled) {
      if (!document.pointerLockElement) {
        document.documentElement.requestPointerLock()
      }
  
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
      }
    }
  } catch(error) {
    console.error(error)
  }
}
