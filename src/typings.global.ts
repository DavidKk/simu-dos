interface IndexedDBPolyfill {
  IndexedDB?: IDBFactory
  mozIndexedDB?: IDBFactory
  webkitIndexedDB?: IDBFactory
  msIndexedDB?: IDBFactory
}

interface RequestFullscreenPolyfill {
  fullscreenEnabled?: boolean
  mozFullScreenEnabled?: boolean
  webkitFullscreenEnabled?: boolean
  msFullscreenEnabled?: boolean

  requestFullscreen?: () => void
  mozRequestFullScreen?: () => void
  webkitRequestFullscreen?: () => void
  msRequestFullscreen?: () => void
  exitFullScreen?: () => void
  mozCancelFullScreen?: () => void
  webkitExitFullscreen?: () => void
  msExitFullscreen?: () => void
}

interface Window extends IndexedDBPolyfill {}
interface Document extends RequestFullscreenPolyfill {}
interface HTMLElement extends RequestFullscreenPolyfill {}
