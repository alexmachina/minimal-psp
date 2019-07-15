const { cond, equals, always } = require('ramda')
const { creditCard, debitCard } = require('../../transaction/payment_methods')

const paymentStatus = {
  paid: 'paid',
  waitingFunds: 'waiting_funds'
}

const mapPaymentStatus = cond([
  [equals(debitCard), always(paymentStatus.paid)],
  [equals(creditCard), always(paymentStatus.waitingFunds)]
])

module.exports = {
  mapPaymentStatus,
  paymentStatus
}
