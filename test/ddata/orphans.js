const ddata = require('../../helpers/ddata')
const a = require('assert').strict

function makeOptions (data) {
  return { data: { root: data }, hash: {} }
}

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('_orphans', function () {
  const options = makeOptions([
    { id: '1', memberof: 'something' },
    { id: '2', memberof: 'something' },
    { id: '3', kind: 'external' },
    { id: '4' },
    { id: '5', memberof: 'something', kind: 'external' },
    { id: '6' },
    { id: '7', kind: 'external', description: 'clive' }
  ])
  const result = ddata._orphans(options)
  a.deepEqual(result, [
    { id: '4' },
    { id: '6' },
    { id: '7', kind: 'external', description: 'clive' }
  ])
})

module.exports = { test, only, skip }
