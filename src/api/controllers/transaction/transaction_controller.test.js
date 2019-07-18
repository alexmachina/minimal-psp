const request = require('supertest')
const app = require('../../server/')
const { creditCard } = require('../../../libs/store/models/transaction/payment_methods')

describe('Transaction API controller', () => {
  it('should create a new transaction', done => {
    const transactionPayload = {
      amount: 100.0,
      description: 'Naruto Toad T-Shirt XL',
      paymentMethod: creditCard,
      creditCardNumber: 4566,
      expirationDate: new Date(2020, 1),
      owner: 'Cassius Mohamad Clay',
      cvv: '811'
    }

    request(app).post('/transaction')
      .set('Accept', 'application/json')
      .send(transactionPayload)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.description).toBe(transactionPayload.description)
        done()
      })
  })
})
