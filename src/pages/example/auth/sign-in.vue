<template lang="pug">
.login-form
  form(@submit.prevent='login')
    p(v-show="errors.has('email') | errors.has('password')") メールアドレス、またはパスワードに誤りがあります。
    p
      input(
        type='text'
        name='username'
        v-model='username'
        v-validate="'required'"
        data-vv-as="ユーザー名"
        placeholder='username'
      )
    p
      input(
        type='text'
        name='password'
        v-model='password'
        v-validate="'required'"
        data-vv-as="パスワード"
        placeholder='password'
      )
    .login-btn
      button(type='submit') ログイン
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import { Validator } from 'vee-validate'
import { ILoginPayload, IUser } from '@/interfaces/api/User/ILogin'
import { cancelToken } from '@/utilities/'

@Component({
  middleware: 'anonymous',
  $_veeValidate: {
    validator: 'new'
  }
})
export default class SignIn extends Vue {
  /** Validatorのスコープは親のものを共有する */
  @Inject() public $validator: Validator

  /** リクエストキャンセル用のシンボル */
  public symbols = {
    login: cancelToken.create(Symbol('login')),
    logout: cancelToken.create(Symbol('logout'))
  }

  public username: string = ''

  public password: string = ''

  public async login() {
    const isValidForm = await this.$validator.validateAll()
    // ! Vee Validateにエラーがないかを判定
    if (!isValidForm) {
      console.log('hasError')
      return
    }

    try {
      const payload: ILoginPayload = {
        username: this.username,
        password: this.password
      }
      await this.$store.dispatch('auth/login', {
        key: this.symbols.login,
        data: payload
      })

      this.$router.push('/example')
    } catch (e) {
      this.$nuxt.error({
        statusCode: 401,
        message: 'ログイン失敗'
      })
    }
  }

  public head() {
    return {
      title: 'sign-in'
    }
  }
}
</script>
