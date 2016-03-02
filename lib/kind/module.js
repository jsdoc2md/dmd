'use strict'
const Dmd = require('../dmd')
const clean = require('template-clean')

class Module extends Dmd {
  getSignature () {
    return clean`${this.data.name}\n`
  }
}

module.exports = Module
