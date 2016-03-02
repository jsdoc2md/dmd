'use strict'
const Dmd = require('../dmd')

class Group extends Dmd {
  memberIndexItem () {
    return `_${this.data.id}_\n`
  }
  render () { return `${this.headingSymbol()}${this.data.id} list\n` }
}

module.exports = Group
