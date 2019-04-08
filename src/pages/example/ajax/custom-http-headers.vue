<template lang="pug">
div
  h1.title
    | custom-http-headers
  hr
  h2 data
  p {{ data }}
  hr
  h2 headers
  p {{ headers['from-server'] }}
</template>

<script lang="ts">
import * as querystring from 'querystring'
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import URLSearchParams from '@ungap/url-search-params'

@Component
export default class UserAgent extends Vue {
  data: string = ''

  async asyncData({ $axios }) {
    $axios.defaults.headers.post['post-header'] = 'post-header1' // for POST requests
    $axios.defaults.headers.common['common-header'] = 'common-header1' // for all requests

    const params = new URLSearchParams()
    params.append('param1', 'value1')
    params.append('param2', 'value2')

    const { data, headers, status, statusText, config } = await $axios.post(
      `http://localhost:5000/custom-headers`,
      { hoge: 'hoge' },
      // x-www-form-urlencoded で渡したい場合は Browser と node.js でデータの作り方が変わってきます
      // https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format
      // https://developer.mozilla.org/ja/docs/Web/HTTP/Methods/POST
      // Browser では URLSearchParams を使い、 node.js では querystring を使います
      // また、axiosでPOSTでRequestしているつもりがOPTIONSで送信している場合は、
      // https://qiita.com/hiryu/items/cdb606542d960402e592
      // このあたりを検討する必要があるかもしれません
      // process.server ? querystring.stringify({ foo: 'bar' }) : params,
      {
        headers: {
          header1: 'custom1'
        }
      }
    )

    console.log(
      'headers:',
      headers,
      'status:',
      status,
      'statusText:',
      statusText,
      'config:',
      config
    )

    return {
      data,
      headers
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: crimson;
}
</style>
