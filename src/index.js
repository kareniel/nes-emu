process.env.DISABLE_NANOTIMING = true

var Clock = require('./Clock')
var Nand = require('./gates/Nand')

const frequency = Clock.DEFAULT_FREQUENCY / 12

var gate = new Nand()
var clock = new Clock(frequency)

clock.out.connect(gate.a)

clock.start()
