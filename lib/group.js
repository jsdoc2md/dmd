'use strict'
const Dmd = require('./dmd')

class Group extends Dmd {
  memberIndexItem () {
    return `_${this.data.id}_\n`
  }
  render () { return '' }
}

module.exports = Group
