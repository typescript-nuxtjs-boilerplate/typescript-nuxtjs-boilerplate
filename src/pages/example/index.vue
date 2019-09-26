<template lang="pug">
section
  h1.title
    | example index page
  p nuxtServerInit has been called is {{ isServerInitCalled }}
  p nuxtClientInit has been called is {{ isClientInitCalled }}
  hr
  p
    nuxt-link(to='/example/auth/require-auth') require-auth
  p
    nuxt-link(to='/example/ajax/color', no-prefetch) color
  p
    nuxt-link(to='/example/ajax/schema') schema
  p
    nuxt-link(to='/example/ajax/custom-http-headers') custom-http-headers
  p
    nuxt-link(to='/example/c-01/e-02/', no-prefetch) custom-path /c-01/e-02/
  p
    n-link(to='/example/d-03/f-04/') custom-path /d-03/f-04/
  p
    nuxt-link(to='/example/assets-and-static', no-prefetch) assets and static
  p
    nuxt-link(to='/example/todos') todos
  p
    nuxt-link(to='/example/life-cycle', no-prefetch) life-cycle
  p
    nuxt-link(to='/example/use-plugin') use-plugin
  p
    nuxt-link(to='/example/custom-head', no-prefetch) custom-head
  p
    nuxt-link(to='/example/async-custom-head', no-prefetch) async-custom-head
  p
    nuxt-link(to='/example/api') api
  p
    nuxt-link(to='/example/search/?hoge=foo&bar=fuga', no-prefetch) search
  p
    nuxt-link(to='/example/img-lazy-load') img-lazy-load
  p
    nuxt-link(to='/example/extend-css-class') extend-css-class
  p
    nuxt-link(to='/example/dynamic-import') dynamic-import
  p
    nuxt-link(to='/example/user-agent') user-agent
  p
    nuxt-link(to='/example/i18n') i18n
  p
    nuxt-link(to='/example/animejs') animejs
  p
    nuxt-link(to='/example/now-utcoffset') now-utcoffset
  p
    nuxt-link(to='/example/vue-carousel') vue-carousel
  p
    nuxt-link(to='/example/routing-validate/true') routing-validate - validate is true
  p
    nuxt-link(to='/example/routing-validate/false') routing-validate - validate is not true
  p
    nuxt-link(to='/example/v-scroll') v-scroll
  p
    nuxt-link(to='/example/vue-awesome-swiper') vue-awesome-swiper
  p
    nuxt-link(to='/example/audio', no-prefetch) audio
  p
    nuxt-link(to='/example/video', no-prefetch) video
  p
    nuxt-link(to='/example/server-side-set-cookie', no-prefetch) server-side-set-cookie
  p
    nuxt-link(to='/example/counter', no-prefetch) counter
  p
    nuxt-link(to='/example/this-is-undefined', no-prefetch) this-is-undefined-in-asyncData-and-fetch
  p
    nuxt-link(to='/example/vee-validate', no-prefetch) vee-validate
  p
    nuxt-link(to='/example/handle-api-error', no-prefetch) handle-api-error
  p
    nuxt-link(to='/example/nested-component', no-prefetch) nested-component
  p
    nuxt-link(to='/example/scroll-to', no-prefetch) scroll-to
  p
    a(href='/static-html') static html
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { StateInterface } from '@/store/'

@Component
export default class extends Vue {
  get isServerInitCalled(): StateInterface {
    return this.$store.getters['isServerInitCalled']
  }

  get isClientInitCalled(): StateInterface {
    return this.$store.getters['isClientInitCalled']
  }

  public mounted() {
    // NOTE: mode: 'client' の場合は if 文がとくに必要ない
    this.$modeClient()

    // NOTE: mode: 'server' の場合は process.server を見ないとエラーになる
    // プラグイン - Nuxt.js - https://ja.nuxtjs.org/guide/plugins/
    // `サーバーサイドでのみライブラリを読み込む必要がある場合は、process.server変数に true がセットされているかでチェックできます。`
    if (process.server) {
      this.$modeServer()
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 5px;
}
</style>
