<template lang="pug">
  .container
    h1(v-if='error.statusCode === 404')
      | ページが見つかりません
    h1(v-else='')
      | エラーが発生しました {{ error.message }}
    nuxt-link(to='/example')
      | ホーム
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Error extends Vue {
  @Prop({ type: Object })
  public error: any
}
</script>
