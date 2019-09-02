/**
 * @file 環境変数をグローバルにセットする
 */

import { Plugin } from '@nuxt/types'

const envPlugin: Plugin = (context): void => {
  for (const k in context.app.$env) {
    console.log('env-inject:', k, context.app.$env[k])
    if (!process.env[k]) {
      process.env[k] = context.app.$env[k]
    }
  }
}

export default envPlugin
