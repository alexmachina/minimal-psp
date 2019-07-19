const { createTransaction, getAvailableBalance, getWaitingFundsBalance } = require('../')
const { fakeTransaction } = require('../../../models/tests/mocks/transaction')
const { initialize } = require('../../initialize')
const { dissoc } = require('ramda')
const { populate } = require('./populate')

const withoutExpirationDateProp = obj => dissoc('expiration_date', obj)

beforeEach(() => initialize(true).then(populate))

describe('Transaction operations', () => {
  it('Should be able to create a transaction', () => {
    expect.assertions(1)
    const operation = createTransaction(fakeTransaction())
    const expected = expect.objectContaining(
      withoutExpirationDateProp(fakeTransaction())
    )

    return expect(operation).resolves.toEqual(expected)
  })

  it('Should query available balance', () => {
    const expected = 194

    expect.assertions(1)
    return expect(getAvailableBalance()).resolves.toEqual(expected)
  })

  it('Should query waiting funds', () => {
    const expected = 190

    expect.assertions(1)
    return expect(getWaitingFundsBalance()).resolves.toEqual(expected)
  })
})
