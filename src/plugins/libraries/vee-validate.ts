import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import _ from 'lodash'
import ja from 'vee-validate/dist/locale/ja'
import * as customRules from './validator/rules/'

// inject: false にしないと SSR 時にメモリリークするようなので、そうしている
// Component Injections | VeeValidate - https://baianat.github.io/vee-validate/concepts/injections.html#disabling-automatic-injection
Vue.use(VeeValidate, { inject: false })

const jaCustomDict = {
  messages: {
    email: (w): string => `${w}のメールアドレスはダメです`,
    required: (w): string => `${w}は必須です`
  }
}
const mergedDict = _.merge(ja, jaCustomDict)
Validator.localize('ja', mergedDict)

for (const name in customRules) {
  Validator.extend(name, customRules[name])
}
