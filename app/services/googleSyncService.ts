import { SyncService } from '@dumlj/cloudfs'
import { ARCHIVE_STORE_NAME } from '@/constants/definations'

export const googleSyncService = new SyncService({
  database: ARCHIVE_STORE_NAME,
  googleClientId: import.meta.env.VITE_CLIENT_ID,
  googleApiKey: import.meta.env.VITE_API_KEY,
})
