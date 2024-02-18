export interface DosBoxProgressEvent {
  loaded: number
  total: number
}

export interface DosBoxOptions {
  wasm?: ArrayBuffer
  wasmUrl?: string
  database?: string
}

export interface DosBoxPlayOptions extends DosBoxOptions {
  onDownloadWasmProgress?: (event: DosBoxProgressEvent) => void
  onDownloadWasmCompleted?: (buffer: ArrayBuffer) => void
  onDownloadRomProgress?: (event: DosBoxProgressEvent) => void
  onDownloadRomCompleted?: (buffer: ArrayBuffer) => void
  onExtractCompleted?: (buffer: ArrayBuffer) => void
}

export type DosBoxConvertFileToArrayBufferParams = Array<{
  file: string | ArrayBuffer
  options: {
    onProgress?: (event: DosBoxProgressEvent) => void
    onCompleted?: (buffer: ArrayBuffer) => void
  }
}>

export interface DosBoxCompileOptions {}

export interface DosBoxExtractOptions {}

export interface FileSystem {
  readdir(folder: string): string[]
  unlink(file: string): void
  createDataFile(location: string, filename: string, content: ArrayBuffer, ...rest: true[]): void
  analyzePath(file: string): {
    exists: boolean
    object: {
      contents: ArrayBuffer
    }
  }
}

export interface DosBoxWdosboxModuleBridge {
  version: string
  canvas: HTMLCanvasElement
  instantiateWasm(info: object, receiveInstance: (instance: WebAssembly.Instance, wasmModule: WebAssembly.Module) => any): void
  onRuntimeInitialized(): void
  ping(message: string): void
}

export interface DosBoxWdosboxModule extends DosBoxWdosboxModuleBridge {
  FS: FileSystem
  [key: string]: any
}

export interface DosBoxFetchTask {
  promise: Promise<any>
  cancel: (message?: string) => void
}
