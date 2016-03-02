'use strict'
const Dmd = require('./dmd')

class Member extends Dmd {
  sigSymbol () {
    return this.data.type && ` :`
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
