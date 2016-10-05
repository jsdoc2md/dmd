var TestRunner = require('test-runner')
var ddata = require('../../helpers/ddata')
var a = require('core-assert')

var runner = new TestRunner()

function makeOptions (data) {
  return { data: { root: data }, hash: {} }
}

runner.test('descendants', function () {
  var options = makeOptions([
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
