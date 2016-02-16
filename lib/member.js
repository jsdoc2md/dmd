'use strict'
const Dmd = require('./dmd')
const _ = require('text-catalogue')._

class Member extends Dmd {
  sigSymbol () {
    return this.data.type && ` ${_('symbol.type')}`
  }
  sigTypes () {
    const names = this.data.typeNames()
    if (names.length) {
      return ' ' + this.typeList(names)
    } else {
      return ''
    }
  }

}

module.exports = Member
