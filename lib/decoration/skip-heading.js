'use strict'

module.exports = function (SuperClass) {
  return class SkipHeading extends SuperClass {
    static applyTo () { return 'module' }
    heading () { return '' }
  }
}
