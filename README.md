[![view on npm](http://img.shields.io/npm/v/dmd.svg)](https://www.npmjs.org/package/dmd)
[![npm module downloads](http://img.shields.io/npm/dt/dmd.svg)](https://www.npmjs.org/package/dmd)
[![Build Status](https://travis-ci.org/jsdoc2md/dmd.svg?branch=master)](https://travis-ci.org/jsdoc2md/dmd)
[![Dependency Status](https://david-dm.org/jsdoc2md/dmd.svg)](https://david-dm.org/jsdoc2md/dmd)

# dmd
dmd is a template for create markdown API documentation from jsdoc-parse data. WIP.

<a name="module_class"></a>
Tweaks for class doclets

  

* class
    * [Class](#exp_module_class--Class) ⇐ module:dmd ⏏
        * [.sigSymbol()](#module_class--Class+sigSymbol)
        * [.sigTypes()](#module_class--Class+sigTypes)
        * [.typeList(names)](#the anchor of the super class)
        * [.getSignature([options], [options])](#the anchor of the super class)
        * [.anchor()](#the anchor of the super class)
        * [.heading()](#the anchor of the super class)
        * [.sigMethodSig()](#the anchor of the super class) ⇒ `string`


<a name="exp_module_class--Class"></a>
### Class ⇐ module:dmd ⏏
**Kind**: Exported class


<a name="module_class--Class+sigSymbol"></a>
#### class.sigSymbol()
show the augments symbol

**Kind**: instance method of [`Class`](#exp_module_class--Class)  
**Params**


<a name="module_class--Class+sigTypes"></a>
#### class.sigTypes()
show the augments type list

**Kind**: instance method of [`Class`](#exp_module_class--Class)  
**Params**


<a name="the anchor of the super class"></a>
#### class.typeList(names)
**Kind**: instance method of [`Class`](#exp_module_class--Class)  
**Params**

- names `Array.<string>` - list of type names


<a name="the anchor of the super class"></a>
#### class.getSignature([options], [options])
A signature like `new exampleModule.ExampleClass(one, two) <= `EventEmitter` ℗` is composed of

- `new` - `sigPrefix()`
- `exampleModule` - `data.parentName()`
- `.` - `data.accessSymbol()`
- `ExampleClass` - `data.getName`
- `(one, two)` - `sigMethodSig()`
- `<=` - `sigSymbol()`
- `EventEmitter` - sigTypes()
- `℗` - sigSuffix()

**Kind**: instance method of [`Class`](#exp_module_class--Class)  
**Params**

- [options] `object`
- [options] `object`

**Example**
```js
new ExampleClass(one, two) <= EventEmitter ℗
```


<a name="the anchor of the super class"></a>
#### class.anchor()
An anchor member-index items can link to

**Kind**: instance method of [`Class`](#exp_module_class--Class)  
**Params**



**Example**
```js
<a name="#ExampleClass"></a>
```


<a name="the anchor of the super class"></a>
#### class.heading()
the doclet heading.

**Kind**: instance method of [`Class`](#exp_module_class--Class)  
**Params**



**Example**
```js
# new ExampleClass(one, two) <= EventEmitter
```


<a name="the anchor of the super class"></a>
#### class.sigMethodSig() ⇒ `string`
Returns the method signature, e.g. `(options, [onComplete])`

**Kind**: instance method of [`Class`](#exp_module_class--Class)  
**Params**


<a name="module_dmd"></a>
  

* dmd
    * [Dmd](#exp_module_dmd--Dmd) ⇐ DocletTemplate ⏏
        * [.getSubclassMap()](#module_dmd--Dmd.getSubclassMap)
        * [.typeList(names)](#module_dmd--Dmd+typeList)
        * [.getSignature([options], [options])](#module_dmd--Dmd+getSignature)
        * [.anchor()](#module_dmd--Dmd+anchor)
        * [.heading()](#module_dmd--Dmd+heading)
        * [.sigMethodSig()](#module_dmd--Dmd+sigMethodSig) ⇒ `string`
        * [~DocletTemplate](#module_dmd--Dmd..DocletTemplate)


<a name="exp_module_dmd--Dmd"></a>
### Dmd ⇐ DocletTemplate ⏏
A DocletTemplate for generating markdown documentation for a doclet.

**Kind**: Exported class


<a name="module_dmd--Dmd.getSubclassMap"></a>
#### Dmd.getSubclassMap()
if tweaks are to be made per kind, add a ref to the sub-class here.

**Kind**: static method of [`Dmd`](#exp_module_dmd--Dmd)  
**Params**


<a name="module_dmd--Dmd+typeList"></a>
#### dmd.typeList(names)
**Kind**: instance method of [`Dmd`](#exp_module_dmd--Dmd)  
**Params**

- names `Array.<string>` - list of type names


<a name="module_dmd--Dmd+getSignature"></a>
#### dmd.getSignature([options], [options])
A signature like `new exampleModule.ExampleClass(one, two) <= `EventEmitter` ℗` is composed of

- `new` - `sigPrefix()`
- `exampleModule` - `data.parentName()`
- `.` - `data.accessSymbol()`
- `ExampleClass` - `data.getName`
- `(one, two)` - `sigMethodSig()`
- `<=` - `sigSymbol()`
- `EventEmitter` - sigTypes()
- `℗` - sigSuffix()

**Kind**: instance method of [`Dmd`](#exp_module_dmd--Dmd)  
**Params**

- [options] `object`
- [options] `object`

**Example**
```js
new ExampleClass(one, two) <= EventEmitter ℗
```


<a name="module_dmd--Dmd+anchor"></a>
#### dmd.anchor()
An anchor member-index items can link to

**Kind**: instance method of [`Dmd`](#exp_module_dmd--Dmd)  
**Params**



**Example**
```js
<a name="#ExampleClass"></a>
```


<a name="module_dmd--Dmd+heading"></a>
#### dmd.heading()
the doclet heading.

**Kind**: instance method of [`Dmd`](#exp_module_dmd--Dmd)  
**Params**



**Example**
```js
# new ExampleClass(one, two) <= EventEmitter
```


<a name="module_dmd--Dmd+sigMethodSig"></a>
#### dmd.sigMethodSig() ⇒ `string`
Returns the method signature, e.g. `(options, [onComplete])`

**Kind**: instance method of [`Dmd`](#exp_module_dmd--Dmd)  
**Params**


<a name="module_dmd--Dmd..DocletTemplate"></a>
#### Dmd~DocletTemplate
**Kind**: inner typedef of [`Dmd`](#exp_module_dmd--Dmd)




* * *

&copy; 2015 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
