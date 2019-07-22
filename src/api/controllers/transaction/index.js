const storeController = require('../../../libs/store/controllers/transaction/')

const createTransaction = (req, res) => {
  const transactionPayload = req.body
  return storeController.createTransaction(transactionPayload).then(t => {
    res.send(t)
  })
}

const getFunds = (req, res) => {
  const type = req.params.type

  return storeController.getFunds(type).then(funds => {
    res.send({ [type]: funds })
  })
}

const getTransactions = (req, res) => {
  return storeController.getTransactions().then((transactions) => {
    res.json(transactions)
  })
}

module.exports = {
  createTransaction,
  getFunds,
  getTransactions
}
