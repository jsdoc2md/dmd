'use strict'
const Dmd = require('./dmd')
const _ = require('text-catalogue')._

class Namespace extends Dmd {
  sigSymbol () {
    return ` ${_('symbol.type')}`
  }
  sigTypes () {
    return ' `object`'
  }
}

module.exports = Namespace
