/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_CLIENT_ID: string
  VITE_SCOPES: string
  VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
