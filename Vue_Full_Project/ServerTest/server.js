const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.HTTP_PORT || 3000
const app = express()
const happyChargeMixChartCount = require('./happyChargeMixChartCount')
const levisMixChartCount = require('./levisMixChartCount')
const happyChargeMixChartVisit = require('./happyChargeMixChartVisit')
const levisMixChartVisit = require('./levisMixChartVisit')

app.use(bodyParser.json())
app.use(cors())

app.post('/getCardMixChartData', (req, res) => {
  req.accepts('application/json')
  var json = req.body
  console.log(json.membership, json.apiName)

  var resultJson = {}

  if (json.membership === 'levis') {
    if (json.apiName === 'memberCount') {
      resultJson = levisMixChartCount.getJsonData()
    } else if (json.apiName === 'memberVisit') {
      resultJson = levisMixChartVisit.getJsonData()
    }
  } else if (json.membership === 'happyCharge') {
    if (json.apiName === 'memberCount') {
      resultJson = happyChargeMixChartCount.getJsonData()
    } else if (json.apiName === 'memberVisit') {
      resultJson = happyChargeMixChartVisit.getJsonData()
    }
  }

  res.status(200).send(resultJson)
})

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} ✅`)
)
