<template>
  <section class="container">
    <h1>custom path</h1>
    <div>
      <p>path: {{ path }}</p>
      <p>params: {{ params }}</p>
      <p>query: {{ query }}</p>
    </div>
    <nuxt-link to="/example/">
      example top
    </nuxt-link>
  </section>
</template>

<script lang="ts">
// http://localhost:3000/example/c-01/e-02/
// http://localhost:3000/example/d-03/f-04/
export default {
  asyncData({ route }: any) {
    return {
      path: route.path,
      params: route.params,
      query: route.query
    }
  }
}
</script>
