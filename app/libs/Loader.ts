import { uint8ArraysToArrayBuffer } from '@/utils'
import SimProgressEvent from './SimProgressEvent'

export type LoaderId = AbortSignal

export interface LoadTask {
  promise: Promise<any>
  cancel: (reason?: any) => void
}

export interface RequestOptions extends Omit<RequestInit, 'signal'> {
  onProgress?(event: SimProgressEvent): void
  onCompleted?(buffer: ArrayBuffer): void
}

export type ProgressHandle = Exclude<RequestOptions['onProgress'], undefined>

export default class Loader {
  protected activeRequests = new WeakMap<LoaderId, LoadTask>()

  protected async progress(promise: Promise<Response>, onProgress: ProgressHandle) {
    const response = await promise
    const reader = response.body?.getReader()
    const contentLength = response.headers.get('Content-Length')

    if (reader && typeof contentLength === 'string') {
      const length = parseInt(contentLength, 10)

      let receivedLength = 0

      const chunks = []
      while(true) {
        const { done, value } = await reader.read()
        if (done) {
          break
        }
      
        chunks.push(value)
        receivedLength += value.length

        const percentage = parseFloat((receivedLength / length).toFixed(2))
        const event = new SimProgressEvent({ receivedLength, contentLength: length, percentage })
        onProgress(event)
      }

      const content = uint8ArraysToArrayBuffer(chunks)
      return content
    }

    return response.arrayBuffer()
  }

  protected async request(url: string, options?: RequestOptions) {
    const { onProgress, onCompleted, ...restOptions } = options || {}
  
    const ctrl = new AbortController()
    const signal = ctrl.signal
    const cancel = ctrl.abort.bind(ctrl)

    const promise = fetch(url, { signal, ...restOptions }).finally(() => this.activeRequests.delete(signal))
    this.activeRequests.set(signal, { promise, cancel })

    if (typeof onProgress === 'function') {
      const content = this.progress(promise, onProgress).then((content) => {
        if (typeof onCompleted === 'function') {
          onCompleted(content)
        }

        return content
      })

      return content
    }

    const response = await promise
    return response.arrayBuffer()
  }

  public load(url: string, options?: RequestOptions) {
    return this.request(url, options)
  }
}
