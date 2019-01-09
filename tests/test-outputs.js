var fs = require('fs')
var path = require('path')
var test = require('tape')

module.exports = testOutputs

function testOutputs (Gate) {
  var table = loadTable(Gate.name)
  var gate = new Gate()

  test('Truth table for ' + Gate.name, t => {
    var numberOfTests = table.rows.length * table.outputs.length

    t.plan(numberOfTests)

    table.rows.forEach(row => {
      table.inputs.forEach(key => {
        var value = row[key]

        gate[key].setValue(value)
      })

      table.outputs.forEach(key => {
        var value = row[key]

        t.equal(gate[key].value, value)
      })
    })
  })
}

function loadTable (name) {
  var str = fs.readFileSync(path.join(__dirname, 'tables', name), 'utf8')
  var table = parseTable(str)

  return table
}

function parseTable (str) {
  var rows = str.split('\n').map(str => str.split(','))
  var types = rows[0]
  var columns = rows[1]

  rows = rows.slice(2).map(items => {
    var row = {}

    columns.forEach((column, index) => {
      row[column] = parseInt(items[index])
    })

    return row
  })

  var inputs = columns.filter((name, index) => {
    return types[index] === 'i'
  })

  var outputs = columns.filter((name, index) => {
    return types[index] === 'o'
  })

  var table = {
    inputs,
    outputs,
    rows
  }

  return table
}
