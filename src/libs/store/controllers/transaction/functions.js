const moment = require('moment')

const applyFeeReducer = (acc, t) =>
  acc + (t.amount + t.payables[0].dataValues.fee)

const calculateBalance = (transactions) =>
  transactions.reduce(applyFeeReducer, 0)

const formatExpirationDate = (date) => moment(date, 'MM/YYYY').toDate()

module.exports = {
  calculateBalance,
  formatExpirationDate
}
