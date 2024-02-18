export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)

export const supported = {
  indexedDB: !!(window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB),
  webAssembly: (() => {
    try {
      if (typeof WebAssembly === 'object' && typeof WebAssembly.instantiate === 'function') {
        const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00))
        if (module instanceof WebAssembly.Module) {
          return new WebAssembly.Instance(module) instanceof WebAssembly.Instance
        }
      }
    } catch (error) {
      // nothing todo...
    }

    return false
  })(),
}
