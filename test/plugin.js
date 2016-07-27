'use strict'
var test = require('tape')
var dmd = require('../')
var path = require('path')

var fixture = [{
  "id": "someclass",
  "longname": "someclass",
  "name": "someclass",
  "kind": "class",
  "description": "is a class"
}]

test('plugin', function (t) {
  var result = dmd(fixture, { plugin: 'dmd-plugin-example' })
  t.ok(/documentation generated on/.test(result))
  t.end()
})

test('plugin: absolute path', function (t) {
  var result = dmd(fixture, { plugin: path.resolve(__dirname, 'fixture', 'dmd-plugin-example', 'lib', 'dmd-plugin-example.js') })
  t.ok(/documentation generated on/.test(result))
  t.end()
})

test('plugin: none-existent path', function (t) {
  t.throws(function () {
    dmd(fixture, { plugin: 'forejfirweuhnvkljne' })
  })
  t.end()
})
