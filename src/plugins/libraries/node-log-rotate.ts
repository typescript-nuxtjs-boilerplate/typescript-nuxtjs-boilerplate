/**
 * @file サーバーサイド用の logger をグローバルにセットする
 */
import { Context } from '@nuxt/vue-app'
import { setup, log } from 'node-log-rotate'
import { pjName } from '@/common/constants/'

// logger のセットアップ
setup({
  appName: pjName
})

type Parameters<T> = T extends (...args: infer T) => any ? T : never
type text = Parameters<typeof log>
interface ILog {
  $log(text): ReturnType<typeof log>
}
interface ContextLog extends Context, ILog {}

export default (context: ContextLog, inject: any): void => {
  // https://github.com/nuxt-community/axios-module/blob/dev/lib/plugin.js#L200
  context.$log = log
  inject('log', log)
}
