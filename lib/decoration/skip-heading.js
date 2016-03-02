'use strict'

module.exports = function (SuperClass) {
  return class SkipHeading extends SuperClass {
    static applyIf (doclet) { return doclet.isModule() }
    heading () { return '' }
  }
}
