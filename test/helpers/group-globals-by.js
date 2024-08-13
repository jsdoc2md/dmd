const Tom = require('test-runner').Tom
console.error('mocking...')
const mock = require('mock-require')
mock('handlebars', {
  helpers: {
    each: function (arg) { return arg }
  }
})

const helpers = mock.reRequire('../../helpers/helpers')
const DmdOptions = require('../../lib/dmd-options')
const assert = require('assert').strict

const tom = module.exports = new Tom('groupGlobalsBy')

function makeOptions (data) {
  return { 
    data: { root: data },
    hash: {},
    inverse: function() {},
    fn: function() {}
  }
}

tom.test('sorts globals according to sort fields', function () {
  const options = makeOptions([
    { id: '1', category: 'foo', scope: 'global' },
    { id: '2', category: 'foo', scope: 'global' },
    { id: '3', category: 'bar', scope: 'global' },
    { id: '4', category: 'bar', scope: 'global' },
    { id: '5', scope: 'global' },
    { id: 'not global' }
  ])
  const dmdOptions = new DmdOptions(options)
  const groupByFields = dmdOptions['group-by']
  const result = helpers.groupGlobalsBy(groupByFields, options)
  assert.deepEqual(result, [
    { _title: 'foo', level: 0 },
    { id: '1', category: 'foo', scope: 'global', level: 1 },
    { id: '2', category: 'foo', scope: 'global', level: 1 },
    { _title: 'bar', level: 0 },
    { id: '3', category: 'bar', scope: 'global', level: 1 },
    { id: '4', category: 'bar', scope: 'global', level: 1 },
    { id: '5', level: 0, scope: 'global' }
  ])
})

mock.stopAll()