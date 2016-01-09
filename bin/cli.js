#!/usr/bin/env node
'use strict'

const markdown = require('../template/markdown')
const terminal = require('../template/terminal')
const markdownParamList = require('../template/markdown-param-list')

// let template = markdownParamList
// let template = terminal
let template = markdown

const doclets = require('../data/handbrake-js')

const DocletCollectionBuilder = require('../lib/doclets')
const docletCollection = new DocletCollectionBuilder({
  doclets: doclets,
  templatePackage: template
})

const fs = require('fs')
const templateString = fs.readFileSync('./output-template/simple.md', 'utf8')

/* de-couple so templating method is passed in */
const result = eval('`' + templateString + '`')
console.log(result)
