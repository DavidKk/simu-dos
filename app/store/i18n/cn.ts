import type { I18nTranslation } from '@/types'

export default <I18nTranslation>{
  game: {
    name: '名称',
    type: '类型',
    summary: '简介',
    developers: '开发商',
    publisher: '发行商',
    release: '发行日期',
  },
  support: {
    webassembly: ['您的浏览器不支持 WebAssembly，请升级您的浏览器。', '我们建议您使用 Chrome 浏览器。', '按任意键或触摸屏幕退出...'],
    indexedDB: ['您的浏览器不支持 IndexedDB, 因此会导致存档无法存储。', '按任意键或触摸屏幕继续...'],
  },
  qrcode: {
    label: '移动设备可扫描二维码进行游玩。',
  },
}
