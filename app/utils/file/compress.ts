import JSZip from 'jszip'

export interface File {
  file: string
  content: ArrayBuffer | string | Blob
}

export async function compress(files: File[]) {
  const zip = new JSZip()
  files.forEach(({ file, content }) => zip.file(file, content))
  return zip.generateAsync({ type: 'blob' })
}
