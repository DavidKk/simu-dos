import { AxiosRequestConfig } from 'axios'

// Events
export declare const DGEvent: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent
export type DGEventHandle = (event: TouchEvent | MouseEvent | PointerEvent | MSPointerEvent) => void

// Styles
export interface DGPoint {
  x: number
  y: number
}

export interface DGPosition {
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
}

// Games
export interface DGGame {
  id: string
  name: string
  url: string
  command: Array<string>
  save: {
    path: string
    regexp: RegExp
  }
  play: {
    joystick: boolean
    keyboard: Array<{
      context: string
      keyCode?: number
      action?: string
      options?: {
        type?: DGButtonType
        size?: number | string
        position?: DGPosition
      }
    }>
  }
}

// Buttons
export enum DGButtonType {
  round ='round'
}

export interface DGButtonOptions {
  type?: keyof typeof DGButtonType,
  position?: DGPosition
  size?: number | string
}

export interface DGButton {
  bind (events: string | Array<string>, handle: DGEventHandle): void
  unbind (events: string | Array<string>, handle: DGEventHandle): void
  setType (type: keyof typeof DGButtonType): void
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

// Controller
export enum DGControllerActionType {
  joystick = 'joystick',
  keydown = 'keydown',
}

export interface DGController {
  mapGame (game: DGGame): void
  mapButtonToKeyCode (button: DGButton, keyCode: number): () => void
  onActions (handle: (event: any) => void): void
  destory (): void
}

// Dosbox
export interface DGDosBoxOptions {
  wasmUrl?: string
  database?: string
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
  play (game: DGGame): Promise<void>
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

// Stage
export interface DGStage {
  toggleSpinner (isOpen: boolean): void
  resize (): void
  destory (): Promise<void>
}

// DevTool
export interface DGDevTool {
  resize (): void
  begin (): void
  end (): void
}
