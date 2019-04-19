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
    nuxt-link(to='/example/type-safe-vuex') type-safe-vuex
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
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 5px;
}
</style>
