# STORE

## `vuex-typesafe-helper`について

Vuex を型安全に使用するために、各 Store では型定義をお願いします。

**Q. なんでこんなめんどいことするの？**

A. ストアのファイル名とか引数のプロパティの変更とかの影響範囲を探すほうがめんどくさいから。

### `State`

`IState`インターフェースに各 State の取りうる型を指定してください。
Optional パラメータ（`?`付きパラメータ）でない場合、`state`宣言時に初期値を指定する必要があります。

```ts
export interface IState {
  anyFlag: boolean;
  count: number | null;
  optionalValue?: string;
}

export const state = (): IState => ({
  // 初期値必須
  anyFlag: false,
  // 初期値必須
  count: null,
  // 初期値不要
  // optionalValue: ''
});
```

### `Getters`

`getters`では返り値を必ず定義してください。また、`state`には必ず `IState` を型に設定してください。

```ts
export const getters = {
  // `number`の指定は必須
  doubleCount(state: IState): number {
    return state.count * 2;
  }
};
```

さらに、`Getters`として型を定義してください。`Convertor`では Getter 名とモジュール名の紐付けを行います。

```ts
// store/counter.ts
export const getters = {
  doubleCount(): number { ... },
  countDifference(): number { ... }
};
export type Getters = Convertor<typeof getters, {
  'counter/doubleCount': 'doubleCount',
  'counter/countDifference': 'countDifference'
}>;
```

### `Mutations`

`mutations`では第2引数がある場合は必ず型を定義してください。また、返り値は必ず `void` にしてください。

```ts
export const mutations = {
  // countの型は必須
  updateCount(state: IState, count: number): void {
    state.count = count;
  },
  // 第２引数は任意
  incrementCount(state: IState): void {
    state.count += 1;
  }
};
```

さらに、`Mutations`として型を定義してください。`Convertor`は Mutation の名前とモジュール名の紐付けを行います。

```ts
// store/counter.ts
export const mutations = {
  updateCount(state: IState, count: number): void { ... },
  incrementCount(state: IState): void { ... },
};
export type Mutations = Convertor<typeof mutations, {
  'counter/updateCount': 'updateCount',
  'counter/incrementCount': 'incrementCount'
}>;
```

### `Actions`

Actions では第1引数としてストアのコンテキストを受け取ります。コンテキストは `DefineActionContext` から行います。

State のインターフェースと Getters、Mutations の値をそのまま指定します。定義されていない場合は `never` を指定してください。

```ts
export type Ctx = DefineActionsContext<IState, typeof getters, typeof mutations>;

// Gettersを定義していない場合
export type Ctx = DefineActionsContext<IState, never, typeof mutations>;
```

`actions`では、第2引数と返り値の型を必ず定義してください。

```ts
export type Ctx = DefineActionsContext<IState, typeof getters, typeof mutations>;

export const actions = {
  // 引数がIPayloadである場合
  someAction(context: Ctx, payload: IPayload): void { ... },
  // サインインするアクション
  async signIn(context: Ctx, payload: ISignInPayload): Promise<boolean> { ... },
  // サーバー上のカウント値を取得する
  async fetchCount(context: Ctx, userId?: string): Promise<void> { ... }
};
```

さらに、`Actions`として型を定義してください。`Convertor`は Action の名前とモジュール名の紐付けを行います。

```ts
// store/counter.ts
export const actions = {
  someActions(context: Ctx, payload: IPayload): void { ... },
  async signIn(context: Ctx, payload: ISignInPayload): Promise<boolean> { ... },
  async fetchCount(context: Ctx, userId?: string): Promise<void> { ... }
};
export type Actions = Convertor<typeof actions, {
  'counter/someActions': 'someActions',
  'counter/signIn': 'signIn',
  'counter/fetchCount': 'fetchCount'
}>;
```

### ストアモジュールの型を定義する

最後に、`DefineStoreModule`を用いて `Store` としてストアモジュール全体の型定義を行います。

`DefineStoreModule`の第1引数にモジュール名を、それ以降は State のインターフェース、Convert した各型を指定してください。

定義していない型の場合は `never` を指定してください。

```ts
// store/counter.ts
export type Store = DefineStoreModule<'counter', IState, Getters, Mutations>;

// Gettersを定義していない場合
export type Store = DefineStoreModule<'counter', IState, never, Mutations>;
```

以上でストアでの型定義は完了です！

### グローバルのストアの型を定義する

`@/interfaces/app/vuex`に型定義を行っているストアを import し、結合することでストア全体の型定義ができます。

```ts
// src/interfaces/app/vuex.d.ts
import { Store as CounterStore } from '@/store/counter';
import { Store as UserStore } from '@/store/user';

export type RootStore = CounterStore & UserStore;
```

あとは、この `RootStore` をストアにアクセスするコンポーネントの `$store` メンバに指定すれば型安全に Vuex を使用できるようになります。

```ts
import { Component, Vue} from 'nuxt-property-decorator';
import { Context } from '@nuxt/types';
import { RootStore } from '@/interface/app/vuex';

@Component
export default class SampleComponent extends Vue {
  // $storeに型を指定
  $store!: RootStore;

  // fetchとasyncDataではstoreに対して直接型を指定する
  async fetch({ store }: Context): Promise<void> {
    const { dispatch } = store as RootStore;

    // アクション名と引数の方が担保される
    await dispatch('counter/login', { ... });
  }

  mounted(): void {
    // アクション名と引数の型が担保される
    this.$store.dispatch('counter/fetchCount', 'user0123');
  }
}
```

## Template

ストアの最小構築のテンプレートです。

```ts
/**
 * @file Root vuex store
 */
import {
  Convertor,
  DefineStoreModule,
  DefineActionContext
} from '@lollipop-onl/vuex-typesafe-helper'

/** State */
export interface IState {}

export const state = (): IState => ({});

/** Getters */
export const getters = {};
export type Getters = Convertor<typeof getters, {}>;

/** Mutations */
export const mutations = {};
export type Mutations = Convertor<typeof mutations, {}>;

/** Actions */
export type Ctx = DefineActionContext<IState, typeof getters, typeof mutations>
export const actions = {
  nuxtServerInit(): void {},
  nuxtClientInit(): void {}
}
export type Actions = Convertor<typeof actions, {}>;

/** Store Module Type */
export type Store = DefineStoreModule<'', IState, Getters, Mutations, Actions>;
```
