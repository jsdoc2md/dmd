'use strict'
var test = require('tape')
var dmd = require('../')
var path = require('path')

test('plugin', function (t) {
  t.plan(1)

  var dmdStream = dmd({ plugin: 'dmd-plugin-example' })
  dmdStream.on('readable', function () {
    var md = this.read()
    if (md) t.ok(/documentation generated on/.test(md.toString()))
  })
  dmdStream.end('[ { "id": "someclass", "longname": "someclass", "name": "someclass", "kind": "class", "description": "is a class" } ]')
})

test('plugin: absolute path', function (t) {
  t.plan(1)

  var dmdStream = dmd({
    plugin: path.resolve(__dirname, 'fixture', 'dmd-plugin-example', 'lib', 'dmd-plugin-example.js')
  })
  dmdStream.on('readable', function () {
    var md = this.read()
    if (md) t.ok(/documentation generated on/.test(md.toString()))
  })
  dmdStream.end('[ { "id": "someclass", "longname": "someclass", "name": "someclass", "kind": "class", "description": "is a class" } ]')
})

test('plugin: none-existent path', function (t) {
  t.plan(1)

  var dmdStream = dmd({ plugin: 'forejfirweuhnvkljne' })
  dmdStream.on('error', function () {
    t.pass('error thrown')
  })
  dmdStream.end('[ { "id": "someclass", "longname": "someclass", "name": "someclass", "kind": "class", "description": "is a class" } ]')

})
