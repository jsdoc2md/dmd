'use strict'
var test = require('tape')
var helpers = require('../helpers/helpers')
var l = console.error

function makeOptions (done) {
  return { fn: function (context) {
      done(context)
  }}
}

test('multiple returns specified', function (t) {
  var identifier = { 'returns': [
      { 'type': { 'names': [ 'string' ] }, 'description': 'desc 1' },
      { 'type': { 'names': [ 'object', 'function' ] }, 'description': 'desc 2' }
  ]}

  var options = makeOptions(function (context) {
    t.deepEqual(context, { symbol: '⇒', types: ['string', 'object', 'function'] })
    t.end()
  })
  helpers.returnSig2.call(identifier, options)
})

test('no returns, one type', function (t) {
  var identifier = { 'type': { 'names': [ 'string' ] } }

  var options = makeOptions(function (context) {
    t.deepEqual(context, { symbol: ':', types: ['string'] })
    t.end()
  })
  helpers.returnSig2.call(identifier, options)
})

test('return with no type', function (t) {
  var identifier = {
    'returns': [ { 'description': 'A string representation of the argument.' } ]
  }
  var options = makeOptions(function (context) {
    t.deepEqual(context, { symbol: null, types: null })
    t.end()
  })
  helpers.returnSig2.call(identifier, options)
})
