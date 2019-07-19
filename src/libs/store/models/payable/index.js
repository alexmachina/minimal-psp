const Sequelize = require('sequelize')
const Model = Sequelize.Model
const connection = require('../../connection')

class Payable extends Model {}

Payable.init({
  paymentStatus: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      isIn: [['paid', 'waiting_funds']],
      msg: 'Must be either paid or waiting_funds'
    }
  },
  paymentDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  fee: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
}, {
  sequelize: connection,
  modelName: 'payable'
})

module.exports = Payable
