const sequelize = require('../connection')
const Transaction = require('./transaction')
const Payable = require('./payable')

const models = {
  Transaction,
  Payable,
  sync: () => {
    Payable.belongsTo(Transaction)
    Transaction.hasMany(Payable)
    return sequelize.sync({ force: true })
  }
}

module.exports = models
