'use strict'
const Dmd = require('./dmd')
const _ = require('text-catalogue')._

class Constant extends Dmd {
  sigSymbol () {
    return this.data.type && ` ${_('symbol.type')}`
  }
  sigTypes () {
    return ' ' + this.data.returnTypeNames().join(` ${_('symbol.typeSeparator')} `)
  }
}

module.exports = Constant
