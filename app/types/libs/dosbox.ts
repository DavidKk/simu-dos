export type DosboxMainFn = (command?: string[]) => Promise<void>

export interface DosboxRuntimeInitializedEventPayload {
  mainFn: DosboxMainFn
}

export interface DosboxMessageEventPayload {
  message: string
}
