import { supported } from '@/services/device'
import type { IndexedDBStoreOptions, IndexedDBOptions } from '@/types'

const indexedDB = window.indexedDB

export default class IndexedDB {
  static supported = supported.indexedDB

  private settings: IndexedDBOptions
  private db: IDBDatabase

  public database: string
  public version: number

  constructor(options: IndexedDBOptions) {
    this.settings = { ...options }

    const { database, version } = this.settings
    this.database = database
    this.version = version
  }

  /**
   * 打开数据库
   * @param database 数据库名称
   * @param version 数据库版本
   */
  public open(database: string = this.database, version: number = this.version) {
    return new Promise<IDBDatabase>((resolve, reject) => {
      if (this.db) {
        resolve(this.db)
        return
      }

      const openRequest = indexedDB.open(database, version)
      openRequest.onerror = (error) => reject(error)
      openRequest.onupgradeneeded = (event) => {
        try {
          if (event.oldVersion === 0) {
            const { store } = this.settings
            this.db = openRequest.result
            this.registerStores(store)
          }
        } catch (error) {
          reject(error)
        }
      }

      openRequest.onsuccess = () => {
        this.db = openRequest.result
        if (this.db.objectStoreNames.length === 0) {
          this.recover().then(resolve).catch(reject)
          return
        }

        resolve(this.db)
      }

      this.database = database
      this.version = version
    })
  }

  /** 初始化数据表 */
  public registerStores(stores: IndexedDBStoreOptions) {
    if (!this.db) {
      return
    }

    Object.keys(stores).forEach((name) => {
      const store = stores[name]
      const objectStore = this.db.createObjectStore(name, store.options)

      if (Array.isArray(store.indexes)) {
        store.indexes.forEach(({ name, keyPath, options }) => {
          objectStore.createIndex(name, keyPath, options)
        })
      }
    })
  }

  /**
   * 重置数据表
   * @description
   * 主要用于数据表升级不兼容的情况
   */
  public async recover() {
    return new Promise<IDBDatabase>((resolve, reject) => {
      this.db && this.db.close()

      const openRequest = indexedDB.deleteDatabase(this.database)
      openRequest.onerror = (error) => reject(error)
      openRequest.onsuccess = () => this.open(this.database, this.version).then(resolve).catch(reject)
    })
  }

  /**
   * 通过索索引查找所有数据
   * @param store 存储对象
   * @param index 索引名称
   * @param query 搜索条件
   */
  public async getAllByIndex(stroeName: string, index: string, query: string | number | Date | ArrayBufferView | ArrayBuffer | IDBKeyRange) {
    const database = await this.open()
    return await new Promise((resolve, reject) => {
      const transaction = database.transaction(stroeName, 'readwrite')
      const store = transaction.objectStore(stroeName)

      const dbIndex = store.index(index)
      const getRequest = dbIndex.getAll(query)
      getRequest.onerror = (error) => reject(error)
      getRequest.onsuccess = (event: any) => resolve(event.target.result)
    })
  }

  /**
   * 查找数据
   * @param store 存储对象
   * @param query 搜索条件
   */
  public async get(stroeName: string, query: string | number | Date | ArrayBufferView | ArrayBuffer | IDBKeyRange) {
    const database = await this.open()
    return await new Promise((resolve, reject) => {
      const transaction = database.transaction(stroeName, 'readwrite')
      const store = transaction.objectStore(stroeName)

      const getRequest = store.get(query)
      getRequest.onerror = (error) => reject(error)
      getRequest.onsuccess = () => resolve(getRequest.result)
    })
  }

  /**
   * 修改数据
   * @param store 存储对象
   * @param value 数据
   * @param key 键名
   */
  public async put(stroeName: string, value: any, key?: IDBValidKey) {
    const database = await this.open()
    return await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(stroeName, 'readwrite')
      const store = transaction.objectStore(stroeName)

      const putRequest = store.put(value, key)
      putRequest.onerror = (error) => reject(error)
      putRequest.onsuccess = () => resolve()
    })
  }

  /**
   * 同步文件
   * @param store 存储对象
   * @param index 索引名称
   * @description
   * 如果文件已经存在则修改文件
   * 如果文件不存在则压入数据库中
   */
  public async sync<T extends { [key: string]: any }>(
    stroeName: string,
    index: keyof T,
    data: T,
    equals: (cursor: IDBCursorWithValue, data: T) => boolean = (cursor, data) => cursor.value[index] === data[index]
  ) {
    const database = await this.open()
    return await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(stroeName, 'readwrite')
      const store = transaction.objectStore(stroeName)

      const openRequest = store.index(index as string).openCursor(data[index])
      openRequest.onerror = (error) => reject(error)
      openRequest.onsuccess = () => {
        const cursor = openRequest.result
        if (cursor) {
          if (equals(cursor, data)) {
            const { id } = cursor.value
            const updateInfo = Object.assign({ id }, data)
            const updateRequest = cursor.update(updateInfo)
            updateRequest.onerror = (error) => reject(error)
            updateRequest.onsuccess = () => resolve()
          } else {
            cursor.continue()
          }
        } else {
          const pushRequest = store.add(data)
          pushRequest.onerror = (error) => reject(error)
          pushRequest.onsuccess = () => resolve()
        }
      }
    })
  }
}
