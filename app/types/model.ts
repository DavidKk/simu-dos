/** 存档 */
export interface Archive {
  romId: string
  file: string
  content: ArrayBuffer
}

export type ModelUseType = 'indexedDB'

/** 模型配置 */
export interface ModelOptions {
  use: ModelUseType
}
