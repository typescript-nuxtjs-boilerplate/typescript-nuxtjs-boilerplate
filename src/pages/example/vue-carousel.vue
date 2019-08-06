<template lang="pug">
section.container
  h1.title
    | vue-carousel
  div.example
    carousel(:navigationEnabled='true', :perPage='2')
      slide(v-for='i in loopCounter', :key='i', :data-index='i' @slideclick='handleSlideClick')
        span.label
          | {{i}}<img src='~/assets/images/lemon-sour.small.jpg'>
  p {{clickCounter}}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// https://qiita.com/gakumac/items/cc3f1bb0dfcbbefa1eeb
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

@Component({
  components: {
    Carousel,
    Slide
  }
})
export default class extends Vue {
  public loopCounter: number = 10

  public clickCounter: string = ''

  public handleSlideClick(dataset) {
    console.log(dataset.index)
    this.clickCounter = dataset.index + ' click!'
  }

  public head() {
    return {
      title: 'vue-carousel'
    }
  }
}
</script>

<style lang="scss">
.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
  height: 300px;
}

.label {
}
</style>
