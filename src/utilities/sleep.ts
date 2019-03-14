/**
 * sleep
 * @param {number} milliseconds
 */
export function sleep(milliseconds: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), milliseconds)
  })
}
