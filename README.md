# typescript-nuxtjs

> My gnarly Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


#　nuxt to nuxt-ts 以下やったこと


## create-nuxt-app で雛形を作る

[インストール - Nuxt.js](https://ja.nuxtjs.org/guide/installation)

```
$ npx create-nuxt-app <project-name>
```

以下は選択した内容

* サーバーサイドのフレームワークを選択します:
  - Express

* 好きな UI フレームワークを選択します:
  - None（後からでも追加できます）

* Nuxt のモードを選択します。
  - Universal

* HTTP リクエストを簡単に行うために axios module を追加します。

* EsLint to Lint your code on save.

* 保存時にコードをチェックするために Prettier を追加します。


## nuxt to nuxt-ts

```bash
$ yarn remove nuxt
```

```bash
$ yarn add nuxt-ts vue-property-decorator
```

vue-property-decorator を入れると、vue コンポーネントの定義を @Component などのデコレータを使って定義できるようになります。


## npm-check-updates で npm module たちを最新にする

```bash
$ ncu -u
```

```bash
$ yarn
```

[tjunnone/npm-check-updates: Find newer versions of package dependencies than what your package.json or bower.json allows](https://github.com/tjunnone/npm-check-updates)


## typesync で @types が必要なモジュールを package.json に追記する

```bash
$ typesync
```

```bash
$ yarn
```

[jeffijoe/typesync: Install missing TypeScript typings for dependencies in your package.json.](https://github.com/jeffijoe/typesync)


## 実行

```bash
$ npm run dev
```

エラーがそこそこ出ました。

```
 ERROR  in C:\Users\yhisamatsu\_\js-code\typescript-nuxtjs\tsconfig.json      friendly-errors 05:55:40

                                                                   friendly-errors 05:55:40
      TS18003: No inputs were found in config file 'tsconfig.json'. Specified 'include' paths were '["**/*"]' and 'exclude' paths were '[]'.
```

```
 ERROR  in ./components/HelloWorld.vue?vue&type=script&lang=ts&               friendly-errors 05:55:40

Module build failed (from ./node_modules/ts-loader/index.js):                 friendly-errors 05:55:40
Error: error while parsing tsconfig.json
```

`vue-property-decorator` を使ってデコレーターを使っているのでそのあたりを許可します。

tsconfig.json に以下を追記します。

```json
    "experimentalDecorators": true,
    "allowJs": true,
```


## .eslintrc.js

```
    ecmaFeatures: {
      legacyDecorators: true
    }
```

[Please use `export @dec class` instead · Issue #662 · babel/babel-eslint](https://github.com/babel/babel-eslint/issues/662)


## lintfix の追加

package.json に以下の script を追加します。

```
"lintfix": "eslint --fix --ext .js,.vue --ignore-path .gitignore ."
```

[開発ツール - Nuxt.js](https://ja.nuxtjs.org/guide/development-tools/)
