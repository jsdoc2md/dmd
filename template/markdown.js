'use strict'
const TemplateBase = require('../lib/template-base')
const clean = require('../lib/template-util').clean
const wrap = require('wordwrapjs')
const ansi = require('ansi-escape-sequences')
const gfmt = require('gfmt')
const _ = require('../lib/l18n')._

/**
 * @module markdown
 */

class MarkdownTemplate extends TemplateBase {
  get anchor () {
    return `<a href="#${this.data.id}"></a>\n`
  }

  get heading () {
    return '## '
  }

  get signature () {
    return clean`${this.data.parentName}${this.data.accessSymbol}${this.data.name} ${this.sigSymbol} ${this.sigTypes}  \n`
  }

  get description () {
    if (this.data.description) {
      return `${this.data.description}\n\n`
    }
  }

  get params () {
    let params = this.data.params
    if (params) {
      params = params.map(p => {
        return {
          name: p.name,
          type: 'TYPE',
          description: p.description
        }
      })
      return `**Params**\n\n${gfmt(params)}\n`
    }
  }

  _render () {
    return clean`${this.anchor}${this.heading}${this.signature}${this.description}${this.type}${this.params}${this.example}`
  }
}

class ModuleMarkdownTemplate extends MarkdownTemplate {
  get signature () {
    return clean`${this.data.name}\n`
  }
}

class MemberMarkdownTemplate extends MarkdownTemplate {
  get sigSymbol () {
    return _('symbol.type')
  }
  get sigTypes () {
    return this.data.type && this.data.type.names.join(' | ')
  }
}

class EnumMarkdownTemplate extends MarkdownTemplate {
  get sigSymbol () {
    return _('symbol.type')
  }
  get sigTypes () {
    return 'enum'
  }
}

class FunctionMarkdownTemplate extends MarkdownTemplate {
  get sigSymbol () {
    return this.data.returns && _('symbol.returns')
  }
  get sigTypes () {
    return this.data.returnTypeNames.join(' | ')
  }
}

class ClassMarkdownTemplate extends MarkdownTemplate {
  get sigSymbol () {
    return this.data.augments.length && _('symbol.extends')
  }
  get sigTypes () {
    return this.data.augments.length && this.data.augments[0]
  }
}

class EventMarkdownTemplate extends MarkdownTemplate {
  get signature () {
    return clean`"${this.data.name}"\n`
  }
}

exports.Template = MarkdownTemplate
exports.Module = ModuleMarkdownTemplate
exports.Member = MemberMarkdownTemplate
exports.Function = FunctionMarkdownTemplate
exports.Class = ClassMarkdownTemplate
exports.Enum = EnumMarkdownTemplate
exports.Event = EventMarkdownTemplate


function removeMdLinks (str) {
  return str.replace(/\[(\S*)\]\(\S+\)/g, '$1')
}

function indent (data) {
  return data.split(/\n/).map(l => '  ' + l).join('\n')
}
