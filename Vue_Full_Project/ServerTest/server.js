const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.HTTP_PORT || 3000

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post('/', (req, res) => {
  console.log('1231231231')

  var res_body = [{
    name: 'joonhwan',
    age: 'fuck'
  }]

  res.send(JSON.stringify(res_body))
})

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} ✅`)
)
