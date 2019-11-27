<template lang="pug">
section.container
  h1.title
    | custom-head
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import InitMixin from '@/mixins/Viewport'
import { makeViewport } from '@/utilities/'

@Component({
  mixins: [InitMixin]
})
export default class extends Vue {
  public title = ''

  public data() {
    return {
      title: 'custom-head'
    }
  }

  public head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>
