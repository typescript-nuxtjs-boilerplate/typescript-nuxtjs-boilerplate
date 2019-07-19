/**
 * @file Expand axios
 */

import { AxiosError, AxiosRequestConfig } from 'axios'
import Vue from 'vue'
import { setToken, unsetToken, getTokenFromCookie } from '@/utilities/'

export default ({ $axios, app, req, error }): void => {
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
    console.log('$axios.onResponse', token)

    // CSR のときだけトークンをセットする、 SSR のときは nuxtClientInit でセットしている
    if (process.client) {
      if (token) {
        setToken(token)
      } else {
        unsetToken()
      }
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

    const { status, data } = response.response

    // 401
    if (status === app.$C.HTTP_STATUS.UNAUTHORIZED) {
      const message = app.i18n.t('error.api.status401')
      error({ statusCode: status, message })
    }
  })
}
