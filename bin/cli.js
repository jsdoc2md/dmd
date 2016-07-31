#!/usr/bin/env node
'use strict'
var tool = require('command-line-tool')
var dmd = require('../')
var fs = require('fs')
var cliData = require('../lib/cli-data')

var optionDefinitions = cliData.definitions.concat([
  { name: 'help', alias: 'h', type: Boolean }
])

try {
  var cli = tool.getCli(optionDefinitions, cliData.usageSections)
  var options = cli.options
} catch (err) {
  tool.halt(err)
}

if (options.help) {
  tool.stop(cli.usage)
}

if (options.template) {
  options.template = fs.readFileSync(options.template, 'utf8')
}

var collectJson = require('collect-json')
process.stdin
  .pipe(collectJson(function (data) {
    try {
      return dmd(data, options)
    } catch (err) {
      tool.halt(err, { stack: true })
    }
  }))
  .pipe(process.stdout)
