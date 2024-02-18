import type { I18n } from '@/types'

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

export function pickByLanguage<M extends T[keyof T], T extends I18n<M>>(languages: T, defaultValue?: M) {
  const lang = useLanguage.toLocaleLowerCase()
  if (/(zh-hk|zh-sg|zh-tw)/i.test(lang)) {
    return languages.tc
  }

  if (/zh/i.test(lang)) {
    return languages.cn
  }

  if (/en/i.test(lang)) {
    return languages.en
  }

  return defaultValue
}
