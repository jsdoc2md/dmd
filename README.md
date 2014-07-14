[![view on npm](http://img.shields.io/npm/v/documenter-md.svg)](https://www.npmjs.org/package/documenter-md)
[![npm module downloads per month](http://img.shields.io/npm/dm/documenter-md.svg)](https://www.npmjs.org/package/documenter-md)
[![Build Status](https://travis-ci.org/75lb/documenter-md.svg?branch=master)](https://travis-ci.org/75lb/documenter-md)
[![Dependency Status](https://david-dm.org/75lb/documenter-md.svg)](https://david-dm.org/75lb/documenter-md)

#documenter-md
A transform stream taking javascript doclet data in (produced by jsdoc-parse or any source), outputing markdown documentation. Essentially, the library is collection of Handlebars templates and helpers, any of which can be overridden to taste. The `main` template is rendered using the data received at stdin. 

##Synopsis
```
$ cat examples/doclet.json
[
    {
        "name": "fatUse",
        "kind": "member",
        "description": "I am a global variable",
        "scope": "global"
    }
]

$ cat examples/doclet.json | dmd
#Global

##fatUse
I am a global variable
```

##Usage
###As a library
Install:
```sh
$ npm install documenter-md --save
```
Example:
```js
var documenterMd = require("documenter-md");

process.stdin.pipe(documenterMd()).pipe(process.stdout);
```

###At the command line
Install the `dmd` tool globally: 
```sh
$ npm install -g documenter-md
```
Example:
```sh
$ cat examples/doclet.json | dmd
```

##Templating
Running `jsdoc2md` without a `--template` generates documentation with the default template, which looks like this:

    {{>index}}
    {{>modules}}
    {{>globals}}
    {{>others}}
    
###{{>index}}
Only output if there are at least two modules defined. 

    #Index
    
    * Modules
      * {{>module-name}}
        * {{>member-names}}
    * Global
      * {{>global-name}}

###{{>modules}}
Outputs one {{>module}} partial per module.

###{{>globals}}

    #Global
    {{>global-index}}
    {{>members}}

###{{>members}}

    {{#each (members in=data)}}{{>member}}{{/each~}}
    {{#each (functions in=data)}}{{>function}}{{/each~}}
    {{#each (namespaces in=data)}}{{>namespace}}{{/each~}}
    {{#each (constants in=data)}}{{>constant}}{{/each~}}
    {{#each (typedefs in=data)}}{{>typedef}}{{/each~}}
    {{#each (events in=data)}}{{>event}}{{/each~}}
    {{#each (classes in=data)}}{{>class}}{{/each~}}

###{{>module}}

    {{>head}}
    {{>body}}
    {{>module-exported}}  (either a class with index, function or object with index)

###{{>head}}

    {{>anchor}}
    {{>heading}}{{>name}}
    
###{{>body}}

    {{>fields}}
    
###{{>fields}}

    {{>description~}}
    {{>params~}}
    {{>deprecated~}}
    {{>augments~}}
    {{>memberof~}}
    {{>type~}}
    {{>default~}}
    {{>returns~}}
    {{>access~}}
    {{>enum~}}
    {{>readOnly~}}
    {{>since~}}
    {{>version~}}
    {{>authors~}}
    {{>license~}}
    {{>copyright~}}
    {{>examples~}}

###{{>module-exported}}

    {{>class}}, {{>function}} or {{>module-index}} and {{>members}}

###{{>class}}

    {{>head}}
    {{>body~}}
    {{>class-members-index~}}
    {{>members-grouped~}}