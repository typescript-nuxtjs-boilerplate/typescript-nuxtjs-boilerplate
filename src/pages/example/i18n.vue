<template lang="pug">
section
  h1.title
    | i18n
  p {{ $t('text.home.hello') }}
  p {{ $t('error.home.errorMessage') }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  public head() {
    return {
      title: this.$t('text.home.title')
    }
  }
}
</script>
