const sequelize = require('../../connection')
const { createTransaction } = require('./')
const TransactionModel = require('../../models/transaction')
const { debitCard } = require('../../models/transaction/payment_methods')
const { dissoc } = require('ramda')

beforeAll(() => {
  return sequelize.authenticate().then(() =>
    TransactionModel.sync({ force: true })
  )
})

const withoutExpirationDateProp = obj => dissoc('expiration_date', obj)

describe('Transaction operations', () => {
  it('Should be able to create a transaction', () => {
    const transactionPayload = {
      amount: 100.0,
      description: 'Naruto Toad T-Shirt XL',
      payment_method: debitCard,
      credit_card_number: 4566,
      expiration_date: new Date(2020, 1),
      owner_name: 'Cassius Mohamad Clay',
      cvv: '811'
    }

    expect.assertions(1)
    return expect(createTransaction(transactionPayload))
      .resolves.toEqual(expect.objectContaining(
        withoutExpirationDateProp(transactionPayload)
      ))
  })
})
