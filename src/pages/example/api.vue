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
import { IApiPayload } from '@/interfaces/api/IApiPayload'
import { ApiInterface } from '@/store/api'
import { cancelToken } from '@/utilities/'

@Component({
  // https://router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%83%AB%E3%83%BC%E3%83%88%E5%8D%98%E4%BD%8D%E3%82%AC%E3%83%BC%E3%83%89
  beforeRouteEnter(to, from, next) {
    // このコンポーネントを描画するルートが確立する前に呼ばれます。
    // `this` でのこのコンポーネントへのアクセスはできません。
    // なぜならばこのガードが呼び出される時にまだ作られていないからです!
    next()
  },
  beforeRouteUpdate(this: Api, to, from, next) {
    // このコンポーネントを描画するルートが変更されたときに呼び出されますが、
    // このコンポーネントは新しいルートで再利用されます。
    // たとえば、動的な引数 `/foo/:id` を持つルートの場合、`/foo/1` と `/foo/2` の間を移動すると、
    // 同じ `Foo` コンポーネントインスタンスが再利用され、そのときにこのフックが呼び出されます。
    // `this` でコンポーネントインスタンスにアクセスできます。
    next()
  },
  // このコンポーネントを描画するルートが間もなく
  // ナビゲーションから離れていく時に呼ばれます。
  // `this` でのコンポーネントインスタンスへのアクセスができます。
  beforeRouteLeave(this: Api, to, from, next): void {
    console.log('beforeRouteLeave', to, from, next)
    next()
  }
})
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
    await store.dispatch('api/fetchApi', {
      hoge: 'foo'
    })
  }
  public async created() {
    await console.log('created')
    // await this.$store.dispatch('api/fetchApi', this.payload)
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
