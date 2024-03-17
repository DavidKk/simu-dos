import { FileSystem } from '@dumlj/cloudfs'
import IndexedDB from '@/libs/IndexedDB'
import { download } from '@/utils'
import { indexedDBTables, indexedDBOptions } from '@/constants/model'
import { ARCHIVE_STORE_NAME } from '@/constants/definations'
import type { Archive, ModelUseType, ModelOptions } from '@/types'
import { compress } from '@/utils/file/compress'

export default class Model {
  public used: ModelUseType
  public database: IndexedDB
  public cloudfs = new FileSystem(ARCHIVE_STORE_NAME)

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
    return this.database.put(indexedDBTables.system, source, 'wasm')
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
  public async saveArchive(archive: Archive | Array<Archive>): Promise<boolean> {
    if (!Array.isArray(archive)) {
      return this.saveArchive([archive])
    }

    const results = await Promise.allSettled(
      archive.map(async ({ romId, file, content }) => {
        const filePath = `/${romId}/${file}`
        return this.cloudfs.writeFile(filePath, content)
      })
    )

    return -1 !== results.findIndex((result) => result.status === 'fulfilled' && result.value === true)
  }

  /**
   * 读取存档文件
   * @param romId ROM ID
   */
  public async loadArchive(romId: string) {
    const files = await this.cloudfs.glob(`/${romId}/*`)
    return files.map(({ folder, name, content }) => {
      const file = `${folder.replace(`/${romId}`, '')}/${name}`
      return { file, content }
    })
  }

  /** 导出存档 */
  public async exportArchive(romId: string) {
    const files = await this.cloudfs.glob(`/${romId}/*`)
    if (!files?.length) {
      return
    }

    const blob = await compress(
      files.map(({ folder, name, content }) => {
        const file = `${folder}/${name}`
        return { file, content }
      })
    )

    download(blob, romId)
  }

  /** 导入存档 */
  public async importArchive(romId: string, files: Record<string, Uint8Array>) {
    return this.saveArchive(
      Object.entries(files).map(([filePath, content]) => {
        const file = filePath.split('/').slice(1).join('/')
        return { romId, file, content }
      })
    )
  }
}
