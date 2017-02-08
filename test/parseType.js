'use strict'
const TestRunner = require('test-runner')
const helpers = require('../helpers/helpers')
const a = require('assert')

const runner = new TestRunner()

runner.test('no type, single-line description', function () {
  const input = 'description'
  const result = helpers.parseType(input)
  a.deepEqual(result, { type: undefined, description: 'description' })
})

runner.test('no type, multi-line description', function () {
  const input = '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  const result = helpers.parseType(input)
  a.deepEqual(result, {
    type: undefined,
    description: '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})

runner.test('type, single-line description', function () {
  const input = '{string} description'
  const result = helpers.parseType(input)
  a.deepEqual(result, { type: 'string', description: ' description' })
})

runner.test('type, multi-line description', function () {
  const input = '{boolean} 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  const result = helpers.parseType(input)
  a.deepEqual(result, {
    type: 'boolean',
    description: ' 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})

runner.test('type, newline, multi-line description', function () {
  const input = '{boolean} \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  const result = helpers.parseType(input)
  a.deepEqual(result, {
    type: 'boolean',
    description: ' \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})
