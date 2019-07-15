const moment = require('moment')
const { debitCard, creditCard } = require('../../transaction/payment_methods.js')
const { cond, identity, equals, always } = require('ramda')

const addThirtyDays = date =>
  moment(date).add(30, 'days')

const mapPaymentDate = cond([
  [equals(debitCard), always(identity)],
  [equals(creditCard), always(addThirtyDays)]
])

module.exports = {
  addThirtyDays,
  mapPaymentDate
}
