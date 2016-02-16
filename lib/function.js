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
    const names = this.data.returnTypeNames()
    if (names.length) {
      return ' ' + this.typeList(names)
    } else {
      return ''
    }
  }
}

module.exports = Function_
