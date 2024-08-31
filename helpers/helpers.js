const ddata = require('./ddata')
const arrayify = require('array-back')
const handlebars = require('handlebars')
const util = require('util')
const commonSequence = require('common-sequence')

/**
A library of helpers used exclusively by dmd.. dmd also registers helpers from ddata.
*/
exports.escape = escape
exports.inlineLinks = inlineLinks
exports.tableHead = tableHead
exports.tableHeadHtml = tableHeadHtml
exports.tableRow = tableRow
exports.deprecated = deprecated
exports.groupBy = groupBy
exports._groupBy = _groupBy
exports._addGroup = _addGroup
exports.add = add
exports.kindInThisContext = kindInThisContext
exports.titleCase = titleCase
exports.parseType = parseType
exports.params = params
exports.examples = examples
exports.setLevel = setLevel
exports['string-repeat'] = stringRepeat
exports['regexp-test'] = regexpTest
exports.equal = equal
exports['json-stringify'] = JSON.stringify

/**
Escape special markdown characters
*/
function escape (input) {
  if (typeof input !== 'string') return null
  return input.replace(/([*|_])/g, '\\$1')
}

/**
replaces {@link}, {@linkplain}, and {@linkcode} tags with markdown links in the supplied input text
*/
function inlineLinks (text, options) {
  if (text) {
    const dmdOptions = options.data.root.options
    const links = ddata.parseLink(text, dmdOptions)
    links.forEach(function (link) {
      const captionFmt = link.format === 'code' ? '`' : ''
      const linked = ddata._link(link.url, options)
      if (link.caption === link.url) link.caption = linked.name
      if (linked.url) link.url = linked.url
      text = text.replace(link.original, '[' + captionFmt + link.caption + captionFmt + '](' + link.url + ')')
    })
  }
  return text
}

/**
returns a gfm table header row.. only columns which contain data are included in the output
*/
function tableHead () {
  const args = arrayify(arguments)
  const data = args.shift()
  if (!data) return
  args.pop()
  let cols = args
  const colHeaders = cols.map(function (col) {
    const spl = col.split('|')
    return spl[1] || spl[0]
  })
  cols = cols.map(function (col) {
    return col.split('|')[0]
  })
  const toSplice = []
  cols = cols.filter(function (col, index) {
    const hasValue = data.some(function (row) {
      return typeof row[col] !== 'undefined'
    })
    if (!hasValue) toSplice.push(index)
    return hasValue
  })
  toSplice.reverse().forEach(function (index) {
    colHeaders.splice(index, 1)
  })

  let table = '| ' + colHeaders.join(' | ') + ' |\n'
  table += cols.reduce(function (p) { return p + ' --- |' }, '|') + '\n'
  return table
}

function containsData (rows, col) {
  return rows.some(function (row) {
    return typeof row[col] !== 'undefined'
  })
}

/**
returns a gfm table row.. only columns which contain data are included in the output
*/
function tableRow () {
  const args = arrayify(arguments)
  const rows = args.shift()
  if (!rows) return
  const options = args.pop()
  const cols = args
  let output = ''
  let data

  if (options.data) {
    data = handlebars.createFrame(options.data)
    cols.forEach(function (col, index) {
      const colNumber = index + 1
      data['col' + colNumber] = containsData(rows, col)
    })
  }
  rows.forEach(function (row) {
    output += options.fn(row, { data })
  })
  return output
}

/**
@example
{{#each (tableHeadHtml params "name|Param" "type|Type" )}}<td>{{this}}</td>{{/each}}
*/
function tableHeadHtml () {
  const args = arrayify(arguments)
  const data = args.shift()
  if (!data) return
  args.pop()
  let cols = args
  const colHeaders = cols.map(function (col) {
    const spl = col.split('|')
    return spl[1] || spl[0]
  })
  cols = cols.map(function (col) {
    return col.split('|')[0]
  })
  const toSplice = []
  cols = cols.filter(function (col, index) {
    const hasValue = data.some(function (row) {
      return typeof row[col] !== 'undefined'
    })
    if (!hasValue) toSplice.push(index)
    return hasValue
  })
  toSplice.reverse().forEach(function (index) {
    colHeaders.splice(index, 1)
  })

  return colHeaders
}

function deprecated (options) {
  if (this.deprecated) {
    if (ddata.optionEquals('no-gfm', true, options) || options.hash['no-gfm']) {
      return '<del>' + options.fn(this) + '</del>'
    } else {
      return '~~' + options.fn(this) + '~~'
    }
  } else {
    return options.fn(this)
  }
}

/**

*/
function groupBy (groupByFields, options) {
  groupByFields = arrayify(groupByFields)
  return handlebars.helpers.each(_groupChildren.call(this, groupByFields, options), options)
}

function _addGroup (identifiers, groupByFields) {
  return identifiers.map(function (identifier) {
    identifier._group = groupByFields.map(function (field) {
      return typeof identifier[field] === 'undefined' ? null : identifier[field]
    })
    return identifier
  })
}

function _groupChildren (groupByFields, options) {
  const children = ddata._children.call(this, options)
  return _groupBy(children, groupByFields)
}

/**
takes the children of this, groups them, inserts group headings..
*/
function _groupBy (identifiers, groupByFields) {
  /* don't modify the input array */
  groupByFields = groupByFields.slice(0)

  groupByFields.forEach(function (group) {
    let groupValues = identifiers
      .filter(function (identifier) {
        /* exclude constructors from grouping.. re-implement to work off a `null` group value */
        return identifier.kind !== 'constructor'
      })
      .map(function (i) { return i[group] })
    groupValues = Array.from(new Set(groupValues)) // unique
    if (groupValues.length <= 1) groupByFields = groupByFields.filter(g => g !== group)
  })
  identifiers = _addGroup(identifiers, groupByFields)

  const inserts = []
  let prevGroup = []
  let level = 0
  identifiers.forEach(function (identifier, index) {
    if (!deepEqual(identifier._group, prevGroup)) {
      const common = commonSequence(identifier._group, prevGroup)
      level = common.length
      identifier._group.forEach(function (group, i) {
        if (group !== common[i] && group !== null) {
          inserts.push({
            index,
            _title: group,
            level: level++
          })
        }
      })
    }
    identifier.level = level
    prevGroup = identifier._group
    delete identifier._group
  })

  /* insert title items */
  inserts.reverse().forEach(function (insert) {
    identifiers.splice(insert.index, 0, { _title: insert._title, level: insert.level })
  })
  return identifiers
}

function add () {
  const args = arrayify(arguments)
  args.pop()
  return args.reduce(function (p, c) { return p + (c || 0) }, 0)
}

function deepEqual (a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

/**
returns a more appropriate 'kind', depending on context
@return {string}
*/
function kindInThisContext (options) {
  if (this.kind === 'function' && this.memberof) {
    return 'method'
  } else if (this.kind === 'member' && !this.isEnum && this.memberof) {
    return 'property'
  } else if (this.kind === 'member' && this.isEnum && this.memberof) {
    return 'enum property'
  } else if (this.kind === 'member' && this.isEnum && !this.memberof) {
    return 'enum'
  } else if (this.kind === 'member' && this.scope === 'global') {
    return 'variable'
  } else {
    return this.kind
  }
}

function titleCase (string) {
  return string[0].toUpperCase() + string.slice(1)
}

/**
@returns {{ type: string, description: string }}
*/
function parseType (string) {
  if (!string) return
  const matches = string.match(/({(.*?)})?([\s\S]*)/)
  if (matches) {
    return { type: matches[2], description: matches[3] }
  }
}

/**
block helper.. provides the data to render the @params tag
*/
function params (options) {
  if (this.params) {
    const list = this.params.map(function (param) {
      const nameSplit = param.name.split('.')
      let name = nameSplit[nameSplit.length - 1]
      if (nameSplit.length > 1) name = '.' + name
      if (param.variable) name = '...' + name
      if (param.optional) name = '[' + name + ']'
      return {
        indent: '    '.repeat(nameSplit.length - 1),
        name,
        type: param.type,
        optional: param.optional,
        defaultvalue: param.defaultvalue,
        description: param.description
      }
    })
    return options.fn(list)
  }
}

function examples (options) {
  if (this.examples) {
    return this.examples.reduce(function (prev, example) {
      const lines = example.split(/\r\n|\r|\n/)
      let exampleLangSubtag

      /* Process @lang */
      const exampleLangOptions = ddata.option('example-lang', options)
      let matches = lines[0].match(/@lang\s+(\w+)\s*/)
      if (matches) {
        exampleLangSubtag = matches[1]
        lines[0] = lines[0].replace(matches[0], '')
        if (lines[0].length === 0) {
          lines.splice(0, 1)
        }
      }
      const exampleLang = exampleLangSubtag || exampleLangOptions

      /* Process <caption> and update example */
      matches = lines[0].match(/\s*<caption>(.*?)<\/caption>\s*/)
      let caption
      if (matches) {
        caption = matches[1]
        example = lines.slice(1).join('\n')
      } else if (exampleLangSubtag) {
        example = lines.join('\n')
      }

      if (!(/```/.test(example) || exampleLang === 'off')) {
        example = util.format('```%s%s```', exampleLang ? exampleLang + '\n' : '', example ? example + '\n' : '')
      }

      return prev + options.fn({ caption, example })
    }, '')
  }
}

function setLevel (identifier, level) {
  identifier.level = level
}

function stringRepeat (string, times) {
  return string.repeat(times)
}

function regexpTest (value, regex) {
  const re = new RegExp(regex)
  return re.test(value)
}

function equal (arg1, arg2) {
  return arg1 === arg2
}
