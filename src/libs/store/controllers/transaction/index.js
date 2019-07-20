const Transaction = require('../../models/transaction')
const Payable = require('../../models/payable')
const mapFee = require('../../models/payable/fees')
const { mapPaymentStatus, paymentStatus: { paid, waitingFunds } } = require('../../models/payable/payment_status')
const { mapPaymentDate } = require('../../models/payable/payment_date')
const { calculateBalance, formatExpirationDate } = require('./functions')

const createPayable = (transaction) => {
  const { dataValues: { paymentMethod, createdAt, amount, id: transactionId } } = transaction
  const payableDataValues = {
    paymentStatus: mapPaymentStatus(paymentMethod),
    paymentDate: mapPaymentDate(paymentMethod)(createdAt),
    fee: mapFee(paymentMethod)(amount),
    transactionId
  }

  return Payable.create(payableDataValues).then((payable) => {
    return transaction
  })
}

const createTransaction = data => {
  data.expirationDate = formatExpirationDate(data.expirationDate)
  return Transaction.create(data).then(createPayable)
}

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

const getFunds = type => {
  switch (type) {
    case 'waiting_funds':
      return getWaitingFundsBalance()
    case 'available':
      return getAvailableBalance()
  }
}

module.exports = {
  createTransaction, getAvailableBalance, getWaitingFundsBalance, getFunds
}
