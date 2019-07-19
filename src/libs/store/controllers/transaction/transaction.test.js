const { createTransaction, getAvailableBalance, getWaitingFundsBalance } = require('./')
const { debitCard, creditCard } = require('../../models/transaction/payment_methods')
const { dissoc } = require('ramda')
const { sync } = require('../../models')

const withoutExpirationDateProp = obj => dissoc('expiration_date', obj)

const transactionPayload = {
  amount: 100.0,
  description: 'Naruto Toad T-Shirt XL',
  paymentMethod: debitCard,
  creditCardNumber: 4566,
  expirationDate: new Date(2020, 1),
  owner: 'Cassius Mohamad Clay',
  cvv: '811'
}

beforeEach(() => {
  return sync().then(() => {
    const operations = [
      createTransaction(transactionPayload),
      createTransaction({ ...transactionPayload, paymentMethod: creditCard }),
      createTransaction({ ...transactionPayload, paymentMethod: creditCard })
    ]

    return Promise.all(operations)
  })
})

describe('Transaction operations', () => {
  it('Should be able to create a transaction', () => {
    expect.assertions(1)
    const operation = createTransaction(transactionPayload)
    const expected = expect.objectContaining(
      withoutExpirationDateProp(transactionPayload)
    )

    return expect(operation).resolves.toEqual(expected)
  })

  it('Should query available balance', () => {
    const expected = 97

    expect.assertions(1)
    return expect(getAvailableBalance()).resolves.toEqual(expected)
  })

  it('Should query waiting funds', () => {
    const expected = 190

    expect.assertions(1)
    return expect(getWaitingFundsBalance()).resolves.toEqual(expected)
  })
})
