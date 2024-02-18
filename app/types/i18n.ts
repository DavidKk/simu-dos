export interface I18n<T> {
  cn?: T
  tc?: T
  en?: T
}

export interface I18nTranslation {
  support: {
    webassembly: string[]
    indexedDB: string[]
  }
  game: {
    name: string
    type: string
    summary: string
    developers: string
    publisher: string
    release: string
  }
  qrcode: {
    label: string
  }
}