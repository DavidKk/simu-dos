export const create = (tag: string, classes: string | string[], container: HTMLElement) => {
  const element = document.createElement(tag)
  element.className = Array.isArray(classes) ? classes.join(' ') : classes
}
