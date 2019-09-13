import * as Typings from '../typings'

export const language = window.navigator.language
export const isChinese = /zh/i.test(language.toLocaleLowerCase())

export const en: Typings.LangDescription = {
  game: {
    name: 'Name',
    type: 'Type',
    summary: 'Summary',
    developers: 'Developers',
    publisher: 'Publisher',
    release: 'Release'
  },
  supportWebassembly: [
    'Browser is not support WebAssembly, please upgrade your browser.',
    'We recommend that you use the Chrome browser.',
    'Press any key to exit...'
  ],
  qrcode: {
    label: 'Scan qrcode for mobile to play.'
  }
}

export const cn: Typings.LangDescription = {
  game: {
    name: '名称',
    type: '类型',
    summary: '简介',
    developers: '开发商',
    publisher: '发行商',
    release: '发行日期'
  },
  supportWebassembly: [
    '您的浏览器不支持 WebAssembly，请升级您的浏览器。',
    '我们建议您使用 Chrome 浏览器。',
    '按任意键退出...'
  ],
  qrcode: {
    label: '移动设备可扫描二维码进行游玩。'
  }
}

export const tc: Typings.LangDescription = {
  game: {
    name: '名稱',
    type: '類型',
    summary: '簡介',
    developers: '開發商️',
    publisher: '發行商',
    release: '發行日期'
  },
  supportWebassembly: [
    '您的瀏覽器不支持 WebAssembly，請升級您的瀏覽器。 ',
    '我們建議您使用 Chrome 瀏覽器。 ',
    '按任意鍵退出...'
  ],
  qrcode: {
    label: '移動設備可掃描二維碼進行遊玩。'
  }
}

export const description = (() => {
  const lang = language.toLocaleLowerCase()
  if (/zh-cn/i.test(lang)) {
    return cn
  }

  if (/(zh-hk|zh-sg|zh-tw)/i.test(lang)) {
    return tc
  }

  return en
})()

export const get = (languages: Typings.LangOptions = {}, defaultValue?: any) => {
  const lang = language.toLocaleLowerCase()
  if (/zh-cn/i.test(lang)) {
    return languages.cn
  }

  if (/(zh-hk|zh-sg|zh-tw)/i.test(lang)) {
    return languages.tc
  }

  if (/en/i.test(lang)) {
    return languages.en
  }

  return defaultValue
}
