import Vue from 'vue'
import { UA } from 'nuxt-user-agent/lib/plugin.template'
import * as C from '@/common/constants'

declare module 'vue/types/vue' {
  interface Vue {
    // nuxt-user-agent
    $ua: UA
    // 定数
    $C: typeof C
    // 環境変数
    $env: any

    // example plugin
    $modeClient: any
    $modeServer: any
  }
}
