const Transaction = require('../../models/transaction')
const Payable = require('../../models/payable')
const mapFee = require('../../models/payable/fees')
const { mapPaymentStatus, paymentStatus: { paid } } = require('../../models/payable/payment_status')
const { mapPaymentDate } = require('../../models/payable/payment_date')

const createPayable = (transaction) => {
  const { dataValues: { paymentMethod, createdAt, amount, id: transactionId } } = transaction
  const payableDataValues = {
    paymentStatus: mapPaymentStatus(paymentMethod),
    paymentDate: mapPaymentDate(paymentMethod)(createdAt),
    fee: mapFee(paymentMethod)(amount),
    transactionId
  }

  return Payable.create(payableDataValues).then(() => transaction)
}

const createTransaction = data => {
  return Transaction.create(data).then(createPayable)
}

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

module.exports = {
  createTransaction, getAvailableBalance
}
