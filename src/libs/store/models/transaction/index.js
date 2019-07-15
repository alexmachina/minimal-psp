const Sequelize = require('sequelize')
const Model = Sequelize.Model
const connection = require('../../connection')
const paymentMethods = require('./payment_methods')

class Transaction extends Model {}

Transaction.init({
  amount: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  paymentMethod: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [Object.values(paymentMethods)],
        msg: 'Must be either debit_card or credit_card'
      }
    }
  },
  creditCardNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    len: [4, 4]
  },
  expirationDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  owner: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cvv: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: 'transaction'
})

module.exports = Transaction
