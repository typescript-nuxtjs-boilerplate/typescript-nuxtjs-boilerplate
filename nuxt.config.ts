// https://qiita.com/iwata@github/items/5bc61ea9ca1c692d0370
import { Configuration } from 'webpack'
import { Context } from '@nuxt/vue-app'

const pkg = require('./package')

module.exports = {
  mode: 'universal',
  srcDir: 'src/',

  env: {
    NODE_ENV: process.env.NODE_ENV
  },

  // https://ja.nuxtjs.org/faq/host-port/
  server: {
    port: 4000,
    // 他のパソコンから IP でつながるように host を変更
    host: '0.0.0.0' // デフォルト: localhost
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/constants-inject.ts', '@/plugins/env-inject.ts'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // https://github.com/samtgarson/nuxt-env
    [
      'nuxt-env',
      {
        keys: [
          'TEST_ENV_VAR', // Basic usage—equivalent of { key: 'TEST_ENV_VAR' }
          { key: 'RUNTIME_ENV', default: 'defaultValue' } // Specify a default value
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config: Configuration, ctx: Context) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (config.module) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      }
    }
  },
  router: {
    extendRoutes(routes: any, resolve: any) {
      // https://ja.nuxtjs.org/api/configuration-router/#extendroutes
      routes.push({
        name: 'ab',
        path: '/example/(c|d)-:a/(e|f)-:b/*',
        component: resolve(__dirname, 'src/pages/example/custom-path.vue')
      })
    }
  }
}
