'use strict'
const TestRunner = require('test-runner')
const dmd = require('../')
const a = require('assert')

const runner = new TestRunner()

const fixture = [{
  id: 'someclass',
  longname: 'someclass',
  name: 'someclass',
  kind: 'class',
  description: 'is a class'
}]

runner.test('dmd() returns correct data', function () {
  const result = dmd(fixture)
  a.ok(/is a class/.test(result))
})

runner.test('dmd({ noCache }) returns correct data', function () {
  const options = { noCache: true }
  const result = dmd(fixture, options)
  a.ok(/is a class/.test(result))
})

runner.test('dmd.async() returns correct data', function () {
  return dmd.async(fixture).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})

runner.test('dmd.async({ noCache }) returns correct data', function () {
  const options = { noCache: true }
  return dmd.async(fixture, options).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})
