import { ParcelOptions } from 'parcel-bundler'
import bundle from './bundle'
import * as conf from './conf'

const options: ParcelOptions = {
  outDir: conf.appPath,
  publicUrl: conf.isRelease ? '/simu-dos/' : '/',
  watch: !conf.isRelease,
  minify: conf.isRelease,
  sourceMaps: !conf.isRelease,
  contentHash: conf.isRelease,
  hmr: false
}

bundle(conf.webEntry, options)
