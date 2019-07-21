/**
 * @file Expand axios
 */

import { AxiosError, AxiosRequestConfig } from 'axios'
import Vue from 'vue'
import { setToken, unsetToken, getTokenFromCookie } from '@/utilities/'

export default ({ $axios, $log, app, req, error }): void => {
  /**
   * $axios.onRequest
   */
  $axios.onRequest((config: AxiosRequestConfig): void => {
    const token = getTokenFromCookie(req)
    console.log('$axios.onRequest', token)

    // トークンがあればログイン済みなのでリクエストヘッダで送信する
    if (token) {
      config.headers[app.$C.ACCESS_TOKEN_NAME] = token
    }
  })

  /**
   * $axios.onResponse
   */
  $axios.onResponse((response): void => {
    const token = response.headers[app.$C.ACCESS_TOKEN_NAME]
    const { status, statusText, config, data } = response

    console.log('$axios.onResponse', token)

    // CSR のときだけトークンをセットする、 SSR のときは nuxtClientInit でセットしている
    if (process.client) {
      if (token) {
        setToken(token)
      } else {
        unsetToken()
      }
    }

    // SSR 時だけ log を実行する
    if (process.server) {
      $log(`${config.url}:${status}`)
    }
  })

  /**
   * $axios.onResponseError
   */
  $axios.onResponseError((response: AxiosError): void => {
    console.log('$axios.onResponseError')
    // 通信エラー
    if (!response.response) {
      return
    }

    const { status, statusText, config } = response.response

    // SSR 時だけ log を実行する
    if (process.server) {
      $log(`${config.url}:${status}`)
    }

    // 401
    if (status === app.$C.HTTP_STATUS.UNAUTHORIZED) {
      const message = app.i18n.t('error.api.status401')
      error({ statusCode: status, message })
    }
  })
}
