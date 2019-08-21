# COMPONENTS

Vue コンポーネントを配置します。

## Table of contents

- [COMPONENTS](#components)
  - [Table of contents](#table-of-contents)
  - [命名規則など](#%e5%91%bd%e5%90%8d%e8%a6%8f%e5%89%87%e3%81%aa%e3%81%a9)
  - [モジュールの `import` 順について](#%e3%83%a2%e3%82%b8%e3%83%a5%e3%83%bc%e3%83%ab%e3%81%aeimport%e9%a0%86%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6)
  - [コンポーネントでのクラスメンバ・メソッドの並び順について](#%e3%82%b3%e3%83%b3%e3%83%9d%e3%83%bc%e3%83%8d%e3%83%b3%e3%83%88%e3%81%a7%e3%81%ae%e3%82%af%e3%83%a9%e3%82%b9%e3%83%a1%e3%83%b3%e3%83%90%e3%83%bb%e3%83%a1%e3%82%bd%e3%83%83%e3%83%89%e3%81%ae%e4%b8%a6%e3%81%b3%e9%a0%86%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6)
    - [in `@Component` decorator](#in-component-decorator)
    - [in Class Component](#in-class-component)
  - [コンポーネントのプロパティの並び順について](#%e3%82%b3%e3%83%b3%e3%83%9d%e3%83%bc%e3%83%8d%e3%83%b3%e3%83%88%e3%81%ae%e3%83%97%e3%83%ad%e3%83%91%e3%83%86%e3%82%a3%e3%81%ae%e4%b8%a6%e3%81%b3%e9%a0%86%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6)
  - [プロパティ・イベントの命名規則](#%e3%83%97%e3%83%ad%e3%83%91%e3%83%86%e3%82%a3%e3%83%bb%e3%82%a4%e3%83%99%e3%83%b3%e3%83%88%e3%81%ae%e5%91%bd%e5%90%8d%e8%a6%8f%e5%89%87)

## 命名規則など

各ディレクトリの用途は以下のとおりです。

* `/partials`
  * 固定のページに依存せず、使い回すものを配置する
  * グループごとにサブディレクトリを配置する（`/partials/Base`、`/partials/Form`など）
* `/pages`
  * 各ページでのみ使用されるものを配置する
  * 子にページ名のディレクトリを配置する（`/pages/Mypage`など）
  * コンポーネントにはページ名のプレフィックスをつける（`MypageNavLink.vue`など）

コンポーネントファイルの命名規則は Vue.js のスタイルガイドに沿った、以下のルールを守ってください。

* コンポーネント、`.vue`ファイルはすべて**パスカルケース（アッパーキャメルケース）**で命名してください
* ディレクトリはすべて**キャメルケース**で命名してください
* ファイル名とコンポーネント名は同一にしてください
* ディレクトリを分けた場合でも全てを繋げたファイル名をつけてください
  - ✘ `components/pages/Mypage/NavLink.vue`
  - ○ `components/pages/Mypage/MypageNavLink.vue`

> [スタイルガイド](https://jp.vuejs.org/v2/style-guide/index.html)

## モジュールの `import` 順について

Vue コンポーネントにおけるモジュールの `import` 順は以下のルールを守ってください。
ただし、大枠の並びが正しければ、細かいインポート順は厳密でなくても結構です。

* **NPM モジュール**
  * `node_modules`から参照されるモジュールたち
* **コンポーネント**
  * Vue ファイルたち
  * 基本的にファイル名のとおりの変数にインポートする
  * なるべく抽象的なコンポーネントは先に、ページ固有のコンポーネントは後にインポートする
* **インターフェース・型**
  * TypeScript のインターフェースや型
  * `.d.ts`は省略する
* **Vue の追加パラメータ**
  * Directive や Filter、Mixin など
* **ユーティリティ**
  * `@/utils`以下のファイル

## コンポーネントでのクラスメンバ・メソッドの並び順について

Vue コンポーネントにおけるクラスのメンバ・メソッドの順序は、以下のルールを守ってください。
ただし、これらはある程度守られていればそれで結構です。

### in `@Component` decorator

* **テンプレートの依存関係**
  * `components`
  * `directives`
  * `filters`
* **プロパティのマージ**
  * `mixins`
* **Nuxt のプロパティ**
  * `layout`, `head`, `middleware` ...
* **Vue Router Hook**
  * `beforeRouteEnter`, `beforeRouteUpdate`, `beforeRouteLeave`
* **その他のパラメータ**

### in Class Component

* **ローカルの状態**
  * `data`
* **インターフェース**
  * `@Model`
  * `@Props`
  * `@Inject`
* **算術プロパティ**
  * `computed (getter/setter)`
* **イベント**
  * `@Watch`
* **ライフサイクル**
  * 呼び出される順に
  * `asyncData`, `fetch`, `beforeCreate`, `created`, `beforeMount`, `mounted`, `beforeDestroy`, `destroyed`
* **リアクティブではないプロパティ**
  * `@Emit`
  * メソッドなど

> [スタイルガイド - コンポーネント/インスタンス オプション順序](https://jp.vuejs.org/v2/style-guide/index.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88-%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9-%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E9%A0%86%E5%BA%8F-%E6%8E%A8%E5%A5%A8)

## コンポーネントのプロパティの並び順について

Vue コンポーネントへのプロパティの指定順序は、以下のルールを守ってください。
ただし、これらはある程度守られていればそれで結構です。

* **定義**
  * `is`
* **リスト描画**
  * `v-for`
* **条件**
  * `v-if`, `v-else-if`, `v-else`
  * `v-show`
* **双方向バインディング**
  * `v-model`
* **カスタムディレクティブ**
  * `v-XXXX`
* **一意の属性**
  * `ref`
  * `key`
  * `slot`
* **その他の属性**
  * `v-bind`の有無に関係なくすべてのパラメータ
* **イベント**
  * `@input` とか
* **コンテンツ**
  * `v-html`, `v-text`

> [スタイルガイド - 要素の属性の順序](https://jp.vuejs.org/v2/style-guide/index.html#%E8%A6%81%E7%B4%A0%E3%81%AE%E5%B1%9E%E6%80%A7%E3%81%AE%E9%A0%86%E5%BA%8F-%E6%8E%A8%E5%A5%A8)

## プロパティ・イベントの命名規則

プロパティ・イベントの命名規則は以下のとおりです。

**プロパティ・イベント名はキャメルケースで指定してください**

Vue が推奨するのはケバブケースですが、当プロジェクトではキャメルケースで指定するようにしてください。

```pug
//- 👎 NG
AppInput(
  :initial-value="initialValue"
  @change-value="onChangeValue"
)

//- 👍 Good
AppInput(
  :initialValue="initialValue"
  @changeValue="onChangeValue"
)
```

**template から直接 emit しないようにしてください**

ロジックと View の分離ということで、emit する場合には script 側にメソッドを定義してください。
また、`@Emit`デコレータは挙動が複雑なので使用しないでください。

```pug
//- 👎 NG
AppInput(
  @change="$emit('changeValue', $event)"
)

//- 👍 Good
AppInput(
  @change="onChangeValue"
)

script.
  export default class SampleComponent extends Vue {
    /**
     * 値が変更されたら親コンポーネントへ通知する
     * @param value 入力値
     */
    onChangeValue(value: string): void {
      this.$emit('changeValue', value);
    }
  }
```
