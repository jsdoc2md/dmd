'use strict'
var TestRunner = require('test-runner')
var dmd = require('../')
var a = require('core-assert')

var runner = new TestRunner()

var fixture = [{
  id: "someclass",
  longname: "someclass",
  name: "someclass",
  kind: "class",
  description: "is a class"
}]

runner.test('dmd() returns correct data', function () {
  var result = dmd(fixture)
  a.ok(/is a class/.test(result))
})

runner.test('dmd({ noCache }) returns correct data', function () {
  var options = { noCache: true }
  var result = dmd(fixture, options)
  a.ok(/is a class/.test(result))
})

runner.test('dmd.async() returns correct data', function () {
  return dmd.async(fixture).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})

runner.test('dmd.async({ noCache }) returns correct data', function () {
  var options = { noCache: true }
  return dmd.async(fixture, options).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})
