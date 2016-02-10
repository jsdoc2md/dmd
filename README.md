[![view on npm](http://img.shields.io/npm/v/dmd.svg)](https://www.npmjs.org/package/dmd)
[![npm module downloads](http://img.shields.io/npm/dt/dmd.svg)](https://www.npmjs.org/package/dmd)
[![Build Status](https://travis-ci.org/jsdoc2md/dmd.svg?branch=master)](https://travis-ci.org/jsdoc2md/dmd)
[![Dependency Status](https://david-dm.org/jsdoc2md/dmd.svg)](https://david-dm.org/jsdoc2md/dmd)

# dmd
dmd is a template for create markdown API documentation from jsdoc-parse data. WIP.


<a name="module_dmd"></a>
## dmd
  

<a name="module_dmd..Dmd"></a>
### dmd~Dmd ⇐ modules:jsdoc-parse-template~doclet-template  
A DocletTemplate for generating markdown documentation for a doclet.

**Kind**: inner class of module:dmd  

* [~Dmd](#module_dmd..Dmd) ⇐ modules:jsdoc-parse-template~doclet-template  
    * [.anchor](#module_dmd..Dmd+anchor)  
    * [.heading](#module_dmd..Dmd+heading)  
    * [.signature([options], [options])](#module_dmd..Dmd+signature)  
    * [.sigMethodSig](#module_dmd..Dmd+sigMethodSig) ⇒ [`string`](#string)  
    * [.typeList(names)](#module_dmd..Dmd.typeList)  


<a name="module_dmd..Dmd+anchor"></a>
#### dmd.anchor  
An anchor member-index items can link to

**Kind**: instance method of module:dmd~Dmd  
**Example**
```js
<a name="#ExampleClass"></a>
```

<a name="module_dmd..Dmd+heading"></a>
#### dmd.heading  
the doclet heading.

**Kind**: instance method of module:dmd~Dmd  
**Example**
```js
# new ExampleClass(one, two) <= EventEmitter
```

<a name="module_dmd..Dmd+signature"></a>
#### dmd.signature([options], [options])  
**Kind**: instance method of module:dmd~Dmd  
**Params**

- [options] [`object`](#object)
- [options] [`object`](#object)

**Example**
```js
new ExampleClass(one, two) <= EventEmitter
```

<a name="module_dmd..Dmd+sigMethodSig"></a>
#### dmd.sigMethodSig ⇒ [`string`](#string)  
Returns the method signature, e.g. `(options, [onComplete])`

**Kind**: instance method of module:dmd~Dmd  

<a name="module_dmd..Dmd.typeList"></a>
#### Dmd.typeList(names)  
**Kind**: static method of module:dmd~Dmd  
**Params**

- names [`Array.<string>`](#Array.<string>) - list of type names


<a name="Class"></a>
## Class ⇐ module:dmd  
Tweaks for class doclets

**Kind**: global class  

* [Class](#Class) ⇐ module:dmd  
    * [.sigSymbol](#Class+sigSymbol)  
    * [.sigTypes](#Class+sigTypes)  


<a name="Class+sigSymbol"></a>
### class.sigSymbol  
show the augments symbol

**Kind**: instance method of Class  

<a name="Class+sigTypes"></a>
### class.sigTypes  
show the augments type list

**Kind**: instance method of Class  


* * *

&copy; 2015 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
