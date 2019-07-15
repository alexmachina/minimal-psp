const Sequelize = require('sequelize')

const sequelize = new Sequelize('psp', 'psp_admin', 'boris yeltsin', {
  host: 'localhost',
  dialect: 'postgres',
  loggin: false
})

module.exports = sequelize
