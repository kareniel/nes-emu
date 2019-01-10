var Nand = require('./Nand')

module.exports = class Xor extends Nand {
  constructor () {
    super()

    this.x = new Nand()
    this.y1 = new Nand()
    this.y2 = new Nand()
    this.z = new Nand()

    this.out = this.z.out

    this.y1.out.connect(this.z.a)
    this.y2.out.connect(this.z.b)

    this.x.out.connect(this.y1.b)
    this.x.out.connect(this.y2.a)

    this.a.connect(this.y1.a)
    this.a.connect(this.x.a)
    this.b.connect(this.x.b)
    this.b.connect(this.y2.b)
  }
}
