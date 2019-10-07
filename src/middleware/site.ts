/**
 * @file サイトの URL 情報を store に保存するミドルウェア
 */

import { getHost } from '@/utilities/'

export default function({ req, store }): void {
  // すでに host を保存していたら処理を抜ける
  if (store.getters['site/getHost']) {
    return
  }

  store.commit('site/saveHost', getHost(req))
}
