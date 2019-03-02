<template lang="pug">
  section.container
    h1.title
      | custom-head
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  title: string = ''
  data() {
    return {
      title: 'Hello World!',
    }
  }

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  }
}
</script>
