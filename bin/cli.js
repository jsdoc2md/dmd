#!/usr/bin/env node
'use strict'

const context = {
  lang: 'en-GB',
}

const input = require('../data/handbrake-js')

const Doclets = require('../lib/doclets')
const doclets = new Doclets(input)

const fs = require('fs')
const templateString = fs.readFileSync('./template/main.md', 'utf8')

const result = eval('`' + templateString + '`')
console.log(result)
