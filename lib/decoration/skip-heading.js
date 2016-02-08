'use strict'

module.exports = function () {
  return class SkipHeading {
    static applyTo () { return 'module' }
    heading () { return '' }
  }
}
