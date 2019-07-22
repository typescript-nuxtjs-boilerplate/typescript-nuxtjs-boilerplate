import Env from '@/common/env/'

/**
 * BFF（バックエンドフォーフロントエンド）用の URL を作成する
 * @param path
 */
const getBffUrl = (path: string): string => {
  let url: string
  if (process.server) {
    url = [Env.internalEndpointUrl, path].join('')
  } else {
    url = [Env.externalEndpointUrl, path].join('')
  }
  return url
}

/** API のエンドポイント */
export const API_ENDPOINT = {
  /** ログイン状態チェック */
  LOGIN_CHECK: getBffUrl('/login-check'),
  /** ログイン */
  LOGIN: getBffUrl('/login'),
  /** ログアウト */
  LOGOUT: getBffUrl('/logout')
}

/** アクセストークンヘッダ名 - API サーバーとのログインセッション用のトークン名 */
export const ACCESS_TOKEN_NAME = 'x-authorization-code'

/** アクセストークン Cookie 名 - API サーバーからのトークンを保存する先の Cookie 名 */
export const ACCESS_TOKEN_COOKIE_NAME = 'x-authorization-code'

/** HTTP ステータス */
// https://ja.wikipedia.org/wiki/HTTP%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89
export const HTTP_STATUS = {
  /** OK */
  OK: 200,
  /** リクエストが不正である */
  BAD_REQUEST: 400,
  /** 認証が必要である */
  UNAUTHORIZED: 401,
  /** 未検出 */
  NOT_FOUND: 404,
  /** サーバ内部エラー */
  INTERNAL_SERVER_ERROR: 500,
  /** サービス利用不可 */
  SERVICE_UNAVAILABLE: 503
}

/** http タイムアウト ms */
export const TIMEOUT = 100000
