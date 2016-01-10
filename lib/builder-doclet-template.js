'use strict'
const a = require('array-tools')
const TemplateBase = require('./template-base')

module.exports = build

function build (docletTree) {
  const root = new TemplateBase(docletTree)
  function addChildren (docletTree, templateTree) {
    for (let childDoclet of docletTree.children) {
      const template = new TemplateBase(childDoclet)
      templateTree.add(template)
      addChildren(childDoclet, template)
    }
  }
  addChildren(docletTree, root)
  return root
}
