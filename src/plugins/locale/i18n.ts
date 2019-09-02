/**
 * @file i18n をグローバルにセットする
 */

import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18nPlugin: Plugin = ({ app, store }): void => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: 'ja',
    messages: {
      ja: require('@/locales/ja.json')
    }
  })

  // NOTE: 日本語固定で使うのでコメントアウト
  // app.i18n.path = (link) => {
  //   if (app.i18n.locale === app.i18n.fallbackLocale) {
  //     return `/${link}`
  //   }
  //
  //   return `/${app.i18n.locale}/${link}`
  // }
}

export default i18nPlugin
