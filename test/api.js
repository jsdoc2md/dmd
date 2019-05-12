const Tom = require('test-runner').Tom
const dmd = require('../')
const a = require('assert')

const tom = module.exports = new Tom('api')

const fixture = [{
  id: 'someclass',
  longname: 'someclass',
  name: 'someclass',
  kind: 'class',
  description: 'is a class'
}]

tom.test('dmd() returns correct data', function () {
  const result = dmd(fixture)
  a.ok(/is a class/.test(result))
})

tom.test('dmd() again to exercise the cache', function () {
  const result = dmd(fixture)
  a.ok(/is a class/.test(result))
})

tom.test('dmd({ noCache }) returns correct data', function () {
  const options = { noCache: true }
  const result = dmd(fixture, options)
  a.ok(/is a class/.test(result))
})

tom.test('dmd.async() returns correct data', function () {
  return dmd.async(fixture).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})

tom.test('dmd.async() again to exercise the cache', function () {
  return dmd.async(fixture).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})

tom.test('dmd.async({ noCache }) returns correct data', function () {
  const options = { noCache: true }
  return dmd.async(fixture, options).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})
