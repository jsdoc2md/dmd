'use strict'
const DocletBase = require('./doclet-base')
const clean = require('./template-util').clean
const wrap = require('wordwrapjs')
const ansi = require('ansi-escape-sequences')
const gfmt = require('gfmt')

/**
 * @module markdown
 */

class Doclet extends DocletBase {
  get anchor () {
    return `<a href="#${this.data.id}"></a>\n`
  }
  get signature () {
    const i = this.data
    let returns = ''
    if (i.sig.type && i.sig.link) {
      returns = `<code>[${i.sig.type}](${i.sig.link})</code>`
    } else if (i.sig.type) {
      returns = `<code>${i.sig.type}</code>`
    }
    return clean`${i.sig.name} ${i.sig.symbol} ${returns}\n`
  }

  get heading () {
    return '## '
  }

  get description () {
    if (this.data.description) {
      return `${this.data.description}\n\n`
    }
  }

  get params () {
    let params = this.data.params
    if (params) {
      return `**Params**:\n\n${gfmt(params)}\n`
    }
  }

  _render () {
    return clean`${this.anchor}${this.heading}${this.signature}${this.description}${this.params}`
  }
}

class Module extends Doclet {
  get signature () {
    return clean`${this.data.sig.name}\n`
  }
}


exports.Doclet = Doclet
exports.Module = Module
exports.Function = Doclet
exports.Class = Doclet
exports.Property = Doclet

function removeMdLinks (str) {
  return str.replace(/\[(\S*)\]\(\S+\)/g, '$1')
}

function indent (data) {
  return data.split(/\n/).map(l => '  ' + l).join('\n')
}
