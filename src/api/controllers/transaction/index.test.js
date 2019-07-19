const request = require('supertest')
const app = require('../../server/')
const { creditCard } = require('../../../libs/store/models/transaction/payment_methods')
const { initialize } = require('../../../libs/store/controllers/initialize')
const { populate } = require('../../../libs/store/controllers/transaction/tests/populate')

beforeEach(() => {
  return initialize(true).then(populate)
})

describe.skip('Transaction API controller', () => {
  it('should create a new transaction', done => {
    const transactionPayload = {
      amount: 100.0,
      description: 'Superman T-Shirt L',
      paymentMethod: creditCard,
      creditCardNumber: 1966,
      expirationDate: new Date(2021, 1),
      owner: 'John Von Clauswitz',
      cvv: '811'
    }

    return request(app).post('/transaction')
      .set('Accept', 'application/json')
      .send(transactionPayload)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.description).toBe(transactionPayload.description)
      })
  })

  it('should get available funds balance', done => {
    const expected = 194

    request(app).get('/funds/available')
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body.available).toBe(expected)

        done()
      })
  })

  it('should get waiting funds balance', done => {
    const expected = 190

    request(app).get('/funds/waiting_funds')
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body.waiting_funds).toBe(expected)

        done()
      })
  })
})
