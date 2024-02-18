import { Component } from './Component'
import { define } from './define'
import { classnames } from '@/utils'
import type { ElementClassNames } from '@/types'

export function createElement(tagName: string, className?: ElementClassNames, options?: ElementCreationOptions) {
  const element = (define(tagName)(Component)).createElement(options)
  className && element.classList.add(...classnames(className))
  return element
}
