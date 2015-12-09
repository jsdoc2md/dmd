'use strict'
var test = require('tape')
var fs = require('fs')
var path = require('path')
var spawn = require('child_process').spawn

try {
  fs.mkdirSync('tmp')
} catch (err) {
  // dir exists
}

test('cli check', function (t) {
  t.plan(1)

  var inputFile = fs.openSync('test/fixture/everything.json', 'r')
  var outputFile = fs.openSync('tmp/class.md', 'w')

  var handle = spawn('node', [ path.join('bin', 'cli.js') ], {
    stdio: [ inputFile, outputFile, process.stderr ]
  })
  handle.on('close', function () {
    var md = fs.readFileSync('tmp/class.md', 'utf8')
    if (md) t.ok(/exports a class/.test(md.toString()))
  })
})

test('partials')
test('headers')
test('plugins')
