[![view on npm](http://img.shields.io/npm/v/dmd.svg)](https://www.npmjs.org/package/dmd)
[![npm module downloads per month](http://img.shields.io/npm/dm/dmd.svg)](https://www.npmjs.org/package/dmd)
[![Build Status](https://travis-ci.org/75lb/dmd.svg?branch=master)](https://travis-ci.org/75lb/dmd)
[![Dependency Status](https://david-dm.org/75lb/dmd.svg)](https://david-dm.org/75lb/dmd)

# dmd
dmd (document with markdown) is a module containing [handlebars](http://handlebarsjs.com) partials and helpers designed to transform [jsdoc-parse](https://github.com/75lb/jsdoc-parse) data into markdown API documentation. It exposes a <code>[single function](#module_dmd)</code> which requires data and a template. See [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown) for example output.

## Synopsis
With this input file containing [jsdoc-parse](http://handlebarsjs.com) output:
```json
[
    {
        "id": "fatUse",
        "name": "fatUse",
        "kind": "member",
        "description": "I am a global variable",
        "scope": "global"
    }
]
```
this command :
```
$ cat examples/input/doclet.json | dmd
```
produces this output: 
```
<a name="fatUse"></a>
## fatUse
I am a global variable

**Kind**: global variable
```

## Templates
The default template simply renders the [main](https://github.com/75lb/dmd/blob/master/partials/main.hbs) partial:
```hbs
{{>main}}
```

This partial outputs all documentation and an index (if there are enough items). If you supply your own template, you can customise the output:
```hbs
# A Module
This is the readme for a module. 

## Install
Install it using the power of thought. 

# API Documentation
{{>main}}
```

## Usage
### As a library
Install:
```sh
$ npm install dmd --save
```
Example:
```js
var dmd = require("dmd");

process.stdin.pipe(dmd()).pipe(process.stdout);
```

### At the command line
Install the `dmd` tool globally: 
```sh
$ npm install -g dmd
```
Example:
```sh
$ cat examples/doclet.json | dmd
```

## Customising 
You can customise the generated documentation to taste by overriding the default, or adding new partials or helpers.

For example, let's say you wanted a datestamp at the bottom of your generated docs:

```
**documentation generated on Sun, 01 Mar 2015 09:30:17 GMT**
```

You need to do two things:

1. Write a helper method to return the date in your preferred format
2. Override the [main](https://github.com/75lb/dmd/blob/master/partials/main.hbs) partial so it includes your new footer

### Write a new helper
A helper file is just a plain commonJS module. Each method exposed on the module will be available to your templates. So, our new helper file:

```js
exports.generatedDate = function(){
    return new Date().toUTCString();
}
```

[Read more about helpers in the handlebars documentation](http://handlebarsjs.com).

### Write a new [main](https://github.com/75lb/dmd/blob/master/partials/main.hbs) partial
Create a duplicate of the [main](https://github.com/75lb/dmd/blob/master/partials/main.hbs) partial containing your new footer:

```hbs
<a name="module_dmd"></a>
## dmd
<a name="exp_module_dmd--dmd"></a>
### dmd([options]) ⇒ <code>[TransformStream](http://nodejs.org/api/stream.html#stream_class_stream_transform)</code> ⏏
Transforms doclet data into markdown documentation. Returns a transform stream - pipe doclet data in to receive rendered markdown out.

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | The render options |
| [options.template] |  | <code>&quot;\{\{&gt;main\}\}&quot;</code> | {string} - A handlebars template to insert your documentation into. |
| [options.heading-depth] | <code>number</code> | <code>2</code> | the heading depth to begin the docs from (e.g. `2` starts from a markdown heading of `"##"`). |
| [options.example-lang] | <code>string</code> |  | for syntax highlighting on github |
| [options.partial] | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | overrides |
| [options.helper] | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | overrides |
| [options.plugin] | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | packages containing overrides |

**documentation generated on **
```

### Use
```
$ cat your-parsed-docs.json | dmd --partial main-override.hbs --helper generatedDate.js
```


### Plugins
* [dmd-examples-highlight](https://github.com/75lb/dmd-examples-highlight)
    
# API Reference
<a name="exp_module_dmd--dmd"></a>
### dmd([options]) ⇒ <code>[TransformStream](http://nodejs.org/api/stream.html#stream_class_stream_transform)</code> ⏏
Transforms doclet data into markdown documentation. Returns a transform stream - pipe doclet data in to receive rendered markdown out.

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | The render options |
| [options.template] |  | <code>&quot;\{\{&gt;main\}\}&quot;</code> | {string} - A handlebars template to insert your documentation into. |
| [options.heading-depth] | <code>number</code> | <code>2</code> | the heading depth to begin the docs from (e.g. `2` starts from a markdown heading of `"##"`). |
| [options.example-lang] | <code>string</code> |  | for syntax highlighting on github |
| [options.partial] | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | overrides |
| [options.helper] | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | overrides |
| [options.plugin] | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | packages containing overrides |


* * *

&copy; 2015 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown).
