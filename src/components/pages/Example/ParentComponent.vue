<template lang="pug">
section
  ChildComponent(
    type="submit"
    value="押し放題"
    @child-click="handleParentClick"
  )
</template>

<script lang="ts">
import { Component, Inject, Prop, Emit, Vue } from 'nuxt-property-decorator'
import ChildComponent from '@/components/pages/Example/ChildComponent.vue'

@Component({
  components: {
    ChildComponent
  }
})
export default class ParentComponent extends Vue {
  public parentMethod() {
    console.log('parentMethod')
  }

  @Emit('parent-click')
  public handleParentClick(counter, e) {
    return counter
  }
}
</script>

<style lang="scss" scoped></style>
