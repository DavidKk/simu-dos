export interface MenuGamePlayEventPayload {
  gameplay: boolean
}

export interface MenuSwitchEventPayload {
  visible: boolean
}

export interface EmnuSyncEventPayload {
  status: 'idle' | 'downloading' | 'uploading'
}

export interface EmunUploadEventPayload {
  romId: string
  files: Record<string, Uint8Array>
}
