'use strict'
var test = require('tape')
var helpers = require('../helpers/helpers')
var a = require('array-tools')

function makeOptions (data) {
  return { data: { root: data }, hash: {} }
}

test('no type, single-line description', function (t) {
  var input = 'description'
  var result = helpers.parseType(input)
  t.deepEqual(result, { type: undefined, description: 'description' })
  t.end()
})

test('no type, multi-line description', function (t) {
  var input = '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  var result = helpers.parseType(input)
  t.deepEqual(result, {
    type: undefined,
    description: '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
  t.end()
})

test('type, single-line description', function (t) {
  var input = '{string} description'
  var result = helpers.parseType(input)
  t.deepEqual(result, { type: 'string', description: ' description' })
  t.end()
})

test('type, multi-line description', function (t) {
  var input = '{boolean} 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  var result = helpers.parseType(input)
  t.deepEqual(result, {
    type: 'boolean',
    description: ' 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
  t.end()
})

test('type, newline, multi-line description', function (t) {
  var input = '{boolean} \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  var result = helpers.parseType(input)
  t.deepEqual(result, {
    type: 'boolean',
    description: ' \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
  t.end()
})
