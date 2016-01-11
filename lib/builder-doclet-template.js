'use strict'
const a = require('array-tools')
const TemplateBase = require('./template-base')

module.exports = build

function getTemplatePackage (packages) {
  return a.arrayify(packages).reduce((prev, curr) => {
    return Object.assign(prev, curr)
  })
}

function getConcreteTemplate(templatePackage, data) {
  let kind = data.kind
  kind = kind[0].toUpperCase() + kind.slice(1)
  const templateClass = templatePackage[kind]
  return templateClass ? templateClass : templatePackage.Template
}

/**
 * get concrete class to instantiate from the `kind` value of the supplied data
 */
function createTemplate(templatePackage, data, extensions) {
  extensions = a.arrayify(extensions)

  const Template = getConcreteTemplate(templatePackage, data)
  const template = new Template(data)

  if (extensions.length) {
    let decoratedTemplate = template
    a.arrayify(extensions).forEach(Extension => {
      decoratedTemplate = new Extension(decoratedTemplate)
    })
    return decoratedTemplate
  } else {
    return template
  }
}

function build (docletData, templatePackage, options) {
  // const templatePackage = getTemplatePackage(templatePackages)
  const root = createTemplate(templatePackage, docletData, options.extensions)

  function addChildren (docletData, templateBase) {
    for (let childDoclet of docletData.children) {
      const template = createTemplate(templatePackage, childDoclet, options.extensions)
      template.parent = templateBase
      templateBase.add(template)
      addChildren(childDoclet, template)
    }
  }
  addChildren(docletData, root)
  // console.log(root.children[0])
  return root
}
