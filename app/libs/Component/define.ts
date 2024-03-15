import type { Class } from 'utility-types'
import { CUSTOM_TAG_PREFIX } from '@/constants/definations'
import { tagify } from '@/utils/tagify'

export function define(customTagName: string) {
  const tagName = tagify(`${CUSTOM_TAG_PREFIX}-${customTagName}`)
  if (customElements.get(tagName)) {
    throw new Error(`custom element ${name} is exists.`)
  }

  return <T extends Class<HTMLElement>>(Component: T) => {
    class Element extends Component {
      static TAG_NAME = tagName
    }

    customElements.define(tagName, Element)
    return Element
  }
}
