<template lang="pug">
div
  h1.title
    | api
  p store: {{this.$store.state.api.result}}
  p getter: {{this.$store.getters['api/getResult']}}
  p result.id: {{ result.id }}
  p result.value: {{ result.value }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IApiPayload } from '@/interface/IApiPayload'
import { ApiInterface } from '@/store/api'
import { cancelToken } from '@/utilities/'

@Component
export default class Api extends Vue {
  // リクエスト用ペイロード
  private payload: IApiPayload = {
    hoge: 'foo'
  }

  // computed
  get result(): ApiInterface {
    return this.$store.getters['api/getResult']
  }
  // @ts-ignore
  public async fetch({ store, params, error }: any): Promise<void> {
    await console.log('fetch')
    // await store.dispatch('api/fetchApi', {
    //   hoge: 'foo'
    // })
  }
  public async created() {
    console.log('created')
    await this.$store.dispatch('api/fetchApi', this.payload)
  }
  public beforeDestroy(): void {
    // リクエストをキャンセル
    // https://qiita.com/yumaeda/items/6e386172edf9beba6041
    cancelToken.cancel(this.payload, 'Operation canceled by the user.')
  }

  public head() {
    return {
      title: 'api'
    }
  }
}
</script>
