const { createTransaction } = require('./')
const { debitCard } = require('../../models/transaction/payment_methods')
const { dissoc } = require('ramda')
const { sync } = require('../../models')

const withoutExpirationDateProp = obj => dissoc('expiration_date', obj)

beforeAll(() => { return sync() })

describe('Transaction operations', () => {
  it('Should be able to create a transaction', () => {
    const transactionPayload = {
      amount: 100.0,
      description: 'Naruto Toad T-Shirt XL',
      paymentMethod: debitCard,
      creditCardNumber: 4566,
      expirationDate: new Date(2020, 1),
      owner: 'Cassius Mohamad Clay',
      cvv: '811'
    }

    expect.assertions(1)
    const operation = createTransaction(transactionPayload)
    const expected = expect.objectContaining(
      withoutExpirationDateProp(transactionPayload)
    )

    return expect(operation).resolves.toEqual(expected)
  })
})
