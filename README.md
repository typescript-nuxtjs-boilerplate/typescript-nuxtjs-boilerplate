# :bento: typescript-nuxtjs-boilerplate

`typescript-nuxtjs-boilerplate` は **Nuxt.js** で **TypeScript** を使うためのボイラープレートになります 🦑

<img src="internals/images/header.png" width="100%" />

Example url: [https://typescript-nuxtjs-boilerplate.netlify.com/example](https://typescript-nuxtjs-boilerplate.netlify.com/example)

---

## ⛑ Requirements

* Node.js v10+ おすすめは `v10.16.0` です

## 💾 Install

First, clone the repo via git:

`git submodule` でサンプルを書いているので、以下のように `git clone` してください

```bash
$ git clone --recursive git@github.com:typescript-nuxtjs-boilerplate/typescript-nuxtjs-boilerplate.git
```

### Install yarn

**for mac**  

```bash
$ brew install yarn
```

**for windows**  

```sh
# for Windows (with Chocolatey)
$ choco install yarn
```

[Use installer](https://yarnpkg.com/lang/en/docs/install/#windows-tab)

### Install dependencies

Using yarn:

```bash
yarn install
```

## 🔌 Serve with hot reload at localhost:4000

Nuxt のデフォルトのポートは `3000` ですが、他のプロセスにバッティングするケースが多いので、 `4000` にしています

```bash
$ yarn run dev
```

or

`local` は `dev` のエイリアスです

```bash
$ yarn run local
```

and run mock server for examples

そしてモックサーバーも別のプロセスとして起動させます

```bash
$ node ./tools/server.js
```

`5000` 番ポートで起動します

## 🕹 Build for production on docker and launch server

本番用の `docker` ビルドは以下になります

```bash
$ yarn run build:docker
$ yarn start
```

## 💻 Build for production and `SPA mode`

```bash
$ yarn run build:static
```

It will be published in the `dist` directory

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## :blue_book: Example Links

[サンプル集 - typescript-nuxtjs-boilerplate-docs](https://typescript-nuxtjs-boilerplate-docs.netlify.com/#/nuxt/examples)

## 🖥 npm-scripts

[npm scriptsの解説 - typescript-nuxtjs-boilerplate-docs](https://typescript-nuxtjs-boilerplate-docs.netlify.com/#/nuxt/npm-scripts)

## 📚 Docs

`typescript-nuxtjs-boilerplate` のドキュメントです [docs and guides here](https://typescript-nuxtjs-boilerplate-docs.netlify.com/#/)

## ⚙️ Maintainers

- [hisasann](https://github.com/hisasann)

## 🍜 License

MIT © [hisasann](https://github.com/hisasann)

<a href="https://twitter.com/hisasann"><img src="https://badgen.net/twitter/follow/hisasann" alt="twitter"></a>

