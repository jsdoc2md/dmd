'use strict'
const a = require('array-tools')
const TemplateBase = require('./template-base')

module.exports = build

function createTemplate(templatePackage, data) {
  let kind = data.kind
  kind = kind[0].toUpperCase() + kind.slice(1)
  const templateClass = templatePackage[kind]
  return templateClass ? new templateClass(data) : new templatePackage.Template(data)
}

function build (docletTree, templatePackage) {
  const root = createTemplate(templatePackage, docletTree)
  function addChildren (docletTree, templateTree) {
    for (let childDoclet of docletTree.children) {
      const template = createTemplate(templatePackage, childDoclet)
      template.parent = templateTree
      templateTree.add(template)
      addChildren(childDoclet, template)
    }
  }
  addChildren(docletTree, root)
  return root
}
