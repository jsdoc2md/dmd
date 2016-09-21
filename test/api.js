'use strict'
var TestRunner = require('test-runner')
var dmd = require('../')
var a = require('core-assert')

var runner = new TestRunner()

runner.test('dmd() on readable returns correct data', function () {
  var result = dmd([{
    "id": "someclass",
    "longname": "someclass",
    "name": "someclass",
    "kind": "class",
    "description": "is a class"
  }])
  a.ok(/is a class/.test(result))
})
