const { mapPaymentStatus, paymentStatus: { paid, waitingFunds } } = require('./')
const { debitCard, creditCard } = require('../../transaction/payment_methods')

describe('Payment Status', () => {
  it('Should return "paid" status when payment method is debit card', () => {
    const paidPaymentStatus = mapPaymentStatus(debitCard)
    expect(paidPaymentStatus).toEqual(paid)
  })

  it('Should return "waiting funds" status when payment method is credit card', () => {
    const waitingFundsPaymentStatus = mapPaymentStatus(creditCard)
    expect(waitingFundsPaymentStatus).toEqual(waitingFunds)
  })
})
