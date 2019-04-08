/**
 * @file Expand axios
 */

import { AxiosError, AxiosRequestConfig } from 'axios'
import Vue from 'vue'
import { getTokenFromCookie } from '@/utilities/'

export default ({ $axios, app, req, error }) => {
  $axios.onRequest((config: AxiosRequestConfig) => {
    console.log('$axios.onRequest')
    const token = getTokenFromCookie(req)

    if (token) {
      config.headers['access-token'] = token
    }
  })

  $axios.onResponse(response => {
    console.log('$axios.onResponse')
  })

  $axios.onResponseError((response: AxiosError) => {
    console.log('$axios.onResponseError')
    // 通信エラー
    if (!response.response) {
      return
    }

    const { status } = response.response

    if (status === 401) {
      const message = '401 error'

      error({ statusCode: 401, message })
    }
  })
}
