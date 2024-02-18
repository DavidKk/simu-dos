import type { I18nTranslation } from '@/types'

export default <I18nTranslation>{
  game: {
    name: 'Name',
    type: 'Type',
    summary: 'Summary',
    developers: 'Developers',
    publisher: 'Publisher',
    release: 'Release',
  },
  support: {
    webassembly: [
      'Your browser does not support WebAssembly, please upgrade your browser.',
      'We recommend that you use the Chrome browser.',
      'Press any key or touch screen to exit...',
    ],
    indexedDB: ['Your browser does not support IndexedDB, so it will prevent the archive from being stored.', 'Press any key or touch screen to continue...'],
  },
  qrcode: {
    label: 'Scan qrcode for mobile to play.',
  },
}
