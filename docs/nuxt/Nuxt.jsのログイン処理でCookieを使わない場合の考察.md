# Nuxt.js のログイン処理で Cookie を使わない場合の考察

## 記事かきましたー！

[Nuxt.jsでログインをどうやるか、そしてCookieからlocalStorageへ - DJ lemon-Sour's diary (prod.hisasann)](https://hisasann.github.io/2019/06/22/how-to-login-with-nuxt-and-cookie-to-localstorage/)

## 現状

* Nuxt の middleware は SSR 時はサーバーサイドで一度実行され、 CSR 時にもそれぞれ実行されるが、 Cookie を使わない場合、 SSR 時にログイン状態か判断つかないので、ログイン画面へのリダイレクトができない、つまり 302 を返せない

* さらに仮にフロントエンド側でログイン状態を確認しつつ、非ログインの場合にログイン必須画面を表示したときにログイン画面に遷移するとしても、一瞬でもログイン必須画面が見えてしまう

* Nuxt の middleware を使わない場合、 Nuxt のアーキテクチャの割とメイン機能が使えないことになってしまう

## ではどうするか

1. Nuxt の middleware をガチで使わない方向でいく（工数と難易度や汎用性含めなかなか厳しい）

1. Cookie 7 日問題のことは忘れる（iPhone の Safari にも影響あるので忘れにくいことではある）

1. JavaScript から Cookie をセットせずに、専用の API を用意して Set-Cookie させる（検証が必要）

## 参考記事

[ITP2.1対策　Safari 12.1 でCookieの有効期限を8日以上に延長する方法 - Qiita](https://qiita.com/yossaito/items/6ffb1b8bb3f9d91107b8)

[【一問一答】Appleの「 ITP2.2 」とは？：ファーストパーティクッキーを24時間で消去 - ライブドアニュース](https://news.livedoor.com/article/detail/16456042/)