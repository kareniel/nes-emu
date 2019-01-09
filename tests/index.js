process.env.DISABLE_NANOTIMING = true

var test = require('tape')
var testOutputs = require('./test-outputs')

var gates = [
  require('../src/Nand')
]

gates.forEach(gateCtor => testOutputs(gateCtor))
