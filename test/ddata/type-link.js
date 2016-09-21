'use strict'
var TestRunner = require('test-runner')
var ddata = require('../')

/* construct a mock handlebars helper options object */
function makeOptions (data) {
  return { data: { root: data }, hash: {}, fn: function (context) {
    return context
  }}
}

runner.test('Array.<module:Something>', function () {
  var input = [
    {
      'id': 'module:cjs/human--Human',
      'longname': 'module:cjs/human',
      'name': 'Human',
      'kind': 'class'
    }
  ]

  var expected = { name: 'Array.<Human>', url: '#module_cjs/human--Human' }
  a.deepEqual(ddata._link('Array.<module:cjs/human>', makeOptions(input)), expected)
  t.end()
})

runner.test('external:something', function () {
  var input = [
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

  var expected = { name: 'String', url: '#external_String' }
  a.deepEqual(ddata._link('external:String', makeOptions(input)), expected)
  t.end()
})

runner.test('external:something with no description', function () {
  var input = [
    {
      'id': 'external:String',
      'name': 'String',
      'kind': 'external',
      'see': [
        '{@link https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String String}'
      ]
    }
  ]

  var expected = { name: 'String', url: 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String' }
  a.deepEqual(ddata._link('external:String', makeOptions(input)), expected)
  t.end()
})
