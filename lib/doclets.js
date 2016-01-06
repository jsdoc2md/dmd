'use strict'

const locale = {
  symbolReturns: '=>',
  symbolInherits: '<=',
  symbolType: ':'
}

const markdown = require('./markdown')
const terminal = require('./terminal')
let template = markdown

function createDoclet(data, locale) {
  let kind = data.kind
  kind = kind[0].toUpperCase() + kind.slice(1)
  return new template[kind](data, locale)
}

class Doclets {
  constructor (input) {
    this.list = input.map(d => {
      return createDoclet(d, locale)
    })
  }

  getByKind (kind) {
    return this.list.filter(d => d.data.kind === kind)
  }

  getByScope (scope) {
    return this.list.filter(d => d.data.scope === scope)
  }
}

module.exports = Doclets
