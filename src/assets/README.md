# ASSETS

このディレクトリにはコンパイルやプリプロセッシングなどの処理が必要な静的ファイルを配置します。

## `/styles`

Sassのグローバルのスタイルや変数、Mixinを配置します。

以下の`base`以外のディレクトリに置いたファイルはすべてのVueファイルで使用できるようになります。

```yml
styles:
  - base: main.scssで使用するグローバルなスタイル
  - components: 継承させたかったり、グローバルに使用したいスタイル
  - helpers: Helperやアニメーションなど
  - mixins: Mixin
  - vars: Sassの変数
```

なお、`mixins`では`vars`と`helpers`の内容が、`components`ではそれ以外の内容が使用できます。

### RSCSS

RSCSSはクラス名を短く書くことのできるクラス命名規則です。
RSCSSについては以下の記事で解説しています。

> [[BEM to RSCSS] Quick Migration Guide (日本語)](https://qiita.com/simochee/items/3e537f530ca94ce6fb3a)

#### Lintにはない注意点

##### Componentのクラスは`&`でネストさせない

```scss
// ✘ NG
.sample-component {
  & {
    font-size: $font-large;
  }

  & > .element {
    font-size: $font-medium;
  }
}
```

```scss
// 👍 OK
.sample-component {
  font-size: $font-large;

  > .element {
    font-size: $font-medium;
  }
}
```

##### Elementのはじめに`&`を書かない

```scss
// ✘ NG
.sample-component {
  & > .element {  }

  & > .element > .text {  }
}
```

```scss
// 👍 OK
.sample-component {
  > .element {  }

  > .element > .text {  }
}
```
