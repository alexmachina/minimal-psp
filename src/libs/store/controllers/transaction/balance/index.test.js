const { getAvailableBalance, getWaitingFundsBalance } = require('./')
const { initialize } = require('../../initialize')
const { populate } = require('../tests/populate')

beforeEach(() => initialize(true).then(populate))

describe('Balance', () => {
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
