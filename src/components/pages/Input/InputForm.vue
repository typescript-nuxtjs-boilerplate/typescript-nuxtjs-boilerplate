<template lang="pug">
section
  form(
    action=""
  )
    p(v-show="errors.has('email') | errors.has('password')") メールアドレス、またはパスワードに誤りがあります。

    p {{ errors.first('email') }}
    p
      |
      input(
        type="email"
        name="email"
        v-validate="'required'"
        data-vv-as="メールアドレス"
        placeholder="メールアドレスを入力"
        v-model="mailAddressData"
      )

    p {{ errors.first('password') }}
    p
      |
      input(
        type="password"
        name="password"
        v-validate="'required'"
        data-vv-as="パスワード"
        placeholder="パスワードを入力"
        v-model="passwordData"
      )

    p
      |
      input(
        type="submit"
        value="ログイン"
        @click.prevent="handleLogin"
      )
</template>

<script lang="ts">
import { Component, Inject, Prop, Emit, Vue } from 'nuxt-property-decorator'
import { Validator } from 'vee-validate'

@Component
export default class InputForm extends Vue {
  /** Validatorのスコープは親のものを共有する */
  @Inject() public $validator: Validator

  // Prop には初期値は入れない
  // 親から更新されるはずの Prop を子が初期化すると、循環参照系のエラーが出てしまうため
  // [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "value"
  @Prop({ type: String, required: true })
  public mailAddress: string

  @Prop({ type: String, required: true })
  public password: string

  public mailAddressData = ''

  public passwordData = ''

  public updated() {
    console.log('updated', this.mailAddressData, this.passwordData)
    this.$emit('update:email', this.mailAddressData)
    this.$emit('update:password', this.passwordData)
  }

  public mounted() {
    console.log('mounted')
    this.mailAddressData = this.mailAddress
    this.passwordData = this.password
  }

  @Emit('login')
  public handleLogin(e) {}
}
</script>

<style lang="scss" scoped></style>
