'use strict'
const c = require('template-clean')

module.exports = function (SuperClass) {
  return class ParamListFormatList extends SuperClass {
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
              indent: '    '.repeat(nameSplit.length - 1),
              name: name,
              type: p.type && ' ' + this.typeList(p.type.names),
              defaultvalue: p.defaultvalue ? c` ${getDefaultValue(p.defaultvalue, true, p.type && p.type.names)}` : '',
              desc: p.description ? c` - ${p.description}` : ''
            }
          })
          .map(p => c`${p.indent}- ${p.name}${p.type}${p.defaultvalue}${p.desc}`)
          .join('\n')

        return c`__Params__\n\n${paramList}\n\n`
      }
    }
  }
}

function getDefaultValue (defaultvalue, equals, typeNames) {
  typeNames = typeNames || []
  if (defaultvalue) {
    const equalSymbol = equals ? ' = ' : ''
    const defaultVal = typeNames.length && typeNames[0].toLowerCase() === 'string'
      ? JSON.stringify(defaultvalue)
      : defaultvalue
    return c`<code>${equalSymbol}${defaultVal}</code>`
  }
}
