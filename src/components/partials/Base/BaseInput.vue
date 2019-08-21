<template lang="pug">
input(
  v-bind="$attrs"
  v-on="listeners"
  v-validate="validate"
  :data-vv-name="name"
  :data-vv-validate-on="validationEvent"
  :id="name"
)
</template>

<script lang="ts">
/**
 * @file inputタグをVue向けにカスタマイズしやすくした基底コンポーネント
 * v-bind="$attrs"しているのでコンポーネントで定義していないPropを渡すとそのままinputタグに渡される
 */
import { Component, Inject, Model, Prop, Vue } from 'nuxt-property-decorator'
import { Validator } from 'vee-validate'
import { Dictionary } from '@/utilities'

@Component({
  inheritAttrs: false
})
export default class BaseInput extends Vue {
  /** VeeValidateのスコープは親のものを使用する */
  @Inject() $validator: Validator

  /** 入力値。undefinedをinputタグのv-modelに渡すとエラーになるため初期値を設定 */
  @Model('input', { default: '' }) value: any

  /** フィールド名 */
  @Prop({ type: String, required: true })
  name: string

  /** VeeValidate */
  @Prop({ type: [String, Object], default: '' })
  validate: string | Dictionary<any>

  /** イベントリスナ */
  get listeners() {
    return {
      ...this.$listeners,
      input: e => {
        const value = typeof e === 'object' ? e.target.value : e

        this.$emit('input', value)
      }
    }
  }

  /** VeeValidateを実行するイベント */
  get validationEvent() {
    const isIE = this.$ua.browser() === this.$C.BROWSER_NAME.IE

    return isIE ? 'keyup|change' : 'input|change'
  }
}
</script>

<style lang="scss" scoped></style>
