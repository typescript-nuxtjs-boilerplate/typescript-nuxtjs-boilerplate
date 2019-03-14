<template lang="pug">
  section
    h1.title
      | sign-in {{counter}} seconds
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { sleep } from '@/utilities/'

@Component({
  middleware: 'anonymous'
})
export default class SignIn extends Vue {
  public counter: number = 3

  public async mounted() {
    await sleep(1000)
    this.counter = 2
    await sleep(1000)
    this.counter = 1
    await sleep(1000)
    this.counter = 0

    await this.$router.replace('/example/auth/signed-in?user=hisasann')
  }
}
</script>
