const { paymentStatus: { paid, waitingFunds } } = require('../../../models/payable/payment_status')
const Transaction = require('../../../models/transaction')
const Payable = require('../../../models/payable')

const applyFeeReducer = (acc, t) =>
  acc + (t.amount + t.payables[0].dataValues.fee)

const calculateBalance = (transactions) =>
  transactions.reduce(applyFeeReducer, 0)

const getAvailableBalance = () => {
  const where = { paymentStatus: paid }

  return Transaction.findAll({
    include: [{
      model: Payable,
      as: 'payables',
      where
    }]
  }).then(calculateBalance)
}

const getWaitingFundsBalance = () => {
  const where = { paymentStatus: waitingFunds }

  return Transaction.findAll({
    include: [{
      model: Payable,
      as: 'payables',
      where
    }]
  }).then(calculateBalance)
}

module.exports = {
  getAvailableBalance,
  getWaitingFundsBalance
}
