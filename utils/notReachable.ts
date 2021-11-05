export function nr(x: never): never {
  throw new Error(`${x} should never be reached`)
}
