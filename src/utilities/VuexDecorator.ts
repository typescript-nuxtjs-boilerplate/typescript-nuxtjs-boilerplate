/**
 * @file 最低限の定義でVuexの型をType-safeに定義するライブラリ
 */
/* tslint:disable interface-name */

import {
  ActionContext as BaseActionContext,
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} from 'vuex'
import { createDecorator, VueDecorator } from 'vue-class-component'

// Neverではない場合のみ値を返すユーティリティ
declare type IsNever<N> = [N] extends [never] ? 'T' : 'F'
declare type IfNotNever<T, R> = { T: {}; F: R }[IsNever<T>]

// Storeモジュールのペイロード部分（第２引数）を返すユーティリティ
declare type ModulePayload<F extends Function> = F extends (
  ctx: any,
  payload: infer A
) => any
  ? A
  : never

// Vuex Mapper
type VuexMapper =
  | typeof mapState
  | typeof mapMutations
  | typeof mapGetters
  | typeof mapActions

/** Vuex DecoratorのInterface */
interface VuexDecorator extends VueDecorator {
  key: string
}

// Interceptor
type StateInterceptor<T> = (state: T) => any
interface MutationsInterceptor<T, K extends keyof T = keyof T> {
  (commit: (key: K, payload?: T[K]) => void, ...args: any[]): void
}
interface GettersInterceptor<T> {
  (getters: T, param?: any): any
}
interface ActionsInterceptor<T> {
  (dispatch: <K extends keyof T>(key: K, payload: T[K]) => void): void
}

type Interceptor<T> =
  | StateInterceptor<T>
  | MutationsInterceptor<T>
  | GettersInterceptor<T>
  | ActionsInterceptor<T>

/** Vuex Decoratorを生成する関数 */
function createVuexDecorator(
  bindTo: 'computed' | 'methods',
  mapper: VuexMapper
): any {
  return function<T = unknown, I extends keyof T | Interceptor<T> = keyof T>(
    key: I,
    namespace?: string
  ): VuexDecorator {
    const dec = createDecorator((target, prop) => {
      // クラスにバインドするプロパティがなければ定義する
      if (!target[bindTo]) {
        target[bindTo] = {}
      }

      const o: any = [{ [prop]: key }]

      if (namespace) o.unshift(namespace)

      // @ts-ignore
      target[bindTo]![prop] = mapper.apply(target, o)[prop]
    }) as VuexDecorator

    if (typeof key === 'string') {
      dec.key = namespace ? `${namespace}/${key}` : key
    }

    return dec
  }
}

type StateKey<S> = keyof S | StateInterceptor<S>
type MutationKey<M> = keyof M | MutationsInterceptor<M>
type GetterKey<G> = keyof G | GettersInterceptor<G>
type ActionKey<A> = keyof A | ActionsInterceptor<A>

// Decoratorのインターフェース
type IState = <S>(key: StateKey<S>, ns?: string) => VuexDecorator
type IMutation = <S>(key: MutationKey<S>, ns?: string) => VuexDecorator
type IGetter = <S>(key: GetterKey<S>, ns?: string) => VuexDecorator
type IAction = <S>(key: ActionKey<S>, ns?: string) => VuexDecorator

// alias
const cvd = createVuexDecorator
// Decoratorを定義
export const State = cvd('computed', mapState) as IState
export const Mutation = cvd('methods', mapMutations) as IMutation
export const Getter = cvd('computed', mapGetters) as IGetter
export const Action = cvd('methods', mapActions) as IAction

// Namespaceを定義する関数
export function namespace(n?: string): any {
  return {
    State: (k: any) => State(k, n),
    Mutation: (k: any) => Mutation(k, n),
    Getter: (k: any) => Getter(k, n),
    Action: (k: any) => Action(k, n)
  }
}

// ベースのPayload
interface BasePayload {
  key: string
}

// Rootのオプション
interface RootOption {
  root: true
}

// Commit関数の型定義
interface Commit<P> {
  // TODO payloadがない場合にのみ ? を許容するようにする
  // @ts-ignore
  <K extends keyof P>(type: K, payload?: ModulePayload<P[K]>): void
  // @ts-ignore
  <K extends keyof P>(payloadWithType: { type: K } & ModulePayload<P[K]>): void

  // Fallback for root actions
  (type: string, payload: any, options: RootOption): Promise<any>
  <P extends BasePayload>(payloadWithType: P, options: RootOption): Promise<any>
}

// ActionContextの型を定義する
export interface DefineContext<S = never, M = never, G = never>
  extends BaseActionContext<S, any> {
  getters: G
  commit: Commit<M>
}

// ベースのStore Object
interface BaseStoreModule {
  [key: string]: (...args: any[]) => any
}

// Mutationの型を定義する
export type DefineMutations<M extends BaseStoreModule> = {
  // TODO payloadがない場合にのみ ? を許容するようにする
  [K in keyof M]: (payload?: ModulePayload<M[K]>) => void
}

// Getterの型を定義する
export type DefineGetters<G extends BaseStoreModule> = {
  [K in keyof G]: ReturnType<G[K]>
}

// Actionの型を定義する
export type DefineActions<A extends BaseStoreModule> = {
  // TODO payloadがない場合にのみ ? を許容するようにする
  [K in keyof A]: (payload?: ModulePayload<A[K]>) => ReturnType<A[K]>
}

// NamespacedなDecoratorの定義
interface DefineDecorator<T> {
  <K extends keyof T>(type: K): VuexDecorator
}

// Namespaceの型を定義する
export interface DefineNamespace<S = never, M = never, G = never, A = never> {
  State: IfNotNever<S, DefineDecorator<S>>
  Mutation: IfNotNever<S, DefineDecorator<M>>
  Getter: IfNotNever<S, DefineDecorator<G>>
  Action: IfNotNever<S, DefineDecorator<A>>
}
