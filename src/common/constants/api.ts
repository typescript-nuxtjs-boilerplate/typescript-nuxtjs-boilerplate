import Env from '@/common/env/'

const getBffUrl = (path: string): string => [Env.url, path].join('')

export const API_ENDPOINT = {
  /** ログイン状態チェック */
  LOGIN_CHECK: getBffUrl('/login-check'),
  /** ログイン */
  LOGIN: getBffUrl('/login'),
  /** ログアウト */
  LOGOUT: getBffUrl('/logout')
}
