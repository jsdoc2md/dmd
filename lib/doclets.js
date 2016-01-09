'use strict'
const a = require('array-tools')
const markdown = require('../template/markdown')
const terminal = require('../template/terminal')
const markdownParamList = require('../template/markdown-param-list')

// let template = markdownParamList
let template = terminal

// template.subclass markdown doclet with params override

function createTemplate(data) {
  let kind = data.kind
  kind = kind[0].toUpperCase() + kind.slice(1)
  const templateClass = template[kind]
  return templateClass ? new templateClass(data) : new template.Template(data)
}

/**
 * a collection of
 */
class TemplateCollection {
  constructor (input) {
    /* convert input into array of concrete classes */
    this.list = input.map(createTemplate)

    /* create parent-child links */
    this.list.forEach(template => {
      if (template.data.memberof) {
        const parent = this.findById(template.data.memberof)
        template.parent = parent
        template.data.parent = parent
        parent.add(template)
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

module.exports = TemplateCollection
