/**
 * store 用インターフェイス
 */
export interface StateInterface {
  locales: string[]
  locale: string
}

/**
 * state
 */
export const state = (): StateInterface => ({
  locales: ['ja'],
  locale: 'ja'
})

/**
 * mutations
 */
export const mutations = {
  SET_LANG(state, locale): void {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
