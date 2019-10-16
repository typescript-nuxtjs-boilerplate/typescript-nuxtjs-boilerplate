<template lang="pug">
section.container
  h1.title
    | nested-component
  ParentComponent(
    @parent-click="handleRootClick"
    ref="parentComponent"
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
export default class NestedComponent extends Vue {
  // add example of $ref casting to any in documentation · Issue #94 · vuejs/vue-class-component - https://github.com/vuejs/vue-class-component/issues/94
  $refs!: {
    parentComponent: HTMLFormElement
  }

  public mounted() {
    this.$refs.parentComponent.parentMethod()
  }

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
