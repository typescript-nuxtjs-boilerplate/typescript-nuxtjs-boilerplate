import Vue from 'vue'
import { AxiosRequestConfig } from 'axios'
import { ILoginPayload, IUser } from '@/interfaces/api/User/ILogin'
import {
  ILoginCheckPayload,
  ILoginCheck
} from '@/interfaces/api/User/ILoginCheck'
import { ILogoutPayload, ILogout } from '@/interfaces/api/User/ILogout'
import { cancelToken } from '@/utilities/'
import { AxiosAction } from '@/interfaces/app/vuex'

/**
 * store 用インターフェイス
 */
export interface IState {
  /**
   * ユーザー情報
   */
  authUser: IUser | null
  /**
   * ログイン中かどうか
   */
  loggedIn: boolean
  /**
   * ログイントークン
   */
  token: string | null
  /**
   * ローディング
   */
  busy: {
    register: boolean
    login: boolean
    loginCheck: boolean
    logout: boolean
  }
}

/**
 * state
 */
export const state = (): IState => ({
  authUser: null,
  loggedIn: false,
  token: null,
  busy: {
    register: false,
    login: false,
    loginCheck: false,
    logout: false
  }
})

/**
 * getters
 */
export const getters = {
  isAuthenticated(state: IState): boolean {
    return !!state.loggedIn
  },
  getToken(state: IState): string | null {
    return state.token
  }
}

/**
 * mutations
 */
export const mutations = {
  /**
   * ユーザー情報を更新する
   */
  SET_USER: function(state: IState, user: IUser): void {
    state.authUser = user
  },
  /**
   * ログイン状態を更新する
   */
  updateLoginStatus(state: IState, status: boolean): void {
    state.loggedIn = status
  },
  /**
   * ログイントークンを更新する
   */
  updateLoginToken(state: IState, token: string | null): void {
    state.token = token
  },
  /**
   * 処理中ステータスを更新する
   */
  updateBusyStatus(
    state: IState,
    payload: [keyof IState['busy'], boolean]
  ): void {
    const [key, status] = payload

    Vue.set(state.busy, key, status)
  }
}

/**
 * actions
 */
export const actions = {
  /**
   * login
   * @param state
   * @param commit
   * @param payload
   */
  async login(
    this: Vue,
    { state, commit }: any,
    payload: AxiosAction<ILoginPayload> = {} as any
  ): Promise<IUser | void> {
    console.log('login payload:', payload)
    const { key = Symbol('login'), data } = payload
    const payloadData = data

    // ログイン中、またはすでにログイン済みなら処理を抜ける
    if (state.busy.login || state.loggedIn) {
      return
    }

    // TODO: payload の validation はここかな

    commit('updateBusyStatus', ['login', true])

    try {
      const { data, headers } = await this.$axios.post<IUser>(
        this.$C.API_ENDPOINT.LOGIN,
        {
          username: payloadData.username,
          password: payloadData.password
        },
        {
          cancelToken: cancelToken.getToken(key)
        } as AxiosRequestConfig
      )
      const token = headers[this.$C.ACCESS_TOKEN_NAME]

      // ログイン状態を更新
      commit('updateLoginStatus', data.loggedIn)
      // ログイントークンを更新
      commit('updateLoginToken', token)
      // ユーザー情報をストアに保存
      commit('SET_USER', data)

      return data
    } finally {
      commit('updateBusyStatus', ['login', false])
    }
  },

  /**
   * logout
   * @param state
   * @param commit
   * @param payload
   */
  async logout(
    this: Vue,
    { state, commit }: any,
    payload: AxiosAction<ILoginPayload> = {} as any
  ): Promise<ILogout | void> {
    console.log('logout')
    const { key = Symbol('logout'), data } = payload
    const payloadData = data

    // 処理中、未ログインなら中断
    if (state.busy.logout) {
      return
    }

    commit('updateBusyStatus', ['logout', true])

    try {
      const { data } = await this.$axios.post<ILogout>(
        this.$C.API_ENDPOINT.LOGOUT,
        {},
        {
          cancelToken: cancelToken.getToken(payload)
        } as AxiosRequestConfig
      )

      // ログイン状態を更新
      commit('updateLoginStatus', data.loggedIn)
      // ログイントークンを更新
      commit('updateLoginToken', null)

      return data
    } finally {
      commit('updateBusyStatus', ['logout', false])
    }
  },

  /**
   * loginCheck
   * @param state
   * @param commit
   * @param payload
   */
  async loginCheck(
    this: Vue,
    { state, commit }: any,
    payload: AxiosAction<ILoginPayload> = {} as any
  ): Promise<ILoginCheck | void> {
    console.log('loginCheck', payload)
    const { key = Symbol('loginCheck'), data } = payload
    const payloadData = data

    commit('updateBusyStatus', ['loginCheck', true])

    try {
      const { data, headers } = await this.$axios.post<ILoginCheck>(
        this.$C.API_ENDPOINT.LOGIN_CHECK,
        {},
        {
          cancelToken: cancelToken.getToken(payload)
        } as AxiosRequestConfig
      )
      const token = headers[this.$C.ACCESS_TOKEN_NAME]

      // ログイン状態を更新
      commit('updateLoginStatus', data.loggedIn)
      // ログイントークンを更新
      commit('updateLoginToken', token)

      return data
    } finally {
      commit('updateBusyStatus', ['loginCheck', false])
    }
  }
}
