import NuxtConfiguration from '@nuxt/config'
import {
  Configuration as WebpackConfiguration,
  Options as WebpackOptions,
  Plugin as WebpackPlugin
} from 'webpack'
import routers from './src/routers/'

const pkg = require('./package')

// Docker から渡ってくるが Nuxt アプリではなく nuxt.config で必要な環境変数
const {
  // Google Tag Manager
  gtmContainerId = 'GTM-56L94CP'
} = process.env

const config: NuxtConfiguration = {
  mode: 'universal',
  srcDir: 'src/',

  /**
   * 環境変数
   * ビルド時に渡される env の値は、ここに記載することで文字列に置換される
   */
  env: {
    // Nuxt のビルドで必要な環境変数
    NODE_ENV: process.env.NODE_ENV || '',
    BUILD_ENV: process.env.BUILD_ENV || '',

    // Docker から渡ってくる Nuxt アプリで使う環境変数
    envName: process.env.envName || '',
    internalEndpointUrl: process.env.internalEndpointUrl || '',
    externalEndpointUrl: process.env.externalEndpointUrl || ''
  },

  /**
   * Build configuration
   * webpack のビルドに関する設定はここに書く
   */
  build: {
    // vue-devtools を許可するかどうかを設定します
    // https://ja.nuxtjs.org/api/configuration-build/#devtools
    devtools: true,

    loaders: {
      // https://ja.nuxtjs.org/faq/webpack-audio-files/
      vue: {
        // 特殊なアトリビュートでも webpack の require がかまされるようにする
        transformAssetUrls: {
          audio: 'src',
          video: ['src', 'poster'],
          source: 'src',
          img: ['src', 'data-src'],
          'lazy-image': 'src'
        }
      }
    },

    /**
     * You can extend webpack config here
     */
    extend(
      config: WebpackConfiguration,
      ctx: {
        isDev: boolean
        isClient: boolean
        isServer: boolean
        loaders: any
      }
    ): void {
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

      // https://ja.nuxtjs.org/faq/webpack-audio-files/
      config.module!.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
    // extractCSS: isProduction,

    // ビルドを爆速にする
    // https://qiita.com/toaru/items/0690a9110c94052bb479
    hardSource: true,

    terser: {
      terserOptions: {
        compress: {
          // console 系を削除する
          // https://www.lancard.com/blog/2019/04/05/delete_console-log_at_nuxt_build/
          // drop_console: process.env.envName === 'production' // eslint-disable-line @typescript-eslint/camelcase
        }
      }
    }
  },

  // https://ja.nuxtjs.org/faq/host-port/
  server: {
    port: 4000,
    // 他のパソコンから IP でつながるように host を変更
    host: '0.0.0.0' // デフォルト: localhost
  },

  /**
   * Headers of the page
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

  /**
   * Customize the progress-bar color
   */
  loading: {
    color: 'blue',
    height: '5px'
  },
  // ローディングを使わない場合はここを false
  // loading: false,

  /**
   * Global CSS
   * 他の scss ファイルに依存しない scss はこちらに
   */
  css: [
    '@/assets/styles/reset.scss',
    '@/assets/styles/main.scss',
    'swiper/dist/css/swiper.css'
  ],

  /**
   * Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/constants-inject.ts',
    '@/plugins/env-inject.ts',
    '@/plugins/libraries/axios.ts',
    '@/plugins/libraries/vue-lazyload.ts',
    '@/plugins/locale/i18n.ts',
    { src: '@/plugins/libraries/vue-carousel.ts', ssr: false },
    { src: '@/plugins/libraries/vue-awesome-swiper', mode: 'client' }
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
    // https://github.com/nuxt-community/modules/tree/master/packages/google-tag-manager
    [
      '@nuxtjs/google-tag-manager',
      {
        id: gtmContainerId,
        layer: 'dataLayer',
        pageTracking: false,
        dev: !gtmContainerId,
        query: {}
      }
    ],
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

  /**
   * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    // リロードのタイミングでは SSR 側で実行される
    // ルーティングの度に CSR 側で実行される
    // ログインの必要のない画面でも middleware が実行されるので注意が必要
    // middleware: 'check-auth',

    middleware: 'i18n',

    extendRoutes(routes: any, resolve: any): void {
      // https://ja.nuxtjs.org/api/configuration-router/#extendroutes
      if (routers && routers.length > 0) {
        for (const fn of routers) {
          routes.push(fn(resolve))
        }
      }
    }
  },

  /**
   * Sass の @extend を使う場合はこのパスの scss ファイルに CSS クラスを書く
   */
  styleResources: {
    scss: ['@/assets/styles/components/**/*.scss']
  },

  /**
   * nuxt サーバーを API サーバーとして使う場合のミドルウェアを定義する
   */
  serverMiddleware: [
    { path: '/api/healthcheck', handler: '~/api/healthcheck.js' }
  ]
}

module.exports = config
