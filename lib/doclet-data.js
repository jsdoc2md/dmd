'use strict'

class DocletData {
  constructor (data) {
    Object.assign(this, data)
  }

  get isExternal () { return this.kind === 'external' }
}

module.exports = DocletData
