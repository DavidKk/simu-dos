import * as Typings from '../typings'

export const useLanguage = window.navigator.language

export const language = (() => {
  const lang = useLanguage.toLocaleLowerCase()
  if (/zh-cn/i.test(lang)) {
    return 'cn'
  }

  if (/(zh-hk|zh-sg|zh-tw)/i.test(lang)) {
    return 'tc'
  }

  return 'en'
})()

export const pick = <M extends T[keyof T], T extends Typings.i18nType<M>>(languages: T, defaultValue?: M): M => {
  const lang = useLanguage.toLocaleLowerCase()
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
