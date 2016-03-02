[![view on npm](http://img.shields.io/npm/v/dmd.svg)](https://www.npmjs.org/package/dmd)
[![npm module downloads](http://img.shields.io/npm/dt/dmd.svg)](https://www.npmjs.org/package/dmd)
[![Build Status](https://travis-ci.org/jsdoc2md/dmd.svg?branch=master)](https://travis-ci.org/jsdoc2md/dmd)
[![Dependency Status](https://david-dm.org/jsdoc2md/dmd.svg)](https://david-dm.org/jsdoc2md/dmd)

# dmd
dmd is a template for create markdown API documentation from jsdoc-parse data. WIP.

  

* dmd
    * Dmd() ⇐ external:DocletTemplate ⏏
        * .getSubclassMap()
        * .typeList(names)
        * .paramSig() ⇒ `string`
        * .getSignature([options], [options])
        * .scope()
        * .preHeading()
        * .heading()
        * ~DocletTemplate()


### Dmd() ⇐ external:DocletTemplate ⏏
A DocletTemplate for generating markdown documentation for a doclet.

__Kind__: Exported class


#### Dmd.getSubclassMap()
if tweaks are to be made per kind, add a ref to the sub-class here.

__Kind__: static method of module:dmd--Dmd  
__Params__


#### dmd.typeList(names)
__Kind__: instance method of module:dmd--Dmd  
__Params__

- names `Array.<string>` - list of type names


#### dmd.paramSig() ⇒ `string`
Returns the method signature, e.g. `(options, [onComplete])`

__Kind__: instance method of module:dmd--Dmd  
__Params__


#### dmd.getSignature([options], [options])
A signature and its composition:

new exampleModule.ExampleClass(one, two) <= `EventEmitter` ℗

- `new` - `sigPrefix()`
- `exampleModule` - `data.parentName()`
- `.` - `data.accessSymbol()`
- `ExampleClass` - `data.getName`
- `(one, two)` - `sigMethodSig()`
- `<=` - `sigSymbol()`
- `EventEmitter` - sigTypes()
- `℗` - sigSuffix()

__Kind__: instance method of module:dmd--Dmd  
__Params__

- [options] `object`
- [options] `object`

__Example__
```js
new ExampleClass(one, two) <= EventEmitter ℗
```


#### dmd.scope()
__Kind__: instance method of module:dmd--Dmd  
__Params__



__Example__
```js
__Kind__: static method of FurQ
```


#### dmd.preHeading()
__Kind__: instance method of module:dmd--Dmd  
__Params__



__Category__: hook-point


#### dmd.heading()
the doclet heading.

__Kind__: instance method of module:dmd--Dmd  
__Params__



__Example__
```js
# new ExampleClass(one, two) <= EventEmitter
```


#### Dmd~DocletTemplate()
__Kind__: inner external of module:dmd--Dmd




* * *

&copy; 2015-16 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
