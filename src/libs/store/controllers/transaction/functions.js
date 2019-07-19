const applyFeeReducer = (acc, t) =>
  acc + (t.amount + t.payables[0].dataValues.fee)

const calculateBalance = (transactions) =>
  transactions.reduce(applyFeeReducer, 0)

module.exports = {
  calculateBalance
}
