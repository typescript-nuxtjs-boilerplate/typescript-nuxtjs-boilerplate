<template lang="pug">
.login-form
  form(@submit.prevent='login')
    p.error(v-if='error') {{ error }}
    p
      input(type='text' v-model='username' placeholder='username' name='username')
    p
      input(type='text' v-model='password' placeholder='password' name='password')
    .login-btn
      button(type='submit') ログイン
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ILoginPayload, IUser } from '@/interface/User/ILogin'

@Component({
  middleware: 'anonymous'
})
export default class SignIn extends Vue {
  public username: string = ''
  public password: string = ''
  public error: string | null = null

  public head() {
    return {
      title: 'sign-in'
    }
  }

  public async login() {
    try {
      const res: IUser = await this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password
      } as ILoginPayload)

      this.$router.push('/example')
    } catch (e) {
      this.error = e.message
    }
  }
}
</script>
