const { creditCard, debitCard } = require('../../transaction/payment_methods')
const mapFee = require('./')

test('Calculates credit card fee', () => {
  const amount = 100
  const mapCreditCardFee = mapFee(creditCard)
  const fee = mapCreditCardFee(amount)
  const expectedFee = -5

  expect(fee).toEqual(expectedFee)
})

test('Calculates debit card fee', () => {
  const amount = 100
  const mapDebitCardFee = mapFee(debitCard)
  const fee = mapDebitCardFee(amount)
  const expectedFee = -3

  expect(fee).toEqual(expectedFee)
})
