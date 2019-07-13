const Payable = require('./')
const sequelize = require('../../connection')

describe('Payable Model', () => {
  it('should sync', () => {
    sequelize.authenticate()
    return Payable.sync()
  })
})
