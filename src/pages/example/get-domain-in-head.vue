<template lang="pug">
section.container
  h1.title
    | get-domain-in-head
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class GetDomainInHead extends Vue {
  public title = 'get-domain-in-head'

  public head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `${this.$store.getters['site/getHost']}${this.$route.path}`
        }
      ]
    }
  }
}
</script>
