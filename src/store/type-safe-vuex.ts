import Vue from 'vue'
import {
  DefineMutations,
  DefineGetters,
  DefineContext,
  DefineActions,
  DefineNamespace,
  namespace
} from '@/utilities/VuexDecorator'

/**
 * store 用インターフェイス
 */
export interface IState {
  typeSafeState: string
}

/**
 * state
 */
export const state = (): IState => ({
  typeSafeState: ''
})

/**
 * getters
 */
export const getters = {
  typeSafeGetter(state: IState): string {
    return state.typeSafeState + ' getter'
  }
}

/**
 * mutations
 */
export const mutations = {
  setTypeSafe(state: IState, value: string): void {
    state.typeSafeState = value
  }
}

type Ctx = DefineContext<IState, typeof mutations, typeof getters>

/**
 * actions
 */
export const actions = {
  /**
   * typeSafeAction
   * @param state
   * @param commit
   * @param payload
   */
  async typeSafeAction(
    this: Vue,
    // @ts-ignore
    { state, commit }: Ctx,
    payload: string
  ): Promise<void> {
    // 値をストアに保存
    await commit('setTypeSafe', payload)
  }
}

/**
 * namespace
 */
export const typeSafeVuexNS: DefineNamespace<
  IState,
  typeof mutations,
  typeof getters,
  typeof actions
> = namespace('type-safe-vuex')

/**
 * types
 */
export type ITypeSafeVuexState = IState
export type ITypeSafeVuexMutations = DefineMutations<typeof mutations>
export type ITypeSafeVuexGetters = DefineGetters<typeof getters>
export type ITypeSafeVuexActions = DefineActions<typeof actions>
