<template lang="pug">
  section
    p.c
      | {{ c.pjName }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class UsePlugin extends Vue {
  c: string = 'a'
  mounted() {
    this.c = this.$C
  }
}
</script>

<style scoped>
.c {
  font-size: 20px;
}
</style>
