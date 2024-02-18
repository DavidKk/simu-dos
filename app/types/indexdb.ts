export interface IndexedDBStoreOptions {
  [key: string]: {
    options?: IDBObjectStoreParameters
    indexes?: Array<{
      name: string
      keyPath: string | string[]
      options?: IDBIndexParameters
    }>
  }
}

export interface IndexedDBOptions {
  database: string
  version: number
  store: IndexedDBStoreOptions
}
