'use strict'
const a = require('array-tools')
const DocletData = require('./doclet-data')

module.exports = build

function build (docletArray) {
  docletArray = docletArray.map(doclet => new DocletData(doclet))
  const root = new DocletData({ id: 'root', name: 'root' })
  const children = docletArray.filter(d => d.memberof)
  children.forEach(child => {
    const parent = a.findWhere(docletArray, { id: child.memberof })
    parent.add(child)
  })
  docletArray.filter(d => !d.memberof).forEach(root.add.bind(root))
  return root
}
