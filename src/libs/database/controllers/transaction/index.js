const sequelize = require('../../connection/')
const TransactionModel = require('../../models/transaction')

const createTransaction = payload => {
  return TransactionModel.create(payload)
}

module.exports = {
  createTransaction
}
