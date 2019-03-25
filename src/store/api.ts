import Vue from 'vue'
import { AxiosRequestConfig } from 'axios'
import { ApiPayloadInterface } from '@/interface/ApiPayloadInterface'
import { cancelToken } from '@/utilities/'

/**
 * レスポンス json オブジェクト用インターフェイス
 */
export interface ApiInterface {
  id: string
  value: string
}

/**
 * store 用インターフェイス
 */
export interface StateInterface {
  result: (ApiInterface)[]
}

/**
 * state
 */
export const state = (): StateInterface => ({
  result: [{ id: 'initial id', value: 'initial value' }]
})

/**
 * getters
 */
export const getters = {
  getResult(state: StateInterface): ApiInterface | undefined {
    if (!state.result || state.result.length <= 0) {
      return
    }

    return state.result[0]
  }
}

/**
 * mutations
 */
export const mutations = {
  saveApiResult(state: StateInterface, apiResult: ApiInterface[]): void {
    // オブジェクトの key 値の value を変更する場合、 Vue 側に通知がいかないので
    // Vue.set 経由で渡す
    // Vue.set(state.result, 'key', apiResult)

    // 既存の result オブジェクトに追加する場合
    // state.result = {
    //   ...state.result,
    //   apiResult
    // }

    // オブジェクトインスタンスをまるっと新しくして result に追加する場合
    // state.result = Object.assign({}, state.result, {
    //   age: 27,
    //   favoriteColor: 'Vue Green'
    // })

    // 配列をそのまま result に入れる場合
    state.result = apiResult
  }
}

/**
 * actions
 */
export const actions = {
  async fetchApi(
    this: Vue,
    // @ts-ignore
    { state, commit }: any,
    payload: ApiPayloadInterface
  ): Promise<void> {
    console.log('payload:', payload)

    try {
      const { apiResult }: any = await this.$axios.$get(
        'http://localhost:5000/api-waiting-for-5-seconds',
        {
          cancelToken: cancelToken.getToken(payload),
          params: payload
        } as AxiosRequestConfig // https://github.com/axios/axios/blob/master/index.d.ts
      )
      console.log('apiResult:', apiResult)

      // 値をストアに保存
      commit('saveApiResult', apiResult)
    } catch (err) {
      console.log(err)
    }
  }
}
