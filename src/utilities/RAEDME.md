# UTILS

共通処理やユーティリティを配置します。

`index.ts`ですべての変数をエクスポート（`export * from './foo.ts'`）するため、定数名の重複にご注意ください。

## `vuePropertyDecorator`

`nuxt-proeprty-decorator`がサポートしていない `@PropSync` と `@Ref` 、あとは便利な `@ModelSync` と `@NoCache` を実装。
