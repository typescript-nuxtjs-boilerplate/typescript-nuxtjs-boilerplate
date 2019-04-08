<template lang="pug">
div
  h1.title
    | include
  span.color {{ message }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Include extends Vue {
  message: string = 'hello include!'

  beforeCreate() {
    console.log('beforeCreate')
  }
  created() {
    console.log('created')
  }

  public head() {
    return {
      title: 'hello include'
    }
  }
}
</script>

<style lang="scss" scoped>
.color {
  @extend .color;
}
</style>
