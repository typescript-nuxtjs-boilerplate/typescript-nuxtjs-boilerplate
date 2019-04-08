<template lang="pug">
div
  | {{ message }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 'Hello world !' })
  message: string
}
</script>
