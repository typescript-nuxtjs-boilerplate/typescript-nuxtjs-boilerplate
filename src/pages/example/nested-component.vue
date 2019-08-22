<template lang="pug">
section.container
  h1.title
    | nested-component
  ParentComponent(
    @parent-click="handleRootClick"
  )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ParentComponent from '@/components/pages/Example/ParentComponent.vue'

@Component({
  components: {
    ParentComponent
  }
})
export default class extends Vue {
  public handleRootClick(counter, e) {
    console.log('handleRootClick', counter)
  }

  public head() {
    return {
      title: 'nested-component'
    }
  }
}
</script>

<style lang="scss"></style>
