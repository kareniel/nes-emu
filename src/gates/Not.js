var Nand = require('./Nand')

module.exports = class Not extends Nand {
  constructor () {
    super()

    this.a.on('change', value => {
      this.b.setValue(value)
    })
  }
}
