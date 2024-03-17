import JSZip from 'jszip'

export async function extract(data: Uint8Array) {
  const zip = new JSZip()
  const { files } = await zip.loadAsync(data, { createFolders: false })
  const results = await Promise.allSettled(
    Object.entries(files).map(async ([file, object]) => {
      const content = await object.async('uint8array')
      return { file, content }
    })
  )

  return Object.fromEntries(
    (function* () {
      for (const result of results) {
        if (result.status !== 'fulfilled') {
          continue
        }

        const { file, content } = result.value
        if (!content.byteLength) {
          continue
        }

        yield [file, content]
      }
    })()
  )
}
