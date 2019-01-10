process.env.DISABLE_NANOTIMING = true

var fs = require('fs')
var path = require('path')
var test = require('tape')
var testOutputs = require('./test-outputs')

loadGates().forEach(gateCtor => testOutputs(gateCtor))

function loadGates () {
  var gatesDir = '../src/gates'

  return fs.readdirSync(path.join(__dirname, gatesDir))
    .map(filename => require(path.join(gatesDir, filename)))
}
