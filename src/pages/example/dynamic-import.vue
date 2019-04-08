<template lang="pug">
div
  h1.title
    | dynamic-import
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DynamicImport extends Vue {
  created() {
    console.log('created')

    setTimeout(async () => {
      const module = await import('@/utilities/')
      module.dynamicImport()
    }, 3000)
  }
}
</script>
