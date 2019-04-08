// https://qiita.com/iwata@github/items/5bc61ea9ca1c692d0370
import { Configuration } from 'webpack'
import { Context } from '@nuxt/vue-app'
import routers from './src/routers/'

const pkg = require('./package')

module.exports = {
  mode: 'universal',
  srcDir: 'src/',

  env: {
    NODE_ENV: process.env.NODE_ENV
  },

  // https://qiita.com/toaru/items/0690a9110c94052bb479
  hardSource: true,

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
  loading: {
    color: 'blue',
    height: '5px'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/reset.scss', '@/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/constants-inject.ts',
    '@/plugins/env-inject.ts',
    '@/plugins/vue-lazyload.ts'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/sentry-module
    '@nuxtjs/sentry',
    // https://github.com/potato4d/nuxt-client-init-module
    // https://qiita.com/potato4d/items/cc5d8ea24949e86f8a5b
    'nuxt-client-init-module',
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
  sentry: {
    dsn: 'https://3381f2ffafa94f1cbd9ad904027baaf6@sentry.io/1423878', // Enter your project's DSN here
    config: {} // Additional config
  },
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
      if (ctx.isDev && process.client) {
        if (config.module) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      }

      const vueLoader: any = config.module!.rules.find(
        rule => rule.loader === 'vue-loader'
      )
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: ['src', 'data-src'],
        image: 'xlink:href',
        Test: 'source',
        'lazy-image': 'src'
      }
    }
  },
  router: {
    // リロードのタイミングでは SSR 側で実行される
    // ルーティングの度に CSR 側で実行される
    // ログインの必要のない画面でも middleware が実行されるので注意が必要
    // middleware: 'check-auth',

    extendRoutes(routes: any, resolve: any) {
      // https://ja.nuxtjs.org/api/configuration-router/#extendroutes
      if (routers && routers.length > 0) {
        for (const fn of routers) {
          routes.push(fn(resolve))
        }
      }
    }
  },
  styleResources: {
    scss: ['@/assets/styles/components/**/*.scss']
  }
}
