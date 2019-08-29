<template lang="pug">
div
  h1.title
    | user-agent
  hr
  h2 Nuxt.js 側で UA 判定した結果
  p {{ message }}
  hr
  h2 ブラウザ→①→ SSR サーバー→②→ API サーバー
  p {{ data }}
  hr
  h2 nuxt-user-agent
  p {{ deviceType }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

@Component
export default class UserAgent extends Vue {
  message = ''

  data = ''

  async asyncData(context) {
    if (process.server) {
      console.log(
        'context.req.headers["user-agent"]:',
        context.req.headers['user-agent']
      )
    } else {
      console.log('navigator.userAgent:', navigator.userAgent)
    }

    // userAgent プロパティを context 内に追加します（context は `data` メソッドや `fetch` メソッド内で利用できます）
    context.userAgent = process.server
      ? context.req.headers['user-agent']
      : navigator.userAgent

    const { data } = await axios.get(`http://localhost:5000/headers`)

    return {
      message: context.userAgent,
      deviceType: context.$ua.deviceType(),
      data
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: crimson;
}
</style>
