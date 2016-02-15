'use strict'
const Dmd = require('./dmd')
const _ = require('text-catalogue')._

class Member extends Dmd {
  sigSymbol () {
    return this.data.type && ` ${_('symbol.type')}`
  }
  sigTypes () {
    return ' ' + this.data.typeNames()
      .map(n => '`' + n + '`')
      .join(` ${_('symbol.typeSeparator')} `)
  }
}

module.exports = Member
