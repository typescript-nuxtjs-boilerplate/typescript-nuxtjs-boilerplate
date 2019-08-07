<template>
  <h1>{{ foo }}</h1>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Sample extends Vue {
  private foo: string = 'foo'

  asyncData() {
    return {
      foo: this.foo
    }
  }

  public head() {
    return {
      title: 'this-is-undefined-in-asyncData-and-fetch'
    }
  }
}
</script>
