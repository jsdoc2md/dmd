'use strict'
const TemplateBase = require('../lib/template-base')
const clean = require('../lib/template-util').clean
const wrap = require('wordwrapjs')
const ansi = require('ansi-escape-sequences')
const gfmt = require('gfmt')
const _ = require('../lib/l18n')._

/**
 * @module terminal
 */

class TerminalTemplate extends TemplateBase {
  get signature () {
    return clean`[bold]{${this.data.parentName}${this.data.accessSymbol}${this.data.name} ${this.sigSymbol}} [underline]{${this.sigTypes}}\n`
  }

  get description () {
    if (this.data.description) {
      return `${wrap(removeMdLinks(this.data.description), { width: 80 })}\n\n`
    }
  }

  get params () {
    let params = this.data.params
    if (params) {
      params = params.map(p => {
        return {
          name: p.name,
          type: ansi.format(`[underline]{TYPE}`),
          description: removeMdLinks(p.description)
        }
      })

      return `  [bold]{Params}:\n${gfmt(params, { wrap: true, width: 80 })}\n`
    } else {
      return ''
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

class ModuleTerminalTemplate extends TerminalTemplate {
  get signature () {
    return clean`[bold underline]{${this.data.name}}\n`
  }
}

class MemberTerminalTemplate extends TerminalTemplate {
  get sigSymbol () {
    return _('symbol.type')
  }
  get sigTypes () {
    return this.data.type && this.data.type.names.join(' | ')
  }
}

class FunctionTerminalTemplate extends TerminalTemplate {
  get sigSymbol () {
    return this.data.returns && _('symbol.returns')
  }
  get sigTypes () {
    return this.data.returnTypeNames.join(' | ')
  }
}

class ClassTerminalTemplate extends TerminalTemplate {
  get sigSymbol () {
    return this.data.augments.length && _('symbol.extends')
  }
  get sigTypes () {
    return this.data.augments.length && this.data.augments[0]
  }
}

exports.Template = TerminalTemplate
exports.Module = ModuleTerminalTemplate
exports.Member = MemberTerminalTemplate
exports.Function = FunctionTerminalTemplate
exports.Class = ClassTerminalTemplate

function removeMdLinks (str) {
  return str.replace(/\[(\S*)\]\(\S+\)/g, '$1')
}

function indent (data) {
  return data.split(/\n/).map(l => '  ' + l).join('\n')
}
