export function uint8ArraysToArrayBuffer(uint8Arrays: Uint8Array[]) {
  const totalLength = uint8Arrays.reduce((acc, arr) => acc + arr.length, 0)

  const arrayBuffer = new ArrayBuffer(totalLength)
  const uint8Array = new Uint8Array(arrayBuffer)

  let offset = 0
  uint8Arrays.forEach((arr) => {
    uint8Array.set(arr, offset)
    offset += arr.length
  })

  return arrayBuffer
}
