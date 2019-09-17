import * as lang from '../share/lang'
import * as Typings from '../typings'

export const en: Typings.I18nTranslation = {
  game: {
    name: 'Name',
    type: 'Type',
    summary: 'Summary',
    developers: 'Developers',
    publisher: 'Publisher',
    release: 'Release'
  },
  support: {
    webassembly: [
      'Your browser does not support WebAssembly, please upgrade your browser.',
      'We recommend that you use the Chrome browser.',
      'Press any key or touch screen to exit...'
    ],
    indexedDB: [
      'Your browser does not support IndexedDB, so it will prevent the archive from being stored.',
      'Press any key or touch screen to continue...'
    ]
  },
  qrcode: {
    label: 'Scan qrcode for mobile to play.'
  }
}

export const cn: Typings.I18nTranslation = {
  game: {
    name: '名称',
    type: '类型',
    summary: '简介',
    developers: '开发商',
    publisher: '发行商',
    release: '发行日期'
  },
  support: {
    webassembly: [
      '您的浏览器不支持 WebAssembly，请升级您的浏览器。',
      '我们建议您使用 Chrome 浏览器。',
      '按任意键或触摸屏幕退出...'
    ],
    indexedDB: [
      '您的浏览器不支持 IndexedDB, 因此会导致存档无法存储。',
      '按任意键或触摸屏幕继续...'
    ]
  },
  qrcode: {
    label: '移动设备可扫描二维码进行游玩。'
  }
}

export const tc: Typings.I18nTranslation = {
  game: {
    name: '名稱',
    type: '類型',
    summary: '簡介',
    developers: '開發商️',
    publisher: '發行商',
    release: '發行日期'
  },
  support: {
    webassembly: [
      '您的瀏覽器不支持 WebAssembly，請升級您的瀏覽器。',
      '我們建議您使用 Chrome 瀏覽器。',
      '按任意鍵退出...'
    ],
    indexedDB: [
      '您的瀏覽器不支持 IndexedDB, 因此會導致存檔無法存儲。',
      '按任意鍵或觸摸屏幕繼續...'
    ]
  },
  qrcode: {
    label: '移動設備可掃描二維碼進行遊玩。'
  }
}

export default lang.pick({ en, cn, tc })
