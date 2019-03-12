<template lang="pug">
  section
    h1.title
      | assets and static
    div
      h2 assets lazy-image
      <lazy-image src='~assets/images/lemon-sour.medium.jpg' alt='alt'/>
    div
      h2 assets src
      img(src='~assets/images/lemon-sour.medium.jpg')
    div
      h2 assets data-src
      img(data-src='~assets/images/lemon-sour.small.jpg')
    div
      h2 static
      img(src='/lemon-sour.small.jpg')
    nuxt-link(to='/example/')
      | example top
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LazyImage from '@/components/LazyImage.vue'

@Component({
  components: {
    LazyImage
  }
})
export default class ImgLazyLoad extends Vue {}
</script>
