const ddata = require('../../helpers/ddata')
const a = require('assert').strict

function makeOptions (data) {
  return { data: { root: data }, hash: {} }
}

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('descendants', function () {
  let options = makeOptions([
    { id: 'one' }, { id: 'two', memberof: 'one' }, { id: 'three', memberof: 'two' }, { id: 'four' }
  ])
  options.hash.min = 0

  a.deepEqual(ddata.descendants.call({ id: 'one' }, options), [
    { id: 'two', memberof: 'one' }, { id: 'three', memberof: 'two' }
  ])

  options = makeOptions([
    { id: 'one' }, { id: 'two', memberof: 'one' }, { id: 'three', memberof: 'two' }, { id: 'four' }
  ])
  options.hash.min = 0

  a.deepEqual(ddata.descendants.call({ id: 'two' }, options), [
    { id: 'three', memberof: 'two' }
  ])

  options = makeOptions([
    { id: 'one' }, { id: 'two', memberof: 'one' }, { id: 'three', memberof: 'two' }, { id: 'four' }
  ])
  options.hash.min = 0

  a.deepEqual(ddata.descendants.call({ id: 'four' }, options), [])
})

module.exports = { test, only, skip }
