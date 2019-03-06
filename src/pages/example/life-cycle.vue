<template lang="pug">
  div
    h1.title
      | life-cycle
    | {{ message }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LifeCycle extends Vue {
  message: string = 'open devTool!'

  // https://ja.nuxtjs.org/guide/plugins
  // Vue インスタンスの ライフサイクル において、beforeCreate と created フックのみが クライアントサイドとサーバーサイドの両方 で呼び出されることに注意してください
  // それ以外のすべてのフックはクライアントサイドでのみ呼び出されます
  beforeCreate() {
    console.log('beforeCreate')
  }
  created() {
    console.log('created')
    console.log('RUNTIME_ENV: ', process.env.RUNTIME_ENV)
  }

  // これ以降のメソッドはクライアントサイドでのみ実行されます
  beforeMount() {
    console.log('beforeMount')
  }
  mounted() {
    console.log('mounted')
  }
  beforeDestroy() {
    console.log('beforeDestroy')
  }
  destroyed() {
    console.log('destroyed')
  }
}
</script>
