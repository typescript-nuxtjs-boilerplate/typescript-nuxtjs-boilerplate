const express = require('express')
const app = express()

// Example directories as static files
app.use(express.static('src/static'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', function(req, res) {
  res.send('Hello World')
})

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

app.listen(5000)
