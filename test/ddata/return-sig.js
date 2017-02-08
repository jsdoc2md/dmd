'use strict'
var TestRunner = require('test-runner')
var ddata = require('../../helpers/ddata')
var a = require('assert')

var runner = new TestRunner()

function makeOptions (done) {
  return { fn: function (context) {
    done(context)
  }}
}

runner.test('multiple returns specified', function () {
  var identifier = { 'returns': [
      { 'type': { 'names': [ 'string' ] }, 'description': 'desc 1' },
      { 'type': { 'names': [ 'object', 'function' ] }, 'description': 'desc 2' }
  ]}

  var options = makeOptions(function (context) {
    a.deepEqual(context, { symbol: '⇒', types: ['string', 'object', 'function'] })
  })
  ddata.returnSig2.call(identifier, options)
})

runner.test('no returns, one type', function () {
  var identifier = { 'type': { 'names': [ 'string' ] } }

  var options = makeOptions(function (context) {
    a.deepEqual(context, { symbol: ':', types: ['string'] })
  })
  ddata.returnSig2.call(identifier, options)
})

runner.test('return with no type', function () {
  var identifier = {
    'returns': [ { 'description': 'A string representation of the argument.' } ]
  }
  var options = makeOptions(function (context) {
    a.deepEqual(context, { symbol: null, types: null })
  })
  ddata.returnSig2.call(identifier, options)
})
