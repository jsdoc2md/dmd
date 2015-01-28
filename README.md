[![view on npm](http://img.shields.io/npm/v/dmd.svg)](https://www.npmjs.org/package/dmd)
[![npm module downloads per month](http://img.shields.io/npm/dm/dmd.svg)](https://www.npmjs.org/package/dmd)
[![Build Status](https://travis-ci.org/75lb/dmd.svg?branch=master)](https://travis-ci.org/75lb/dmd)
[![Dependency Status](https://david-dm.org/75lb/dmd.svg)](https://david-dm.org/75lb/dmd)

***preview release, not much documentation.. new version and docs coming soon***

#dmd
dmd (document with markdown) is a collection of handlebars templates for generating markdown documentation from jsdoc-parse input data. It is the default template set used by jsdoc-to-markdown.

dmd  exposes a Transform stream class which, when fed [jsdoc-parse](https://github.com/75lb/jsdoc-parse) data, outputs documentation in markdown format. The data at input is fed into the main template and rendered by handlebars. 

##Customise
No doubt there is something about the default template you don't like, there normally is. Use these block helpers to do it yourself.

| Helper name  | Description |
| ------------ | ----------- |


##Default Template

###Partials

| Partial name  | Description |
| ------------- | ----------- |
| main.hbs | The template that is rendered, taking the doclet json as input. The jsdoc2md `--json` option will display that data. |
| main-index.hbs | The main index. Will only be display if at least 2 "parent" identifiers are documented. |



##Synopsis
`examples/input/doclet.json`:
```json
[
    {
        "name": "fatUse",
        "kind": "member",
        "description": "I am a global variable",
        "scope": "global"
    }
]
```
```
$ cat examples/input/doclet.json | dmd
#Global

##fatUse
I am a global variable
```

##Usage
###As a library
Install:
```sh
$ npm install dmd --save
```
Example:
```js
var dmd = require("dmd");

process.stdin.pipe(dmd()).pipe(process.stdout);
```

###At the command line
Install the `dmd` tool globally: 
```sh
$ npm install -g dmd
```
Example:
```sh
$ cat examples/doclet.json | dmd
```

##Plugins
* [dmd-examples-highlight](https://github.com/75lb/dmd-examples-highlight)
    
#API Reference
<a name="exp_module_dmd--dmd"></a>
###dmd(options) ⇒ <code>stream</code> ⏏
Transforms doclet data into markdown documentation

| Param | Type | Description |
| ----- | ---- | ----------- |
| options | <code>object</code> | The render options |
| \[options.template\] | <code>string</code> | A handlebars template to insert your documentation into. |
| \[options.heading-depth\] | <code>number</code> | the heading depth to begin the docs from (e.g. `2` starts from a markdown heading of `##`). Defaults to `2`. |
| \[options.partial\] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | overrides |
| \[options.helper\] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | overrides |
| \[options.plugin\] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | packages containing overrides |

**Returns**: <code>stream</code> - A transform stream - pipe doclet data in to receive rendered markdown.  
*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*

&copy; 2015 Lloyd Brookes <75pound@gmail.com>
