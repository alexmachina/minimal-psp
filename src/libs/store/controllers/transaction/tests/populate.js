const { fakeTransaction } = require('../../../models/tests/mocks/transaction')
const { createTransaction } = require('../')

const populate = () =>
  createTransaction(fakeTransaction())
    .then(
      () => createTransaction(fakeTransaction())
    )
    .then(
      () => createTransaction(fakeTransaction({ paymentMethod: 'credit_card' }))
    )
    .then(
      () => createTransaction(fakeTransaction({ paymentMethod: 'credit_card' }))
    )

module.exports = {
  populate
}
