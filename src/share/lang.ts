export const language = window.navigator.language
export const isChinese = /zh/i.test(language.toLocaleLowerCase())

export const en = {
  gameInfo: {
    name: 'Name',
    type: 'Type',
    developers: 'Developers',
    publisher: 'Publisher',
    release: 'Release'
  },
  supportWebassembly: [
    'Browser is not support WebAssembly, please upgrade your browser.',
    'We recommend that you use the Chrome browser.',
    'Press any key to exit...'
  ]
}

export const ch = {
  gameInfo: {
    name: '名称',
    type: '类型',
    developers: '开发商',
    publisher: '发行商',
    release: '发行日期'
  },
  supportWebassembly: [
    '您的浏览器不支持 WebAssembly，请升级您的浏览器。',
    '我们建议您使用 Chrome 浏览器。',
    '按任意键退出...'
  ]
}

export default isChinese ? ch : en
