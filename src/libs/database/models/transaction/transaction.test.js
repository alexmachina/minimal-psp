const Transaction = require('./')
const sequelize = require('../../connection')

describe('Transaction Model', () => {
  it('Syncs', () => {
    sequelize.authenticate()
    return Transaction.sync()
  })
})
