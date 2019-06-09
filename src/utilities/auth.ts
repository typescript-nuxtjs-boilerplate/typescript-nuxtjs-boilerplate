/**
 * @file Cookieのユーティリティを集めたクラス
 */

import Cookie from 'js-cookie'
import { ACCESS_TOKEN_COOKIE_NAME } from '@/common/constants/'

/**
 * token を cookie に保存します
 * @param token
 */
export const setToken = (token: string): void => {
  Cookie.set(ACCESS_TOKEN_COOKIE_NAME, token)
}

/**
 * token を cookie から削除します
 */
export const unsetToken = (): void => {
  Cookie.remove(ACCESS_TOKEN_COOKIE_NAME)
  window.localStorage.setItem('logout', Date.now() + '')
}

/**
 * token を cookie から取得します
 * SSR 時はリクエストヘッダーから、 CSR 時は cookie から取得します
 * @param req
 */
export const getTokenFromCookie = (req?: any): string | undefined => {
  // SSR
  if (req && req.headers.cookie) {
    console.log('req.headers.cookie:', req.headers.cookie)
    const cookie: string = req.headers.cookie
      .split(';')
      .find(
        (c: string): boolean =>
          c.trim().startsWith(`${ACCESS_TOKEN_COOKIE_NAME}=`)
      )

    if (!cookie) {
      return undefined
    }

    const token = cookie.split('=')[1]
    // NOTE: req.headers.cookie から抜き取った cookie は URL エンコードされているため、スペースが %20 にエンコードされているので、デコードする
    return decodeURIComponent(token)
  }

  // CSR
  return Cookie.get(ACCESS_TOKEN_COOKIE_NAME)
}
