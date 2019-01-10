var Nand = require('./Nand')

module.exports = class Or extends Nand {
  constructor () {
    super()

    this.a.on('change', value => {
      this.a.value = value ? 0 : 1
      this.evaluate()
    })

    this.b.on('change', value => {
      this.b.value = value ? 0 : 1
      this.evaluate()
    })
  }
}
