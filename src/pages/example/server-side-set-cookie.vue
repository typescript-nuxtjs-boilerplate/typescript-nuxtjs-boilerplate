<template lang="pug">
section
  h1.title
    | server-side-set-cookie
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { AxiosRequestConfig } from 'axios'

@Component
export default class ServerSideSetCookie extends Vue {
  public async mounted() {
    await this.$axios.$post(
      'http://localhost:5000/set-cookie',
      {
        token: 'hoge'
      },
      {
        // withCredentials をつけることで XHR 時に Set-Cookie を許可できる
        withCredentials: true
      } as AxiosRequestConfig
    )

    // const xhr = new XMLHttpRequest()
    // xhr.open('POST', 'http://localhost:5000/set-cookie', true)
    // xhr.withCredentials = true
    // xhr.send('token=bar')
  }

  public head() {
    return {
      title: 'server-side-set-cookie'
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: crimson;
}
</style>
