import IndexedDB from './IndexedDB'
import { indexedDBTables, indexedDBOptions } from '../conf/model'
import * as Typings from '../typings'

export default class Model {
  public use: Typings.ModelUseType
  public database: IndexedDB

  constructor (options: Typings.ModelOptions) {
    this.use = options.use

    if (this.use === 'indexedDB' && IndexedDB.supported) {
      this.database = new IndexedDB(indexedDBOptions)
    }
  }

  /**
   * 存储 WASM 文件
   * @param {ArrayBuffer} source 文件内容
   * @returns {Promise<void>}
   */
  public saveWasm (source: ArrayBuffer): Promise<void> {
    if (this.use === 'indexedDB' && IndexedDB.supported) {
      return this.database.openStore(indexedDBTables.system).then((store) => this.database.put(store, source, 'wasm'))
    }

    return Promise.resolve()
  }

  /**
   * 获取 WASM 文件
   * @returns {Promise<ArrayBuffer>}
   */
  public loadWasm (): Promise<ArrayBuffer> {
    if (this.use === 'indexedDB' && IndexedDB.supported) {
      return this.database.openStore(indexedDBTables.system).then((store) => this.database.get(store, 'wasm'))
    }

    return Promise.resolve(undefined)
  }

  /**
   * 存储 ROM 文件
   * @param {string} name 文件名称
   * @param {ArrayBuffer} source 文件内容
   * @returns {Promise<void>}
   */
  public saveRom (name: string, rom: ArrayBuffer): Promise<void> {
    if (this.use === 'indexedDB' && IndexedDB.supported) {
      return this.database.openStore(indexedDBTables.rom).then((store) => this.database.put(store, rom, name))
    }

    return Promise.resolve()
  }

  /**
   * 读取 ROM 文件
   * @param {string} name 文件名称
   * @returns {Promise<ArrayBuffer>}
   */
  public loadRom (name: string): Promise<ArrayBuffer> {
    if (this.use === 'indexedDB' && IndexedDB.supported) {
      return this.database.openStore(indexedDBTables.rom).then((store) => this.database.get(store, name))
    }

    return Promise.resolve(undefined)
  }

  /**
   * 存储存档文件
   * @param {Typings.Archive | Array<Typings.Archive>} archive 存档内容
   * @returns {Promise<void>}
   */
  public saveArchive (archive: Typings.Archive | Array<Typings.Archive>): Promise<void> {
    if (this.use === 'indexedDB' && IndexedDB.supported) {
      if (!Array.isArray(archive)) {
        return this.saveArchive([archive])
      }

      return this.database.openStore(indexedDBTables.archive).then((store) => {
        const promises = archive.map((archive) => this.database.sync(store, 'romId', archive, (cursor, data) => cursor.value.file === data.file))
        return Promise.all(promises).then(() => void 0)
      })
    }

    return Promise.resolve()
  }

  /**
   * 读取存档文件
   * @param {string} romId ROM ID
   * @returns {Promise<Typings.Archive | Array<Typings.Archive>}
   */
  public loadArchive (romId: string): Promise<Typings.Archive[]> {
    if (this.use === 'indexedDB' && IndexedDB.supported) {
      return this.database.openStore(indexedDBTables.archive).then((store) => this.database.getAllByIndex(store, 'romId', romId))
    }

    return Promise.resolve(undefined)
  }

  /**
   * 销毁
   */
  public destroy (): void {
    this.database.destroy()

    this.use = undefined
    this.database = undefined

    this.destroy = Function.prototype as any
  }
}
