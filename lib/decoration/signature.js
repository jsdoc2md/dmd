'use strict'
const arrayify = require('array-back')

module.exports = function (SuperClass) {
  return class Signature extends SuperClass {
    signature () {
      return this.getSignature({ skipParentName: false, link: false })
    }

    sigSymbol () { return '' }
    sigTypes () { return '' }
    sigPrefix () { return '' }

    sigSuffix () {
      return this.data.isExported ? ' ⏏' : this.data.isPrivate() ? ' ℗' : ''
    }
    /**
     * Returns the method signature, e.g. `(options, [onComplete])`
     * @returns {string}
     */
    paramSig () {
      let params = arrayify(this.data.params)
      if (params.length) {
        const args = params
          .filter(p => p.name && !/\./.test(p.name))
          .map(p => p.getAnnotatedName())
          .join(', ')
        return `(${args})`
      } else {
        return '()'
      }
    }

    methodSig (options) {
      options = options || {}
      let methodSig = [
        this.sigPrefix(),
        options.skipParentName ? '' : this.data.parentName(),
        this.data.accessSymbol(),
        this.data.getName(),
        this.paramSig()
      ].join('')
      // if (options.link) {
      //   methodSig = this.constructor.createMDLink(methodSig, '#' + this.anchor())
      // }
      return methodSig
    }

    /**
     * A signature and its composition:
     *
     * new exampleModule.ExampleClass(one, two) <= `EventEmitter` ℗
     *
     * - `new` - `sigPrefix()`
     * - `exampleModule` - `data.parentName()`
     * - `.` - `data.accessSymbol()`
     * - `ExampleClass` - `data.getName`
     * - `(one, two)` - `sigMethodSig()`
     * - `<=` - `sigSymbol()`
     * - `EventEmitter` - sigTypes()
     * - `℗` - sigSuffix()
     *
     * @param [options] {object}
     * @param [options] {object}
     * @example
     * new ExampleClass(one, two) <= EventEmitter ℗
     */
    getSignature (options) {
      options = options || {}

      const output = [
        this.methodSig(options),
        this.sigSymbol(),
        this.sigTypes(),
        this.sigSuffix()
      ].join('')

      return output + '\n'
    }
  }
}
