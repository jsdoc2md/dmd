'use strict'
const Dmd = require('./dmd')
const _ = require('text-catalogue')._

class Function_ extends Dmd {
  sigMethodSig () { return this.getMethodSig() }
  sigSymbol () {
    if (this.data.returns) {
      return ' ' + _('symbol.returns')
    } else if (this.data.chainable) {
      return ' ' + _('symbol.chainable')
    }
  }

  sigTypes () {
    const returnTypeNames = this.data.returnTypeNames()
    if (returnTypeNames.length) {
      return ' ' + this.typeList(this.data.returnTypeNames())
    } else {
      return ''
    }
  }
}

module.exports = Function_
