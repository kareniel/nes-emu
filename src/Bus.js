var Emitter = require('nanobus')
var Pin = require('./Pin')

module.exports = class Bus extends Emitter {
  constructor (size) {
    super()

    this.pins = new Array(size)
      .fill(0)
      .map((_, index) => {
        var pin = new Pin()

        pin.on('change', value => {
          this.emit('change', {
            index,
            value
          })
        })
      })
  }
}
