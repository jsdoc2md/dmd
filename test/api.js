'use strict'
var test = require('test-runner')
var dmd = require('../')
var a = require('core-assert')

test('dmd() on readable returns correct data', function () {
  var result = dmd([{
    "id": "someclass",
    "longname": "someclass",
    "name": "someclass",
    "kind": "class",
    "description": "is a class"
  }])
  a.ok(/is a class/.test(result))
})
