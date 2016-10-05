var TestRunner = require('test-runner')
var ddata = require('../../helpers/ddata')
var a = require('core-assert')

var runner = new TestRunner()

function makeOptions (data) {
  return { data: { root: data }, hash: {} }
}

runner.test('_orphans', function () {
  var options = makeOptions([
    { id: '1', memberof: 'something' },
    { id: '2', memberof: 'something' },
    { id: '3', kind: 'external' },
    { id: '4' },
    { id: '5', memberof: 'something', kind: 'external' },
    { id: '6' },
    { id: '7', kind: 'external', description: 'clive' }
  ])
  var result = ddata._orphans(options)
  a.deepEqual(result, [
    { id: '4' },
    { id: '6' },
    { id: '7', kind: 'external', description: 'clive' }
  ])
})
