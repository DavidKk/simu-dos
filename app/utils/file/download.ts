export function download(blob: Blob, name?: string) {
  const node = document.createElement('a')
  node.href = URL.createObjectURL(blob)
  name && (node.download = `${name}.zip`)
  node.click()
  document.body.appendChild(node)
  document.body.removeChild(node)
  URL.revokeObjectURL(node.href)
}
