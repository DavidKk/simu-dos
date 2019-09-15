import * as Typings from '../typings'

const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
const TableRoms = 'roms'
const TableArchive = 'archive'

export default class Model {
  private db: IDBDatabase
  public database: string
  public version: number

  constructor (database: string, version: number) {
    this.database = database
    this.version = version
  }

  public initTables (): void {
    if (!this.db) {
      return
    }

    // Roms Table
    this.db.createObjectStore(TableRoms)

    // Archives Table
    const saveStore = this.db.createObjectStore(TableArchive, { keyPath: 'file' })
    saveStore.createIndex('romId', 'romId', { unique: false })
  }

  public async recover (): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      this.db && this.db.close()
      this.db = null

      const openRequest = indexedDB.deleteDatabase(this.database)
      openRequest.onerror = (error) => reject(error)
      openRequest.onsuccess = () => this.open(this.database, this.version).then(resolve).catch(reject)
    })
  }

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
            this.db = openRequest.result
            this.initTables()
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

  public saveArchive (archives: Array<Typings.Archive>): Promise<void> {
    return this.open().then((database: IDBDatabase) => {
      const transaction = database.transaction(TableArchive, 'readwrite')
      const store = transaction.objectStore(TableArchive)

      const promises = archives.map((archive) => new Promise((resolve, reject) => {
        const openRequest = store.openCursor(archive.file)

        openRequest.onerror = (error) => reject(error)
        openRequest.onsuccess = () => {
          const cursor = openRequest.result
          const putRequest = cursor ? cursor.update(archive) : store.add(archive)

          putRequest.onerror = (error) => reject(error)
          putRequest.onsuccess = () => resolve()
        }
      }))

      return Promise.all(promises).then(() => void 0)
    })
  }

  public loadArchive (romId: string): Promise<Array<Typings.Archive>> {
    return this.open().then((database) => new Promise((resolve, reject) => {
      const transaction = database.transaction(TableArchive, 'readonly')
      const store = transaction.objectStore(TableArchive)

      const index = store.index('romId')
      const getRequest = index.getAll(romId)

      getRequest.onerror = (error) => reject(error)
      getRequest.onsuccess = (event: any) => resolve(event.target.result)
    }))
  }

  public saveRom (name: string, rom: ArrayBuffer): Promise<void> {
    return this.open().then((database) => new Promise((resolve, reject) => {
      const transaction = database.transaction(TableRoms, 'readwrite')
      const store = transaction.objectStore(TableRoms)
      const putRequest = store.put(rom, name)

      putRequest.onsuccess = () => resolve()
      putRequest.onerror = (error) => reject(error)
    }))
  }

  public loadRom (name: string): Promise<ArrayBuffer> {
    return this.open().then((database) => new Promise((resolve, reject) => {
      const transaction = database.transaction(TableRoms, 'readonly')
      const store = transaction.objectStore(TableRoms)

      const getRequest = store.get(name)
      getRequest.onerror = (error) => reject(error)
      getRequest.onsuccess = () => resolve(getRequest.result)
    }))
  }

  public destroy (): void {
    this.db && this.db.close()
    this.db = undefined
    this.destroy = Function.prototype as any
  }
}
