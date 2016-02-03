
<a href="#module_object-tools"></a>
# object-tools
Useful functions for working with objects


* object-tools
  * .extend(...object) ⇒ object  
  * .clone(input) ⇒ object &#124; array  
  * .every(object, iterator) ⇒ boolean  
  * .each(object, callback)   
  * .exists(object, query) ⇒ boolean  
  * .without(object, toRemove) ⇒ object  
  * .where(object, query) ⇒ object  
  * .extract(object, query) ⇒ object  
  * .select(object, fields) ⇒ object  
  * .get(object, expression) ⇒ *  



* * *


<a href="#module_object-tools.extend"></a>
## o.extend(...object) ⇒ object  
Merge a list of objects, left to right, into one - to a maximum depth of 10.

**Params**

| name   | type | description                                   |
| ------ | ---- | --------------------------------------------- |
| object | TYPE | a sequence of object instances to be extended |



* * *


<a href="#module_object-tools.clone"></a>
## o.clone(input) ⇒ object &#124; array  
Clones an object or array

**Params**

| name  | type | description        |
| ----- | ---- | ------------------ |
| input | TYPE | the input to clone |



* * *


<a href="#module_object-tools.every"></a>
## o.every(object, iterator) ⇒ boolean  
Returns true if the supplied iterator function returns true for every property in the object

**Params**

| name     | type | description                                                                            |
| -------- | ---- | -------------------------------------------------------------------------------------- |
| object   | TYPE | the object to inspect                                                                  |
| iterator | TYPE | the iterator function to run against each key/value pair, the args are `(value, key)`. |



* * *


<a href="#module_object-tools.each"></a>
## o.each(object, callback)   
Runs the iterator function against every key/value pair in the input object

**Params**

| name     | type | description                                                                            |
| -------- | ---- | -------------------------------------------------------------------------------------- |
| object   | TYPE | the object to iterate                                                                  |
| callback | TYPE | the iterator function to run against each key/value pair, the args are `(value, key)`. |



* * *


<a href="#module_object-tools.exists"></a>
## o.exists(object, query) ⇒ boolean  
returns true if the key/value pairs in `query` also exist identically in `object`.
Also supports RegExp values in `query`. If the `query` property begins with `!` then test is negated.

**Params**

| name   | type | description                     |
| ------ | ---- | ------------------------------- |
| object | TYPE | the object to examine           |
| query  | TYPE | the key/value pairs to look for |



* * *


<a href="#module_object-tools.without"></a>
## o.without(object, toRemove) ⇒ object  
Returns a clone of the object minus the specified properties. See also {@link module:object-tools.select}.

**Params**

| name     | type | description                                       |
| -------- | ---- | ------------------------------------------------- |
| object   | TYPE | the input object                                  |
| toRemove | TYPE | a single property, or array of properties to omit |



* * *


<a href="#module_object-tools.where"></a>
## o.where(object, query) ⇒ object  
Returns a new object containing the key/value pairs which satisfy the query

**Params**

| name   | type | description                                                                                                                                       |
| ------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| object | TYPE | The input object                                                                                                                                  |
| query  | TYPE | Either an array of property names, or a function. The function is called with `(value, key)` and must return `true` to be included in the output. |



* * *


<a href="#module_object-tools.extract"></a>
## o.extract(object, query) ⇒ object  
identical to `o.where(object, query)` with one exception - the found properties are removed from the input `object`

**Params**

| name   | type | description                                                                                                                                       |
| ------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| object | TYPE | The input object                                                                                                                                  |
| query  | TYPE | Either an array of property names, or a function. The function is called with `(value, key)` and must return `true` to be included in the output. |



* * *


<a href="#module_object-tools.select"></a>
## o.select(object, fields) ⇒ object  
Returns a new object containing only the selected fields. See also {@link module:object-tools.without}.

**Params**

| name   | type | description                |
| ------ | ---- | -------------------------- |
| object | TYPE | the input object           |
| fields | TYPE | a list of fields to return |



* * *


<a href="#module_object-tools.get"></a>
## o.get(object, expression) ⇒ *  
Returns the value at the given property.

**Params**

| name       | type | description                      |
| ---------- | ---- | -------------------------------- |
| object     | TYPE | the input object                 |
| expression | TYPE | the property accessor expression |



* * *

