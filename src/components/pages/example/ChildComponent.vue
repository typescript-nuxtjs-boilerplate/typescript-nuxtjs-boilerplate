<template lang="pug">
section
  p
    |
    input(
      :type="type"
      :value="value"
      @click.prevent="handleChildClick"
    )
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Vue } from 'nuxt-property-decorator'

type InputType = 'click'

@Component
export default class ChildComponent extends Vue {
  @Prop({ type: String, required: true })
  public type: InputType

  @Prop({ type: String, required: true })
  public value: string

  public counter: number = 0

  @Emit('child-click')
  public handleChildClick(e) {
    return ++this.counter
  }
}
</script>
