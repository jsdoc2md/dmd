const Tom = require('test-runner').Tom
const ddata = require('../../helpers/ddata')
const a = require('assert')

const tom = module.exports = new Tom('linkTo')

function makeOptions (data) {
  return { data: { root: data }, hash: {}, fn: function (context) {
    return context
  }}
}

const options = makeOptions([
  { id: 'module:handbrake-js~Handbrake', longname: 'module:handbrake-js~Handbrake', 'name': 'Handbrake' },
  { id: 'module:cjs/class~innerProp', longname: 'module:cjs/class~innerProp', 'name': 'innerProp' }
])

tom.test('link', function () {
  const result = ddata.link('module:handbrake-js~Handbrake', options)
  a.deepStrictEqual(result, { name: 'Handbrake', url: '#module_handbrake-js..Handbrake' })
})

tom.test('link2', function () {
  const result = ddata.link('module:cjs/class~innerProp', options)
  a.deepStrictEqual(result, { name: 'innerProp', url: '#module_cjs/class..innerProp' })
})

tom.test('url', function () {
  const result = ddata.link('http://example.com', options)
  a.deepStrictEqual(result, { name: 'http://example.com', url: null })
})

tom.test('link3', function () {
  const result = ddata.link('clive', options)
  a.deepStrictEqual(result, { name: 'clive', url: null })
})
