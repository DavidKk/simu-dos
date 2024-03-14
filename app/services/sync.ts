import { SyncService } from '@dumlj/cloudfs'
import { ARCHIVE_STORE_NAME } from '@/constants/indexedDB'

const syncService = new SyncService({
  database: ARCHIVE_STORE_NAME,
  googleClientId: import.meta.env.VITE_CLIENT_ID,
  googleApiKey: import.meta.env.VITE_API_KEY,
})

export async function sync() {
  try {
    await syncService.sync()
  } catch (error) {
    if (error instanceof Error && /Authorization expires/.test(error.message)) {
      await syncService.sync()
    }
  }
}
