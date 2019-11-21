<template lang="pug">
section.container
  h1.title
    | custom-head
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { makeViewport } from '@/utilities/'

@Component
export default class extends Vue {
  public title = ''

  public data() {
    return {
      title: 'custom-head'
    }
  }

  public head() {
    return {
      title: this.title,
      meta: [
        makeViewport(this.$ua),
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>
