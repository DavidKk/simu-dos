import { eventify } from '@/libs/Eventify'

export default function jQuery(node: (Window & typeof globalThis) | Document | HTMLElement) {
  return new (class extends eventify(EventTarget) {
    protected emitter = node
  })()
}
