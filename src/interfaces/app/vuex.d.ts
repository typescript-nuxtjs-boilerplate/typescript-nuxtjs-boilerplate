/**
 * @file Vuex内で共通して使う型、インターフェース
 */

import { Store as CounterStore } from '@/store/counter'

export type RootStore = CounterStore

export type BaseAxiosAction = { key?: symbol }
export type AxiosAction<T, P = {}> = BaseAxiosAction &
  (T extends void ? {} : { data: T }) &
  P
