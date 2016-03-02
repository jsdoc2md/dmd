'use strict'
const Dmd = require('./dmd')

class Namespace extends Dmd {
  sigSymbol () {
    return ` :`
  }
  sigTypes () {
    return ' `object`'
  }
}

module.exports = Namespace
