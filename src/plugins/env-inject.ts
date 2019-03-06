import { Context } from '@nuxt/vue-app'

declare module 'vue/types/vue' {
  interface Vue {
    $env: any
  }
}

export default (context: Context) => {
  for (const k in context.app.$env) {
    console.log('env-inject:', k, context.app.$env[k])
    if (!process.env[k]) {
      process.env[k] = context.app.$env[k]
    }
  }
}
