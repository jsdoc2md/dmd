'use strict'
const DocletBase = require('./doclet-base')
const clean = require('./template-util').clean
const wrap = require('wordwrapjs')
const ansi = require('ansi-escape-sequences')

/**
 * @module terminal
 */

class Doclet extends DocletBase {
  get signature () {
    const i = this.data
    return clean`[bold]{${i.sig.name} ${i.sig.symbol}} [underline]{${i.sig.type}}\n`
  }

  get description () {
    if (this.data.description) {
      return `${wrap(removeMdLinks(this.data.description), { width: 80 })}\n\n`
    }
  }

  get example () {
    let example = this.data.example
    if (example) {
      example = indent(example)
      return `  [bold]{Example}:\n${example}\n`
    }
  }
  _render () {
    return ansi.format(clean`${this.signature}${this.description}${this.type}${this.params}${this.example}`)
  }
}

class Module extends Doclet {
  get signature () {
    const i = this.data
    return clean`[bold underline]{${i.sig.name}}\n`
  }
}

class Func extends Doclet {

}

exports.Doclet = Doclet
exports.Module = Module
exports.Func = Func

function removeMdLinks (str) {
  return str.replace(/\[(\S*)\]\(\S+\)/g, '$1')
}

function indent (data) {
  return data.split(/\n/).map(l => '  ' + l).join('\n')
}
