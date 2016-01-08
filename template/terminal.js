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

class Template extends TemplateBase {
  get signature () {
    return clean`[bold]{${this.data.name} SYMBOL} [underline]{TYPE}\n`
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

class Module extends Template {
  get signature () {
    return clean`[bold underline]{${this.data.name}}\n`
  }
}

class Member extends Template {
  get signature () {
    return clean`[bold]{${this.data.name} ${_('symbol.type')}} [underline]{THE TYPE}\n`
  }
}

class Function_ extends Template {
  get signature () {
    const parentName = this.parent ? `${(this.parent.data.typicalname || this.parent.data.name)}.` : ''
    return clean`[bold]{${parentName}${this.data.name} SYMBOL} [underline]{TYPE}\n`
  }
}

class Class_ extends Template {
  get signature () {
    const parentName = this.parent ? `${(this.parent.data.typicalname || this.parent.data.name)}.` : ''
    return clean`[bold]{${parentName}${this.data.name} SYMBOL} [underline]{TYPE}\n`
  }
}

exports.Template = Template
exports.Module = Module
exports.Member = Member
exports.Function = Function_
exports.Class = Class_

function removeMdLinks (str) {
  return str.replace(/\[(\S*)\]\(\S+\)/g, '$1')
}

function indent (data) {
  return data.split(/\n/).map(l => '  ' + l).join('\n')
}
