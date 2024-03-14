import path from 'path'
import { createRequire } from 'node:module'
import { defineConfig, type Plugin } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { VitePWA } from 'vite-plugin-pwa'
import { parse } from 'node-html-parser'

function viteBottomScripts() {
  return {
    name: 'vite-bottom-scripts',
    transformIndexHtml(html: string) {
      const root = parse(html)
      const scripts = root.querySelectorAll('head > script')
      const body = root.querySelector('body')
      scripts.forEach((node) => body?.appendChild(node))
      return root.outerHTML
    }
  }
}

export default defineConfig({
  base: '/simu-dos/',
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
    VitePWA(),
    viteBottomScripts(),
  ]
})
