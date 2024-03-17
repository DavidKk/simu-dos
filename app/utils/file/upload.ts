import { readFile } from './readFile'

export interface UploadResult {
  name: string
  content: Uint8Array
}

export function upload() {
  return new Promise<UploadResult[]>((resolve, reject) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = false
    input.accept = '.zip'

    input.addEventListener('change', async () => {
      const files = input.files
      if (!files) {
        reject(new Error('Can not found any files.'))
        return
      }

      const results = await Promise.allSettled(
        Array.from(files).map(async (file) => {
          const { name } = file
          const content = await readFile(file)
          return { name, content }
        })
      )

      const response = Array.from(
        (function* () {
          for (const result of results) {
            if (result.status !== 'fulfilled') {
              continue
            }

            const { name, content } = result.value
            if (content instanceof ArrayBuffer) {
              const uint8Array = new Uint8Array(content)
              yield { name, content: uint8Array }
              continue
            }

            if (typeof content === 'string') {
              const encoder = new TextEncoder()
              const uint8Array = encoder.encode(content)
              yield { name, content: uint8Array }
              continue
            }
          }
        })()
      )

      resolve(response)
    })

    input.click()
  })
}
