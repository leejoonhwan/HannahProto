var happyCharge = require('./happyCharge')

var http = require('http')

http.createServer(function (req, res) {
  var jsonData = ''

  req.on('data', function (chunk) {
    jsonData += chunk
  })

  req.on('end', function () {
    var reqObj = JSON.parse(jsonData)

    var resultJson = {}

    if (reqObj.membership === 'levis') {

    } else if (reqObj.membership === 'happyCharge') {
      if (reqObj.apiName === 'memberCount') {
        console.log(reqObj.apiName)
        resultJson = happyCharge.getJsonData()
      } else if (reqObj.apiName === 'memberVisit') {
        console.log(reqObj.apiName)
        resultJson = happyCharge.getJsonData()
      }
    }

    res.headers('Access-Control-Allow-Origin', '*')
    res.headers('Access-Control-Allow-Headers', 'X-Requested-With')
    res.headers('Access-Control-Allow-Credentials', 'true')
    res.writeHead(200, {'Content-Type': 'application/json'})
    console.log(JSON.stringify(resultJson))
    res.end(JSON.stringify(resultJson))
  })
}).listen(3000)

console.log('Listening on port 3000')
