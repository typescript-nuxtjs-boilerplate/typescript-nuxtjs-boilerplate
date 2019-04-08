<template lang="pug">
section.container
  h1 search
  div
    p path: {{ path }}
    p params: {{ params }}
    p query: {{ query }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Condition extends Vue {
  public asyncData({ route }) {
    return {
      path: route.path,
      params: route.params,
      query: route.query
    }
  }

  public head() {
    return {
      title: 'search/_condition'
    }
  }
}
</script>
