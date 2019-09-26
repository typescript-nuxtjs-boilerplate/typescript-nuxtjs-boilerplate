<template lang="pug">
div
  h1.title
    | scroll-to
  p
    button.button-size(@click="onClick") click

  div.empty
  a(
    href="#"
    ref="hoge"
  )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ScrollTo extends Vue {
  public onClick() {
    console.log('onClick')

    const element: Element | null = this.$refs.hoge as Element
    if (element) {
      this.$scrollTo(element, 5000)
    }
  }

  public head() {
    return {
      title: 'scroll-to'
    }
  }
}
</script>

<style lang="scss" scoped>
.empty {
  height: 1000px;
}
</style>
