import path from 'path'
import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ?  '/simu-dos/' : '/',
  define: {
    'import.meta.env.BUILD': Date.now(),
  },
  server: {
    host: '0.0.0.0',
  },
  assetsInclude: [
    '**/*.zip',
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
    }
  },
  plugins: [
    nodePolyfills({
      globals: {
        process: true,
      }
    }),
    viteStaticCopy({
      targets: Array.from(function*() {
        const require = createRequire(import.meta.url)
        const root = path.dirname(require.resolve('js-dos/package.json'))
        const jsdos = path.join(root, 'dist')
        const files = ['wdosbox.js', 'wdosbox.js.symbols', 'wdosbox.wasm.js']
        for (const file of files) {
          const src = path.join(jsdos, file)
          yield { src, dest: './' }
        }
      }())
    }),
    VitePWA({
      registerType: 'autoUpdate',
    }),
  ]
})
