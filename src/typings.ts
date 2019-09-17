// Events
// -----------------------

export type Event = TouchEvent | MouseEvent | PointerEvent | MSPointerEvent
export type EventHandle = (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void

// Localization
// -----------------------

export type i18nType<T> = {
  cn?: T
  tc?: T
  en?: T
}

export interface I18nTranslation {
  support: {
    webassembly: string[],
    indexedDB: string[]
  },
  game: {
    name: string
    type: string
    summary: string
    developers: string
    publisher: string
    release: string
  },
  qrcode: {
    label: string
  }
}

// Style & Position
// -----------------------

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

export type ElementClassNameItem = string | { [key: string]: boolean }
export interface ElementClassNameArray extends Array<ElementClassNameItem | ElementClassNameArray> {}
export type ElementClassNames = ElementClassNameItem | ElementClassNameArray

// Buttons
// -----------------------

export type ButtonType = 'normal' | 'round'

export interface ButtonOptions {
  type?: ButtonType,
  position?: Position
  size?: StyleValue
}

// KeyPad
// -----------------------

export type KeyPadConf = Array<{
  context: string
  keyCode?: number
  action?: string
  options?: ButtonOptions
}>

// DPad
// ------------------------

export type DPadDirectionType = 'up' | 'down' | 'left' | 'right'

export type DPadConf = boolean | Array<{
  keyCode: number
  direction: DPadDirectionType
}>

// Joystick
// ------------------------

export type JoystickDirectionType = 'up' | 'down' | 'left' | 'right'
export type JoystickConf = boolean | Array<{
  keyCode: number,
  direction: JoystickDirectionType | Array<JoystickDirectionType>
}>

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

// Game List
// ------------------------

export interface GameInformationPlay {
  joystick?: JoystickConf
  keypad?: KeyPadConf
  dpad?: DPadConf
  keyboad?: boolean
}

export interface GameInformation {
  id: string
  name: string
  translates?: i18nType<string>
  cover: string
  type?: string
  summary?: string | string[] | i18nType<string | string[]>
  developers?: string | string[] | i18nType<string | string[]>
  publisher?: string | string[] | i18nType<string | string[]>
  release?: string | Date | number
  url: string | i18nType<string>
  size?: number
  rom?: ArrayBuffer
  command?: Array<string>
  save?: {
    path: string
    regexp: RegExp
  }
  play?: GameInformationPlay
}

// Model & IndexedDB
// --------------------

export interface Archive {
  romId: string
  file: string
  content: ArrayBuffer
}

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

// DosBox
// ---------------------

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

// Controller
// ----------------------

export type ControllerActionType = 'joystick' | 'keydown'

// Stage
// ------------------------

export type StageShowType = 'term' | 'canvas'
