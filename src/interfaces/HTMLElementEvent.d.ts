// https://qiita.com/wamei/items/43753e03821964719f31
export interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T
}
