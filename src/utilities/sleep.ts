/**
 * sleep
 * @param {number} milliseconds
 */
export function sleep(milliseconds: number): Promise<void> {
  return new Promise<void>((resolve): void => {
    setTimeout((): void => resolve(), milliseconds)
  })
}
