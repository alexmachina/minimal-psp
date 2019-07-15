const sequelize = require('../connection')
const Transaction = require('./transaction')
const Payable = require('./payable')

const models = {
  Transaction,
  Payable,
  sync: () => sequelize.sync({ force: true })
}

module.exports = models
