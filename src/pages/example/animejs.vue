<template lang="pug">
section.container
  h1.title
    | animjs
  div
    .anime(ref="anime" @click="click")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import anime from 'animejs'

@Component
export default class extends Vue {
  public click(e) {
    anime({
      targets: this.$refs.anime,
      translateX: 250,
      begin: anim => {
        console.log('began : ' + anim.began)
      },
      complete: anim => {
        console.log('completed : ' + anim.completed)
      }
    })
  }

  public head() {
    return {
      title: 'animejs'
    }
  }
}
</script>

<style lang="scss">
.anime {
  width: 200px;
  height: 200px;
  background-color: crimson;
}
</style>
