# :bento: typescript-nuxtjs-boilerplate

<img src="internals/images/header.png" width="100%" />

example url: [https://typescript-nuxtjs-boilerplate.netlify.com/example](https://typescript-nuxtjs-boilerplate.netlify.com/example)

---

## 💾 Install

**Note: requires node version >= 8.10.0 and npm version >= 5.6.0**

First, clone the repo via git:

```bash
$ git clone --recursive git@github.com:hisasann/typescript-nuxtjs-boilerplate.git
```

### Install yarn

**for mac**  

```bash
$ brew install yarn
```

**for windows**  

[Use installer](https://yarnpkg.com/lang/en/docs/install/#windows-tab)

### Install dependencies

Using yarn:

```bash
yarn install
```

Using npm:

```bash
npm install
```

## Run sample server at localhost:5000

```bash
$ node ./tools/server.js
```

## 🔌 Serve with hot reload at localhost:4000

```bash
$ yarn run dev
```

or

```bash
$ yarn run local
```

and run mock server for examples

```bash
$ node ./tools/server.js
```

## Build for production on docker and launch server

```bash
$ yarn run build:docker
$ yarn start
```

## Build for production and `SPA mode`

```bash
$ yarn run build:static
```

It will be published in the `dist` directory

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## :blue_book: Example Links

- [/example root directory](https://typescript-nuxtjs-boilerplate.netlify.com/example)
- [sign-in](https://typescript-nuxtjs-boilerplate.netlify.com/example/auth/sign-in)
  * [nuxt/example-auth0: A simple example that shows how to use Nuxt.js with Auth0.](https://github.com/nuxt/example-auth0)
- [sign-out](https://typescript-nuxtjs-boilerplate.netlify.com/example/auth/sign-out)
- [ajax color(pattern1)](https://typescript-nuxtjs-boilerplate.netlify.com/example/ajax/color)
  * [Introduction - Axios Module](https://axios.nuxtjs.org/)
- [ajax schema(pattern2)](https://typescript-nuxtjs-boilerplate.netlify.com/example/ajax/schema)
- [post custom http headers](https://typescript-nuxtjs-boilerplate.netlify.com/example/ajax/custom-http-headers)
- [routing custom path(pattern1)](https://typescript-nuxtjs-boilerplate.netlify.com/example/c-01/e-02/)
- [routing custom path(pattern2)](https://typescript-nuxtjs-boilerplate.netlify.com/example/d-03/f-04/)
- [assets and static](https://typescript-nuxtjs-boilerplate.netlify.com/example/assets-and-static)
- [basic todo example](https://typescript-nuxtjs-boilerplate.netlify.com/example/todos)
- [vue life cycle](https://typescript-nuxtjs-boilerplate.netlify.com/example/life-cycle)
- [use plugin](https://typescript-nuxtjs-boilerplate.netlify.com/example/use-plugin)
  * [プラグイン - Nuxt.js](https://ja.nuxtjs.org/guide/plugins/)
- [custom head tag](https://typescript-nuxtjs-boilerplate.netlify.com/example/custom-head)
- [async custom head tag](https://typescript-nuxtjs-boilerplate.netlify.com/example/async-custom-head)
- [send http api in vuex](https://typescript-nuxtjs-boilerplate.netlify.com/example/api)
- [get parameters](https://typescript-nuxtjs-boilerplate.netlify.com/example/search/?hoge=foo&bar=fuga)
- [image lazy load](https://typescript-nuxtjs-boilerplate.netlify.com/example/img-lazy-load)
  * [hilongjw/vue-lazyload: A Vue.js plugin for lazyload your Image or Component in your application.](https://github.com/hilongjw/vue-lazyload)
  * [Nuxt.jsでdata-src='~assets/lemon-sour.png'をrequire変換する方法 - DJ lemon-Sour's diary (prod.hisasann)](https://hisasann.github.io/2019/03/11/how-to-convert-data-src-to-require-in-nuxt/)
- [extend css class](https://typescript-nuxtjs-boilerplate.netlify.com/example/extend-css-class)
- [external include file](https://typescript-nuxtjs-boilerplate.netlify.com/include/)
- [dynamic import](https://typescript-nuxtjs-boilerplate.netlify.com/example/dynamic-import)
- [using user agent on ssr and csr](https://typescript-nuxtjs-boilerplate.netlify.com/example/user-agent)
- [i18n](https://typescript-nuxtjs-boilerplate.netlify.com/example/i18n)
  * [kazupon/vue-i18n: Internationalization plugin for Vue.js](https://github.com/kazupon/vue-i18n)
- [animation - animejs](https://typescript-nuxtjs-boilerplate.netlify.com/example/animejs)
  * [juliangarnier/anime: JavaScript animation engine](https://github.com/juliangarnier/anime)
- [now utc offset with moment](https://typescript-nuxtjs-boilerplate.netlify.com/example/now-utcoffset)
  * [moment/moment: Parse, validate, manipulate, and display dates in javascript.](https://github.com/moment/moment)
- [vue-carousel](https://typescript-nuxtjs-boilerplate.netlify.com/example/vue-carousel)
  * [SSENSE/vue-carousel: A flexible, responsive, touch-friendly carousel for Vue.js](https://github.com/SSENSE/vue-carousel)
- [vue-awesome-swiper](https://typescript-nuxtjs-boilerplate.netlify.com/example/vue-awesome-swiper)
  * [surmon-china/vue-awesome-swiper: 🏆 Swiper component for @vuejs](https://github.com/surmon-china/vue-awesome-swiper)
- [audio](https://typescript-nuxtjs-boilerplate.netlify.com/example/audio)
- [video](https://typescript-nuxtjs-boilerplate.netlify.com/example/video)
  * [Nuxt.jsでvideoタグを使うときのfile-loader奮闘記 - DJ lemon-Sour's diary (prod.hisasann)](https://hisasann.github.io/2019/06/17/how-to-use-the-video-tag-in-nuxt/)
- [server-side-set-cookie](https://typescript-nuxtjs-boilerplate.netlify.com/example/server-side-set-cookie)
- [type safe vuex](https://typescript-nuxtjs-boilerplate.netlify.com/example/type-safe-vuex)
  * TypeScript annotation
- [counter with typesafe](https://typescript-nuxtjs-boilerplate.netlify.com/example/counter)
  * [@lollipop-onl/vuex-typesafe-helper - npm](https://www.npmjs.com/package/@lollipop-onl/vuex-typesafe-helper)

## 📚 Docs

See our [docs and guides here](https://typescript-nuxtjs-boilerplate-docs.netlify.com/#/)

## ⚙️ Maintainers

- [hisasann](https://github.com/hisasann)

## 🍜 License

MIT © [hisasann](https://github.com/hisasann)

<a href="https://twitter.com/hisasann"><img src="https://badgen.net/twitter/follow/hisasann" alt="twitter"></a>
