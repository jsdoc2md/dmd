const Tom = require('test-runner').Tom
const ddata = require('../../helpers/ddata')
const a = require('assert')

const tom = module.exports = new Tom('globals')

function makeOptions (data) {
  return { data: { root: data }, hash: {} }
}

tom.test('_globals', function () {
  const options = makeOptions([
    { id: '1', scope: 'global' },
    { id: '2', scope: 'global', kind: 'function' },
    { id: '3', scope: 'global', kind: 'external', description: 'clive' },
    { id: '4' },
    { id: '5', scope: 'global', kind: 'member' },
    { id: '6' },
    { id: '7', scope: 'global', kind: 'function' }
  ])
  const result = ddata._globals(options)
  a.deepEqual(result, [
    { id: '1', scope: 'global' },
    { id: '2', scope: 'global', kind: 'function' },
    { id: '3', scope: 'global', kind: 'external', description: 'clive' },
    { id: '5', scope: 'global', kind: 'member' },
    { id: '7', scope: 'global', kind: 'function' }
  ])
})
