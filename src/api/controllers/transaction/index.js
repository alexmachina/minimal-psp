const storeController = require('../../../libs/store/controllers/transaction/')

const transactionPost = (req, res) => {
  const transactionPayload = req.body
  storeController.createTransaction(transactionPayload).then(t => {
    res.send(t)
  })
}

const transactionQuery = (req, res) => {
  const type = req.params.type
  switch(type) {
    case 'available':

  }
}

module.exports = transactionPost
