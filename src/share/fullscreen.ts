export const isFullscreenEnabled = (): boolean => {
  return document.fullscreenEnabled
    || document.mozFullScreenEnabled
    || document.webkitFullscreenEnabled
    || document.msFullscreenEnabled
}

export const requestFullscreen = () => {
  const element = document.body

  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  }
}

export const exitFullscreen = (): void => {
  const element = document

  if (element.exitFullScreen) {
    element.exitFullScreen()
  } else if (element.mozCancelFullScreen) {
    element.mozCancelFullScreen()
  } else if (element.webkitExitFullscreen) {
    element.webkitExitFullscreen()
  } else if (element.msExitFullscreen) {
    element.msExitFullscreen()
  }
}
