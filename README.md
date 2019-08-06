# :bento: typescript-nuxtjs-boilerplate

<img src="internals/images/header.png" width="100%" />

example url: [https://typescript-nuxtjs-boilerplate.netlify.com/example](https://typescript-nuxtjs-boilerplate.netlify.com/example)

---

## 💾 Install

**Note: requires node version >= 8.10.0 and npm version >= 5.6.0**

First, clone the repo via git:

```bash
$ git clone --recursive git@github.com:typescript-nuxtjs-boilerplate/typescript-nuxtjs-boilerplate.git
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

[サンプル集 - typescript-nuxtjs-boilerplate-docs](https://typescript-nuxtjs-boilerplate-docs.netlify.com/#/nuxt/examples)

## 📚 Docs

See our [docs and guides here](https://typescript-nuxtjs-boilerplate-docs.netlify.com/#/)

## ⚙️ Maintainers

- [hisasann](https://github.com/hisasann)

## 🍜 License

MIT © [hisasann](https://github.com/hisasann)

<a href="https://twitter.com/hisasann"><img src="https://badgen.net/twitter/follow/hisasann" alt="twitter"></a>

## 🖥 npm-scripts

|Script|Summary|
|:---:|:---:|
|`local`|`npm run dev`のエイリアス|
|`dev`|Nuxtの開発サーバーを起動する|
|`dev:markup`|マークアップ向けにSPAモードで開発サーバーを起動する|
|`build`|Universalモードとしてビルドする|
|`build:static`|静的サイトとしてビルドする|
|`build:local`|ローカル向けにビルドする|
|`build:docker`|Docker向けにビルドする|
|`start`|ビルドされたNuxtアプリを起動する|
|`lint`|ESLintのフォーマットチェックを実行する|
|`lintfix`|ESLintのチェック＋自動修正|
|`precommit`|コミット前に実行する処理|
|`test`|Jestのテストを実行する|
|`clean:cache`|Nuxtのキャッシュを削除する|
|`storybook`|Storybookを起動する|
|`analyze`|ビルドファイルを解析する|
|`docker`|Docker関連|
|`docker:clean`|Docker関連|
|`container-prune`|Docker関連|
|`image-prune`|Docker関連|
|`system-prune`|Docker関連|
|`stats`|Docker関連|
