'use strict'
const Dmd = require('./dmd')
const _ = require('text-catalogue')._

class Enum extends Dmd {
  sigSymbol () {
    return ` ${_('symbol.type')}`
  }
  sigTypes () {
    return ' `enum`'
  }
}

module.exports = Enum
