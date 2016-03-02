'use strict'

module.exports = function (SuperClass) {
  return class ConstructorSignature extends SuperClass {
    static applyIf (doclet) { return doclet.isConstructor() }
    sigPrefix () { return 'new ' }
    signature () {
      return this.getSignature({ skipParentName: true })
    }
  }
}
