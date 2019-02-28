export interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}
