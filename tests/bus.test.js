var test = require('tape')
var Bus = require('../src/Bus')

test('Values for a 4-bit bus', t => {
  const n = 4

  var bus = new Bus(n) // n-bit bus
  var testValues = new Array(2 ** n).fill(0).map((_, index) => {
    return {
      binaryString: pad(index.toString(2), n),
      number: index
    }
  })

  t.plan(testValues.length)

  testValues.forEach(({ binaryString, number }) => {
    var bits = binaryString.split('').map(str => parseInt(str))

    bits.forEach((bit, index) => {
      bus.pins[index].setValue(bit)
    })

    t.equal(bus.value, number, `${binaryString} === ${number} `)
  })
})

function pad (str, n) {
  while (str.length < n) {
    str = '0' + str
  }

  return str
}
