import * as Typings from '../typings'
import Package from '../../package.json'

const [major, minor] = (Package.version as string).split('.')

export const indexedDBTables = {
  system: 'system',
  rom: 'rom',
  archive: 'archive'
}

export const indexedDBOptions: Typings.IndexedDBOptions = {
  database: `${major}@${(Package.name as string)}`,
  version: Number(minor) + 1,
  store: {
    [indexedDBTables.system]: {},
    [indexedDBTables.rom]: {},
    [indexedDBTables.archive]: {
      options: {
        keyPath: 'id',
        autoIncrement: true
      },
      indexes: [
        {
          name: 'romId',
          keyPath: 'romId',
          options: {
            unique: false
          }
        }
      ]
    }
  }
}
