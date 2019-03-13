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
  public c: string = 'a'

  mounted() {
    this.c = this.$C
  }
}
</script>

<style lang="scss" scoped>
.c {
  font-size: 20px;
}
</style>
