const { negate, compose, multiply, cond, equals, always } = require('ramda')
const { creditCard, debitCard } = require('../../transaction/payment_methods')

const fees = {
  [debitCard]: 0.03,
  [creditCard]: 0.05
}

const mapCreditCardFee = compose(
  negate,
  multiply(fees[creditCard])
)

const mapDebitCardFee = compose(
  negate,
  multiply(fees[debitCard])
)

const mapFee = cond([
  [equals(debitCard), always(mapDebitCardFee)],
  [equals(creditCard), always(mapCreditCardFee)]
])

module.exports = mapFee

// TODO: use this later. const applyDebitCardFee = amount => add(amount)(mapDebitCardFee(amount))
