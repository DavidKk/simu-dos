interface IndexedDBPolyfill {
  IndexedDB?: IDBFactory
  mozIndexedDB?: IDBFactory
  webkitIndexedDB?: IDBFactory
  msIndexedDB?: IDBFactory
}

interface Window extends IndexedDBPolyfill {}
