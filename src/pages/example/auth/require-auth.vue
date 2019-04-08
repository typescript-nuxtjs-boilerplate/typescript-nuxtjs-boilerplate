<template lang="pug">
section
  h1.title
    | require auth
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  middleware: 'authenticated'
})
export default class RequireAuth extends Vue {
  public head() {
    return {
      title: 'require-auth'
    }
  }
}
</script>
