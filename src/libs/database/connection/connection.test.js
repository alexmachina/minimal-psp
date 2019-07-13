const sequelize = require('./')

describe('Database connection test', () => {
  it('Connects to the database', done => {
    return sequelize.authenticate().then(() => done())
  })
})
