'use strict'

const locale = {
  symbolReturns: '=>',
  symbolInherits: '<=',
  symbolType: ':'
}

const markdown = require('./markdown')
const terminal = require('./terminal')
let template = terminal

function createDoclet(data, locale) {
  let kind = data.kind
  kind = kind[0].toUpperCase() + kind.slice(1)
  const subClass = template[kind]
  return subClass ? new subClass(data, locale) : new template.Doclet(data, locale)
}

class Doclets {
  constructor (input) {
    /* convert input into array of concrete classes */
    this.list = input.map(d => {
      return createDoclet(d, locale)
    })

    /* create parent-child links */
    this.list.forEach(doclet => {
      if (doclet.data.parentId) {
        const parent = this.findById(doclet.data.parentId)
        parent.add(doclet)
      }
    })
  }

  filterByKind (kind) {
    return this.list.filter(d => d.data.kind === kind)
  }

  filterByScope (scope) {
    return this.list.filter(d => d.data.scope === scope)
  }

  findById (id) {
    return this.list.find(d => d.data.id === id)
  }
}

module.exports = Doclets
