import IndexedDB from './IndexedDB'
import { indexedDBTables, indexedDBOptions } from '@/constants/model'
import type { Archive, ModelUseType, ModelOptions } from '@/types'

export default class Model {
  public used: ModelUseType
  public database: IndexedDB

  constructor(options: ModelOptions) {
    if (options.use === 'indexedDB' && IndexedDB.supported) {
      this.database = new IndexedDB(indexedDBOptions)
      this.used = options.use
    }
  }

  /**
   * 存储 WASM 文件
   * @param source 文件内容
   */
  public saveWasm(source: ArrayBuffer) {
    // return this.database.put(indexedDBTables.system, source, 'wasm')
  }

  /** 获取 WASM 文件 */
  public loadWasm() {
    return this.database.get(indexedDBTables.system, 'wasm') as Promise<ArrayBuffer>
  }

  /**
   * 存储 ROM 文件
   * @param name 文件名称
   * @param source 文件内容
   */
  public saveRom(name: string, rom: ArrayBuffer) {
    return this.database.put(indexedDBTables.rom, rom, name)
  }

  /**
   * 读取 ROM 文件
   * @param name 文件名称
   */
  public loadRom(name: string) {
    return this.database.get(indexedDBTables.rom, name) as Promise<ArrayBuffer>
  }

  /**
   * 存储存档文件
   * @param archive 存档内容
   */
  public async saveArchive(archive: Archive | Array<Archive>): Promise<void> {
    if (!Array.isArray(archive)) {
      return this.saveArchive([archive])
    }

    const promises = archive.map((archive) => this.database.sync(indexedDBTables.archive, 'romId', archive, (cursor, data) => cursor.value.file === data.file))
    await Promise.all(promises)
  }

  /**
   * 读取存档文件
   * @param romId ROM ID
   */
  public loadArchive (romId: string) {
    return this.database.getAllByIndex(indexedDBTables.archive, 'romId', romId) as Promise<Archive[]>
  }
}
