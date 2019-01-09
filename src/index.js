process.env.DISABLE_NANOTIMING = true

var Nand = require('./Nand')
var Clock = require('./Clock')

const frequency = Clock.DEFAULT_FREQUENCY / 1000 / 1000

var gate = new Nand()
var clock = new Clock(frequency)

clock.out.connect(gate.a)

gate.out.on('change', function (payload) {
  console.log('gate.out:', payload)
})

clock.start()
