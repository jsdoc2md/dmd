'use strict'
const Default = require('./dmd')
const c = require('template-clean')
const catalogue = require('text-catalogue')
const enGB = require('dmd-locale-en-gb')
const _ = catalogue._
catalogue.extend(enGB)

/**
 * @module markdown
 */
module.exports = function () {
  return class ParamListFormatList {
    params () {
      let params = this.data.params
      if (params) {
        const paramList = params
          .map(p => {
            p.name = p.name || ''
            /* decorate the type.name to indicate variable, optional etc */
            const nameSplit = p.name.split('.')
            let name = nameSplit[nameSplit.length - 1]
            if (nameSplit.length > 1) name = '.' + name
            if (p.variable) name = '...' + name
            if (p.optional) name = '[' + name + ']'

            return {
              indent: _('md.indent').repeat(nameSplit.length - 1),
              name: name,
              type: p.type ? c` ${linkedTypeList(p.type.names)}` : '',
              defaultvalue: p.defaultvalue ? c` ${getDefaultValue(p.defaultvalue, true, p.type.names)}` : '',
              desc: p.description ? c` - ${p.description}` : ''
            }
          })
          .map(p => c`${p.indent}- ${p.name}${p.type}${p.defaultvalue}${p.desc}`)
          .join('\n')

        return c`**Params**\n\n${paramList}\n`
      }
    }
  }
}

function linkedTypeList (typeNames) {
//   {{#each types~}}
// {{>link to=this html=../html ~}}
// {{#unless @last}}{{{../../delimiter}}}{{/unless~}}
// {{/each}}
  // return types.map(type => link(type.id, false)).join(' | ')
  return typeNames && typeNames.join(c` ${_('symbol.typeSeparator')} `)
}

function link (to, html, caption) {
  let output = ''
  const linked = _link(to, doclets)
  if (html) {
    const linkText = caption ? caption : p.name
    if (linked.url) {
      output = `<a href="${linked.url}">${linkText}</a>`
    } else {
      output = linkText
    }
  } else {
    if (linked.url) {
      const linkText = caption ? escape(caption) : escape(name)
      output = `[${linkText}](${linked.url})`
    } else {
      output = linkText
    }
  }

  return `<code>${output}</code>`
}

function getDefaultValue (defaultvalue, equals, typeNames) {
  if (defaultvalue) {
    const equalSymbol = equals ? ' = ' : ''
    const defaultVal = typeNames[0].toLowerCase() === 'string'
      ? JSON.stringify(defaultvalue)
      : defaultvalue
    return c`<code>${equalSymbol}${defaultVal}</code>`
  }
}

/**
 * e.g. namepaths `module:Something` or type expression `Array.<module:Something>`
 * @param {string} - namepath or type expression
 * @param {object} - the handlebars helper options object
 * @returns {{ name: string, url: string }}
 */
function _link (linkToID, doclets) {
  if (typeof linkToID !== 'string') return null

  var linked, matches, namepath
  var output = {}

  /*
  test input for
  1. A type expression containing a namepath, e.g. Array.<module:Something>
  2. a namepath referencing an `id`
  3. a namepath referencing a `longname`


  https://github.com/jsdoc2md/dmd/issues/23
  */
  if ((matches = input.match(/.*?<(.*?)>/))) {
    namepath = matches[1]
  } else {
    namepath = input
  }

  linked = doclets.findById(namepath)

  if (!linked) {
    linked = doclets.find({ longname: namepath })
  }
  if (!linked) {
    return { name: linkToID, url: null }
  } else {
    output.name = linkToID.replace(namepath, linked.name)
    if (linked.data.isExternal) {
      if (linked.data.description) {
        output.url = '#' + anchorName.call(linked)
      } else {
        if (linked.see && linked.see.length) {
          var firstLink = parseLink(linked.see[0])[0]
          output.url = firstLink ? firstLink.url : linked.see[0]
        } else {
          output.url = null
        }
      }
    } else {
      output.url = '#' + anchorName.call(linked)
    }
    return output
  }
}

/**
Returns an array of identifiers matching the query
@returns {array}
@static
*/
function _identifiers (options) {
  var query = {}

  for (var prop in options.hash) {
    if (/^-/.test(prop)) {
      query[prop.replace(/^-/, '!')] = options.hash[prop]
    } else if (/^_/.test(prop)) {
      query[prop.replace(/^_/, '')] = new RegExp(options.hash[prop])
    } else {
      query[prop] = options.hash[prop]
    }
  }
  return a.where(options.data.root, query)
}

// {{#params}}**Params**
// {{#each this~}}
// {{indent}}- {{name}}{{#if type}} {{>linked-type-list types=type.names delimiter=" | " }}{{/if}}{{#unless (equal defaultvalue undefined)}} {{>defaultvalue equals=true ~}}{{/unless}}{{#if description}} - {{{inlineLinks description}}}{{/if}}
// {{/each}}
//
// {{/params~}}
