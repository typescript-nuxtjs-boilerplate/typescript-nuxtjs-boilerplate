# PAGES

Nuxtでのルーティングについて: https://ja.nuxtjs.org/guide/routing/

アプリケーション内でのリンクを表現する場合には`a`タグではなく`nuxt-link`コンポーネントを使用してください。

（`nuxt-link`のエイリアスに`n-link`コンポーネントがありますが、当プロジェクトでは`nuxt-link`コンポーネントを使用してください）

## Template

```vue
<template lang="pug">

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {}
</script>

<style lang="scss" scoped></style>
```

ページコンポーネントのクラス名は`XxxxPage`のようにサフィックスに`Page`とつくパスカルケースにしてください。
