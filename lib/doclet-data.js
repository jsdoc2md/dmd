'use strict'

class DocletData {
  constructor (data) {
    Object.assign(this, data)

    this.parent = null
  }

  get isExternal () { return this.kind === 'external' }
  get accessSymbol () {
    return (this.scope === 'static' || this.scope === 'instance')
      ? '.'
      : this.scope === 'inner'
        ? '~' : ''
  }
  get parentName () {
    return this.parent
      ? (this.parent.typicalname || this.parent.name)
      : ''
  }
}

module.exports = DocletData
