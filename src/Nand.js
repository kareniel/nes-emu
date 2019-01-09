var Pin = require('./Pin')

module.exports = class Nand {
  constructor () {
    this.a = new Pin(true)
    this.b = new Pin(true)
    this.out = new Pin(false)

    this.inputs = [ this.a, this.b ]

    this.inputs.forEach(input => {
      input.on('change', value => {
        this.evaluate()
      })
    })
  }

  evaluate () {
    var value = 0x1 - (this.a.value & this.b.value)

    this.out.setValue(value)

    return this
  }
}
