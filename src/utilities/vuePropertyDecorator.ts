/**
 * @file nuxt-property-decoratorの不足や追加デコレータ
 */

import Vue, { PropOptions } from 'vue'
import { PropSync, Ref } from 'vue-property-decorator'
import { createDecorator } from 'vue-class-component'

/** ModelSyncのDataのプレフィックス */
const MODEL_SYNC_DATA_PREFIX = 'local__'

/**
 * Modelの値をバケツリレーさせるデコレーター
 * @param [event] イベント名。省略したときはプロパティのキー
 * @param [options] Propのオプション
 * @param [prefix] 仮のPropに付与するプレフィックス。初期値は"local__"
 */
function ModelSync(
  event?: string,
  options: PropOptions = {},
  prefix = ''
): PropertyDecorator {
  return createDecorator((componentOptions, k): void => {
    const _prefix = prefix || MODEL_SYNC_DATA_PREFIX
    const localKey = `${_prefix}${k}`
    const eventName = event || k

    if (!componentOptions.props) {
      componentOptions.props = {}
    }

    componentOptions.props[localKey] = options

    componentOptions.model = { prop: localKey, event: eventName }

    if (!componentOptions.computed) {
      componentOptions.computed = {}
    }

    componentOptions.computed[k] = {
      get(): any {
        return this[localKey]
      },
      set(this: Vue, value): void {
        this.$emit(eventName, value)
      }
    }
  })
}

/**
 * キャッシュさせないComputed.get
 * @example
 *  @NoCache
 *  get double(): number { ... }
 */
const NoCache = createDecorator((options, key): void => {
  if (!options.computed) {
    options.computed = {}
  }

  // @ts-ignore
  options.computed[key].cache = false
})

export { PropSync, Ref, ModelSync, NoCache }
