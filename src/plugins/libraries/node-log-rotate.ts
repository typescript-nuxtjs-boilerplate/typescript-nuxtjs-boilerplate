/**
 * @file サーバーサイド用の logger をグローバルにセットする
 */
import { Plugin } from '@nuxt/types'
import { setup, log } from 'node-log-rotate'
import { pjName } from '@/common/constants/'

// logger のセットアップ
setup({
  appName: pjName
})

const nodeLogRotatePlugin: Plugin = (context, inject): void => {
  // https://github.com/nuxt-community/axios-module/blob/dev/lib/plugin.js#L200
  context.$log = log
  inject('log', log)
}

export default nodeLogRotatePlugin
