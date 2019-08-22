<template lang="pug">
section
  h1.title
    | assets and static
  div
    h2 assets lazy-image lemon-sour.medium.jpg
    <lazy-image src='~assets/images/lemon-sour.medium.jpg' alt='alt'/>
  div.center
  div
    h2 assets lazy-image lemon-sour.small.jpg
    <lazy-image src='~assets/images/lemon-sour.small.jpg' alt='alt'/>
  div
  nuxt-link(to='/example/')
    | example top
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LazyImage from '@/components/partials/LazyImage/LazyImage.vue'

@Component({
  components: {
    LazyImage
  }
})
export default class ImgLazyLoad extends Vue {
  public head() {
    return {
      title: 'img-lazy-load'
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  height: 1000px;
}
</style>
