<template lang="pug">
div
  h1.title
    | handle-api-error
  p
    button.button-size(@click="onClick") click
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class HandleApiError extends Vue {
  public async asyncData({ $axios, app, error }: any): Promise<void> {
    // try-catch パターン
    try {
      await $axios.$get(`http://localhost:5000/status/${app.$C.HTTP_STATUS.OK}`)
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.message
      })
    }
  }

  public async fetch({ app, store, error }: any): Promise<void> {
    // try-catch パターン
    try {
      await store.dispatch(
        'http-status/fetchHttpStatus',
        app.$C.HTTP_STATUS.INTERNAL_SERVER_ERROR
      )
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.message
      })
    }
  }

  public async onClick() {
    // await-catch パターン
    const response = await this.$axios
      .get(`http://localhost:5000/status/${this.$C.HTTP_STATUS.UNAUTHORIZED}`)
      .catch(err => {
        return err.response
      })

    if (response.status !== this.$C.HTTP_STATUS.OK) {
      this.$nuxt.error({
        statusCode: response.status,
        message: response.data
      })
      // ここの return が重要で、これがないとこれ以降の処理が継続してしまう
      return
    }

    console.log('onClick success')
  }

  public head() {
    return {
      title: 'handle-api-error'
    }
  }
}
</script>
