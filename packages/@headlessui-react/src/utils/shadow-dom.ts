import { MutableRefObject } from 'react'

export const isInShadowDom = (element: Element | null) => {
  console.log('shadow Element', element)

  return element === null ? null : element.matches(':host *')
}

export function getShadowRoot<T extends Element | MutableRefObject<Element | null>>(
  element: T | null | undefined
) {
  if (element === null) return null

  let currentParent = element instanceof Node ? element : element?.current

  while (currentParent?.parentNode) {
    currentParent = currentParent?.parentNode as Element
  }

  return currentParent as unknown as DocumentFragment
}
