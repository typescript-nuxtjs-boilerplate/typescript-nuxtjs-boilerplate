/**
 * @file 定数をグローバルにセットする
 */
// https://ja.nuxtjs.org/guide/plugins

// https://teratail.com/questions/166535
// https://issus.me/projects/100/issues/60
// https://forum.vuejs.org/t/typescript-mixins-methods-data/28374
// $C を使う先、たとえば Vue インスタンスの mounted メソッドで thi.$C で型のエラーになるので、 Vue を拡張する
import { Plugin } from '@nuxt/types'
import * as C from '@/common/constants/'

// Vue インスタンスだけで使いたい場合はこちら
// import Vue from 'vue'
// Vue.prototype.$C = C

const constantsPlugin: Plugin = (context, inject): void => {
  inject('C', C)
}

export default constantsPlugin
