export interface MenuGamePlayEventPayload {
  gameplay: boolean
}

export interface MenuSwitchEventPayload {
  visible: boolean
}

export interface EmunUploadEventPayload {
  romId: string
  files: Record<string, Uint8Array>
}
