'use strict'
const Dmd = require('./dmd')
const clean = require('template-clean')

class Event extends Dmd {
  signature () {
    return clean`"${this.data.name}"\n`
  }
}

module.exports = Event
