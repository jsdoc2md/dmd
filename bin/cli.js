#!/usr/bin/env node
'use strict'
var commandLineArgs = require('command-line-args')
var ansi = require('ansi-escape-sequences')
var dmd = require('../')
var fs = require('fs')

var cli = commandLineArgs(dmd.cliOptions.concat([
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'verbose', alias: 'v', type: Boolean }
]))

var usage = cli.getUsage({
  title: 'dmd',
  description: 'Generate markdown API documentation',
  footer: 'Project home: [underline]{https://github.com/jsdoc2md/dmd}',
  synopsis: [
    '$ cat jsdoc-parse-output.json | dmd <options>',
    '$ dmd --help'
  ]
})

try {
  var config = cli.parse()
} catch (err) {
  halt(err)
}

if (config.help) {
  console.log(usage)
  process.exit(0)
}

if (config.template) {
  config.template = fs.readFileSync(config.template, 'utf8')
}

var dmdStream = dmd(config)
dmdStream.on('error', halt)

process.stdin.pipe(dmdStream).pipe(process.stdout)

function halt (err) {
  if (err.code === 'EPIPE') process.exit(0) /* no big deal */

  if (config) {
    if (config.verbose) {
      logError('Error: ' + err.message)
      logError(err.stack || err)
    } else {
      logError('Error: ' + err.message)
      logError('(run dmd with --verbose for a stack trace)')
    }
  } else {
    logError(err.stack)
  }
  console.error(usage)
  process.exit(1)
}

function logError (msg) {
  console.error(ansi.format(msg, 'red'))
}
