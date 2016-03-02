'use strict'
const Dmd = require('./dmd')

class Enum extends Dmd {
  sigSymbol () {
    return ` :`
  }
  sigTypes () {
    return ' `enum`'
  }
}

module.exports = Enum
