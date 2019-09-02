import Vue from 'vue'
import { log } from 'node-log-rotate'
import { UA } from 'nuxt-user-agent/lib/plugin.template'
import * as C from '@/common/constants'
import { simple } from '@/modules/simple/plugin'

declare module 'vue/types/vue' {
  interface Vue {
    // nuxt-user-agent
    $ua: UA
    // 定数
    $C: typeof C
    // 環境変数
    $env: any
    $simple: typeof simple
    $log: typeof log

    // example plugin
    $modeClient: any
    $modeServer: any
  }
}

declare module '@nuxt/types' {
  interface Context {
    $simple: typeof simple
    $log: typeof log
  }
}
