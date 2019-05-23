import * as path from 'path'
import { promisify } from 'util'
import * as fs from 'fs-extra'
import Bundler, { ParcelOptions } from 'parcel-bundler'
import * as conf from './conf'

const copyFileAsync = promisify(fs.copyFile.bind(fs))
const jsdos = path.join(conf.rootPath, 'node_modules/js-dos/dist')
const files = ['wdosbox.js', 'wdosbox.js.symbols', 'wdosbox.wasm.js'].map((file) => {
  return path.join(jsdos, file)
})

export default function bundle (webEntry: string, optoins?: ParcelOptions): void {
  const bundler = new Bundler(webEntry, optoins)
  bundler.on('bundled', () => {
    const promises = files.map((file) => {
      const name = path.basename(file)
      return copyFileAsync(file, path.join(conf.appPath, name))
    })

    return Promise.all(promises)
  })

  conf.isRelease ? bundler.bundle() : bundler.serve()
}
