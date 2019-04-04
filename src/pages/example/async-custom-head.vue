<template lang="pug">
  section.container
    h1.title
      | custom-head
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  public title: string = ''
  public content: string = ''

  public asyncData() {
    return {
      content: 'from asyncData'
    }
  }
  public data() {
    return {
      title: 'async-custom-head'
    }
  }

  public head() {
    const robots = {
      name: 'robots',
      content: `noindex,nofollow`
    }

    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `My custom description ${this.content}`
        },
        robots
      ]
    }
  }
}
</script>
