import { AxiosRequestConfig } from 'axios'
import DosBox from './libs/DosBox'

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
  }
}

// Buttons
export enum DGButtonType {
  normal = 'normal',
  round = 'round'
}

export interface DGButtonOptions {
  type?: keyof typeof DGButtonType,
  position?: DGPosition
  size?: DGStyleValue
}

export interface DGButton {
  bind (events: string | Array<string>, handle: DGEventHandle): void
  unbind (events: string | Array<string>, handle: DGEventHandle): void
  setType (type: keyof typeof DGButtonType): void
  setWidth (width: DGStyleValue): void
  setHeight (height: DGStyleValue): void
  setFontSize (size: DGStyleValue): void
  setSize (size: string | number): void
  setPosition (position: DGPosition): void
  append (element: HTMLElement): void
  remove (): void
}

// Keyboard
export interface DGKeyboard {
  add (context: string, options?: DGButtonOptions): DGButton
  remove (button: DGButton): void
  destroy (): void
}

// Joystick
export enum DGJoystickDirectionType {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right'
}

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

export interface DGJoystick {
  setPosition (position: DGPosition): void
  setSize (size: number | string): void
  onActions (handle: (event: any) => void): void
  destory (): void
}

// Controller
export enum DGControllerActionType {
  joystick = 'joystick',
  keydown = 'keydown'
}

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

// Stage
export interface DGStage {
  launch (): DosBox
  resize (): void
  reset (): Promise<void>
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
