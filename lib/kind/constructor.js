'use strict'
const Dmd = require('../dmd')

class Constructor extends Dmd {
  sigPrefix () { return 'new ' }
  signature () {
    return this.getSignature({ skipParentName: true })
  }
}

module.exports = Constructor
