'use strict'
const Dmd = require('./dmd')

class Constructor extends Dmd {
  sigPrefix () {
    return 'new '
  }
}

module.exports = Constructor
