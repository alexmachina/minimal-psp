require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { createTransaction, getFunds, getTransactions } = require('../controllers/transaction')
const { initialize } = require('../../libs/store/controllers/initialize')
const app = express()

app.use(bodyParser.json())
const port = 3000

app.get('/', (req, res) => res.send('Welcome to your mini-psp'))
app.get('/transactions', getTransactions)
app.post('/transactios', createTransaction)
app.get('/funds/:type', getFunds)

initialize(true).then(() =>
  app.listen(port, () => {
    console.log('Server running at port: ' + port)
  })
)

module.exports = app
