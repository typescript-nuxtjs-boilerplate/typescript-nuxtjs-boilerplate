import Vue from 'vue'
import VueRouter from 'vue-router'
import { ErrorParams } from '@nuxt/vue-app'

declare module 'vue/types/vue' {
  interface NuxtApp {
    error(params: ErrorParams): void
  }
}
