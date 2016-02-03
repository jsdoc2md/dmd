'use strict'
const clean = require('template-clean')
const arrayify = require('array-back')
const ansi = require('ansi-escape-sequences')
const t = require('typical')

exports.indent = indent
exports.indentLines = indentLines
exports.clean = clean
exports.formatEach = formatEach

function formatEach (array, format) {
  return arrayify(array).map(i => ansi.format(i, format))
}

function indent (input, level, indentWith) {
  level = t.isDefined(level) ? level : 1
  indentWith = t.isDefined(indentWith) ? indentWith : '  '
  return indentWith.repeat(level) + input
}

function indentLines (input, level, indentWith) {
  if (input && input.split) {
    return input.split(/\n/).map(l => indent(l, level, indentWith)).join('\n')
  } else {
    return ''
  }
}
