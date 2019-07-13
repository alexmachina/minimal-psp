const Transaction = require('./')

describe('Transaction Model', () => {
  it('Syncs', () => {
    return Transaction.sync()
  })
})
