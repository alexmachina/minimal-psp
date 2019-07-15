const moment = require('moment')
const { addThirtyDays, mapPaymentDate } = require('./')
const { creditCard, debitCard } = require('../../transaction/payment_methods')

test('Add thirty days function', () => {
  const someDay = moment('2016-01-01')
  const thirtyDaysAhead = addThirtyDays(someDay)

  expect(thirtyDaysAhead.format('DD')).toEqual('31')
})

it('Should add thirty days if payment method is credit card', () => {
  const someDay = moment('2016-01-01')
  const paymentDate = mapPaymentDate(creditCard)(someDay)

  expect(paymentDate.format('DD')).toEqual('31')
})

it('Should return the same date if payment method is credit card', () => {
  const transactionCreatedAt = moment('2016-01-01')
  const paymentDate = mapPaymentDate(debitCard)(transactionCreatedAt)

  expect(paymentDate.isSame(transactionCreatedAt))
})
