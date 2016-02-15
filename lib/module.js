'use strict'
const Dmd = require('./dmd')
const clean = require('template-clean')

class Module extends Dmd {
  signature () {
    return clean`${this.data.name}\n`
  }
}

module.exports = Module
