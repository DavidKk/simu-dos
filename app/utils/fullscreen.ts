export function requestFullscreen() {
  if (document.fullscreenElement) {
    return
  }

  if (document.fullscreenEnabled) {
    document.documentElement.requestFullscreen()
  }
}
