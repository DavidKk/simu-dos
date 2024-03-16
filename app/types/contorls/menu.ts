export interface MenuGamePlayEventPayload {
  gameplay: boolean
}

export interface MenuSwitchEventPayload {
  visible: boolean
}

export interface EmnuSyncEventPayload {
  status: 'idle' | 'downloading' | 'uploading'
}
