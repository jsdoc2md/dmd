'use strict'
const markdown = require('./markdown')
const clean = require('../lib/template-util').clean

/**
 * @module markdown
 */

class ParamsList extends markdown.Template {
  get params () {
    let params = this.data.params
    if (params) {
      const list = params.map(param => {
        const nameSplit = param.name.split('.')
        const name = nameSplit[nameSplit.length - 1]
        if (nameSplit.length > 1) name = '.' + name
        if (param.variable) name = '...' + name
        if (param.optional) name = '[' + name + ']'
        return {
          indent: '    '.repeat(nameSplit.length - 1),
          name: name,
          type: param.type,
          defaultvalue: param.defaultvalue,
          description: param.description
        }
      })

      return `**Params**

${list.map(paramLine).join('\n')}
`
    }
  }
}

function paramLine (p) {
  const type = p.type ? ` ${linkedTypeList(p.type)}` : ''
  const defaultValue = p.defaultvalue ? ` ${p.defaultvalue}` : ''
  const desc = p.description ? ` - ${p.description}` : ''
  return `${p.indent}- ${p.name}${type}${defaultValue}${desc}`
}

function linkedTypeList (types) {
//   {{#each types~}}
// {{>link to=this html=../html ~}}
// {{#unless @last}}{{{../../delimiter}}}{{/unless~}}
// {{/each}}
  return types.map(type => link(type.id, false)).join(' | ')
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

function getDefaultValue () {
  // {{#unless (equal defaultvalue undefined)}}<code>{{#if equals}} = {{/if}}{{#if (equal type.names.[0] "string")}}{{json-stringify defaultvalue}}{{else}}{{defaultvalue}}{{/if}}</code>{{/unless}}
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

/**
returns a unique ID string suitable for use as an `href`.
@this {identifier}
@returns {string}
@static
@category Returns string
@example
```js
> ddata.anchorName.call({ id: "module:yeah--Yeah()" })
'module_yeah--Yeah_new'
```
*/
function anchorName (options) {
  if (!this.id) throw new Error('[anchorName helper] cannot create a link without a id: ' + JSON.stringify(this))
  if (this.inherited) {
    options.hash.longname = this.inherits
    return anchorName.call(_identifiers(options)[0])
  }
  return util.format(
    '%s%s%s',
    this.isExported ? 'exp_' : '',
    this.kind === 'constructor' ? 'new_' : '',
    this.id
      .replace(/:/g, '_')
      .replace(/~/g, '..')
      .replace(/\(\)/g, '_new')
      .replace(/#/g, '+')
  )
}

exports.Doclet = ParamsList

// {{#params}}**Params**
// {{#each this~}}
// {{indent}}- {{name}}{{#if type}} {{>linked-type-list types=type.names delimiter=" | " }}{{/if}}{{#unless (equal defaultvalue undefined)}} {{>defaultvalue equals=true ~}}{{/unless}}{{#if description}} - {{{inlineLinks description}}}{{/if}}
// {{/each}}
//
// {{/params~}}
