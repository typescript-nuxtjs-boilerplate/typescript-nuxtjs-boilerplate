<template lang="pug">
div
  div(v-swiper:swiper="swiperOption")
    .swiper-wrapper
      .swiper-slide(v-for="banner in banners")
        img(:src="banner")
    ul.swiper-pagination.swiper-pagination-bullets(:data-component-id="componentId" ref="pagination")
    .swiper-button-next(slot="button-next")
    .swiper-button-prev(slot="button-prev")

  span(@click="prev", slot="button-prev") 左
  span(@click="next", slot="button-next") 右

  div.space

  p activeIndex: {{activeIndex}}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import shortid from 'shortid'
import Swiper from 'swiper'
// @ts-ignore
import LemonSourSmallImage from '@/assets/images/lemon-sour.small.jpg'

@Component
export default class VueAwesomeSwiper extends Vue {
  public banners: string[] = [
    LemonSourSmallImage,
    LemonSourSmallImage,
    LemonSourSmallImage,
    require('@/assets/images/lemon-sour.small.jpg'),
    require('@/assets/images/lemon-sour.small.jpg'),
    require('@/assets/images/lemon-sour.small.jpg')
  ]

  public activeIndex = 0

  /** コンポーネントのID */
  public componentId: string = shortid.generate()

  /** Swiperの設定 */
  public swiperOption = {}

  /** Swiperのインスタンス */
  private swiper: Swiper

  /** ライフサイクル */
  public beforeMount(): void {
    // ページマウント直前のcomponentIdを使ってカルーセルを設定
    this.swiperOption = {
      // loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      pagination: {
        el: `.swiper-pagination-bullets[data-component-id="${this.componentId}"]`,
        clickable: true,
        bulletElement: 'li'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    } as Swiper['params']
  }

  public next(e) {
    console.log('next', this.swiper.activeIndex)
    this.swiper.slideNext(500)
    this.activeIndex = this.swiper.activeIndex
  }

  public prev(e) {
    console.log('prev', this.swiper.activeIndex)
    this.swiper.slidePrev(500)
    this.activeIndex = this.swiper.activeIndex
  }

  public mounted() {
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(2, 1000, false)
  }

  public head() {
    return {
      title: 'vue-awesome-swiper'
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  margin-bottom: 10px;
  .swiper-wrapper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
}

.space {
  margin: 5px 0 5px 0;
}
</style>
