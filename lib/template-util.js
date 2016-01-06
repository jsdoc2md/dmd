'use strict'
const t = require('typical')

exports.clean = clean

function clean () {
  const args = Array.from(arguments)
  const template = args.shift()
  const values = args
  return template.reduce((prev, curr, index) => {
    const value = t.isDefined(values[index-1]) ?  values[index-1] : ''
    return prev + value + curr
  })
}
