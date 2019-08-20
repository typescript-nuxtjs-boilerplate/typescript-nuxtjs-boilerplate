<template lang="pug">
.base-checkbox(:is="wrapper")
  input.field(
    type="checkbox"
    v-bind="$attrs"
    v-validate="validate"
    :checked="isChecked"
    :data-vv-name="name"
    :name="name"
    @change="onChangeValue"
    @focus="isFocus = true"
    @blur="isFocus = false"
  )
  slot(
    :checked="isChecked"
    :focus="isFocus"
    :hasError="errors.has(name)"
    :error="errors.first(name)"
  )
</template>

<script lang="ts">
import { Component, Inject, Prop, Watch, Vue } from 'nuxt-property-decorator'
import { Validator } from 'vee-validate'
import { ModelSync, Dictionary } from '@/utilities'

@Component
export default class BaseCheckbox extends Vue {
  /** チェックボックスがフォーカスされているか */
  isFocus = false

  /** Validatorのスコープは親のものを共有する */
  @Inject() $validator: Validator

  /** アクティブな値 */
  @ModelSync('input', { type: [Array, Boolean], required: true })
  model: any[] | boolean

  /** フィールド名 */
  @Prop({ type: String, required: true })
  name: string

  /** ラッパーの要素 */
  @Prop({ type: String, default: 'label' })
  wrapper: string

  /** チェックボックスの値 */
  @Prop() value: any | boolean

  /** VeeValidate */
  @Prop({ type: [String, Object], default: '' })
  validate: string | Dictionary<any>

  /** チェックされているか */
  get isChecked(): boolean {
    if (!Array.isArray(this.model)) {
      return this.model
    }

    return this.model.includes(this.value)
  }

  /**
   * チェックボックスの状態が変わった時
   */
  onChangeValue(): void {
    // * 配列でなければ真偽値を反転して通知
    if (!Array.isArray(this.model)) {
      this.model = !this.model

      return
    }

    // * チェック状態によって値を追加・削除
    const nextModel = this.isChecked
      ? this.model.filter(value => this.value !== value)
      : [...this.model, this.value]

    this.model = nextModel
  }
}
</script>

<style lang="scss" scoped>
.base-checkbox {
  > .field {
    width: 0;
    height: 0;
    margin: 0;
    opacity: 0;
  }
}
</style>
