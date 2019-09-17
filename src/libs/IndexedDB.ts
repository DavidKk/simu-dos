import clone from 'lodash/clone'
import * as Typings from '../typings'

const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

export default class IndexedDB {
  static supported = !!indexedDB

  private settings: Typings.IndexedDBOptions
  private db: IDBDatabase

  public database: string
  public version: number

  constructor (options: Typings.IndexedDBOptions) {
    this.settings = clone(options)

    const { database, version } = this.settings
    this.database = database
    this.version = version
  }

  /**
   * 打开数据库
   * @param {string} database 数据库名称
   * @param {number} version 数据库版本
   */
  public open (database: string = this.database, version: number = this.version): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
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

  /**
   * 初始化数据表
   */
  public registerStores (stores: Typings.IndexedDBStoreOptions): void {
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
  public async recover (): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      this.db && this.db.close()
      this.db = null

      const openRequest = indexedDB.deleteDatabase(this.database)
      openRequest.onerror = (error) => reject(error)
      openRequest.onsuccess = () => this.open(this.database, this.version).then(resolve).catch(reject)
    })
  }

  /**
   * 通过索索引查找所有数据
   * @param {IDBObjectStore} store 存储对象
   * @param {string} index 索引名称
   * @param {string|number|Date|ArrayBufferView|ArrayBuffer|IDBArrayKey|IDBKeyRange} query 搜索条件
   * @returns {Promise<any>}
   */
  public getAllByIndex (stroeName: string, index: string, query: string | number | Date | ArrayBufferView | ArrayBuffer | IDBArrayKey | IDBKeyRange): Promise<any> {
    return this.open().then((database: IDBDatabase) => new Promise((resolve, reject) => {
      const transaction = database.transaction(stroeName, 'readwrite')
      const store = transaction.objectStore(stroeName)

      const dbIndex = store.index(index)
      const getRequest = dbIndex.getAll(query)
      getRequest.onerror = (error) => reject(error)
      getRequest.onsuccess = (event: any) => resolve(event.target.result)
    }))
  }

  /**
   * 查找数据
   * @param {IDBObjectStore} store 存储对象
   * @param {string|number|Date|ArrayBufferView|ArrayBuffer|IDBArrayKey|IDBKeyRange} query 搜索条件
   * @returns {Promise<any>}
   */
  public get (stroeName: string, query: string | number | Date | ArrayBufferView | ArrayBuffer | IDBArrayKey | IDBKeyRange): Promise<any> {
    return this.open().then((database: IDBDatabase) => new Promise((resolve, reject) => {
      const transaction = database.transaction(stroeName, 'readwrite')
      const store = transaction.objectStore(stroeName)

      const getRequest = store.get(query)
      getRequest.onerror = (error) => reject(error)
      getRequest.onsuccess = () => resolve(getRequest.result)
    }))
  }

  /**
   * 修改数据
   * @param {IDBObjectStore} store 存储对象
   * @param {any} value 数据
   * @param {IDBValidKey} key 键名
   * @returns {Promise<void>}
   */
  public put (stroeName: string, value: any, key?: IDBValidKey): Promise<void> {
    return this.open().then((database: IDBDatabase) => new Promise((resolve, reject) => {
      const transaction = database.transaction(stroeName, 'readwrite')
      const store = transaction.objectStore(stroeName)

      const putRequest = store.put(value, key)
      putRequest.onerror = (error) => reject(error)
      putRequest.onsuccess = () => resolve()
    }))
  }

  /**
   * 同步文件
   * @param {IDBObjectStore} store 存储对象
   * @param {string} index 索引名称
   * @returns {Promise}
   * @description
   * 如果文件已经存在则修改文件
   * 如果文件不存在则压入数据库中
   */
  public sync <T extends { [key: string]: any }> (stroeName: string, index: keyof T, data: T, equals: (cursor: IDBCursorWithValue, data: T) => boolean = (cursor, data) => cursor.value[index] === data[index]): Promise<void> {
    return this.open().then((database: IDBDatabase) => new Promise((resolve, reject) => {
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
    }))
  }

  /**
   * 销毁
   */
  public destroy (): void {
    this.db && this.db.close()

    this.settings = undefined
    this.database = undefined
    this.version = undefined
    this.db = undefined

    this.destroy = Function.prototype as any
  }
}
