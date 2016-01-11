#!/usr/bin/env node
'use strict'

const markdown = require('../template-dmd/markdown')
const terminal = require('../template-term/terminal')
const ParamListFormatList = require('../template-dmd/markdown-param-list')

// let template = terminal
let template = markdown

const dataTreeBuilder = require('../lib/builder-doclet-data')
const templateTreeBuilder = require('../lib/builder-doclet-template')

const doclets = require('../data/handbrake-js')
const docletTree = dataTreeBuilder(doclets)

const docs = templateTreeBuilder(docletTree, template, { extensions: ParamListFormatList })
console.log(docs.render())
return

const fs = require('fs')
const templateString = fs.readFileSync('./output-template/tree.md', 'utf8')

/* de-couple so templating method is passed in */
const result = eval('`' + templateString + '`')
console.log(result)
