// Events
export type DGEvent = TouchEvent | MouseEvent | PointerEvent | MSPointerEvent
export type DGEventHandle = (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void

export interface DGDosBoxProgressEvent {
  loaded: number
  total: number
}

// Styles
export type DGStyleValue = string | number
export type DGStyleSize = DGStyleValue | {
  width: DGStyleValue
  height: DGStyleValue
}

export interface DGPoint {
  x: number
  y: number
}

export interface DGPosition {
  top?: DGStyleValue
  right?: DGStyleValue
  bottom?: DGStyleValue
  left?: DGStyleValue
}

// Config
export type DGJoystickConf = boolean | Array<{
  keyCode: number,
  direction: DGJoystickDirectionType | Array<DGJoystickDirectionType>
}>

export type DGKeyboardConf = Array<{
  context: string
  keyCode?: number
  action?: string
  options?: DGButtonOptions
}>

export type DGDPadConf = boolean | Array<{
  keyCode: number
  direction: DGDPadDirectionType
}>

export interface DGGameInfo {
  id: string
  name: string
  cover: string
  url: string
  size?: number
  room?: ArrayBuffer
  command: Array<string>
  save?: {
    path: string
    regexp: RegExp
  }
  play?: {
    joystick?: DGJoystickConf
    keyboard?: DGKeyboardConf
    dpad?: DGDPadConf
  }
}

// Buttons
export type DGButtonType = 'normal' | 'round'

export interface DGButtonOptions {
  type?: DGButtonType,
  position?: DGPosition
  size?: DGStyleValue
}

// DPad
export type DGDPadDirectionType = 'up' | 'down' | 'left' | 'right'

// Joystick
export type DGJoystickDirectionType = 'up' | 'down' | 'left' | 'right'

export interface DGJoystickDirection {
  x: DGJoystickDirectionType
  y: DGJoystickDirectionType
  angle: DGJoystickDirectionType
}

export interface DGJoystickEventDatas {
  coord: DGPoint
  size: number
  distance: number
  angle: number
  radian: number
  direction: DGJoystickDirection
}

// Controller
export type DGControllerActionType = 'joystick' | 'keydown'

// Dosbox
export interface DGDosBoxOptions {
  wasmUrl?: string
  database?: string
}

export interface DGDosBoxPlayOptions extends DGDosBoxOptions {
  onDwonloadWasmProgress?: (DGDosBoxProgressEvent) => void
  onDwonloadRoomProgress?: (DGDosBoxProgressEvent) => void
  onDownloadCompleted?: (buffer: ArrayBuffer) => void
}

export interface DGDosBoxCompileOptions extends DGDosBoxOptions {
  onProgress?: (DGDosBoxProgressEvent) => void
}

export interface DGDosBoxWdosboxModule {
  version: string
  canvas: HTMLCanvasElement
  instantiateWasm: (info: object, receiveInstance: Function) => void
  onRuntimeInitialized: () => void
  ping: (message: string) => void
  [key: string]: any
}

export interface DGDosBoxFetchTask {
  promise: Promise<any>
  cancel: (message?: string) => void
}

// Game
export interface DGGameDBOptions {
  pattern?: RegExp
}

// Files
export interface DGArchive {
  roomid: string
  file: string
  content: ArrayBuffer
}
