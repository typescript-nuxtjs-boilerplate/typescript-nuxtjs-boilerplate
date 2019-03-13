<template lang="pug">
  section
    p Signing in...
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { setToken } from '@/utilities/auth'

@Component
export default class SignedIn extends Vue {
  public mounted(): void {
    // @ts-ignore
    setToken(this.$route.query.user)
    this.$router.replace('/example')
  }
}
</script>
