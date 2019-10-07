/**
 * site 用インターフェイス
 */
export interface IState {
  /**
   * ホスト
   */
  host: string
}

/**
 * state
 */
export const state = (): IState => ({
  host: ''
})

/**
 * getters
 */
export const getters = {
  getHost(state: IState): string {
    return state.host
  }
}

/**
 * mutations
 */
export const mutations = {
  saveHost(state: IState, host: string): void {
    state.host = host
  }
}
