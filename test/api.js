'use strict'
var test = require('tape')
var dmd = require('../')

test('dmd() on readable returns correct data', function (t) {
  var result = dmd([{
    "id": "someclass",
    "longname": "someclass",
    "name": "someclass",
    "kind": "class",
    "description": "is a class"
  }])
  t.ok(/is a class/.test(result))
  t.end()
})
