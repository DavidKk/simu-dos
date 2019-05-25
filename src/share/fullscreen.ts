export const isFullscreenEnabled = (): boolean => {
  return document.fullscreenEnabled
    || document.mozFullScreenEnabled
    || document.webkitFullscreenEnabled
    || document.msFullscreenEnabled
}

export const requestFullscreen = (): boolean => {
  const element = document.body

  try {
    if (isFullscreenEnabled()) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }

      return true
    }

    return false

  } catch (error) {
    return false
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
