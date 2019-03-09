<template>
  <section class="container">
    <h1>search</h1>
    <div>
      <p>path: {{ path }}</p>
      <p>params: {{ params }}</p>
      <p>query: {{ query }}</p>
    </div>
  </section>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Api extends Vue {
  asyncData({ route }) {
    return {
      path: route.path,
      params: route.params,
      query: route.query
    }
  }
}
</script>
