<template lang="pug">
section
  h1.title
    | audio
  p
    audio(src="~/assets/audio/menuettm.mp3", autoplay, controls)

  // ChromeとSafariでaudioタグを自動再生するための対策 │ Webty Staff Blog - https://webty.jp/staffblog/production/post-907/
  iframe#audio(src='https://raw.githubusercontent.com/anars/blank-audio/master/500-milliseconds-of-silence.mp3', allow='autoplay', style='display:none')
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Audio extends Vue {
  public head() {
    return {
      title: 'audio'
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: crimson;
}
</style>
