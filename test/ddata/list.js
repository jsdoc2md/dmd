const Tom = require('test-runner').Tom
const ddata = require('../../helpers/ddata')
const a = require('assert')

const tom = module.exports = new Tom('list')

function makeOptions (data) {
  return { data: { root: data }, hash: {} }
}

tom.test('descendants', function () {
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
