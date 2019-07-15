const Sequelize = require('sequelize')

const sequelize = new Sequelize('psp', 'psp_admin', 'boris yeltsin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
})

module.exports = sequelize
