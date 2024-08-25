const helpers = require('../helpers/helpers')
const a = require('assert').strict

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('no type, single-line description', function () {
  const input = 'description'
  const result = helpers.parseType(input)
  a.deepEqual(result, { type: undefined, description: 'description' })
})

test.set('no type, multi-line description', function () {
  const input = '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  const result = helpers.parseType(input)
  a.deepEqual(result, {
    type: undefined,
    description: '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})

test.set('type, single-line description', function () {
  const input = '{string} description'
  const result = helpers.parseType(input)
  a.deepEqual(result, { type: 'string', description: ' description' })
})

test.set('type, multi-line description', function () {
  const input = '{boolean} 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  const result = helpers.parseType(input)
  a.deepEqual(result, {
    type: 'boolean',
    description: ' 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})

test.set('type, newline, multi-line description', function () {
  const input = '{boolean} \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  const result = helpers.parseType(input)
  a.deepEqual(result, {
    type: 'boolean',
    description: ' \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})

module.exports = { test, only, skip }
