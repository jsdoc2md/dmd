#!/usr/bin/env node
'use strict'
const Identifier = require('../template/identifier')

const context = {
  lang: 'en-GB',
}

const catalogEnGB = {}

const input = [
  {
    kind: 'module',
    id: 'module_handbrake-js',
    title: 'handbrake-js',
    sig: {
      name: 'handbrake-js'
    },
    description: 'Handbrake for node.js.',
    example: '```js\nvar hbjs = require("handbrake-js")\n```'
  },
  {
    kind: 'function',
    id: 'module_handbrake-js.spawn',
    title: 'hbjs.spawn(options) ⇒ <code>[Handbrake](#module_handbrake-js..Handbrake)</code>',
    sig: {
      name: 'hbjs.spawn(options)',
      symbol: '⇒',
      type: 'Handbrake',
      link: '#module_handbrake-js..Handbrake'
    },
    description: 'Spawns a HandbrakeCLI process with the supplied [options](https://trac.handbrake.fr/wiki/CLIGuide#options), returning an instance of `Handbrake` on which you can listen for events.',
    example: '```js\nvar hbjs = require("handbrake-js")\n```',
    type: {
      name: 'static method',
      parent: {
        id: 'module_handbrake-js',
        name: 'handbrake-js'
      }
    },
    params: [
      {
        name: 'options',
        type: 'Object',
        description: '[Options](https://trac.handbrake.fr/wiki/CLIGuide#options) to pass directly to HandbrakeCLI'
      },
      {
        name: 'gets?',
        type: 'string',
        description: 'one two'
      }
    ],
    example: '```js\nvar hbjs = require("handbrake-js")\nhbjs.spawn(options)\n  .on("error",console.error)\n  .on("output", console.log)\n```'
  },
  {
    kind: 'class',
    id: 'module_handbrake-js..Handbrake',
    title: 'hbjs~Handbrake ⇐ <code>[EventEmitter](http://nodejs.org/api/events.html)</code>',
    sig: {
      name: 'hbjs~Handbrake',
      symbol: '⇐',
      type: 'EventEmitter',
      link: 'http://nodejs.org/api/events.html'
    },
    description: 'A handle on the HandbrakeCLI process. Emits events you can monitor to track progress. An instance of this class is returned by [spawn](#module_handbrake-js.spawn).',
    type: {
      name: 'inner class',
      parent: {
        id: 'module_handbrake-js',
        name: 'handbrake-js'
      }
    },
    extends: '<code>[EventEmitter](http://nodejs.org/api/events.html)</code>',
    emits: '<code>[start](#module_handbrake-js..Handbrake+event_start)</code>,\n<code>[begin](#module_handbrake-js..Handbrake+event_begin)</code>,\n<code>[progress](#module_handbrake-js..Handbrake+event_progress)</code>,\n<code>[output](#module_handbrake-js..Handbrake+event_output)</code>,\n<code>[error](#module_handbrake-js..Handbrake+event_error)</code>,\n<code>[end](#module_handbrake-js..Handbrake+event_end)</code>,\n<code>[complete](#module_handbrake-js..Handbrake+event_complete)</code>'
  },
  {
    kind: 'property',
    id: 'module_handbrake-js..Handbrake+output',
    title: 'handbrake.output : <code>string</code>',
    sig: {
      name: 'handbrake.output',
      symbol: ':',
      type: 'string'
    },
    description: 'A `string` containing all handbrakeCLI output',
    type: {
      name: 'instance property',
      parent: {
        id: 'module_handbrake-js..Handbrake',
        name: 'Handbrake'
      }
    }
  },
  {
    kind: '',
    id: '',
    title: '',
    sig: {
      name: ''
    },
    description: '',
    example: '',
    type: '',
    params: [
      {
        name: '',
        type: '',
        description: ''
      }
    ],
    example: ''
  }
]


input.forEach(i => {
  const identifier = new Identifier(i)
  console.log(identifier.render());
})
