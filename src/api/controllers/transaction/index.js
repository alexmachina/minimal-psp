const storeController = require('../../../libs/store/controllers/transaction/')

const transactionPost = (req, res) => {
  const transactionPayload = req.body
  storeController.createTransaction(transactionPayload).then(t => {
    res.send(t)
  })
}

module.exports = transactionPost
