const { debitCard } = require('../../transaction/payment_methods')

const fakeTransaction = (overrides) => ({
  amount: 100.0,
  description: 'Naruto Toad T-Shirt XL',
  paymentMethod: debitCard,
  creditCardNumber: 4566,
  expirationDate: '02/2020',
  owner: 'Cassius Mohamad Clay',
  cvv: '811',
  ...overrides
})

module.exports = {
  fakeTransaction
}
