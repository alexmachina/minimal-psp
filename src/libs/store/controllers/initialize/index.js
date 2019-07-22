const sequelize = require('../../connection')
const Payable = require('../../models/payable')
const Transaction = require('../../models/transaction')

const initialize = () => {
  const force = process.env.NODE_ENV === 'test'
  return sequelize.authenticate()
    .then(() => {
      Payable.belongsTo(Transaction)
      return Payable.sync({ force })
    })
    .then(() => {
      Transaction.hasMany(Payable)
      return Transaction.sync({ force })
    })
    .then(() => {
      return sequelize.sync({ force })
    })
}

module.exports = {
  initialize,
  models: {
    Payable, Transaction
  }
}
