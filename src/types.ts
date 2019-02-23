import { AxiosRequestConfig } from 'axios'

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
  url: string
  size: number
  command: Array<string>
  save: {
    path: string
    regexp: RegExp
  }
  play: {
    joystick: DGJoystickConf
    keyboard: DGKeyboardConf
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

export interface DGController {
  mapGame (game: DGGameInfo): void
  mapButtonToKeyCode (button: DGButton, keyCode: number): () => void
  onActions (handle: (event: any) => void): void
  reset (): void
}

// Dosbox
export interface DGDosBoxOptions {
  wasmUrl?: string
  database?: string
}

export interface DGDosBoxPlayOptions extends DGDosBoxOptions {
  onDwonloadWasmProgress?: (DGDosBoxProgressEvent) => void
  onDwonloadRoomProgress?: (DGDosBoxProgressEvent) => void
  onDownloadCompleted?: () => void
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

export interface DGDosBox {
  play (game: DGGameInfo): Promise<void>
  compile (wasmUrl?: string, options?: DGDosBoxOptions): Promise<any>
  fetchArrayBuffer (url: string, options?: AxiosRequestConfig): Promise<ArrayBuffer>
  extract (url: string, type: string): Promise<void>
  createFile (file: string, body: ArrayBuffer | Uint8Array | string): void
  searchFiles (dir: string, pattern: RegExp): Promise<Array<string>>
  saveFilesToDB (files: string[], table: string): Promise<void>
  loadFilesFromDB (files: string[] | null, table: string): Promise<void>
  simulateKeyEvent (keyCode: number, pressed: boolean): void
  simulateKeyPress (keyCode: number): void
  sendKeyPress (code: number): void
  requestShellInput (): void
  shell (...cmd: string[]): Promise<void>
  exit (): boolean
  setSize (width: number, height: number): void
  requestFullScreen (): void
  onExit (callback): void
  destroy (force: boolean): Promise<void>
}

// Term
export interface DGTerm {
  newline (): HTMLDivElement
  print (context: string): void
  relace (context: string, line: HTMLElement): void
  progress (context: string, loaded: number, total: number, size: number, line: HTMLElement): void
  inputChar (char: string): void
  simulateInput (context: string): Promise<void>
  clear (): void
  show (): void
  hide (): void
  scrollToButtom (): void
}

// Stage
export interface DGStage {
  launch (): DGDosBox
  resize (): void
  reset (): Promise<void>
}

// DevTool
export interface DGDevTool {
  resize (): void
  begin (): void
  end (): void
}

// Game
export interface DGGameDBOptions {
  dbTable?: string
  pattern?: RegExp
}

export interface DGGame {
  play (name: string): Promise<void>
  stop (): Promise<void>
  saveArchiveFromDB (dir: string, options?: DGGameDBOptions): Promise<void>
  loadArchiveFromDB (options?: DGGameDBOptions): Promise<void>
  disableContextMenu (disable: boolean): void
}
