const { createTransaction, getAvailableBalance, getWaitingFundsBalance,
getTransactions } = require('../')
const { fakeTransaction } = require('../../../models/tests/mocks/transaction')
const { initialize } = require('../../initialize')
const sequelize = require('../../../connection')
const { dissoc } = require('ramda')
const { populate } = require('./populate')

beforeEach(async () => {
  await initialize()
  await populate()
})

describe('Transaction operations', () => {
  it('Should be able to create a transaction', () => {
    return sequelize.sync().then(createTransaction(fakeTransaction()))
  })

  it('Should query available balance', () => {

    const expected = 194

    expect.assertions(1)
    return expect(sequelize.sync().then(() =>
     getAvailableBalance())).resolves.toEqual(expected)
  })

  it('Should query waiting funds', () => {
    const expected = 190

    expect.assertions(1)
    return expect(sequelize.sync().then(() =>
     getWaitingFundsBalance())).resolves.toEqual(expected)
  })

  it('Should query transactions', () => {
    return sequelize.sync().then(() => getTransactions())
  })
})
