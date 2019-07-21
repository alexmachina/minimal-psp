const Sequelize = require('sequelize')
require('dotenv').config()

const db = process.env.NODE_ENV === 'test' ? {
  name: process.env.TEST_DB_NAME,
  user: process.env.TEST_DB_USER,
  pass: process.env.TEST_DB_PASS,
  host: process.env.TEST_DB_HOST
} : {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  host: process.env.DB_HOST
}

const sequelize = new Sequelize(
  db.name, db.user, db.pass, {
    host: db.host,
    dialect: 'postgres',
    logging: false
  })

module.exports = sequelize
