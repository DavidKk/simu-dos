export function tagify(name: string) {
  return name.replace(/(?:^(?:.+?)|([A-Z]))/g, (input, char) => {
    return char ? `-${char.toLowerCase()}` : input.toLowerCase()
  })
}
