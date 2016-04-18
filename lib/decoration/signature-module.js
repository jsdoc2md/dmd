'use strict'

module.exports = function (SuperClass) {
  return class ModuleSignature extends SuperClass {
    static applyIf (doclet) { return doclet.isModule() }
    getSignature () {
      return this.data.name && `${this.data.name}\n`
    }
  }
}
