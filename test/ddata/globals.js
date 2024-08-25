const ddata = require('../../helpers/ddata')
const a = require('assert').strict

const [test, only, skip] = [new Map(), new Map(), new Map()]

function makeOptions (data) {
  return { data: { root: data }, hash: {} }
}

test.set('_globals', function () {
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

module.exports = { test, only, skip }
