var Nand = require('./Nand')

module.exports = class And extends Nand {
  constructor () {
    super()

    this.out.on('change', value => {
      this.out.value = value === 1 ? 0 : 1
    })
  }
}
