var Pin = require('./Pin')

const NES_MASTER_CLOCK_FREQUENCY = 21441960

class Clock {
  constructor (hertz) {
    this.frequency = hertz || Clock.DEFAULT_FREQUENCY

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

Clock.DEFAULT_FREQUENCY = NES_MASTER_CLOCK_FREQUENCY

module.exports = Clock
