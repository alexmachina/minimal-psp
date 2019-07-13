const Sequelize = require('sequelize')
const Model = Sequelize.Model
const connection = require('../../connection')

class Transaction extends Model {}

connection.authenticate()
Transaction.init({
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: 'transaction'
})

module.exports = Transaction
