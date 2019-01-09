var Pin = require('./Pin')

const ONE_SEVENTY_NINE_MHZ = 1.79 * 1000 * 1000

class Clock {
  constructor (hertz = ONE_SEVENTY_NINE_MHZ) {
    this.frequency = hertz

    this.out = new Pin()
  }

  start () {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000 / this.frequency)
  }

  stop () {
    clearInterval(this.timer)
  }

  tick () {
    this.out.flip()
  }
}

Clock.DEFAULT_FREQUENCY = ONE_SEVENTY_NINE_MHZ

module.exports = Clock
