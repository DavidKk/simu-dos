// Utils
export type Lang<T> = {
  cn?: T
  tc?: T
  en?: T
}

// Events
export type Event = TouchEvent | MouseEvent | PointerEvent | MSPointerEvent
export type EventHandle = (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void

export interface DosBoxProgressEvent {
  loaded: number
  total: number
}

// Styles
export type StyleValue = string | number
export type StyleSize = StyleValue | {
  width: StyleValue
  height: StyleValue
}

export interface Point {
  x: number
  y: number
}

export interface Position {
  top?: StyleValue
  right?: StyleValue
  bottom?: StyleValue
  left?: StyleValue
}

// IndexedDB
export interface IndexedDBStoreOptions {
  [key: string]: {
    options?: IDBObjectStoreParameters
    indexes?: Array<{
      name: string
      keyPath: string | string[],
      options?: IDBIndexParameters
    }>
  }
}

export interface IndexedDBOptions {
  database: string
  version: number
  store: IndexedDBStoreOptions
}

export type ModelUseType = 'indexedDB'

export interface ModelOptions {
  use: ModelUseType
}

// Config
export type JoystickConf = boolean | Array<{
  keyCode: number,
  direction: JoystickDirectionType | Array<JoystickDirectionType>
}>

export type KeypadConf = Array<{
  context: string
  keyCode?: number
  action?: string
  options?: ButtonOptions
}>

export type DPadConf = boolean | Array<{
  keyCode: number
  direction: DPadDirectionType
}>

export interface GameInfo {
  id: string
  name: string
  translates?: Lang<string>
  cover: string
  type?: string
  summary?: string | string[] | Lang<string | string[]>
  developers?: string | string[] | Lang<string | string[]>
  publisher?: string | string[] | Lang<string | string[]>
  release?: string | Date | number
  url: string | Lang<string>
  size?: number
  rom?: ArrayBuffer
  command?: Array<string>
  save?: {
    path: string
    regexp: RegExp
  }
  play?: {
    joystick?: JoystickConf
    keypad?: KeypadConf
    dpad?: DPadConf
    keyboad?: boolean
  }
}

// Buttons
export type ButtonType = 'normal' | 'round'

export interface ButtonOptions {
  type?: ButtonType,
  position?: Position
  size?: StyleValue
}

// DPad
export type DPadDirectionType = 'up' | 'down' | 'left' | 'right'

// Joystick
export type JoystickDirectionType = 'up' | 'down' | 'left' | 'right'

export interface JoystickDirection {
  x: JoystickDirectionType
  y: JoystickDirectionType
  angle: JoystickDirectionType
}

export interface JoystickEventDatas {
  coord: Point
  size: number
  distance: number
  angle: number
  radian: number
  direction: JoystickDirection
}

// Controller
export type ControllerActionType = 'joystick' | 'keydown'

// Dosbox
export interface DosBoxOptions {
  wasm?: ArrayBuffer
  wasmUrl?: string
  database?: string
}

export interface DosBoxPlayOptions extends DosBoxOptions {
  onDownloadWasmProgress?: (DosBoxProgressEvent) => void
  onDownloadWasmCompleted?: (buffer: ArrayBuffer) => void
  onDownloadRomProgress?: (DosBoxProgressEvent) => void
  onDownloadRomCompleted?: (buffer: ArrayBuffer) => void
  onExtractCompleted?: (buffer: ArrayBuffer) => void
}

export type DosBoxConvertFileToArrayBufferParams = Array<{
  file: string | ArrayBuffer
  options: {
    onProgress?: (DosBoxProgressEvent) => void
    onCompleted?: (buffer: ArrayBuffer) => void
  }
}>

export interface DosBoxCompileOptions {}

export interface DosBoxExtractOptions {}

export interface DosBoxWdosboxModule {
  version: string
  canvas: HTMLCanvasElement
  instantiateWasm: (info: object, receiveInstance: Function) => void
  onRuntimeInitialized: () => void
  ping: (message: string) => void
  [key: string]: any
}

export interface DosBoxFetchTask {
  promise: Promise<any>
  cancel: (message?: string) => void
}

// Game
export interface GameDBOptions {
  pattern?: RegExp
}

// Files
export interface Archive {
  romId: string
  file: string
  content: ArrayBuffer
}

// Langs
export interface LangDescription {
  game: {
    name: string
    type: string
    summary: string
    developers: string
    publisher: string
    release: string
  },
  supportWebassembly: string[],
  qrcode: {
    label: string
  }
}

export interface LangOptions {
  cn?: any
  tc?: any
  en?: any
}

// Stage
export type StageShowType = 'term' | 'canvas'
