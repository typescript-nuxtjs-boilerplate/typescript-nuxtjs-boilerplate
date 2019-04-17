<template lang="pug">
div
  h1.title
    | life-cycle
  p asyncDataMessage: {{ asyncDataMessage }}
  p fetchMessage: {{this.$store.state.api.result}}
  p beforeCreateMessage: {{ beforeCreateMessage }}
  p createdMessage: {{ createdMessage }}
  p beforeMountMessage: {{ beforeMountMessage }}
  p mountMessage: {{ mountMessage }}
  p beforeDestroyMessage: {{ beforeDestroyMessage }}
  p destroyedMessage: {{ destroyedMessage }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { AxiosRequestConfig } from 'axios'
import { IApiPayload } from '@/interface/IApiPayload'

@Component
export default class LifeCycle extends Vue {
  // リクエスト用ペイロード
  public payload: IApiPayload = {
    hoge: 'foo'
  }

  public asyncDataMessage: string = ''
  public beforeCreateMessage: string = ''
  public createdMessage: string = ''
  public beforeMountMessage: string = ''
  public mountMessage: string = ''
  public beforeDestroyMessage: string = ''
  public destroyedMessage: string = ''

  // asyncData では return で data を返す必要がある
  // 逆にいうとこれ以外で vue に反映できない
  public async asyncData({ $axios }) {
    // this is undefined
    const { apiResult }: any = await $axios.$get(
      'http://localhost:5000/api-waiting-for-5-seconds',
      {
        params: {
          hoge: 'fuga'
        }
      } as AxiosRequestConfig
    )

    return {
      asyncDataMessage: apiResult
    }
  }

  // fetch は store を呼び出せるので、 vuex を使うことができる
  public async fetch({ store }) {
    // this is Vue instance
    await store.dispatch('api/fetchApi', this.payload)
  }

  // https://ja.nuxtjs.org/guide/plugins
  // Vue インスタンスの ライフサイクル において、beforeCreate と created フックのみが クライアントサイドとサーバーサイドの両方 で呼び出されることに注意してください
  // それ以外のすべてのフックはクライアントサイドでのみ呼び出されます
  public beforeCreate() {
    console.log('beforeCreate')
    this.beforeCreateMessage = 'beforeCreateMessage'
  }
  // created では $el はまだ使えない
  public async created() {
    console.log('created')
    const { apiResult }: any = await this.$axios.$get(
      'http://localhost:5000/api-waiting-for-5-seconds',
      {
        params: this.payload
      } as AxiosRequestConfig
    )
    console.log('apiResult:', apiResult)
    this.createdMessage = apiResult
    console.log('created $el:', this.$el) // undefined
  }

  // これ以降のメソッドはクライアントサイドでのみ実行されます
  public beforeMount() {
    console.log('beforeMount')
    this.beforeMountMessage = 'beforeMountMessage'
  }
  // mounted では $el は使える
  public mounted() {
    console.log('mounted')
    this.mountMessage = 'mountMessage'
    console.log('mounted $el:', this.$el)
  }
  public beforeDestroy() {
    console.log('beforeDestroy')
    this.beforeDestroyMessage = 'beforeDestroyMessage'
  }
  public destroyed() {
    console.log('destroyed')
    this.destroyedMessage = 'destroyedMessage'
  }

  public head() {
    return {
      title: 'life-cycle'
    }
  }
}
</script>
