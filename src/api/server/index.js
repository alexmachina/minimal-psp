const express = require('express')
const bodyParser = require('body-parser')
const { createTransaction, getFunds } = require('../controllers/transaction')
const app = express()

app.use(bodyParser.json())
const port = 3000

app.get('/', (req, res) => res.send('Welcome to your mini-psp'))
app.post('/transaction', createTransaction)
app.get('/funds/:type', getFunds)

app.listen(port, () => {
  console.log('Server running at port: ' + port)
})

module.exports = app
