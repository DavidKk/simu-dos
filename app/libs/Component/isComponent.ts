import { Component } from '@/libs/Component'

export function isComponent(input: any): input is Component {
  return input instanceof Component
}
