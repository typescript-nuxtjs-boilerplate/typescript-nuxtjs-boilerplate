import Vue from 'vue'
import { AxiosAction } from '@/interfaces/app/vuex'

/**
 * store 用インターフェイス
 */
export interface StateInterface {}

/**
 * state
 */
export const state = (): StateInterface => ({})

/**
 * getters
 */
export const getters = {}

/**
 * mutations
 */
export const mutations = {}

/**
 * actions
 */
export const actions = {
  async fetchHttpStatus(
    this: Vue,
    { state, commit }: any,
    payload
  ): Promise<void> {
    await this.$axios.$get(`http://localhost:5000/status/${payload}`)
  }
}
