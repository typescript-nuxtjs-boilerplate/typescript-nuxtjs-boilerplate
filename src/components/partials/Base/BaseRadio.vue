<template lang="pug">
.base-radio(:is="wrapper")
  input.field(
    type="radio"
    v-bind="$attrs"
    v-validate="validate"
    :data-vv-name="name"
    :name="name"
    :checked="isChecked"
    @click="onClickRadio"
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
import { Component, Inject, Prop, Vue } from 'nuxt-property-decorator'
import { Validator } from 'vee-validate'
import { ModelSync, Dictionary } from '@/utilities'

@Component({
  inheritAttrs: false
})
export default class BaseRadio extends Vue {
  /** チェックボックスがフォーカスされているか */
  isFocus = false

  /** Validatorのスコープは親のものを共有する */
  @Inject() $validator: Validator

  /** アクティブな値 */
  @ModelSync('input', { required: true })
  model: any

  /** フィールド名 */
  @Prop({ type: String, required: true })
  name: string

  /** ラジオボタンの値 */
  @Prop({ required: true })
  value: any

  /** ラッパーの要素 */
  @Prop({ type: String, default: 'label' })
  wrapper: string

  /** キャンセル可能かどうか */
  @Prop({ type: Boolean, default: false })
  cancellable: boolean

  /** キャンセルされたときの値 */
  @Prop({ default: '' })
  cancelledValue: any

  /** VeeValidate */
  @Prop({ type: [String, Object], default: '' })
  validate: string | Dictionary<any>

  /** チェックされているか */
  get isChecked(): boolean {
    return this.model === this.value
  }

  /**
   * ラジオボタンがクリックされたときの処理
   */
  onClickRadio(): void {
    if (this.cancellable && this.isChecked) {
      this.model = this.cancelledValue

      return
    }

    this.model = this.value
  }
}
</script>

<style lang="scss" scoped>
.base-radio {
  > .field {
    width: 0;
    height: 0;
    margin: 0;
    opacity: 0;
  }
}
</style>
