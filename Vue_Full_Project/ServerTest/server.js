const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.HTTP_PORT || 3000
const app = express()
const happyCharge = require('./happyCharge')

app.use(bodyParser.json())
app.use(cors())

app.post('/', (req, res) => {
  req.accepts('application/json')
  var json = req.body
  console.log('name is :' + json.membership)
  console.log('address is :' + json.apiName)

  /* if (reqObj.membership === 'levis') {

  } else if (reqObj.membership === 'happyCharge') {
    if (reqObj.apiName === 'memberCount') {
      console.log(reqObj.apiName)
      resultJson = happyCharge.getJsonData()
    } else if (reqObj.apiName === 'memberVisit') {
      console.log(reqObj.apiName)
      resultJson = happyCharge.getJsonData()
    }
  } */

  res.status(200).send({result: 'success'})
})

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} ✅`)
)
