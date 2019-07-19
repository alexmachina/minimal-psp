const sequelize = require('../../connection')
const Payable = require('../../models/payable')
const Transaction = require('../../models/transaction')

const initialize = (force) => {
  return sequelize.authenticate()
    .then(() =>
      sequelize.sync({ force })
    )
    .then(() => {
      Payable.belongsTo(Transaction)
      return Payable.sync({ force })
    })
    .then(() => {
      Transaction.hasMany(Payable)
      return Transaction.sync({ force })
    })
    .then(() =>
      sequelize.sync()
    )
}

module.exports = {
  initialize,
  models: {
    Payable, Transaction
  }
}
