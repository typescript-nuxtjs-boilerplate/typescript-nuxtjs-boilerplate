# partials/Base/*

基底コンポーネントを定義するディレクトリ。

## partials/Base/BaseInput.vue

下記以外にもInputタグに付けられるプロパティは付与可能。

```pug
BaseInput(
  // 必須
  v-model="value"
  // 必須。バリデーションのキーとIDに割り当てられる
  name="username"
  // vee-validateのルール
  validate="required|max:32"
)
```

## partials/Base/BaseSelect.vue

```pug
BaseSelect(
  // 必須。選択中のオプションの値。undefined以外ならOK
  v-model="value"
  // 必須。バリデーションのキーとIDに割り当てられる
  name="prefecture"
  // 必須。オプション。インターフェースは後述
  options="prefectureOptions"
  // v-modelの値がoptionsにない場合の表記
  placeholder="Choose a prefecture"
  // vee-validateのルール
  validate="required"
)
  template(v-slot="{ ... }") // 後述
```

**`options`**

```ts
interface ISelectOption {
  value: string | number
  label: string
}
```

**Scoped Slot**

表示をカスタマイズする際に使用できる値がBaseSelectから降ってきます。利用可能な値は下記の通り。

```pug
template(v-slot="{
  activeOption, // 選択中のオプション
  label, // 選択中のオプションのラベル。選択されていない場合はPlaceholder
  hasError, // バリデーションエラーが発生しているか
  error, // バリデーションエラーメッセージ
  isEmpty // 選択されていないかどうか＝Placeholderが表示されているか
}")
  // 最小構築
  .custom-selectbox(:class="{'-empty': isEmpty, '-danger': hasError}")
    | {{label}}
```

※Pugでは本来、属性内での改行はできません

## partials/Base/BaseCheckbox.vue

BaseSelectと大体同じ。

`wrapper`属性でラップするタグを指定できる。デフォルトは`label`

**Scoped Slot**

表示をカスタマイズする際に使用できる値がBaseCheckboxから降ってきます。利用可能な値は下記の通り。

```pug
template(v-slot="{
  checked, // 選択中かどうか
  focus, // チェックボックスがフォーカスされているかどうか
  hasError, // バリデーションエラーが発生しているか
  error, // バリデーションエラーメッセージ
}")
  // 最小構築
  .sample-checkbox
    .checkbox(:class="{'-active': checked, '-focus': focus}")
    .label なんかラベル
```

## partials/Base/BaseRadio.vue

`cancellable`属性と`cancelledValue`属性を受け取れる。
`cancellable`を`true`にすると、選択中のラジオを再度クリックすると選択が解除される。
選択解除された際の値は`cancelledValue`で指定する。初期値は`''`。

`v-slot`から降ってくる値はチェックボックスと同じ。

