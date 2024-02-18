import SimEvent from './SimEvent'

export interface SimProgressEventDetail {
  receivedLength: number
  contentLength: number
  percentage: number
}

export default class SimProgressEvent extends SimEvent<SimProgressEventDetail> {
  constructor(detail: SimProgressEventDetail) {
    super('progress', detail)
  }
}
