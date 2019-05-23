import * as Typings from '../typings'

export const isFullscreenEnabled = (): boolean => {
  const element = document as Typings.PolyfillHTMLElement

  return element.fullscreenEnabled
    || element.mozFullScreenEnabled
    || element.webkitFullscreenEnabled
    || element.msFullscreenEnabled
}

export const requestFullscreen = (): boolean => {
  const element = document.body as Typings.PolyfillHTMLElement

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
  const element = document as Typings.PolyfillHTMLElement

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
