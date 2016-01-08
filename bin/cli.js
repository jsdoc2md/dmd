#!/usr/bin/env node
'use strict'

const context = {
  lang: 'en-GB',
}

const input = require('../data/handbrake-js')

const Doclets = require('../lib/doclets')
const doclets = new Doclets(input)

const fs = require('fs')
const templateString = fs.readFileSync('./output-template/simple.md', 'utf8')

/* de-couple so templating method is passed in */
const result = eval('`' + templateString + '`')
console.log(result)
