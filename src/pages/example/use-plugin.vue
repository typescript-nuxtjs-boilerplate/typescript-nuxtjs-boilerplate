<template lang="pug">
section
  h1.title
    | use-plugin
  p.c
    | {{ c.pjName }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class UsePlugin extends Vue {
  public c = 'a'

  public asyncData(context) {
    console.log(context.app.$C)
  }

  public mounted() {
    console.log(this.$C)
    this.c = this.$C
  }

  public head() {
    return {
      title: 'use-plugin'
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: crimson;
}

.c {
  font-size: 20px;
}
</style>
