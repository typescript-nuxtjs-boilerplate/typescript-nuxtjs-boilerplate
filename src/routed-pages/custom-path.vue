<template lang="pug">
  section.container
    h1.title
      | custom path from templates
    div
      p path: {{ path }}
      p params: {{ params }}
      p query: {{ query }}
    nuxt-link(to='/example/')
      | example top
</template>

<script lang="ts">
// http://localhost:3000/example/c-01/e-02/
// http://localhost:3000/example/d-03/f-04/
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  asyncData({ route }: any) {
    return {
      path: route.path,
      params: route.params,
      query: route.query
    }
  }

  public head() {
    return {
      title: 'custom-path'
    }
  }
}
</script>
