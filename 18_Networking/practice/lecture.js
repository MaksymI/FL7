// 5e417aaf87f04652b47cc6e134f50538

// https://virtserver.swaggerhub.com/MaksymI/users2/1.0.0/user?firstName=Max&lastName=Maximov&id=111&username=Max Maximov

// PUT "https://virtserver.swaggerhub.com/MaksymI/users2/1.0.0/user/123"

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
