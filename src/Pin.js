var Emitter = require('nanobus')

module.exports = class Pin extends Emitter {
  constructor (value = false) {
    super()

    this.value = value
    this.connection = null
  }

  setValue (value) {
    this.value = value

    this.emit('change', value)

    if (this.connection) this.connection.setValue(value)
  }

  flip () {
    this.setValue(!this.value)
  }

  connect (pin) {
    this.connection = pin
  }
}
