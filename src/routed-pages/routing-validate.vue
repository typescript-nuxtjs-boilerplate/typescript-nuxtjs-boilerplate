<template lang="pug">
section.container
  h1.title
    | routing-validate
  div
    p path: {{ path }}
    p params: {{ params }}
    p query: {{ query }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  public asyncData({ route }: any) {
    return {
      path: route.path,
      params: route.params,
      query: route.query
    }
  }

  public validate({ params, query, store }) {
    if (params.condition === 'true') {
      return true // params バリデーションを通過したとき
    }

    return false // Nuxt.js がルートをレンダリングするのを中止して、エラーページを表示させる
  }

  public head() {
    return {
      title: 'routing-validate'
    }
  }
}
</script>
