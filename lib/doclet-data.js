'use strict'
const a = require('array-tools')
const Composite = require('./composite')

class DocletData extends Composite {
  constructor (data) {
    super()
    Object.assign(this, data)
  }

  get isExternal () { return this.kind === 'external' }
  get isClass () { return this.kind === 'class' }
  get isClassMember () { return this.parent && this.parent.isClass }
  get isConstructor () { return this.kind === 'constructor' }
  get isFunction () { return this.kind === 'function' }
  get isNamespace () { return this.kind === 'namespace' }
  get isConstant () { return this.kind === 'constant' }
  get isEvent () { return this.kind === 'event' }
  get isExternal () { return this.kind === 'external' }
  get isTypedef () { return this.kind === 'typedef' && this.type.names[0] !== 'function' }
  get isCallback () { return this.kind === 'typedef' && this.type.names[0] === 'function' }
  get isModule () { return this.kind === 'module' }
  get isMixin () { return this.kind === 'mixin' }
  get isPrivate () { return this.access === 'private' }
  get isProtected () { return this.access === 'protected' }

  get accessSymbol () {
    return (this.scope === 'static' || this.scope === 'instance')
      ? '.'
      : this.scope === 'inner'
        ? '~' : ''
  }
  get parentName () {
    function instantiate (input) {
      if (/^[A-Z]{3}/.test(input)) {
        return input.replace(/^([A-Z]+)([A-Z])/, function (str, p1, p2) {
          return p1.toLowerCase() + p2
        })
      } else {
        return input.charAt(0).toLowerCase() + input.slice(1)
      }
    }

    /* don't bother with a parentName for exported identifiers */
    if (this.isExported) return ''

    if (this.parent) {
      const name = this.parent.typicalname || this.parent.name
      return this.scope === 'instance' ? instantiate(name) : name
    } else {
      return this.memberof
    }
  }

  get returnTypeNames () {
    if (this.returns) {
      return a(this.returns)
        .arrayify()
        .map(ret => ret.type && ret.type.names)
        .filter(name => name)
        .flatten()
        .val()
    } else {
      return []
    }
  }
}

module.exports = DocletData
