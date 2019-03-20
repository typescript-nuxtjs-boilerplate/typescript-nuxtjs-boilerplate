# ROUTERS

nuxt.config.ts の `router.extendRoutes` でカスタムルーティングしたいが、 pages にファイルを配置すると `.vue` ファイルの名前でアクセスできてしまう。

それを防ぐのが、 `routed-pages` と `routers` です。

routers でカスタムルーティングを定義し、 routed-pages のファイルを指定するのが pages を使わない場合のルールです。
