import type { I18nTranslation } from '@/types'

export default <I18nTranslation>{
  game: {
    name: '名稱',
    type: '類型',
    summary: '簡介',
    developers: '開發商️',
    publisher: '發行商',
    release: '發行日期',
  },
  support: {
    webassembly: ['您的瀏覽器不支持 WebAssembly，請升級您的瀏覽器。', '我們建議您使用 Chrome 瀏覽器。', '按任意鍵退出...'],
    indexedDB: ['您的瀏覽器不支持 IndexedDB, 因此會導致存檔無法存儲。', '按任意鍵或觸摸屏幕繼續...'],
  },
  qrcode: {
    label: '移動設備可掃描二維碼進行遊玩。',
  },
}
