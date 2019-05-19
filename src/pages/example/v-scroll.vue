<template lang="pug">
section
  h1.title
    | v-scroll
  div
    h2.elem1 aaa
  div.center
  div
    h2(class="elem2", v-scroll="handleScroll") bbb
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import scroll from '@/plugins/directives/scroll'

@Component({
  directives: {
    scroll
  }
})
export default class extends Vue {
  public handleScroll(evt, el) {
    // console.log(window.scrollY, el.scrollTop)
    const rect = el.getBoundingClientRect().top
    if (rect < 950) {
      console.log('出現')
      el.setAttribute(
        'style',
        'opacity: 1; transform: translate3d(0, -10px, 0)'
      )

      return true
    }
    return false
  }

  public head() {
    return {
      title: 'v-scroll'
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  height: 1000px;
}

.elem1 {
  color: white;
  background-color: #3b8070;
}

.elem2 {
  color: white;
  background-color: #526488;
}
</style>
