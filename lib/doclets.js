'use strict'
const a = require('array-tools')

const locale = {
  symbolReturns: '=>',
  symbolInherits: '<=',
  symbolType: ':'
}

const markdown = require('../template/markdown')
const terminal = require('../template/terminal')
const markdownParamList = require('../template/markdown-param-list')
// let template = markdownParamList
let template = terminal

// template.subclass markdown doclet with params override

function createDoclet(data) {
  let kind = data.kind
  kind = kind[0].toUpperCase() + kind.slice(1)
  const templateClass = template[kind]
  return templateClass ? new templateClass(data) : new template.Template(data)
}

class Doclets {
  constructor (input) {
    /* convert input into array of concrete classes */
    this.list = input.map(createDoclet)

    /* create parent-child links */
    this.list.forEach(doclet => {
      if (doclet.data.memberof) {
        const parent = this.findById(doclet.data.memberof)
        doclet.parent = parent
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

  filter (query) {
    return a.where(this.list, query)
  }

  find (query) {
    return a.findWhere(this.list, query)
  }
}

module.exports = Doclets
