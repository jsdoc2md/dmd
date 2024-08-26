const ddata = require('../../helpers/ddata')
const a = require('assert').strict

const [test, only, skip] = [new Map(), new Map(), new Map()]

function makeOptions (data) {
  return { data: { root: data }, hash: {} }
}

test.set('_children', function () {
  const parent = { id: 'something' }
  const options = makeOptions([
    { id: '1', memberof: 'something' },
    { id: '2', memberof: 'something' },
    { id: '3', kind: 'external' },
    { id: '4' },
    { id: '5', memberof: 'something', kind: 'external' },
    { id: '6', memberof: 'something', kind: 'external', description: 'clive' },
    { id: '7' }
  ])
  const result = ddata._children.call(parent, options)
  a.deepEqual(result, [
    { id: '1', memberof: 'something' },
    { id: '2', memberof: 'something' },
    { id: '6', memberof: 'something', kind: 'external', description: 'clive' }
  ])
})

module.exports = { test, only, skip }
