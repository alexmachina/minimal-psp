const Transaction = require('../../models/transaction')
const Payable = require('../../models/payable')
const mapFee = require('../../models/payable/fees')
const { mapPaymentStatus } = require('../../models/payable/payment_status')
const { mapPaymentDate } = require('../../models/payable/payment_date')

const createPayable = (transaction) => {
  const { dataValues: { paymentMethod, createdAt, amount } } = transaction
  const payableDataValues = {
    paymentStatus: mapPaymentStatus(paymentMethod),
    paymentDate: mapPaymentDate(paymentMethod)(createdAt),
    fee: mapFee(paymentMethod)(amount)
  }

  return Payable.create(payableDataValues)
    .then(payable => transaction.setPayables([payable]))
}

const createTransaction = data => {
  return Transaction.create(data).then(createPayable)
}

module.exports = {
  createTransaction
}
