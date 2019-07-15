const TransactionModel = require('../../models/transaction')
const mapFee = require('../../models/payable/fees')
const mapPaymentStatus = require('../../models/payable/payment_status')
const mapPaymentDate = require('../../models/payable/payment_date')

const createTransaction = data => {
  return TransactionModel.create(data)
}

const createPayable = ({ paymentMethod, createdAt, amount }) => {
  const payableDataValues = {
    paymentStatus: mapPaymentStatus(paymentMethod),
    paymentDate: mapPaymentDate(paymentMethod)(createdAt),
    fee: mapFee(paymentMethod)(amount)
  }

  return payableDataValues
}

module.exports = {
  createTransaction,
  createPayable
}
