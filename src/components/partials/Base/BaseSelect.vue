<template lang="pug">
.base-select
  select.field(
    v-bind="$attrs"
    v-validate="validate"
    v-model="value"
    :data-vv-name="name"
    :id="name"
    @change="onChangeValue"
  )
    option(
      value=""
      style="display: none"
      selected
      disabled
    ) {{placeholder}}
    option(
      v-for="option in options"
      :value="option.value"
      :disabled="option.disabled"
    ) {{option.label}}
  .select
    slot(
      :activeOption="activeOption"
      :label="activeLabel"
      :hasError="errors.has(name)"
      :error="errors.first(name)"
      :isEmpty="!!activeOption"
    )
</template>

<script lang="ts">
/**
 * @file selectタグをVue向けにカスタマイズした基底クラス
 * v-bind="$attrs"しているのでコンポーネントで定義していないPropを渡すとそのままinputタグに渡される
 */
import {
  Component,
  Inject,
  Model,
  Prop,
  Watch,
  Vue
} from 'nuxt-property-decorator'
import { Validator } from 'vee-validate'
import { ModelSync, Dictionary } from '@/utilities'

@Component({
  inheritAttrs: false
})
export default class BaseSelect extends Vue {
  /** アクティブなラベル */
  activeLabel = ''

  /** VeeValidateのスコープは親のものを使用する */
  @Inject() $validator: Validator

  /** 入力値 */
  @ModelSync('input') value?: any

  /** フィールド名 */
  @Prop({ type: String, required: true })
  name: string

  /** セレクトボックスのオプション */
  @Prop({ type: Array, required: true })
  options: any

  /** プレースホルダー */
  @Prop({ type: String, default: '' })
  placeholder: string

  /** VeeValidate */
  @Prop({ type: [String, Object], default: '' })
  validate: string | Dictionary<any>

  /** 選択中のオプション */
  get activeOption(): any | void {
    return this.options.find(({ value }) => this.value === value)
  }

  /** 値、オプションが変更されたときにラベルを変更する */
  @Watch('options')
  @Watch('value', { immediate: true })
  onChangeValue(e): void {
    if (this.activeOption == null) {
      // * 選択中の項目が存在しなければPlaceholderを表示
      this.activeLabel = this.placeholder
    } else {
      this.activeLabel = this.activeOption.label
    }
  }

  /** ライフサイクル */
  beforeMount(): void {
    if (this.placeholder == null || this.placeholder === '') return

    if (this.activeOption) return

    // 初期値がなければプレースホルダーを設定
    this.activeLabel = this.placeholder
  }
}
</script>

<style lang="scss" scoped>
.base-select {
  position: relative;

  > .field {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  > .select {
    position: relative;
    z-index: 1;
    pointer-events: none;
  }
}
</style>
