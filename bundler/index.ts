import { ParcelOptions } from 'parcel-bundler'
import bundle from './bundle'
import * as conf from './conf'

const options: ParcelOptions = {
  outDir: conf.appPath,
  publicUrl: conf.isRelease ? '/dosgame/' : '/',
  watch: !conf.isRelease,
  minify: conf.isRelease,
  sourceMaps: false,
  contentHash: true,
  hmr: false
}

bundle(conf.webEntry, options)
