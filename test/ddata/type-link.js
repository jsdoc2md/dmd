const Tom = require('test-runner').Tom
const ddata = require('../../helpers/ddata')
const a = require('assert')

const tom = module.exports = new Tom('type-link')

/* construct a mock handlebars helper options object */
function makeOptions (data) {
  return { data: { root: data }, hash: {}, fn: function (context) {
    return context
  }}
}

tom.test('Array.<module:Something>', function () {
  const input = [
    {
      'id': 'module:cjs/human--Human',
      'longname': 'module:cjs/human',
      'name': 'Human',
      'kind': 'class'
    }
  ]

  const expected = { name: 'Array.<Human>', url: '#module_cjs/human--Human' }
  a.deepEqual(ddata._link('Array.<module:cjs/human>', makeOptions(input)), expected)
})

tom.test('external:something', function () {
  const input = [
    {
      'id': 'external:String',
      'name': 'String',
      'kind': 'external',
      'description': 'The built in string object.',
      'see': [
        '{@link https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String String}'
      ]
    }
  ]

  const expected = { name: 'String', url: '#external_String' }
  a.deepEqual(ddata._link('external:String', makeOptions(input)), expected)
})

tom.test('external:something with no description', function () {
  const input = [
    {
      'id': 'external:String',
      'name': 'String',
      'kind': 'external',
      'see': [
        '{@link https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String String}'
      ]
    }
  ]

  const expected = { name: 'String', url: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String' }
  a.deepEqual(ddata._link('external:String', makeOptions(input)), expected)
})
