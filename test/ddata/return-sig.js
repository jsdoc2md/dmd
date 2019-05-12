const Tom = require('test-runner').Tom
var ddata = require('../../helpers/ddata')
var a = require('assert')

const tom = module.exports = new Tom('return-sig')

function makeOptions (done) {
  return { fn: function (context) {
    done(context)
  }}
}

tom.test('multiple returns specified', function () {
  var identifier = { 'returns': [
      { 'type': { 'names': [ 'string' ] }, 'description': 'desc 1' },
      { 'type': { 'names': [ 'object', 'function' ] }, 'description': 'desc 2' }
  ]}

  var options = makeOptions(function (context) {
    a.deepEqual(context, { symbol: '⇒', types: ['string', 'object', 'function'] })
  })
  ddata.returnSig2.call(identifier, options)
})

tom.test('no returns, one type', function () {
  var identifier = { 'type': { 'names': [ 'string' ] } }

  var options = makeOptions(function (context) {
    a.deepEqual(context, { symbol: ':', types: ['string'] })
  })
  ddata.returnSig2.call(identifier, options)
})

tom.test('return with no type', function () {
  var identifier = {
    'returns': [ { 'description': 'A string representation of the argument.' } ]
  }
  var options = makeOptions(function (context) {
    a.deepEqual(context, { symbol: null, types: null })
  })
  ddata.returnSig2.call(identifier, options)
})
