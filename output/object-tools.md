
<a name="module_object-tools"></a>
## object-tools
Useful functions for working with objects

**Example**
```js
var o = require("object-tools")
```

* object-tools
  * [.extend(...object)](#module_object-tools.extend) ⇒ object  
  * [.clone(input)](#module_object-tools.clone) ⇒ object &#124; array  
  * [.every(object, iterator)](#module_object-tools.every) ⇒ boolean  
  * [.each(object, callback)](#module_object-tools.each)   
  * [.exists(object, query)](#module_object-tools.exists) ⇒ boolean  
  * [.without(object, toRemove)](#module_object-tools.without) ⇒ object  
  * [.where(object, query)](#module_object-tools.where) ⇒ object  
  * [.extract(object, query)](#module_object-tools.extract) ⇒ object  
  * [.select(object, fields)](#module_object-tools.select) ⇒ object  
  * [.get(object, expression)](#module_object-tools.get) ⇒ *  



* * *


<a name="module_object-tools.extend"></a>
### o.extend(...object) ⇒ object  
Merge a list of objects, left to right, into one - to a maximum depth of 10.

**Params**

| name   | type | description                                   |
| ------ | ---- | --------------------------------------------- |
| object | TYPE | a sequence of object instances to be extended |

**Example**
```js
> o.extend({ one: 1, three: 3 }, { one: "one", two: 2 }, { four: 4 })
{ one: 'one',
  three: 3,
  two: 2,
  four: 4 }
```


* * *


<a name="module_object-tools.clone"></a>
### o.clone(input) ⇒ object &#124; array  
Clones an object or array

**Params**

| name  | type | description        |
| ----- | ---- | ------------------ |
| input | TYPE | the input to clone |

**Example**
```js
> date = new Date()
Fri May 09 2014 13:54:34 GMT+0200 (CEST)
> o.clone(date)
{}  // a Date instance doesn't own any properties
> date.clive = "hater"
'hater'
> o.clone(date)
{ clive: 'hater' }
> array = [1,2,3]
[ 1, 2, 3 ]
> newArray = o.clone(array)
[ 1, 2, 3 ]
> array === newArray
false
```


* * *


<a name="module_object-tools.every"></a>
### o.every(object, iterator) ⇒ boolean  
Returns true if the supplied iterator function returns true for every property in the object

**Params**

| name     | type | description                                                                            |
| -------- | ---- | -------------------------------------------------------------------------------------- |
| object   | TYPE | the object to inspect                                                                  |
| iterator | TYPE | the iterator function to run against each key/value pair, the args are `(value, key)`. |

**Example**
```js
> function aboveTen(input){ return input > 10; }
> o.every({ eggs: 12, carrots: 30, peas: 100 }, aboveTen)
true
> o.every({ eggs: 6, carrots: 30, peas: 100 }, aboveTen)
false
```


* * *


<a name="module_object-tools.each"></a>
### o.each(object, callback)   
Runs the iterator function against every key/value pair in the input object

**Params**

| name     | type | description                                                                            |
| -------- | ---- | -------------------------------------------------------------------------------------- |
| object   | TYPE | the object to iterate                                                                  |
| callback | TYPE | the iterator function to run against each key/value pair, the args are `(value, key)`. |

**Example**
```js
> var total = 0
> function addToTotal(n){ total += n; }
> o.each({ eggs: 3, celery: 2, carrots: 1 }, addToTotal)
> total
6
```


* * *


<a name="module_object-tools.exists"></a>
### o.exists(object, query) ⇒ boolean  
returns true if the key/value pairs in `query` also exist identically in `object`.
Also supports RegExp values in `query`. If the `query` property begins with `!` then test is negated.

**Params**

| name   | type | description                     |
| ------ | ---- | ------------------------------- |
| object | TYPE | the object to examine           |
| query  | TYPE | the key/value pairs to look for |

**Example**
```js
> o.exists({ a: 1, b: 2}, {a: 0})
false
> o.exists({ a: 1, b: 2}, {a: 1})
true
> o.exists({ a: 1, b: 2}, {"!a": 1})
false
> o.exists({ name: "clive hater" }, { name: /clive/ })
true
> o.exists({ name: "clive hater" }, { "!name": /ian/ })
true
> o.exists({ a: 1}, { a: function(n){ return n > 0; } })
true
> o.exists({ a: 1}, { a: function(n){ return n > 1; } })
false
```


* * *


<a name="module_object-tools.without"></a>
### o.without(object, toRemove) ⇒ object  
Returns a clone of the object minus the specified properties. See also {@link module:object-tools.select}.

**Params**

| name     | type | description                                       |
| -------- | ---- | ------------------------------------------------- |
| object   | TYPE | the input object                                  |
| toRemove | TYPE | a single property, or array of properties to omit |

**Example**
```js
> o.without({ a: 1, b: 2, c: 3}, "b")
{ a: 1, c: 3 }
> o.without({ a: 1, b: 2, c: 3}, ["b", "a"])
{ c: 3 }
```


* * *


<a name="module_object-tools.where"></a>
### o.where(object, query) ⇒ object  
Returns a new object containing the key/value pairs which satisfy the query

**Params**

| name   | type | description                                                                                                                                       |
| ------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| object | TYPE | The input object                                                                                                                                  |
| query  | TYPE | Either an array of property names, or a function. The function is called with `(value, key)` and must return `true` to be included in the output. |

**Example**
```js
> object = { a: 1, b: 0, c: 2 }
{ a: 1, b: 0, c: 2 }
> o.where(object, function(value, key){
      return value > 0
  })
{ a: 1, c: 2 }
> o.where(object, [ "b" ])
{ b: 0 }
> object
{ a: 1, b: 0, c: 2 }
```


* * *


<a name="module_object-tools.extract"></a>
### o.extract(object, query) ⇒ object  
identical to `o.where(object, query)` with one exception - the found properties are removed from the input `object`

**Params**

| name   | type | description                                                                                                                                       |
| ------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| object | TYPE | The input object                                                                                                                                  |
| query  | TYPE | Either an array of property names, or a function. The function is called with `(value, key)` and must return `true` to be included in the output. |

**Example**
```js
> object = { a: 1, b: 0, c: 2 }
{ a: 1, b: 0, c: 2 }
> o.where(object, function(value, key){
      return value > 0
  })
{ a: 1, c: 2 }
> object
{ b: 0 }
```


* * *


<a name="module_object-tools.select"></a>
### o.select(object, fields) ⇒ object  
Returns a new object containing only the selected fields. See also {@link module:object-tools.without}.

**Params**

| name   | type | description                |
| ------ | ---- | -------------------------- |
| object | TYPE | the input object           |
| fields | TYPE | a list of fields to return |



* * *


<a name="module_object-tools.get"></a>
### o.get(object, expression) ⇒ *  
Returns the value at the given property.

**Params**

| name       | type | description                      |
| ---------- | ---- | -------------------------------- |
| object     | TYPE | the input object                 |
| expression | TYPE | the property accessor expression |



* * *

