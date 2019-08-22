<template lang="pug">
img(:alt="alt" v-lazy="src")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class LazyImage extends Vue {
  @Prop()
  src: string

  @Prop()
  alt: string
}
</script>
