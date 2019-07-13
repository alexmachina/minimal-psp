require('./')
const sequelize = require('../connection')

describe('Models', () => {
  it('Should not raise any smoke', () => {
    sequelize.sync()
  })
})
