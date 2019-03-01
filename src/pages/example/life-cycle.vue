<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LifeCycle extends Vue {
  message: string = 'open devTool!'
  beforeCreate() {
    console.log('beforeCreate')
  }
  created() {
    console.log('created')
  }
  beforeMount() {
    console.log('beforeMount')
  }
  mounted() {
    console.log('mounted')
  }
  beforeDestroy() {
    console.log('beforeDestroy')
  }
  destroyed() {
    console.log('destroyed')
  }
}
</script>
