const express = require('express')
const app = express()

// https://blog.ryo4004.net/web/306/
// method: post のために必須
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Example directories as static files
app.use(express.static('src/static'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    // 'origin, x-requested-with, content-type, accept'
    '*'
  )
  // https://stackoverflow.com/questions/37897523/axios-get-access-to-response-header-fields
  // https://github.com/axios/axios/issues/606
  // Access-Control-Expose-Headers を追加しないとカスタムレスポンスヘッダーをブラウザに返すことはできない
  res.header('Access-Control-Expose-Headers', 'from-server')
  next()
})

/**
 * get '/'
 */
app.get('/', function(req, res) {
  res.send('Hello World')
})

/**
 * get '/api-waiting-for-5-seconds'
 */
app.get('/api-waiting-for-5-seconds', function(req, res) {
  setTimeout(() => {
    res.send(
      JSON.stringify({
        apiResult: [
          { id: 'id1', value: 'value1' },
          { id: 'id2', value: 'value2' }
        ]
      })
    )
  }, 5000)
})

/**
 * get '/headers'
 */
app.get('/headers', (req, res) => {
  res.send(JSON.stringify(req.headers))
})

/**
 * post '/custom-headers'
 */
app.post('/custom-headers', (req, res) => {
  console.log(req.body)

  // カスタムレスポンスヘッダーをセットします
  res.set({
    'from-server': 'server1'
  })

  res.send(JSON.stringify(req.headers))
})

app.listen(5000)
