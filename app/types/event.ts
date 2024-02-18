export type PointerLikeEvent = TouchEvent | MouseEvent | PointerEvent

export type EventHandle<T extends Event = Event> = (event: T) => void
