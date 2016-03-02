'use strict'

module.exports = function (SuperClass) {
  return class ClassSignature extends SuperClass {
    static applyIf (doclet) { return doclet.isClass() }
    /**
     * show the augments symbol
     */
    sigSymbol () {
      return this.data.augments && this.data.augments.length && ` ⇐`
    }
    /**
     * show the augments type list
     */
    sigTypes () {
      return this.data.augments && this.data.augments.length && ` ${this.data.augments[0]}`
    }
  }
}
