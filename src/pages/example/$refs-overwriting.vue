<template lang="pug">
div
  h1.title
    | $refs-overwriting
  p
    input(
      type="text"
      placeholder="カフェ"
      ref="suggestInput"
    )
  p
    input(
      type="checkbox"
      ref="suggestCheck"
      value="1"
    )
    | 居酒屋
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RefsOverwiting extends Vue {
  $refs!: {
    suggestInput: HTMLElement
    suggestCheck: HTMLFormElement
  }

  mounted() {
    console.log('mounted')

    // via add example of $ref casting to any in documentation · Issue #94 · vuejs/vue-class-component - https://github.com/vuejs/vue-class-component/issues/94

    // HTMLElement に as でキャストするパターン
    // const suggestInput: HTMLElement = this.$refs.suggestInput as HTMLElement
    // suggestInput.focus()
    // const suggestCheck: HTMLFormElement = this.$refs.suggestCheck as HTMLFormElement
    // suggestCheck.checked = true

    // or

    // $refs を再定義して、事前に型を定義しておくパターン
    this.$refs.suggestInput.focus()
    this.$refs.suggestCheck.checked = true
  }

  public head() {
    return {
      title: '$refs-overwriting'
    }
  }
}
</script>

<style lang="scss" scoped>
.color {
  @extend .color;
}
</style>
