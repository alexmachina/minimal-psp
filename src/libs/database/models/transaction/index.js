const Sequelize = require('sequelize')
const Model = Sequelize.Model
const connection = require('../../connection')

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
  payment_method: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['debit_card', 'credit_card']],
      msg: 'Must be either debit_card or credit_card'
    }
  },
  credit_card_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    len: [4, 4]
  },
  expiration_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  owner_name: {
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
