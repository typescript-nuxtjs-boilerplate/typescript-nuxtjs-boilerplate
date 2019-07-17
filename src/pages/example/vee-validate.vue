<template lang="pug">
section.container
  h1.title
    | vee-validate
  // カスタムイベント — Vue.js - https://jp.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A3%BE%E5%AD%90
  // Vue.js：v-modelと$emitを使ってデータを読み書きする子コンポーネントをつくる - Qiita - https://qiita.com/ozone/items/b75efe5c449cbc469b1e
  // 【Vue.js】 syncでコンポーネント間の通信方法 | とものブログ - https://se-tomo.com/2018/11/10/vue-js-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E9%96%93%E3%81%AE%E9%80%9A%E4%BF%A1%EF%BC%92/
  InputForm(
    v-bind.sync="doc"
    @login="handleLogin"
  )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import InputForm from '@/components/pages/input/inputForm.vue'

interface ILoginController {
  mailAddress: string
  password: string
}

@Component({
  components: {
    InputForm
  },
  $_veeValidate: {
    validator: 'new'
  }
})
export default class extends Vue {
  public doc: ILoginController = {
    mailAddress: '',
    password: ''
  } as ILoginController

  /** ログインボタンのイベントハンドラー */
  public async handleLogin(e) {
    console.log('handleLogin', this.doc.mailAddress, this.doc.password)

    const isValidForm = await this.$validator.validateAll()
    // ! Vee Validateにエラーがないかを判定
    if (!isValidForm) {
      console.log('hasError')
      return
    }

    try {
      // something
      console.log('noHasError')
    } catch (e) {}
  }

  public head() {
    return {
      title: 'vee-validate'
    }
  }
}
</script>

<style lang="scss">
.anime {
  width: 200px;
  height: 200px;
  background-color: crimson;
}
</style>
