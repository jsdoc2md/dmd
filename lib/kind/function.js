'use strict'
const Dmd = require('../dmd')

class Function_ extends Dmd {
  sigMethodSig () { return this.paramSig() }
  sigSymbol () {
    if (this.data.returns) {
      return ' ⇒'
    } else if (this.data.chainable) {
      return ' ↩︎'
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
