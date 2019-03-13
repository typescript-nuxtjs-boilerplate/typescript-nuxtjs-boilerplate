<template lang="pug">
  section
    p Signing off...
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { unsetToken } from '@/utilities/auth'

@Component
export default class SignOff extends Vue {
  public async mounted() {
    unsetToken()
    await this.$store.dispatch('auth/logout')
    this.$router.replace('/example')
  }
}
</script>
