var Emitter = require('nanobus')

module.exports = class Pin extends Emitter {
  constructor (value = false) {
    super()

    this.value = value
    this.outputs = []
  }

  setValue (value) {
    this.value = value

    this.emit('change', value)

    this.outputs.forEach(outputPin => {
      outputPin.setValue(value)
    })
  }

  flip () {
    this.setValue(!this.value)
  }

  connect (pin) {
    this.outputs.push(pin)
  }

  disconnect (pin) {
    var index = this.outputs.findIndex(pin)

    if (index === -1) return

    this.outputs.splice(index, 1)
  }
}
