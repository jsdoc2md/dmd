const Tom = require('test-runner').Tom
const helpers = require('../helpers/helpers')
const a = require('assert')

const tom = module.exports = new Tom('parseType')

tom.test('no type, single-line description', function () {
  const input = 'description'
  const result = helpers.parseType(input)
  a.deepEqual(result, { type: undefined, description: 'description' })
})

tom.test('no type, multi-line description', function () {
  const input = '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  const result = helpers.parseType(input)
  a.deepEqual(result, {
    type: undefined,
    description: '1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})

tom.test('type, single-line description', function () {
  const input = '{string} description'
  const result = helpers.parseType(input)
  a.deepEqual(result, { type: 'string', description: ' description' })
})

tom.test('type, multi-line description', function () {
  const input = '{boolean} 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  const result = helpers.parseType(input)
  a.deepEqual(result, {
    type: 'boolean',
    description: ' 1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})

tom.test('type, newline, multi-line description', function () {
  const input = '{boolean} \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  const result = helpers.parseType(input)
  a.deepEqual(result, {
    type: 'boolean',
    description: ' \n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield'
  })
})
