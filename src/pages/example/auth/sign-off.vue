<template lang="pug">
section
  p Signing off...
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ILogoutPayload } from '@/interfaces/api/User/ILogout'

@Component({
  middleware: 'authenticated'
})
export default class SignOff extends Vue {
  public async mounted() {
    await this.$store.dispatch('auth/logout', {} as ILogoutPayload)

    this.$router.replace('/example')
  }

  public head() {
    return {
      title: 'sign-off'
    }
  }
}
</script>
