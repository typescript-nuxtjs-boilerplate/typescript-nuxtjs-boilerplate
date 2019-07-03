// https://ja.nuxtjs.org/api/configuration-servermiddleware/
const axios = require('axios')

const HEALTHCHECK_PATH = '/healthcheck'

// 関数の仕様はこちら
// https://github.com/senchalabs/connect#appusefn
module.exports = (req, res, next) => {
  console.log('/start healthcheck---')

  let internalHealthcheckUrl

  if (process.env.BUILD_ENV === 'docker') {
    /** docker のビルド環境の環境変数から値を取ってくる */
    internalHealthcheckUrl = `${process.env.internalEndpointUrl}${HEALTHCHECK_PATH}`
  } else {
    /** docker でビルドされていない場合は、 .env.local から値を取ってくる */
    internalHealthcheckUrl = `http://localhost:5000${HEALTHCHECK_PATH}`
  }
  console.log('internalHealthcheckUrl:', internalHealthcheckUrl)

  res.writeHead(200, {
    'Content-Type': 'text/plain'
    // 'Content-Type': 'application/json'
  })

  axios.get(`${internalHealthcheckUrl}`).then(response => {
    console.log(response.data)
    console.log(response.status)

    // res.writeHead を使う場合は、 end しか使えない
    // https://qiita.com/kukimo/items/e686d480209464c6372f
    // res.write('ok')
    res.end('ok')
  })

  console.log('/end healthcheck---')

  // このミドルウェアがレスポンスを返さず、次に処理を移譲させるなら next() を実行すること
  // https://expressjs.com/en/guide/writing-middleware.html
  // next()
}
