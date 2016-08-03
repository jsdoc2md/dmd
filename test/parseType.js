'use strict'
var test = require('test-runner')
var helpers = require('../helpers/helpers')
var a = require('core-assert')

test('no type, single-line description', function () {
  var input = 'description'
  var result = helpers.parseType(input)
  a.deepEqual(result, { type: undefined, description: 'description' })
})

test('no type, multi-line description', function () {
  var input = '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  var result = helpers.parseType(input)
  // console.log(result)
  a.deepEqual(result, {
    type: undefined,
    description: '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})

test('type, single-line description', function () {
  var input = '{string} description'
  var result = helpers.parseType(input)
  a.deepEqual(result, { type: 'string', description: ' description' })
})

test('type, multi-line description', function () {
  var input = '{boolean} 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  var result = helpers.parseType(input)
  // console.log(result)
  a.deepEqual(result, {
    type: 'boolean',
    description: ' 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})

test('type, newline, multi-line description', function () {
  var input = '{boolean} \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  var result = helpers.parseType(input)
  // console.log(result)
  a.deepEqual(result, {
    type: 'boolean',
    description: ' \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})
