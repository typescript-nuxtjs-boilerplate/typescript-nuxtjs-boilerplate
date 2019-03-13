import Vue from 'vue'

/**
 * store 用インターフェイス
 */
export interface StateInterface {
  loggedIn: boolean
}

/**
 * state
 */
export const state = (): StateInterface => ({
  loggedIn: false
})

/**
 * getters
 */
export const getters = {
  isAuthenticated(state: StateInterface) {
    return !!state.loggedIn
  }
}

/**
 * mutations
 */
export const mutations = {
  /**
   * ログイン状態を更新する
   */
  updateLoginStatus(state: StateInterface, status: boolean): void {
    state.loggedIn = status
  }
}

/**
 * actions
 */
export const actions = {
  /**
   * login
   * @param state
   * @param commit
   * @param token
   */
  async login(
    this: Vue,
    // @ts-ignore
    { state, commit }: any,
    token: string
  ): Promise<void> {
    console.log('login:', token === 'hisasann')

    try {
      // TODO サーバーにログイン

      // 値をストアに保存
      await commit('updateLoginStatus', token === 'hisasann')
    } catch (err) {
      console.log(err)
    }
  },

  /**
   * logout
   * @param state
   * @param commit
   */
  async logout(
    this: Vue,
    // @ts-ignore
    { state, commit }: any
  ): Promise<void> {
    console.log('logout')

    try {
      // TODO サーバーからログアウト

      // 値をストアに保存
      await commit('updateLoginStatus', false)
    } catch (err) {
      console.log(err)
    }
  },

  /**
   * loginCheck
   * @param state
   * @param commit
   * @param token
   */
  async loginCheck(
    this: Vue,
    // @ts-ignore
    { state, commit }: any,
    token: string
  ): Promise<void> {
    console.log('loginCheck:', token === 'hisasann')

    try {
      // TODO ログインチェックとは？

      // 値をストアに保存
      await commit('updateLoginStatus', token === 'hisasann')
    } catch (err) {
      console.log(err)
    }
  }
}
