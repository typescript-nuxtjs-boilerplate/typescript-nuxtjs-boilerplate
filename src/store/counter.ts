import Vue from 'vue'
import {
  Convertor,
  DefineActionContext,
  DefineStoreModule
} from '@lollipop-onl/vuex-typesafe-helper'

// Only define interface of state
export interface IState {
  count: number
}
export const state = (): IState => ({
  count: 0
})

// Convert to global name
// It is an error if there is excess or deficiency
export const getters = {
  isOdd: (state: IState): number => {
    return state.count % 2
  }
}
export type Getters = Convertor<
  typeof getters,
  {
    'counter/isOdd': 'isOdd'
  }
>

export const mutations = {
  increment(state: IState, count: number): void {
    state.count += count
  },
  decrement(state: IState, count: number): void {
    state.count -= count
  }
}
export type Mutations = Convertor<
  typeof mutations,
  {
    'counter/increment': 'increment'
    'counter/decrement': 'decrement'
  }
>

export type Ctx = DefineActionContext<IState, typeof getters, typeof mutations>
export const actions = {
  async asyncUpdateCount(
    this: Vue,
    { commit }: Ctx,
    count: number
  ): Promise<void> {
    await commit('increment', count)
  }
}
export type Actions = Convertor<
  typeof actions,
  {
    'counter/asyncUpdateCount': 'asyncUpdateCount'
  }
>

// Define store module type
export type Store = DefineStoreModule<
  'counter',
  IState,
  Getters,
  Mutations,
  Actions
>
