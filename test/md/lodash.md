<a name="_"></a>
##class: _

* [class: _](#_)
  * [new _(value)](#new___new)
  * [.isArray](#_.isArray) ⇒ `boolean`
  * [.chain](#_.chain) ⇒ `*`
  * [.toString](#_.toString) ⇒ `string`
  * [.valueOf](#_.valueOf) ⇒ `*`
  * [.countBy](#_.countBy) ⇒ `Object`
  * [.groupBy](#_.groupBy) ⇒ `Object`
  * [.indexBy](#_.indexBy) ⇒ `Object`
  * [.partition](#_.partition) ⇒ `Array`
  * [.once](#_.once) ⇒ `function`
  * [.support](#_.support) → `Object`
    * [.support.nodeClass](#_.support.support.nodeClass) → `boolean`
    * [.support.argsClass](#_.support.support.argsClass) → `boolean`
    * [.support.enumPrototypes](#_.support.support.enumPrototypes) → `boolean`
    * [.support.funcDecomp](#_.support.support.funcDecomp) → `boolean`
    * [.support.funcNames](#_.support.support.funcNames) → `boolean`
    * [.support.enumErrorProps](#_.support.support.enumErrorProps) → `boolean`
    * [.support.nonEnumStrings](#_.support.support.nonEnumStrings) → `boolean`
    * [.support.nonEnumShadows](#_.support.support.nonEnumShadows) → `boolean`
    * [.support.ownLast](#_.support.support.ownLast) → `boolean`
    * [.support.spliceObjects](#_.support.support.spliceObjects) → `boolean`
    * [.support.unindexedChars](#_.support.support.unindexedChars) → `boolean`
  * [.isFinite](#_.isFinite) ⇒ `boolean`
  * [.isPlainObject](#_.isPlainObject) ⇒ `boolean`
  * [.extend](#_.extend) ⇒ `Object`
  * [.keys](#_.keys) ⇒ `Array`
  * [.merge](#_.merge) ⇒ `Object`
  * [.camelCase](#_.camelCase) ⇒ `string`
  * [.kebabCase](#_.kebabCase) ⇒ `string`
  * [.snakeCase](#_.snakeCase) ⇒ `string`
  * [.now](#_.now)
  * [.pull(array, [...values])](#_.pull) ⇒ `Array`
  * [.pullAt(array, [...indexes])](#_.pullAt) ⇒ `Array`
  * [.remove(array, [predicate], [thisArg])](#_.remove) ⇒ `Array`
  * [.tail(array)](#_.tail) ⇒ `Array`
  * [.slice(array, [start], [end])](#_.slice) ⇒ `Array`
  * [.sortedIndex(array, value, [iteratee], [thisArg])](#_.sortedIndex) ⇒ `number`
  * [.sortedLastIndex(array, value, [iteratee], [thisArg])](#_.sortedLastIndex) ⇒ `number`
  * [.take(array, [n])](#_.take) ⇒ `Array`
  * [.takeRight(array, [n])](#_.takeRight) ⇒ `Array`
  * [.takeRightWhile(array, [predicate], [thisArg])](#_.takeRightWhile) ⇒ `Array`
  * [.takeWhile(array, [predicate], [thisArg])](#_.takeWhile) ⇒ `Array`
  * [.union([...arrays])](#_.union) ⇒ `Array`
  * [.unique(array, [isSorted], [iteratee], [thisArg])](#_.unique) ⇒ `Array`
  * [.unzip(array)](#_.unzip) ⇒ `Array`
  * [.without(array, [...values])](#_.without) ⇒ `Array`
  * [.xor([...arrays])](#_.xor) ⇒ `Array`
  * [.zip([...arrays])](#_.zip) ⇒ `Array`
  * [.object(props, [vals])](#_.object) ⇒ `Object`
  * [.chain(value)](#_.chain) ⇒ `Object`
  * [.tap(value, interceptor, [thisArg])](#_.tap) ⇒ `*`
  * [.thru(value, interceptor, [thisArg])](#_.thru) ⇒ `*`
  * [.runInContext([context])](#_.runInContext) ⇒ `function`
    * [~reNative](#_.runInContext..reNative)
    * [~Array](#_.runInContext..Array)
    * [~document](#_.runInContext..document)
    * [~fnToString](#_.runInContext..fnToString)
    * [~hasOwnProperty](#_.runInContext..hasOwnProperty)
    * [~oldDash](#_.runInContext..oldDash)
    * [~toString](#_.runInContext..toString)
    * [~arrayProto](#_.runInContext..arrayProto)
    * [~ArrayBuffer](#_.runInContext..ArrayBuffer)
    * [~Float64Array](#_.runInContext..Float64Array)
    * [~FLOAT64_BYTES_PER_ELEMENT](#_.runInContext..FLOAT64_BYTES_PER_ELEMENT)
    * [~metaMap](#_.runInContext..metaMap)
    * [~ctorByClass](#_.runInContext..ctorByClass)
    * [~nonEnumProps](#_.runInContext..nonEnumProps)
  * [.chunk(array, [size])](#_.chunk) ⇒ `Array`
  * [.compact(array)](#_.compact) ⇒ `Array`
  * [.at(collection, [...props])](#_.at) ⇒ `Array`
  * [.include(collection, target, [fromIndex])](#_.include) ⇒ `boolean`
  * [.difference(array, [...values])](#_.difference) ⇒ `Array`
  * [.all(collection, [predicate], [thisArg])](#_.all) ⇒ `boolean`
  * [.select(collection, [predicate], [thisArg])](#_.select) ⇒ `Array`
  * [.detect(collection, [predicate], [thisArg])](#_.detect) ⇒ `*`
  * [.findLast(collection, [predicate], [thisArg])](#_.findLast) ⇒ `*`
  * [.findWhere(collection, source)](#_.findWhere) ⇒ `*`
  * [.each(collection, [iteratee], [thisArg])](#_.each) ⇒ `Array | Object | string`
  * [.eachRight(collection, [iteratee], [thisArg])](#_.eachRight) ⇒ `Array | Object | string`
  * [.drop(array, [n])](#_.drop) ⇒ `Array`
  * [.dropRight(array, [n])](#_.dropRight) ⇒ `Array`
  * [.invoke(collection, methodName, [...args])](#_.invoke) ⇒ `Array`
  * [.collect(collection, [iteratee], [thisArg])](#_.collect) ⇒ `Array`
  * [.max(collection, [iteratee], [thisArg])](#_.max) ⇒ `*`
  * [.min(collection, [iteratee], [thisArg])](#_.min) ⇒ `*`
  * [.dropRightWhile(array, [predicate], [thisArg])](#_.dropRightWhile) ⇒ `Array`
  * [.pluck(collection, key)](#_.pluck) ⇒ `Array`
  * [.foldr(collection, [iteratee], [accumulator], [thisArg])](#_.foldr) ⇒ `*`
  * [.reject(collection, [predicate], [thisArg])](#_.reject) ⇒ `Array`
  * [.sample(collection, [n])](#_.sample) ⇒ `*`
  * [.shuffle(collection)](#_.shuffle) ⇒ `Array`
  * [.size(collection)](#_.size) ⇒ `number`
  * [.any(collection, [predicate], [thisArg])](#_.any) ⇒ `boolean`
  * [.sortBy(collection, [iteratee], [thisArg])](#_.sortBy) ⇒ `Array`
  * [.toArray(collection)](#_.toArray) ⇒ `Array`
  * [.where(collection, source)](#_.where) ⇒ `Array`
  * [.after(n, func)](#_.after) ⇒ `function`
  * [.before(n, func)](#_.before) ⇒ `function`
  * [.bind(func, [thisArg], [...args])](#_.bind) ⇒ `function`
  * [.bindAll(object, [...methodNames])](#_.bindAll) ⇒ `Object`
  * [.bindKey(object, key, [...args])](#_.bindKey) ⇒ `function`
  * [.curry(func, [arity])](#_.curry) ⇒ `function`
  * [.curryRight(func, [arity])](#_.curryRight) ⇒ `function`
  * [.debounce(func, wait, [options])](#_.debounce) ⇒ `function`
  * [.defer(func, [...args])](#_.defer) ⇒ `number`
  * [.delay(func, wait, [...args])](#_.delay) ⇒ `number`
  * [.flow([...funcs])](#_.flow) ⇒ `function`
  * [.memoize(func, [resolver])](#_.memoize) ⇒ `function`
  * [.negate(predicate)](#_.negate) ⇒ `function`
  * [.dropWhile(array, [predicate], [thisArg])](#_.dropWhile) ⇒ `Array`
  * [.partial(func, [...args])](#_.partial) ⇒ `function`
  * [.partialRight(func, [...args])](#_.partialRight) ⇒ `function`
  * [.throttle(func, wait, [options])](#_.throttle) ⇒ `function`
  * [.wrap(value, wrapper)](#_.wrap) ⇒ `function`
  * [.clone(value, [isDeep], [customizer], [thisArg])](#_.clone) ⇒ `*`
  * [.cloneDeep(value, [customizer], [thisArg])](#_.cloneDeep) ⇒ `*`
  * [.isArguments(value)](#_.isArguments) ⇒ `boolean`
  * [.findIndex(array, [predicate], [thisArg])](#_.findIndex) ⇒ `number`
  * [.isBoolean(value)](#_.isBoolean) ⇒ `boolean`
  * [.isDate(value)](#_.isDate) ⇒ `boolean`
  * [.isElement(value)](#_.isElement) ⇒ `boolean`
  * [.isEmpty(value)](#_.isEmpty) ⇒ `boolean`
  * [.isEqual(value, other, [customizer], [thisArg])](#_.isEqual) ⇒ `boolean`
  * [.isError(value)](#_.isError) ⇒ `boolean`
  * [.findLastIndex(array, [predicate], [thisArg])](#_.findLastIndex) ⇒ `number`
  * [.isFunction(value)](#_.isFunction) ⇒ `boolean`
  * [.isObject(value)](#_.isObject) ⇒ `boolean`
  * [.isNaN(value)](#_.isNaN) ⇒ `boolean`
  * [.isNative(value)](#_.isNative) ⇒ `boolean`
  * [.isNull(value)](#_.isNull) ⇒ `boolean`
  * [.isNumber(value)](#_.isNumber) ⇒ `boolean`
  * [.head(array)](#_.head) ⇒ `*`
  * [.isRegExp(value)](#_.isRegExp) ⇒ `boolean`
  * [.isString(value)](#_.isString) ⇒ `boolean`
  * [.isUndefined(value)](#_.isUndefined) ⇒ `boolean`
  * [.flatten(array, [isDeep])](#_.flatten) ⇒ `Array`
  * [.create(prototype, [properties])](#_.create) ⇒ `Object`
  * [.defaults(object, [...sources])](#_.defaults) ⇒ `Object`
  * [.findKey(object, [predicate], [thisArg])](#_.findKey) ⇒ `string | undefined`
  * [.findLastKey(object, [predicate], [thisArg])](#_.findLastKey) ⇒ `string | undefined`
  * [.forIn(object, [iteratee], [thisArg])](#_.forIn) ⇒ `Object`
  * [.forInRight(object, [iteratee], [thisArg])](#_.forInRight) ⇒ `Object`
  * [.forOwn(object, [iteratee], [thisArg])](#_.forOwn) ⇒ `Object`
  * [.forOwnRight(object, [iteratee], [thisArg])](#_.forOwnRight) ⇒ `Object`
  * [.methods(object)](#_.methods) ⇒ `Array`
  * [.has(object, key)](#_.has) ⇒ `boolean`
  * [.invert(object, [multiValue])](#_.invert) ⇒ `Object`
  * [.flattenDeep(array)](#_.flattenDeep) ⇒ `Array`
  * [.keysIn(object)](#_.keysIn) ⇒ `Array`
  * [.mapValues(object, [iteratee], [thisArg])](#_.mapValues) ⇒ `Object`
  * [.indexOf(array, value, [fromIndex])](#_.indexOf) ⇒ `number`
  * [.omit(object, [predicate], [thisArg])](#_.omit) ⇒ `Object`
  * [.pairs(object)](#_.pairs) ⇒ `Array`
  * [.pick(object, [predicate], [thisArg])](#_.pick) ⇒ `Object`
  * [.transform(object, [iteratee], [accumulator], [thisArg])](#_.transform) ⇒ `*`
  * [.values(object)](#_.values) ⇒ `Array`
  * [.valuesIn(object)](#_.valuesIn) ⇒ `Array`
  * [.initial(array)](#_.initial) ⇒ `Array`
  * [.capitalize([string])](#_.capitalize) ⇒ `string`
  * [.deburr([string])](#_.deburr) ⇒ `string`
  * [.endsWith([string], [target], [position])](#_.endsWith) ⇒ `boolean`
  * [.escape([string])](#_.escape) ⇒ `string`
  * [.escapeRegExp([string])](#_.escapeRegExp) ⇒ `string`
  * [.intersection([...arrays])](#_.intersection) ⇒ `Array`
  * [.pad([string], [length], [chars])](#_.pad) ⇒ `string`
  * [.padLeft([string], [length], [chars])](#_.padLeft) ⇒ `string`
  * [.padRight([string], [length], [chars])](#_.padRight) ⇒ `string`
  * [.repeat([string], [n])](#_.repeat) ⇒ `string`
  * [.last(array)](#_.last) ⇒ `*`
  * [.startsWith([string], [target], [position])](#_.startsWith) ⇒ `boolean`
  * [.template([string], [options])](#_.template) ⇒ `function`
  * [.trim([string], [chars])](#_.trim) ⇒ `string`
  * [.trimLeft([string], [chars])](#_.trimLeft) ⇒ `string`
  * [.trimRight([string], [chars])](#_.trimRight) ⇒ `string`
  * [.trunc([string], [options])](#_.trunc) ⇒ `string`
  * [.unescape([string])](#_.unescape) ⇒ `string`
  * [.words([string], [pattern])](#_.words) ⇒ `Array`
  * [.attempt(func)](#_.attempt) ⇒ `*`
  * [.iteratee([func], [thisArg])](#_.iteratee) ⇒ `function`
  * [.constant(value)](#_.constant) ⇒ `function`
  * [.identity(value)](#_.identity) ⇒ `*`
  * [.matches(source)](#_.matches) ⇒ `function`
  * [.mixin([object], source, [options])](#_.mixin) ⇒ `function | Object`
  * [.noConflict()](#_.noConflict) ⇒ `function`
  * [.noop()](#_.noop)
  * [.lastIndexOf(array, value, [fromIndex])](#_.lastIndexOf) ⇒ `number`
  * [.parseInt(value, [radix])](#_.parseInt) ⇒ `number`
  * [.property(key)](#_.property) ⇒ `function`
  * [.random([min], [max], [floating])](#_.random) ⇒ `number`
  * [.range([start], end, [step])](#_.range) ⇒ `Array`
  * [.result(object, key, [defaultValue])](#_.result) ⇒ `*`
  * [.times(n, [iteratee], [thisArg])](#_.times) ⇒ `Array`
  * [.uniqueId([prefix])](#_.uniqueId) ⇒ `string`

<a name="new___new"></a>
###new _(value)
Creates a `lodash` object which wraps the given value to enable intuitive
method chaining.

In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
`concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
and `unshift`

Chaining is supported in custom builds as long as the `value` method is
implicitly or explicitly included in the build.

The chainable wrapper functions are:
`after`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`, `callback`,
`chain`, `chunk`, `compact`, `concat`, `constant`, `countBy`, `create`,
`curry`, `debounce`, `defaults`, `defer`, `delay`, `difference`, `drop`,
`dropRight`, `dropRightWhile`, `dropWhile`, `filter`, `flatten`, `flattenDeep`,
`flow`, `flowRight`, `forEach`, `forEachRight`, `forIn`, `forInRight`,
`forOwn`, `forOwnRight`, `functions`, `groupBy`, `indexBy`, `initial`,
`intersection`, `invert`, `invoke`, `keys`, `keysIn`, `map`, `mapValues`,
`matches`, `memoize`, `merge`, `mixin`, `negate`, `noop`, `omit`, `once`,
`pairs`, `partial`, `partialRight`, `partition`, `pick`, `pluck`, `property`,
`pull`, `pullAt`, `push`, `range`, `reject`, `remove`, `rest`, `reverse`,
`shuffle`, `slice`, `sort`, `sortBy`, `splice`, `take`, `takeRight`,
`takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `times`,
`toArray`, `transform`, `union`, `uniq`, `unshift`, `unzip`, `values`,
`valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, and `zipObject`

The non-chainable wrapper functions are:
`attempt`, `camelCase`, `capitalize`, `clone`, `cloneDeep`, `contains`,
`deburr`, endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
`findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
`has`, `identity`, `indexOf`, `isArguments`, `isArray`, `isBoolean`, isDate`,
`isElement`, `isEmpty`, `isEqual`, `isError`, `isFinite`, `isFunction`,
`isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
`isRegExp`, `isString`, `isUndefined`, `join`, `kebabCase`, `last`,
`lastIndexOf`, `max`, `min`, `noConflict`, `now`, `pad`, `padLeft`,
`padRight`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`, `repeat`,
`result`, `runInContext`, `shift`, `size`, `snakeCase`, `some`, `sortedIndex`,
`sortedLastIndex`, `startsWith`, `template`, `trim`, `trimLeft`, `trimRight`,
`trunc`, `unescape`, `uniqueId`, `value`, and `words`

The wrapper function `sample` will return a wrapped value when `n` is
provided, otherwise it will return an unwrapped value.

Explicit chaining can be enabled by using the `_.chain` method.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to wrap in a `lodash` instance. |

**Returns**: `Object` - Returns a `lodash` instance.  
**Example**  
```js
var wrapped = _([1, 2, 3]);

// returns an unwrapped value
wrapped.reduce(function(sum, n) { return sum + n; });
// => 6

// returns a wrapped value
var squares = wrapped.map(function(n) { return n * n; });

_.isArray(squares);
// => false

_.isArray(squares.value());
// => true
```
<a name="_.isArray"></a>
###_.isArray ⇒ `boolean`
Checks if `value` is classified as an `Array` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is correctly classified, else `false`.  
**Example**  
```js
_.isArray([1, 2, 3]);
// => true

(function() { return _.isArray(arguments); })();
// => false
```
<a name="_.chain"></a>
###_.chain ⇒ `*`
Enables explicit method chaining on the wrapper object.

**Returns**: `*` - Returns the wrapper object.  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// without explicit chaining
_(users).first();
// => { 'user': 'barney', 'age': 36 }

// with explicit chaining
_(users).chain()
  .first()
  .pick('age')
  .value();
// => { 'age': 36 }
```
<a name="_.toString"></a>
###_.toString ⇒ `string`
Produces the result of coercing the unwrapped value to a string.

**Returns**: `string` - Returns the coerced string value.  
**Example**  
```js
_([1, 2, 3]).toString();
// => '1,2,3'
```
<a name="_.valueOf"></a>
###_.valueOf ⇒ `*`
Extracts the unwrapped value from its wrapper.

**Returns**: `*` - Returns the unwrapped value.  
**Example**  
```js
_([1, 2, 3]).valueOf();
// => [1, 2, 3]
```
<a name="_.countBy"></a>
###_.countBy ⇒ `Object`
Creates an object composed of keys generated from the results of running
each element of `collection` through `iteratee`. The corresponding value
of each key is the number of times the key was returned by `iteratee`.
The `iteratee` is bound to `thisArg` and invoked with three arguments;
(value, index|key, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Object` - Returns the composed aggregate object.  
**Example**  
```js
_.countBy([4.3, 6.1, 6.4], function(n) { return Math.floor(n); });
// => { '4': 1, '6': 2 }

_.countBy([4.3, 6.1, 6.4], function(n) { return this.floor(n); }, Math);
// => { '4': 1, '6': 2 }

_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```
<a name="_.groupBy"></a>
###_.groupBy ⇒ `Object`
Creates an object composed of keys generated from the results of running
each element of `collection` through `iteratee`. The corresponding
value of each key is an array of the elements responsible for generating
the key. The `iteratee` is bound to `thisArg` and invoked with three
arguments; (value, index|key, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Object` - Returns the composed aggregate object.  
**Example**  
```js
_.groupBy([4.2, 6.1, 6.4], function(n) { return Math.floor(n); });
// => { '4': [4.2], '6': [6.1, 6.4] }

_.groupBy([4.2, 6.1, 6.4], function(n) { return this.floor(n); }, Math);
// => { '4': [4.2], '6': [6.1, 6.4] }

// using "_.pluck" callback shorthand
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```
<a name="_.indexBy"></a>
###_.indexBy ⇒ `Object`
Creates an object composed of keys generated from the results of running
each element of the collection through `iteratee`. The corresponding value
of each key is the last element responsible for generating the key. The
iteratee function is bound to `thisArg` and invoked with three arguments;
(value, index|key, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Object` - Returns the composed aggregate object.  
**Example**  
```js
var keyData = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

_.indexBy(keyData, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

_.indexBy(keyData, function(object) { return String.fromCharCode(object.code); });
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

_.indexBy(keyData, function(object) { return this.fromCharCode(object.code); }, String);
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
```
<a name="_.partition"></a>
###_.partition ⇒ `Array`
Creates an array of elements split into two groups, the first of which
contains elements `predicate` returns truthy for, while the second of which
contains elements `predicate` returns falsey for. The predicate is bound
to `thisArg` and invoked with three arguments; (value, index|key, collection).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Array` - Returns the array of grouped elements.  
**Example**  
```js
_.partition([1, 2, 3], function(n) { return n % 2; });
// => [[1, 3], [2]]

_.partition([1.2, 2.3, 3.4], function(n) { return this.floor(n) % 2; }, Math);
// => [[1, 3], [2]]

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40, 'blocked': true },
  { 'user': 'pebbles', 'age': 1 }
];

// using "_.where" callback shorthand
_.map(_.partition(users, { 'age': 1 }), function(array) { return _.pluck(array, 'user'); });
// => [['pebbles'], ['barney', 'fred']]

// using "_.pluck" callback shorthand
_.map(_.partition(users, 'blocked'), function(array) { return _.pluck(array, 'user'); });
// => [['fred'], ['barney', 'pebbles']]
```
<a name="_.once"></a>
###_.once ⇒ `function`
Creates a function that is restricted to invoking `func` once. Repeat calls
to the function return the value of the first call. The `func` is invoked
with the `this` binding of the created function.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to restrict. |

**Returns**: `function` - Returns the new restricted function.  
**Example**  
```js
var initialize = _.once(createApplication);
initialize();
initialize();
// `initialize` invokes `createApplication` once
```
<a name="_.support"></a>
###_.support → `Object`
An object environment feature flags.


  * [.support](#_.support) → `Object`
    * [.support.nodeClass](#_.support.support.nodeClass) → `boolean`
    * [.support.argsClass](#_.support.support.argsClass) → `boolean`
    * [.support.enumPrototypes](#_.support.support.enumPrototypes) → `boolean`
    * [.support.funcDecomp](#_.support.support.funcDecomp) → `boolean`
    * [.support.funcNames](#_.support.support.funcNames) → `boolean`
    * [.support.enumErrorProps](#_.support.support.enumErrorProps) → `boolean`
    * [.support.nonEnumStrings](#_.support.support.nonEnumStrings) → `boolean`
    * [.support.nonEnumShadows](#_.support.support.nonEnumShadows) → `boolean`
    * [.support.ownLast](#_.support.support.ownLast) → `boolean`
    * [.support.spliceObjects](#_.support.support.spliceObjects) → `boolean`
    * [.support.unindexedChars](#_.support.support.unindexedChars) → `boolean`

<a name="_.support.support.nodeClass"></a>
####support.support.nodeClass → `boolean`
Detect if the `[[Class]]` of DOM nodes is resolvable (all but IE < 9).

<a name="_.support.support.argsClass"></a>
####support.support.argsClass → `boolean`
Detect if the `[[Class]]` of `arguments` objects is resolvable
(all but Firefox < 4, IE < 9).

<a name="_.support.support.enumPrototypes"></a>
####support.support.enumPrototypes → `boolean`
Detect if `prototype` properties are enumerable by default.

Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
(if the prototype or a property on the prototype has been set)
incorrectly sets the `[[Enumerable]]` value of a function's `prototype`
property to `true`.

<a name="_.support.support.funcDecomp"></a>
####support.support.funcDecomp → `boolean`
Detect if functions can be decompiled by `Function#toString`
(all but Firefox OS certified apps, older Opera mobile browsers, and
the PlayStation 3; forced `false` for Windows 8 apps).

<a name="_.support.support.funcNames"></a>
####support.support.funcNames → `boolean`
Detect if `Function#name` is supported (all but IE).

<a name="_.support.support.enumErrorProps"></a>
####support.support.enumErrorProps → `boolean`
Detect if `name` or `message` properties of `Error.prototype` are
enumerable by default (IE < 9, Safari < 5.1).

<a name="_.support.support.nonEnumStrings"></a>
####support.support.nonEnumStrings → `boolean`
Detect if string indexes are non-enumerable
(IE < 9, RingoJS, Rhino, Narwhal).

<a name="_.support.support.nonEnumShadows"></a>
####support.support.nonEnumShadows → `boolean`
Detect if properties shadowing those on `Object.prototype` are
non-enumerable.

In IE < 9 an object's own properties, shadowing non-enumerable ones,
are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).

<a name="_.support.support.ownLast"></a>
####support.support.ownLast → `boolean`
Detect if own properties are iterated after inherited properties
(IE < 9).

<a name="_.support.support.spliceObjects"></a>
####support.support.spliceObjects → `boolean`
Detect if `Array#shift` and `Array#splice` augment array-like objects
correctly.

Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array `shift()`
and `splice()` functions that fail to remove the last element, `value[0]`,
of array-like objects even though the `length` property is set to `0`.
The `shift()` method is buggy in IE 8 compatibility mode, while `splice()`
is buggy regardless of mode in IE < 9 and buggy in compatibility mode
in IE 9.

<a name="_.support.support.unindexedChars"></a>
####support.support.unindexedChars → `boolean`
Detect lack of support for accessing string characters by index.

IE < 8 can't access characters by index. IE 8 can only access characters
by index on string literals, not string objects.

<a name="_.isFinite"></a>
###_.isFinite ⇒ `boolean`
Checks if `value` is a finite primitive number.

**Note:** This method is based on ES6 `Number.isFinite`. See the
[ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is a finite number, else `false`.  
**Example**  
```js
_.isFinite(10);
// => true

_.isFinite('10');
// => false

_.isFinite(true);
// => false

_.isFinite(Object(10));
// => false

_.isFinite(Infinity);
// => false
```
<a name="_.isPlainObject"></a>
###_.isPlainObject ⇒ `boolean`
Checks if `value` is an object created by the `Object` constructor or has
a `[[Prototype]]` of `null`.

**Note:** This method assumes objects created by the `Object` constructor
have no inherited enumerable properties.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is a plain object, else `false`.  
**Example**  
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

_.isPlainObject(new Shape);
// => false

_.isPlainObject([1, 2, 3]);
// => false

_.isPlainObject({ 'x': 0, 'y': 0 });
// => true

_.isPlainObject(Object.create(null));
// => true
```
<a name="_.extend"></a>
###_.extend ⇒ `Object`
Assigns own enumerable properties of source object(s) to the destination
object. Subsequent sources overwrite property assignments of previous sources.
If `customizer` is provided it is invoked to produce the assigned values.
The `customizer` is bound to `thisArg` and invoked with five arguments;
(objectValue, sourceValue, key, object, source).

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The destination object. |
| \[...sources\] | `Object` | The source objects. |
| \[customizer\] | `function` | The function to customize assigning values. |
| \[thisArg\] | `*` | The `this` binding of `customizer`. |

**Returns**: `Object` - Returns the destination object.  
**Example**  
```js
_.assign({ 'user': 'fred' }, { 'age': 40 }, { 'employer': 'slate' });
// => { 'user': 'fred', 'age': 40, 'employer': 'slate' }

var defaults = _.partialRight(_.assign, function(value, other) {
  return typeof value == 'undefined' ? other : value;
});

defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred', 'employer': 'slate' });
// => { 'user': 'barney', 'age': 36, 'employer': 'slate' }
```
<a name="_.keys"></a>
###_.keys ⇒ `Array`
Creates an array of the own enumerable property names of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to inspect. |

**Returns**: `Array` - Returns the array of property names.  
**Example**  
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.z = 0;

_.keys(new Shape);
// => ['x', 'y'] (iteration order is not guaranteed)
```
<a name="_.merge"></a>
###_.merge ⇒ `Object`
Recursively merges own enumerable properties of the source object(s), that
don't resolve to `undefined` into the destination object. Subsequent sources
overwrite property assignments of previous sources. If `customizer` is
provided it is invoked to produce the merged values of the destination and
source properties. If `customizer` returns `undefined` merging is handled
by the method instead. The `customizer` is bound to `thisArg` and invoked
with five arguments; (objectValue, sourceValue, key, object, source).

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The destination object. |
| \[...sources\] | `Object` | The source objects. |
| \[customizer\] | `function` | The function to customize merging properties. |
| \[thisArg\] | `*` | The `this` binding of `customizer`. |

**Returns**: `Object` - Returns the destination object.  
**Example**  
```js
var users = {
  'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
};

var ages = {
  'data': [{ 'age': 36 }, { 'age': 40 }]
};

_.merge(users, ages);
// => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }

var food = {
  'fruits': ['apple'],
  'vegetables': ['beet']
};

var otherFood = {
  'fruits': ['banana'],
  'vegetables': ['carrot']
};

_.merge(food, otherFood, function(a, b) {
  return _.isArray(a) ? a.concat(b) : undefined;
});
// => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot] }
```
<a name="_.camelCase"></a>
###_.camelCase ⇒ `string`
Converts `string` to camel case.
See [Wikipedia](http://en.wikipedia.org/wiki/CamelCase) for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to camel case. |

**Returns**: `string` - Returns the camel cased string.  
**Example**  
```js
_.camelCase('Hello world');
// => 'helloWorld'

_.camelCase('--hello-world');
// => 'helloWorld'

_.camelCase('__hello_world__');
// => 'helloWorld'
```
<a name="_.kebabCase"></a>
###_.kebabCase ⇒ `string`
Converts `string` to kebab case (a.k.a. spinal case).
See [Wikipedia](http://en.wikipedia.org/wiki/Letter_case#Computers) for
more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to kebab case. |

**Returns**: `string` - Returns the kebab cased string.  
**Example**  
```js
_.kebabCase('Hello world');
// => 'hello-world'

_.kebabCase('helloWorld');
// => 'hello-world'

_.kebabCase('__hello_world__');
// => 'hello-world'
```
<a name="_.snakeCase"></a>
###_.snakeCase ⇒ `string`
Converts `string` to snake case.
See [Wikipedia](http://en.wikipedia.org/wiki/Snake_case) for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to snake case. |

**Returns**: `string` - Returns the snake cased string.  
**Example**  
```js
_.snakeCase('Hello world');
// => 'hello_world'

_.snakeCase('--hello-world');
// => 'hello_world'

_.snakeCase('helloWorld');
// => 'hello_world'
```
<a name="_.now"></a>
###_.now
Gets the number of milliseconds that have elapsed since the Unix epoch
(1 January 1970 00:00:00 UTC).

**Example**  
```js
_.defer(function(stamp) { console.log(_.now() - stamp); }, _.now());
// => logs the number of milliseconds it took for the deferred function to be invoked
```
<a name="_.pull"></a>
###_.pull(array, [...values]) ⇒ `Array`
Removes all provided values from `array` using `SameValueZero` for equality
comparisons.

**Notes:**
 - Unlike `_.without`, this method mutates `array`.
 - `SameValueZero` is like strict equality, e.g. `===`, except that `NaN` matches `NaN`.
   See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
   for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to modify. |
| \[...values\] | `*` | The values to remove. |

**Returns**: `Array` - Returns `array`.  
**Example**  
```js
var array = [1, 2, 3, 1, 2, 3];
_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
```
<a name="_.pullAt"></a>
###_.pullAt(array, [...indexes]) ⇒ `Array`
Removes elements from `array` corresponding to the specified indexes and
returns an array of the removed elements. Indexes may be specified as an
array of indexes or as individual arguments.

**Note:** Unlike `_.at`, this method mutates `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to modify. |
| \[...indexes\] | `number` \| `Array.<number>` | The indexes of elements to remove,  specified as individual indexes or arrays of indexes. |

**Returns**: `Array` - Returns the new array of removed elements.  
**Example**  
```js
var array = [5, 10, 15, 20];
var evens = _.pullAt(array, [1, 3]);

console.log(array);
// => [5, 15]

console.log(evens);
// => [10, 20]
```
<a name="_.remove"></a>
###_.remove(array, [predicate], [thisArg]) ⇒ `Array`
Removes all elements from `array` that `predicate` returns truthy for
and returns an array of the removed elements. The predicate is bound to
`thisArg` and invoked with three arguments; (value, index, array).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

**Note:** Unlike `_.filter`, this method mutates `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to modify. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Array` - Returns the new array of removed elements.  
**Example**  
```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) { return n % 2 == 0; });

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
```
<a name="_.tail"></a>
###_.tail(array) ⇒ `Array`
Gets all but the first element of `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |

**Returns**: `Array` - Returns the slice of `array`.  
**Example**  
```js
_.rest([1, 2, 3]);
// => [2, 3]
```
<a name="_.slice"></a>
###_.slice(array, [start], [end]) ⇒ `Array`
Slices `array` from the `start` index up to, but not including, the `end` index.

**Note:** This function is used instead of `Array#slice` to support node lists
in IE < 9 and to ensure dense arrays are returned.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to slice. |
| \[start=0\] | `number` | The start index. |
| \[end=array.length\] | `number` | The end index. |

**Returns**: `Array` - Returns the slice of `array`.  
<a name="_.sortedIndex"></a>
###_.sortedIndex(array, value, [iteratee], [thisArg]) ⇒ `number`
Uses a binary search to determine the lowest index at which a value should
be inserted into a given sorted array in order to maintain the sort order
of the array. If an iteratee function is provided it is invoked for `value`
and each element of `array` to compute their sort ranking. The iteratee
is bound to `thisArg` and invoked with one argument; (value).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to inspect. |
| value | `*` | The value to evaluate. |
| \[iteratee=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `number` - Returns the index at which `value` should be inserted
 into `array`.  
**Example**  
```js
_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 4, 5, 5, 6, 6], 5);
// => 2

var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };

// using an iteratee function
_.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
  return this.data[word];
}, dict);
// => 1

// using "_.pluck" callback shorthand
_.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
// => 1
```
<a name="_.sortedLastIndex"></a>
###_.sortedLastIndex(array, value, [iteratee], [thisArg]) ⇒ `number`
This method is like `_.sortedIndex` except that it returns the highest
index at which a value should be inserted into a given sorted array in
order to maintain the sort order of the array.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to inspect. |
| value | `*` | The value to evaluate. |
| \[iteratee=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `number` - Returns the index at which `value` should be inserted
 into `array`.  
**Example**  
```js
_.sortedLastIndex([4, 4, 5, 5, 6, 6], 5);
// => 4
```
<a name="_.take"></a>
###_.take(array, [n]) ⇒ `Array`
Creates a slice of `array` with `n` elements taken from the beginning.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |
| \[n=1\] | `number` | The number of elements to take. |

**Returns**: `Array` - Returns the slice of `array`.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.take([1, 2, 3], 1);
// => [1]

_.take([1, 2, 3], 2);
// => [1, 2]

_.take([1, 2, 3], 5);
// => [1, 2, 3]

_.take([1, 2, 3], 0);
// => []
```
<a name="_.takeRight"></a>
###_.takeRight(array, [n]) ⇒ `Array`
Creates a slice of `array` with `n` elements taken from the end.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |
| \[n=1\] | `number` | The number of elements to take. |

**Returns**: `Array` - Returns the slice of `array`.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.takeRight([1, 2, 3], 1);
// => [3]

_.takeRight([1, 2, 3], 2);
// => [2, 3]

_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]

_.takeRight([1, 2, 3], 0);
// => []
```
<a name="_.takeRightWhile"></a>
###_.takeRightWhile(array, [predicate], [thisArg]) ⇒ `Array`
Creates a slice of `array` with elements taken from the end. Elements are
taken until `predicate` returns falsey. The predicate is bound to `thisArg`
and invoked with three arguments; (value, index, array).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per element. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Array` - Returns the slice of `array`.  
**Example**  
```js
_.takeRightWhile([1, 2, 3], function(n) { return n > 1; });
// => [2, 3]

var users = [
  { 'user': 'barney',  'employer': 'slate' },
  { 'user': 'fred',    'employer': 'slate', 'blocked': true },
  { 'user': 'pebbles', 'employer': 'na',    'blocked': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.takeRightWhile(users, 'blocked'), 'user');
// => ['fred', 'pebbles']

// using "_.where" callback shorthand
_.pluck(_.takeRightWhile(users, { 'employer': 'na' }), 'user');
// => ['pebbles']
```
<a name="_.takeWhile"></a>
###_.takeWhile(array, [predicate], [thisArg]) ⇒ `Array`
Creates a slice of `array` with elements taken from the beginning. Elements
are taken until `predicate` returns falsey. The predicate is bound to
`thisArg` and invoked with three arguments; (value, index, array).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per element. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Array` - Returns the slice of `array`.  
**Example**  
```js
_.takeWhile([1, 2, 3], function(n) { return n < 3; });
// => [1, 2]

var users = [
  { 'user': 'barney',  'employer': 'slate', 'blocked': true },
  { 'user': 'fred',    'employer': 'slate' },
  { 'user': 'pebbles', 'employer': 'na',    'blocked': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.takeWhile(users, 'blocked'), 'user');
// => ['barney']

// using "_.where" callback shorthand
_.pluck(_.takeWhile(users, { 'employer': 'slate' }), 'user');
// => ['barney', 'fred']
```
<a name="_.union"></a>
###_.union([...arrays]) ⇒ `Array`
Creates an array of unique values, in order, of the provided arrays using
`SameValueZero` for equality comparisons.

**Note:** `SameValueZero` is like strict equality, e.g. `===`, except that
`NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...arrays\] | `Array` | The arrays to inspect. |

**Returns**: `Array` - Returns the new array of combined values.  
**Example**  
```js
_.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
// => [1, 2, 3, 5, 4]
```
<a name="_.unique"></a>
###_.unique(array, [isSorted], [iteratee], [thisArg]) ⇒ `Array`
Creates a duplicate-value-free version of an array using `SameValueZero`
for equality comparisons. Providing `true` for `isSorted` performs a faster
search algorithm for sorted arrays. If an iteratee function is provided it
is invoked for each value in the array to generate the criterion by which
uniqueness is computed. The `iteratee` is bound to `thisArg` and invoked
with three arguments; (value, index, array).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

**Note:** `SameValueZero` is like strict equality, e.g. `===`, except that
`NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to inspect. |
| \[isSorted=false\] | `boolean` | Specify the array is sorted. |
| \[iteratee\] | `function` \| `Object` \| `string` | The function invoked per iteration.  If a property name or object is provided it is used to create a "_.pluck"  or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Array` - Returns the new duplicate-value-free array.  
**Example**  
```js
_.uniq([1, 2, 1]);
// => [1, 2]

// using `isSorted`
_.uniq([1, 1, 2], true);
// => [1, 2]

// using an iteratee function
_.uniq([1, 2.5, 1.5, 2], function(n) { return this.floor(n); }, Math);
// => [1, 2.5]

// using "_.pluck" callback shorthand
_.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```
<a name="_.unzip"></a>
###_.unzip(array) ⇒ `Array`
This method is like `_.zip` except that it accepts an array of grouped
elements and creates an array regrouping the elements to their pre `_.zip`
configuration.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array of grouped elements to process. |

**Returns**: `Array` - Returns the new array of regrouped elements.  
**Example**  
```js
var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]

_.unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]
```
<a name="_.without"></a>
###_.without(array, [...values]) ⇒ `Array`
Creates an array excluding all provided values using `SameValueZero` for
equality comparisons.

**Note:** `SameValueZero` is like strict equality, e.g. `===`, except that
`NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to filter. |
| \[...values\] | `*` | The values to exclude. |

**Returns**: `Array` - Returns the new array of filtered values.  
**Example**  
```js
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]
```
<a name="_.xor"></a>
###_.xor([...arrays]) ⇒ `Array`
Creates an array that is the symmetric difference of the provided arrays.
See [Wikipedia](http://en.wikipedia.org/wiki/Symmetric_difference) for
more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...arrays\] | `Array` | The arrays to inspect. |

**Returns**: `Array` - Returns the new array of values.  
**Example**  
```js
_.xor([1, 2, 3], [5, 2, 1, 4]);
// => [3, 5, 4]

_.xor([1, 2, 5], [2, 3, 5], [3, 4, 5]);
// => [1, 4, 5]
```
<a name="_.zip"></a>
###_.zip([...arrays]) ⇒ `Array`
Creates an array of grouped elements, the first of which contains the first
elements of the given arrays, the second of which contains the second elements
of the given arrays, and so on.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...arrays\] | `Array` | The arrays to process. |

**Returns**: `Array` - Returns the new array of grouped elements.  
**Example**  
```js
_.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
```
<a name="_.object"></a>
###_.object(props, [vals]) ⇒ `Object`
Creates an object composed from arrays of property names and values. Provide
either a single two dimensional array, e.g. `[[key1, value1], [key2, value2]]`
or two arrays, one of property names and one of corresponding values.

| Param | Type | Description |
| ----- | ---- | ----------- |
| props | `Array` | The property names. |
| \[vals=[]\] | `Array` | The property values. |

**Returns**: `Object` - Returns the new object.  
**Example**  
```js
_.zipObject(['fred', 'barney'], [30, 40]);
// => { 'fred': 30, 'barney': 40 }
```
<a name="_.chain"></a>
###_.chain(value) ⇒ `Object`
Creates a `lodash` object that wraps `value` with explicit method
chaining enabled.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to wrap. |

**Returns**: `Object` - Returns the new wrapper object.  
**Example**  
```js
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _.chain(users)
    .sortBy('age')
    .map(function(chr) { return chr.user + ' is ' + chr.age; })
    .first()
    .value();
// => 'pebbles is 1'
```
<a name="_.tap"></a>
###_.tap(value, interceptor, [thisArg]) ⇒ `*`
This method invokes `interceptor` and returns `value`. The interceptor is
bound to `thisArg` and invoked with one argument; (value). The purpose of
this method is to "tap into" a method chain in order to perform operations
on intermediate results within the chain.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to provide to `interceptor`. |
| interceptor | `function` | The function to invoke. |
| \[thisArg\] | `*` | The `this` binding of `interceptor`. |

**Returns**: `*` - Returns `value`.  
**Example**  
```js
_([1, 2, 3])
 .tap(function(array) { array.pop(); })
 .reverse()
 .value();
// => [2, 1]
```
<a name="_.thru"></a>
###_.thru(value, interceptor, [thisArg]) ⇒ `*`
This method is like `_.tap` except that it returns the result of `interceptor`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to provide to `interceptor`. |
| interceptor | `function` | The function to invoke. |
| \[thisArg\] | `*` | The `this` binding of `interceptor`. |

**Returns**: `*` - Returns the result of `interceptor`.  
**Example**  
```js
_([1, 2, 3])
 .last()
 .thru(function(value) { return [value]; })
 .value();
// => [3]
```
<a name="_.runInContext"></a>
###_.runInContext([context]) ⇒ `function`
Create a new pristine `lodash` function using the given `context` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[context=root\] | `Object` | The context object. |

**Returns**: `function` - Returns a new `lodash` function.  
**Example**  
```js
_.mixin({ 'add': function(a, b) { return a + b; } }, false);

var lodash = _.runInContext();
lodash.mixin({ 'sub': function(a, b) { return a - b; } }, false);

_.isFunction(_.add);
// => true

_.isFunction(_.sub);
// => false

lodash.isFunction(lodash.add);
// => false

lodash.isFunction(lodash.sub);
// => true
```

  * [.runInContext([context])](#_.runInContext) ⇒ `function`
    * [~reNative](#_.runInContext..reNative)
    * [~Array](#_.runInContext..Array)
    * [~document](#_.runInContext..document)
    * [~fnToString](#_.runInContext..fnToString)
    * [~hasOwnProperty](#_.runInContext..hasOwnProperty)
    * [~oldDash](#_.runInContext..oldDash)
    * [~toString](#_.runInContext..toString)
    * [~arrayProto](#_.runInContext..arrayProto)
    * [~ArrayBuffer](#_.runInContext..ArrayBuffer)
    * [~Float64Array](#_.runInContext..Float64Array)
    * [~FLOAT64_BYTES_PER_ELEMENT](#_.runInContext..FLOAT64_BYTES_PER_ELEMENT)
    * [~metaMap](#_.runInContext..metaMap)
    * [~ctorByClass](#_.runInContext..ctorByClass)
    * [~nonEnumProps](#_.runInContext..nonEnumProps)

<a name="_.runInContext..reNative"></a>
####runInContext~reNative
Used to detect if a method is native

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..Array"></a>
####runInContext~Array
Native constructor references

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..document"></a>
####runInContext~document
Used to detect DOM support

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..fnToString"></a>
####runInContext~fnToString
Used to resolve the decompiled source of functions

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..hasOwnProperty"></a>
####runInContext~hasOwnProperty
Used to check objects for own properties

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..oldDash"></a>
####runInContext~oldDash
Used to restore the original `_` reference in `_.noConflict`

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..toString"></a>
####runInContext~toString
Used to resolve the internal `[[Class]]` of values

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..arrayProto"></a>
####runInContext~arrayProto
Used for native method references

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..ArrayBuffer"></a>
####runInContext~ArrayBuffer
Native method references

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..Float64Array"></a>
####runInContext~Float64Array
Used to clone array buffers

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..FLOAT64_BYTES_PER_ELEMENT"></a>
####runInContext~FLOAT64_BYTES_PER_ELEMENT
Used as the size, in bytes, of each Float64Array element

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..metaMap"></a>
####runInContext~metaMap
Used to store function metadata

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..ctorByClass"></a>
####runInContext~ctorByClass
Used to lookup a built-in constructor by [[Class]]

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.runInContext..nonEnumProps"></a>
####runInContext~nonEnumProps
Used to avoid iterating over non-enumerable properties in IE < 9

**Scope**: inner member of [runInContext](#_.runInContext)  
<a name="_.chunk"></a>
###_.chunk(array, [size]) ⇒ `Array`
Creates an array of elements split into groups the length of `size`.
If `collection` can't be split evenly, the final chunk will be the remaining
elements.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to process. |
| \[size=1\] | `numer` | The length of each chunk. |

**Returns**: `Array` - Returns the new array containing chunks.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
<a name="_.compact"></a>
###_.compact(array) ⇒ `Array`
Creates an array with all falsey values removed. The values `false`, `null`,
`0`, `""`, `undefined`, and `NaN` are all falsey.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to compact. |

**Returns**: `Array` - Returns the new array of filtered values.  
**Example**  
```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
<a name="_.at"></a>
###_.at(collection, [...props]) ⇒ `Array`
Creates an array of elements corresponding to the specified keys, or indexes,
of the collection. Keys may be specified as individual arguments or as arrays
of keys.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[...props\] | `number` \| `Array.<number>` \| `string` \| `Array.<string>` | The property names  or indexes of elements to pick, specified individually or in arrays. |

**Returns**: `Array` - Returns the new array of picked elements.  
**Example**  
```js
_.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
// => ['a', 'c', 'e']

_.at(['fred', 'barney', 'pebbles'], 0, 2);
// => ['fred', 'pebbles']
```
<a name="_.include"></a>
###_.include(collection, target, [fromIndex]) ⇒ `boolean`
Checks if `value` is present in `collection` using  `SameValueZero` for
equality comparisons. If `fromIndex` is negative, it is used as the offset
from the end of the collection.

**Note:** `SameValueZero` is like strict equality, e.g. `===`, except that
`NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to search. |
| target | `*` | The value to check for. |
| \[fromIndex=0\] | `number` | The index to search from. |

**Returns**: `boolean` - Returns `true` if a matching element is found, else `false`.  
**Example**  
```js
_.contains([1, 2, 3], 1);
// => true

_.contains([1, 2, 3], 1, 2);
// => false

_.contains({ 'user': 'fred', 'age': 40 }, 'fred');
// => true

_.contains('pebbles', 'eb');
// => true
```
<a name="_.difference"></a>
###_.difference(array, [...values]) ⇒ `Array`
Creates an array excluding all values of the provided arrays using
`SameValueZero` for equality comparisons.

**Note:** `SameValueZero` is like strict equality, e.g. `===`, except that
`NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to inspect. |
| \[...values\] | `Array` | The arrays of values to exclude. |

**Returns**: `Array` - Returns the new array of filtered values.  
**Example**  
```js
_.difference([1, 2, 3], [5, 2, 10]);
// => [1, 3]
```
<a name="_.all"></a>
###_.all(collection, [predicate], [thisArg]) ⇒ `boolean`
Checks if `predicate` returns truthy for **all** elements of `collection`.
The predicate is bound to `thisArg` and invoked with three arguments;
(value, index|key, collection).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `boolean` - Returns `true` if all elements pass the predicate check,
 else `false`.  
**Example**  
```js
_.every([true, 1, null, 'yes']);
// => false

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// using "_.pluck" callback shorthand
_.every(users, 'age');
// => true

// using "_.where" callback shorthand
_.every(users, { 'age': 36 });
// => false
```
<a name="_.select"></a>
###_.select(collection, [predicate], [thisArg]) ⇒ `Array`
Iterates over elements of `collection`, returning an array of all elements
`predicate` returns truthy for. The predicate is bound to `thisArg` and
invoked with three arguments; (value, index|key, collection).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Array` - Returns the new filtered array.  
**Example**  
```js
var evens = _.filter([1, 2, 3, 4], function(n) { return n % 2 == 0; });
// => [2, 4]

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40, 'blocked': true }
];

// using "_.pluck" callback shorthand
_.filter(users, 'blocked');
// => [{ 'user': 'fred', 'age': 40, 'blocked': true }]

// using "_.where" callback shorthand
_.filter(users, { 'age': 36 });
// => [{ 'user': 'barney', 'age': 36 }]
```
<a name="_.detect"></a>
###_.detect(collection, [predicate], [thisArg]) ⇒ `*`
Iterates over elements of `collection`, returning the first element
`predicate` returns truthy for. The predicate is bound to `thisArg` and
invoked with three arguments; (value, index|key, collection).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to search. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `*` - Returns the matched element, else `undefined`.  
**Example**  
```js
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40, 'blocked': true },
  { 'user': 'pebbles', 'age': 1 }
];

_.find(users, function(chr) {
  return chr.age < 40;
});
// => { 'user': 'barney', 'age': 36 }

// using "_.where" callback shorthand
_.find(users, { 'age': 1 });
// =>  { 'user': 'pebbles', 'age': 1 }

// using "_.pluck" callback shorthand
_.find(users, 'blocked');
// => { 'user': 'fred', 'age': 40, 'blocked': true }
```
<a name="_.findLast"></a>
###_.findLast(collection, [predicate], [thisArg]) ⇒ `*`
This method is like `_.find` except that it iterates over elements of
`collection` from right to left.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to search. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `*` - Returns the matched element, else `undefined`.  
**Example**  
```js
_.findLast([1, 2, 3, 4], function(n) { return n % 2 == 1; });
// => 3
```
<a name="_.findWhere"></a>
###_.findWhere(collection, source) ⇒ `*`
Performs a deep comparison between each element in `collection` and the
source object, returning the first element that has equivalent property
values.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to search. |
| source | `Object` | The object of property values to match. |

**Returns**: `*` - Returns the matched element, else `undefined`.  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36, 'employer': 'slate' },
  { 'user': 'fred',   'age': 40, 'employer': 'slate' }
];

_.findWhere(users, { 'employer': 'slate' });
// => { 'user': 'barney', 'age': 36, 'employer': 'slate' }

_.findWhere(users, { 'age': 40 });
// =>  { 'user': 'fred', 'age': 40, 'employer': 'slate' }
```
<a name="_.each"></a>
###_.each(collection, [iteratee], [thisArg]) ⇒ `Array | Object | string`
Iterates over elements of `collection` invoking `iteratee` for each element.
The `iteratee` is bound to `thisArg` and invoked with three arguments;
(value, index|key, collection). Iterator functions may exit iteration early
by explicitly returning `false`.

**Note:** As with other "Collections" methods, objects with a `length` property
are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
may be used for object iteration.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee=identity\] | `function` | The function invoked per iteration. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Array` | `Object` | `string` - Returns `collection`.  
**Example**  
```js
_([1, 2, 3]).forEach(function(n) { console.log(n); });
// => logs each value from left to right and returns the array

_.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(n, key) { console.log(n, key); });
// => logs each value-key pair and returns the object (iteration order is not guaranteed)
```
<a name="_.eachRight"></a>
###_.eachRight(collection, [iteratee], [thisArg]) ⇒ `Array | Object | string`
This method is like `_.forEach` except that it iterates over elements of
`collection` from right to left.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee=identity\] | `function` | The function invoked per iteration. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Array` | `Object` | `string` - Returns `collection`.  
**Example**  
```js
_([1, 2, 3]).forEachRight(function(n) { console.log(n); }).join(',');
// => logs each value from right to left and returns the array
```
<a name="_.drop"></a>
###_.drop(array, [n]) ⇒ `Array`
Creates a slice of `array` with `n` elements dropped from the beginning.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |
| \[n=1\] | `number` | The number of elements to drop. |

**Returns**: `Array` - Returns the slice of `array`.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.drop([1, 2, 3], 1);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```
<a name="_.dropRight"></a>
###_.dropRight(array, [n]) ⇒ `Array`
Creates a slice of `array` with `n` elements dropped from the end.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |
| \[n=1\] | `number` | The number of elements to drop. |

**Returns**: `Array` - Returns the slice of `array`.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.dropRight([1, 2, 3], 1);
// => [1, 2]

_.dropRight([1, 2, 3], 2);
// => [1]

_.dropRight([1, 2, 3], 5);
// => []

_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```
<a name="_.invoke"></a>
###_.invoke(collection, methodName, [...args]) ⇒ `Array`
Invokes the method named by `methodName` on each element in the collection,
returning an array of the results of each invoked method. Any additional
arguments are provided to each invoked method. If `methodName` is a function
it is invoked for, and `this` bound to, each element in the collection.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| methodName | `function` \| `string` | The name of the method to invoke or  the function invoked per iteration. |
| \[...args\] | `*` | The arguments to invoke the method with. |

**Returns**: `Array` - Returns the array of results.  
**Example**  
```js
_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]

_.invoke([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```
<a name="_.collect"></a>
###_.collect(collection, [iteratee], [thisArg]) ⇒ `Array`
Creates an array of values by running each element in the collection through
`iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
arguments; (value, index|key, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Array` - Returns the new mapped array.  
**Example**  
```js
_.map([1, 2, 3], function(n) { return n * 3; });
// => [3, 6, 9]

_.map({ 'one': 1, 'two': 2, 'three': 3 }, function(n) { return n * 3; });
// => [3, 6, 9] (iteration order is not guaranteed)

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// using "_.pluck" callback shorthand
_.map(users, 'user');
// => ['barney', 'fred']
```
<a name="_.max"></a>
###_.max(collection, [iteratee], [thisArg]) ⇒ `*`
Retrieves the maximum value of `collection`. If the collection is empty
or falsey `-Infinity` is returned. If an iteratee function is provided it
is invoked for each value in the collection to generate the criterion by
which the value is ranked. The `iteratee` is bound to `thisArg` and invoked
with three arguments; (value, index, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee\] | `function` \| `Object` \| `string` | The function invoked per iteration.  If a property name or object is provided it is used to create a "_.pluck"  or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `*` - Returns the maximum value.  
**Example**  
```js
_.max([4, 2, 8, 6]);
// => 8

_.max([]);
// => -Infinity

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

_.max(users, function(chr) { return chr.age; });
// => { 'user': 'fred', 'age': 40 };

// using "_.pluck" callback shorthand
_.max(users, 'age');
// => { 'user': 'fred', 'age': 40 };
```
<a name="_.min"></a>
###_.min(collection, [iteratee], [thisArg]) ⇒ `*`
Retrieves the minimum value of `collection`. If the collection is empty
or falsey `Infinity` is returned. If an iteratee function is provided it
is invoked for each value in the collection to generate the criterion by
which the value is ranked. The `iteratee` is bound to `thisArg` and invoked
with three arguments; (value, index, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee\] | `function` \| `Object` \| `string` | The function invoked per iteration.  If a property name or object is provided it is used to create a "_.pluck"  or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `*` - Returns the minimum value.  
**Example**  
```js
_.min([4, 2, 8, 6]);
// => 2

_.min([]);
// => Infinity

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

_.min(users, function(chr) { return chr.age; });
// => { 'user': 'barney', 'age': 36 };

// using "_.pluck" callback shorthand
_.min(users, 'age');
// => { 'user': 'barney', 'age': 36 };
```
<a name="_.dropRightWhile"></a>
###_.dropRightWhile(array, [predicate], [thisArg]) ⇒ `Array`
Creates a slice of `array` excluding elements dropped from the end.
Elements are dropped until `predicate` returns falsey. The predicate is
bound to `thisArg` and invoked with three arguments; (value, index, array).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per element. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Array` - Returns the slice of `array`.  
**Example**  
```js
_.dropRightWhile([1, 2, 3], function(n) { return n > 1; });
// => [1]

var users = [
  { 'user': 'barney',  'employer': 'slate' },
  { 'user': 'fred',    'employer': 'slate', 'blocked': true },
  { 'user': 'pebbles', 'employer': 'na',    'blocked': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.dropRightWhile(users, 'blocked'), 'user');
// => ['barney']

// using "_.where" callback shorthand
_.pluck(_.dropRightWhile(users, { 'employer': 'na' }), 'user');
// => ['barney', 'fred']
```
<a name="_.pluck"></a>
###_.pluck(collection, key) ⇒ `Array`
Retrieves the value of a specified property from all elements in the collection.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| key | `string` | The name of the property to pluck. |

**Returns**: `Array` - Returns the property values.  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

_.pluck(users, 'user');
// => ['barney', 'fred']

var userIndex = _.indexBy(users, 'user');
_.pluck(userIndex, 'age');
// => [36, 40] (iteration order is not guaranteed)
```
<a name="_.foldr"></a>
###_.foldr(collection, [iteratee], [accumulator], [thisArg]) ⇒ `*`
This method is like `_.reduce` except that it iterates over elements of
`collection` from right to left.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee=identity\] | `function` | The function invoked per iteration. |
| \[accumulator\] | `*` | The initial value. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `*` - Returns the accumulated value.  
**Example**  
```js
var array = [[0, 1], [2, 3], [4, 5]];
_.reduceRight(array, function(flattened, other) { return flattened.concat(other); }, []);
// => [4, 5, 2, 3, 0, 1]
```
<a name="_.reject"></a>
###_.reject(collection, [predicate], [thisArg]) ⇒ `Array`
The opposite of `_.filter`; this method returns the elements of `collection`
that `predicate` does **not** return truthy for.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Array` - Returns the new filtered array.  
**Example**  
```js
var odds = _.reject([1, 2, 3, 4], function(n) { return n % 2 == 0; });
// => [1, 3]

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40, 'blocked': true }
];

// using "_.pluck" callback shorthand
_.reject(users, 'blocked');
// => [{ 'user': 'barney', 'age': 36 }]

// using "_.where" callback shorthand
_.reject(users, { 'age': 36 });
// => [{ 'user': 'fred', 'age': 40, 'blocked': true }]
```
<a name="_.sample"></a>
###_.sample(collection, [n]) ⇒ `*`
Retrieves a random element or `n` random elements from a collection.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to sample. |
| \[n\] | `number` | The number of elements to sample. |

**Returns**: `*` - Returns the random sample(s).  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.sample([1, 2, 3, 4]);
// => 2

_.sample([1, 2, 3, 4], 2);
// => [3, 1]
```
<a name="_.shuffle"></a>
###_.shuffle(collection) ⇒ `Array`
Creates an array of shuffled values, using a version of the Fisher-Yates
shuffle. See [Wikipedia](http://en.wikipedia.org/wiki/Fisher-Yates_shuffle)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to shuffle. |

**Returns**: `Array` - Returns the new shuffled array.  
**Example**  
```js
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```
<a name="_.size"></a>
###_.size(collection) ⇒ `number`
Gets the size of the collection by returning `collection.length` for
array-like values or the number of own enumerable properties for objects.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to inspect. |

**Returns**: `number` - Returns `collection.length` or number of own enumerable properties.  
**Example**  
```js
_.size([1, 2]);
// => 2

_.size({ 'one': 1, 'two': 2, 'three': 3 });
// => 3

_.size('pebbles');
// => 7
```
<a name="_.any"></a>
###_.any(collection, [predicate], [thisArg]) ⇒ `boolean`
Checks if `predicate` returns truthy for **any** element of `collection`.
The function returns as soon as it finds a passing value and does not iterate
over the entire collection. The predicate is bound to `thisArg` and invoked
with three arguments; (value, index|key, collection).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `boolean` - Returns `true` if any element passes the predicate check,
 else `false`.  
**Example**  
```js
_.some([null, 0, 'yes', false], Boolean);
// => true

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40, 'blocked': true }
];

// using "_.pluck" callback shorthand
_.some(users, 'blocked');
// => true

// using "_.where" callback shorthand
_.some(users, { 'age': 1 });
// => false
```
<a name="_.sortBy"></a>
###_.sortBy(collection, [iteratee], [thisArg]) ⇒ `Array`
Creates an array of elements, sorted in ascending order by the results of
running each element in a collection through `iteratee`. This method performs
a stable sort, that is, it preserves the original sort order of equal elements.
The `iteratee` is bound to `thisArg` and invoked with three arguments;
(value, index|key, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an array of property names is provided for `iteratee` the collection
is sorted by each property value.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to iterate over. |
| \[iteratee=identity\] | `Array` \| `function` \| `Object` \| `string` | The function  invoked per iteration. If property name(s) or an object is provided it  is used to create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Array` - Returns the new sorted array.  
**Example**  
```js
_.sortBy([1, 2, 3], function(n) { return Math.sin(n); });
// => [3, 1, 2]

_.sortBy([1, 2, 3], function(n) { return this.sin(n); }, Math);
// => [3, 1, 2]

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'barney',  'age': 26 },
  { 'user': 'fred',    'age': 30 }
];

// using "_.pluck" callback shorthand
_.map(_.sortBy(users, 'age'), _.values);
// => [['barney', 26], ['fred', 30], ['barney', 36], ['fred', 40]]

// sorting by multiple properties
_.map(_.sortBy(users, ['user', 'age']), _.values);
// = > [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
```
<a name="_.toArray"></a>
###_.toArray(collection) ⇒ `Array`
Converts `collection` to an array.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to convert. |

**Returns**: `Array` - Returns the new converted array.  
**Example**  
```js
(function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
// => [2, 3, 4]
```
<a name="_.where"></a>
###_.where(collection, source) ⇒ `Array`
Performs a deep comparison between each element in `collection` and the
source object, returning an array of all elements that have equivalent
property values.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | `Array` \| `Object` \| `string` | The collection to search. |
| source | `Object` | The object of property values to match. |

**Returns**: `Array` - Returns the new filtered array.  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36, 'employer': 'slate', 'pets': ['hoppy'] },
  { 'user': 'fred',   'age': 40, 'employer': 'slate', 'pets': ['baby puss', 'dino'] }
];

_.pluck(_.where(users, { 'age': 36 }), 'user');
// => ['barney']

_.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
// => ['fred']

_.pluck(_.where(users, { 'employer': 'slate' }), 'user');
// => ['barney', 'fred']
```
<a name="_.after"></a>
###_.after(n, func) ⇒ `function`
The opposite of `_.before`; this method creates a function that invokes
`func` only after it is called `n` times.

| Param | Type | Description |
| ----- | ---- | ----------- |
| n | `number` | The number of calls before `func` is invoked. |
| func | `function` | The function to restrict. |

**Returns**: `function` - Returns the new restricted function.  
**Example**  
```js
var saves = ['profile', 'settings'];

var done = _.after(saves.length, function() {
  console.log('done saving!');
});

_.forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});
// => logs 'done saving!' after the two async saves have completed
```
<a name="_.before"></a>
###_.before(n, func) ⇒ `function`
Creates a function that invokes `func`, with the `this` binding and arguments
of the created function, while it is called less than `n` times. Subsequent
calls to the created function return the result of the last `func` invocation.

| Param | Type | Description |
| ----- | ---- | ----------- |
| n | `number` | The number of calls at which `func` is no longer invoked. |
| func | `function` | The function to restrict. |

**Returns**: `function` - Returns the new restricted function.  
**Example**  
```js
jQuery('#add').on('click', _.before(5, addContactToList));
// => allows adding up to 4 contacts to the list
```
<a name="_.bind"></a>
###_.bind(func, [thisArg], [...args]) ⇒ `function`
Creates a function that invokes `func` with the `this` binding of `thisArg`
and prepends any additional `bind` arguments to those provided to the bound
function.

**Note:** Unlike native `Function#bind` this method does not set the `length`
property of bound functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to bind. |
| \[thisArg\] | `*` | The `this` binding of `func`. |
| \[...args\] | `*` | The arguments to be partially applied. |

**Returns**: `function` - Returns the new bound function.  
**Example**  
```js
var func = function(greeting) {
  return greeting + ' ' + this.user;
};

func = _.bind(func, { 'user': 'fred' }, 'hi');
func();
// => 'hi fred'
```
<a name="_.bindAll"></a>
###_.bindAll(object, [...methodNames]) ⇒ `Object`
Binds methods of an object to the object itself, overwriting the existing
method. Method names may be specified as individual arguments or as arrays
of method names. If no method names are provided all enumerable function
properties, own and inherited, of `object` are bound.

**Note:** This method does not set the `length` property of bound functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to bind and assign the bound methods to. |
| \[...methodNames\] | `string` \| `Array.<string>` | The object method names to bind,  specified as individual method names or arrays of method names. |

**Returns**: `Object` - Returns `object`.  
**Example**  
```js
var view = {
  'label': 'docs',
  'onClick': function() { console.log('clicked ' + this.label); }
};

_.bindAll(view);
jQuery('#docs').on('click', view.onClick);
// => logs 'clicked docs' when the element is clicked
```
<a name="_.bindKey"></a>
###_.bindKey(object, key, [...args]) ⇒ `function`
Creates a function that invokes the method at `object[key]` and prepends
any additional `bindKey` arguments to those provided to the bound function.
This method differs from `_.bind` by allowing bound functions to reference
methods that may be redefined or don't yet exist.
See [Peter Michaux's article](http://michaux.ca/articles/lazy-function-definition-pattern)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object the method belongs to. |
| key | `string` | The key of the method. |
| \[...args\] | `*` | The arguments to be partially applied. |

**Returns**: `function` - Returns the new bound function.  
**Example**  
```js
var object = {
  'user': 'fred',
  'greet': function(greeting) {
    return greeting + ' ' + this.user;
  }
};

var func = _.bindKey(object, 'greet', 'hi');
func();
// => 'hi fred'

object.greet = function(greeting) {
  return greeting + 'ya ' + this.user + '!';
};

func();
// => 'hiya fred!'
```
<a name="_.curry"></a>
###_.curry(func, [arity]) ⇒ `function`
Creates a function that accepts one or more arguments of `func` that when
called either invokes `func` returning its result if all `func` arguments
have been provided, or returns a function that accepts one or more of the
remaining `func` arguments, and so on. The arity of `func` can be specified
if `func.length` is not sufficient.

**Note:** This method does not set the `length` property of curried functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to curry. |
| \[arity=func.length\] | `number` | The arity of `func`. |

**Returns**: `function` - Returns the new curried function.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
var curried = _.curry(function(a, b, c) {
  console.log([a, b, c]);
});

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]
```
<a name="_.curryRight"></a>
###_.curryRight(func, [arity]) ⇒ `function`
This method is like `_.curry` except that arguments are applied to `func`
in the manner of `_.partialRight` instead of `_.partial`.

**Note:** This method does not set the `length` property of curried functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to curry. |
| \[arity=func.length\] | `number` | The arity of `func`. |

**Returns**: `function` - Returns the new curried function.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
var curried = _.curryRight(function(a, b, c) {
  console.log([a, b, c]);
});

curried(3)(2)(1);
// => [1, 2, 3]

curried(2, 3)(1);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]
```
<a name="_.debounce"></a>
###_.debounce(func, wait, [options]) ⇒ `function`
Creates a function that delays invoking `func` until after `wait` milliseconds
have elapsed since the last time it was invoked. The created function comes
with a `cancel` method to cancel delayed invocations. Provide an options
object to indicate that `func` should be invoked on the leading and/or
trailing edge of the `wait` timeout. Subsequent calls to the debounced
function return the result of the last `func` invocation.

**Note:** If `leading` and `trailing` options are `true`, `func` is invoked
on the trailing edge of the timeout only if the the debounced function is
invoked more than once during the `wait` timeout.

See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
for details over the differences between `_.debounce` and `_.throttle`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to debounce. |
| wait | `number` | The number of milliseconds to delay. |
| \[options\] | `Object` | The options object. |
| \[options.leading=false\] | `boolean` | Specify invoking on the leading  edge of the timeout. |
| \[options.maxWait\] | `number` | The maximum time `func` is allowed to be  delayed before it is invoked. |
| \[options.trailing=true\] | `boolean` | Specify invoking on the trailing  edge of the timeout. |

**Returns**: `function` - Returns the new debounced function.  
**Example**  
```js
// avoid costly calculations while the window size is in flux
jQuery(window).on('resize', _.debounce(calculateLayout, 150));

// invoke `sendMail` when the click event is fired, debouncing subsequent calls
jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
});

// ensure `batchLog` is invoked once after 1 second of debounced calls
var source = new EventSource('/stream');
jQuery(source).on('message', _.debounce(batchLog, 250, {
  'maxWait': 1000
}, false);

// cancel a debounced call
var todoChanges = _.debounce(batchLog, 1000);
Object.observe(models.todo, todoChanges);

Object.observe(models, function(changes) {
  if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
    todoChanges.cancel();
  }
}, ['delete']);

// ...at some point `models.todo` is changed
models.todo.completed = true;

// ...before 1 second has passed `models.todo` is deleted
// which cancels the debounced `todoChanges` call
delete models.todo;
```
<a name="_.defer"></a>
###_.defer(func, [...args]) ⇒ `number`
Defers invoking the `func` until the current call stack has cleared. Any
additional arguments are provided to `func` when it is invoked.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to defer. |
| \[...args\] | `*` | The arguments to invoke the function with. |

**Returns**: `number` - Returns the timer id.  
**Example**  
```js
_.defer(function(text) { console.log(text); }, 'deferred');
// logs 'deferred' after one or more milliseconds
```
<a name="_.delay"></a>
###_.delay(func, wait, [...args]) ⇒ `number`
Invokes `func` after `wait` milliseconds. Any additional arguments are
provided to `func` when it is invoked.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to delay. |
| wait | `number` | The number of milliseconds to delay invocation. |
| \[...args\] | `*` | The arguments to invoke the function with. |

**Returns**: `number` - Returns the timer id.  
**Example**  
```js
_.delay(function(text) { console.log(text); }, 1000, 'later');
// => logs 'later' after one second
```
<a name="_.flow"></a>
###_.flow([...funcs]) ⇒ `function`
Creates a function that invokes the provided functions with the `this`
binding of the created function, where each successive invocation is
supplied the return value of the previous.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...funcs\] | `function` | Functions to invoke. |

**Returns**: `function` - Returns the new function.  
**Example**  
```js
function add(x, y) {
  return x + y;
}

function square(n) {
  return n * n;
}

var addSquare = _.flow(add, square);
addSquare(1, 2);
// => 9
```
<a name="_.memoize"></a>
###_.memoize(func, [resolver]) ⇒ `function`
Creates a function that memoizes the result of `func`. If `resolver` is
provided it determines the cache key for storing the result based on the
arguments provided to the memoized function. By default, the first argument
provided to the memoized function is used as the cache key. The `func` is
invoked with the `this` binding of the memoized function. The result cache
is exposed as the `cache` property on the memoized function.

The mechanism by which memoize caches results can be customized by setting
a value for the `_.memoize.Cache` property. The objects created by this
constructor must (partially) implement the `Map` interface with `get`,
`set` and `has` functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to have its output memoized. |
| \[resolver\] | `function` | The function to resolve the cache key. |

**Returns**: `function` - Returns the new memoizing function.  
**Example**  
```js
var fibonacci = _.memoize(function(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(9)
// => 34

// modifying the result cache
var upperCase = _.memoize(function(string) {
  return string.toUpperCase();
});

upperCase('fred');
// => 'FRED'

upperCase.cache.fred = 'BARNEY'
upperCase('fred');
// => 'BARNEY'

// Using a custom memoize cache
_.memoize.Cache = Map;

// Using a hand-cranked memoize cache wrapper.
function MyCache() {
  this.__wrapper__ = [];
}

_.extend(MyCache.prototype, {
  get: function(key) {
    return _.find(this.__wrapper__, function(cached) {
      return _.identity(key) === cached.key;
    }).value;
  },
  set: function(key, value) {
    this.__wrapper__.push({ key: key, value: value });
    return this;
  },
  has: function(key) {
    return _.some(this.__wrapper__, function(cached) {
      return _.identity(key) === cached;
    });
  }
});

_.memoize.Cache = MyCache;
```
<a name="_.negate"></a>
###_.negate(predicate) ⇒ `function`
Creates a function that negates the result of the predicate `func`. The
`func` predicate is invoked with the `this` binding and arguments of the
created function.

| Param | Type | Description |
| ----- | ---- | ----------- |
| predicate | `function` | The predicate to negate. |

**Returns**: `function` - Returns the new function.  
**Example**  
```js
function isEven(n) {
  return n % 2 == 0;
}

_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]
```
<a name="_.dropWhile"></a>
###_.dropWhile(array, [predicate], [thisArg]) ⇒ `Array`
Creates a slice of `array` excluding elements dropped from the beginning.
Elements are dropped until `predicate` returns falsey. The predicate is
bound to `thisArg` and invoked with three arguments; (value, index, array).

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per element. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Array` - Returns the slice of `array`.  
**Example**  
```js
_.dropWhile([1, 2, 3], function(n) { return n < 3; });
// => [3]

var users = [
  { 'user': 'barney',  'employer': 'slate', 'blocked': true },
  { 'user': 'fred',    'employer': 'slate' },
  { 'user': 'pebbles', 'employer': 'na',    'blocked': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.dropWhile(users, 'blocked'), 'user');
// => ['fred', 'pebbles']

// using "_.where" callback shorthand
_.pluck(_.dropWhile(users, { 'employer': 'slate' }), 'user');
// => ['pebbles']
```
<a name="_.partial"></a>
###_.partial(func, [...args]) ⇒ `function`
Creates a function that invokes `func` with `partial` arguments prepended
to those provided to the new function. This method is similar to `_.bind`
except it does **not** alter the `this` binding.

**Note:** This method does not set the `length` property of partially
applied functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to partially apply arguments to. |
| \[...args\] | `*` | The arguments to be partially applied. |

**Returns**: `function` - Returns the new partially applied function.  
**Example**  
```js
var greet = function(greeting, name) { return greeting + ' ' + name; };
var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'
```
<a name="_.partialRight"></a>
###_.partialRight(func, [...args]) ⇒ `function`
This method is like `_.partial` except that partially applied arguments
are appended to those provided to the new function.

**Note:** This method does not set the `length` property of partially applied
functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to partially apply arguments to. |
| \[...args\] | `*` | The arguments to be partially applied. |

**Returns**: `function` - Returns the new partially applied function.  
**Example**  
```js
var greet = function(greeting, name) { return greeting + ' ' + name; };
var greetFred = _.partialRight(greet, 'fred');
greetFred('hello');
// => 'hello fred'

// create a deep `_.defaults`
var defaultsDeep = _.partialRight(_.merge, function deep(value, other) {
  return _.merge(value, other, deep);
});

var object = { 'a': { 'b': { 'c': 1 } } },
    source = { 'a': { 'b': { 'c': 2, 'd': 2 } } };

defaultsDeep(object, source);
// => { 'a': { 'b': { 'c': 1, 'd': 2 } } }
```
<a name="_.throttle"></a>
###_.throttle(func, wait, [options]) ⇒ `function`
Creates a function that only invokes `func` at most once per every `wait`
milliseconds. The created function comes with a `cancel` method to cancel
delayed invocations. Provide an options object to indicate that `func`
should be invoked on the leading and/or trailing edge of the `wait` timeout.
Subsequent calls to the throttled function return the result of the last
`func` call.

**Note:** If `leading` and `trailing` options are `true`, `func` is invoked
on the trailing edge of the timeout only if the the throttled function is
invoked more than once during the `wait` timeout.

See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
for details over the differences between `_.throttle` and `_.debounce`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `function` | The function to throttle. |
| wait | `number` | The number of milliseconds to throttle invocations to. |
| \[options\] | `Object` | The options object. |
| \[options.leading=true\] | `boolean` | Specify invoking on the leading  edge of the timeout. |
| \[options.trailing=true\] | `boolean` | Specify invoking on the trailing  edge of the timeout. |

**Returns**: `function` - Returns the new throttled function.  
**Example**  
```js
// avoid excessively updating the position while scrolling
jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
var throttled =  _.throttle(renewToken, 300000, { 'trailing': false })
jQuery('.interactive').on('click', throttled);

// cancel a trailing throttled call
jQuery(window).on('popstate', throttled.cancel);
```
<a name="_.wrap"></a>
###_.wrap(value, wrapper) ⇒ `function`
Creates a function that provides `value` to the wrapper function as its
first argument. Any additional arguments provided to the function are
appended to those provided to the wrapper function. The wrapper is invoked
with the `this` binding of the created function.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to wrap. |
| wrapper | `function` | The wrapper function. |

**Returns**: `function` - Returns the new function.  
**Example**  
```js
var p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'
```
<a name="_.clone"></a>
###_.clone(value, [isDeep], [customizer], [thisArg]) ⇒ `*`
Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
otherwise they are assigned by reference. If `customizer` is provided it is
invoked to produce the cloned values. If `customizer` returns `undefined`
cloning is handled by the method instead. The `customizer` is bound to
`thisArg` and invoked with two argument; (value, index|key).

**Note:** This method is loosely based on the structured clone algorithm. Functions
and DOM nodes are **not** cloned. The enumerable properties of `arguments` objects and
objects created by constructors other than `Object` are cloned to plain `Object` objects.
See the [HTML5 specification](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to clone. |
| \[isDeep=false\] | `boolean` | Specify a deep clone. |
| \[customizer\] | `function` | The function to customize cloning values. |
| \[thisArg\] | `*` | The `this` binding of `customizer`. |

**Returns**: `*` - Returns the cloned value.  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

var shallow = _.clone(users);
shallow[0] === users[0];
// => true

var deep = _.clone(users, true);
deep[0] === users[0];
// => false

_.mixin({
  'clone': _.partialRight(_.clone, function(value) {
    return _.isElement(value) ? value.cloneNode(false) : undefined;
  })
});

var clone = _.clone(document.body);
clone.childNodes.length;
// => 0
```
<a name="_.cloneDeep"></a>
###_.cloneDeep(value, [customizer], [thisArg]) ⇒ `*`
Creates a deep clone of `value`. If `customizer` is provided it is invoked
to produce the cloned values. If `customizer` returns `undefined` cloning
is handled by the method instead. The `customizer` is bound to `thisArg`
and invoked with two argument; (value, index|key).

**Note:** This method is loosely based on the structured clone algorithm. Functions
and DOM nodes are **not** cloned. The enumerable properties of `arguments` objects and
objects created by constructors other than `Object` are cloned to plain `Object` objects.
See the [HTML5 specification](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to deep clone. |
| \[customizer\] | `function` | The function to customize cloning values. |
| \[thisArg\] | `*` | The `this` binding of `customizer`. |

**Returns**: `*` - Returns the deep cloned value.  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

var deep = _.cloneDeep(users);
deep[0] === users[0];
// => false

var view = {
  'label': 'docs',
  'node': element
};

var clone = _.cloneDeep(view, function(value) {
  return _.isElement(value) ? value.cloneNode(true) : undefined;
});

clone.node == view.node;
// => false
```
<a name="_.isArguments"></a>
###_.isArguments(value) ⇒ `boolean`
Checks if `value` is classified as an `arguments` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is an `arguments` object, else `false`.  
**Example**  
```js
(function() { return _.isArguments(arguments); })();
// => true

_.isArguments([1, 2, 3]);
// => false
```
<a name="_.findIndex"></a>
###_.findIndex(array, [predicate], [thisArg]) ⇒ `number`
This method is like `_.find` except that it returns the index of the first
element `predicate` returns truthy for, instead of the element itself.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to search. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `number` - Returns the index of the found element, else `-1`.  
**Example**  
```js
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40, 'blocked': true },
  { 'user': 'pebbles', 'age': 1 }
];

_.findIndex(users, function(chr) {
  return chr.age < 20;
});
// => 2

// using "_.where" callback shorthand
_.findIndex(users, { 'age': 36 });
// => 0

// using "_.pluck" callback shorthand
_.findIndex(users, 'blocked');
// => 1
```
<a name="_.isBoolean"></a>
###_.isBoolean(value) ⇒ `boolean`
Checks if `value` is classified as a boolean primitive or object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is correctly classified, else `false`.  
**Example**  
```js
_.isBoolean(false);
// => true

_.isBoolean(null);
// => false
```
<a name="_.isDate"></a>
###_.isDate(value) ⇒ `boolean`
Checks if `value` is classified as a `Date` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is correctly classified, else `false`.  
**Example**  
```js
_.isDate(new Date);
// => true

_.isDate('Mon April 23 2012');
// => false
```
<a name="_.isElement"></a>
###_.isElement(value) ⇒ `boolean`
Checks if `value` is a DOM element.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is a DOM element, else `false`.  
**Example**  
```js
_.isElement(document.body);
// => true

_.isElement('<body>');
// => false
```
<a name="_.isEmpty"></a>
###_.isEmpty(value) ⇒ `boolean`
Checks if a collection is empty. A value is considered empty unless it is
an array-like value with a length greater than `0` or an object with own
enumerable properties.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `Array` \| `Object` \| `string` | The value to inspect. |

**Returns**: `boolean` - Returns `true` if `value` is empty, else `false`.  
**Example**  
```js
_.isEmpty(null);
// => true

_.isEmpty(true);
// => true

_.isEmpty(1);
// => true

_.isEmpty([1, 2, 3]);
// => false

_.isEmpty({ 'a': 1 });
// => false
```
<a name="_.isEqual"></a>
###_.isEqual(value, other, [customizer], [thisArg]) ⇒ `boolean`
Performs a deep comparison between two values to determine if they are
equivalent. If `customizer` is provided it is invoked to compare values.
If `customizer` returns `undefined` comparisons are handled by the method
instead. The `customizer` is bound to `thisArg` and invoked with three
arguments; (value, other, key).

**Note:** This method supports comparing arrays, booleans, `Date` objects,
numbers, `Object` objects, regexes, and strings. Functions and DOM nodes
are **not** supported. Provide a customizer function to extend support
for comparing other values.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to compare to `other`. |
| other | `*` | The value to compare to `value`. |
| \[customizer\] | `function` | The function to customize comparing values. |
| \[thisArg\] | `*` | The `this` binding of `customizer`. |

**Returns**: `boolean` - Returns `true` if the values are equivalent, else `false`.  
**Example**  
```js
var object = { 'user': 'fred' };
var other = { 'user': 'fred' };

object == other;
// => false

_.isEqual(object, other);
// => true

var words = ['hello', 'goodbye'];
var otherWords = ['hi', 'goodbye'];

_.isEqual(words, otherWords, function() {
  return _.every(arguments, _.bind(RegExp.prototype.test, /^h(?:i|ello)$/)) || undefined;
});
// => true
```
<a name="_.isError"></a>
###_.isError(value) ⇒ `boolean`
Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
`SyntaxError`, `TypeError`, or `URIError` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is an error object, else `false`.  
**Example**  
```js
_.isError(new Error);
// => true

_.isError(Error);
// => false
```
<a name="_.findLastIndex"></a>
###_.findLastIndex(array, [predicate], [thisArg]) ⇒ `number`
This method is like `_.findIndex` except that it iterates over elements
of `collection` from right to left.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to search. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `number` - Returns the index of the found element, else `-1`.  
**Example**  
```js
var users = [
  { 'user': 'barney',  'age': 36, 'blocked': true },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1,  'blocked': true }
];

_.findLastIndex(users, function(chr) {
  return chr.age > 30;
});
// => 1

// using "_.where" callback shorthand
_.findLastIndex(users, { 'age': 36 });
// => 0

// using "_.pluck" callback shorthand
_.findLastIndex(users, 'blocked');
// => 2
```
<a name="_.isFunction"></a>
###_.isFunction(value) ⇒ `boolean`
Checks if `value` is classified as a `Function` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is correctly classified, else `false`.  
**Example**  
```js
_.isFunction(_);
// => true

_.isFunction(/abc/);
// => false
```
<a name="_.isObject"></a>
###_.isObject(value) ⇒ `boolean`
Checks if `value` is the language type of `Object`.
(e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)

**Note:** See the [ES5 spec](http://es5.github.io/#x8) for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is an object, else `false`.  
**Example**  
```js
_.isObject({});
// => true

_.isObject([1, 2, 3]);
// => true

_.isObject(1);
// => false
```
<a name="_.isNaN"></a>
###_.isNaN(value) ⇒ `boolean`
Checks if `value` is `NaN`.

**Note:** This method is not the same as native `isNaN` which returns `true`
for `undefined` and other non-numeric values. See the [ES5 spec](http://es5.github.io/#x15.1.2.4)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is `NaN`, else `false`.  
**Example**  
```js
_.isNaN(NaN);
// => true

_.isNaN(new Number(NaN));
// => true

isNaN(undefined);
// => true

_.isNaN(undefined);
// => false
```
<a name="_.isNative"></a>
###_.isNative(value) ⇒ `boolean`
Checks if `value` is a native function.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is a native function, else `false`.  
**Example**  
```js
_.isNative(Array.prototype.push);
// => true

_.isNative(_);
// => false
```
<a name="_.isNull"></a>
###_.isNull(value) ⇒ `boolean`
Checks if `value` is `null`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is `null`, else `false`.  
**Example**  
```js
_.isNull(null);
// => true

_.isNull(void 0);
// => false
```
<a name="_.isNumber"></a>
###_.isNumber(value) ⇒ `boolean`
Checks if `value` is classified as a `Number` primitive or object.

**Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
as numbers, use the `_.isFinite` method.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is correctly classified, else `false`.  
**Example**  
```js
_.isNumber(8.4);
// => true

_.isNumber(NaN);
// => true

_.isNumber('8.4');
// => false
```
<a name="_.head"></a>
###_.head(array) ⇒ `*`
Gets the first element of `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |

**Returns**: `*` - Returns the first element of `array`.  
**Example**  
```js
_.first([1, 2, 3]);
// => 1

_.first([]);
// => undefined
```
<a name="_.isRegExp"></a>
###_.isRegExp(value) ⇒ `boolean`
Checks if `value` is classified as a `RegExp` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is correctly classified, else `false`.  
**Example**  
```js
_.isRegExp(/abc/);
// => true

_.isRegExp('/abc/');
// => false
```
<a name="_.isString"></a>
###_.isString(value) ⇒ `boolean`
Checks if `value` is classified as a `String` primitive or object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is correctly classified, else `false`.  
**Example**  
```js
_.isString('abc');
// => true

_.isString(1);
// => false
```
<a name="_.isUndefined"></a>
###_.isUndefined(value) ⇒ `boolean`
Checks if `value` is `undefined`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to check. |

**Returns**: `boolean` - Returns `true` if `value` is `undefined`, else `false`.  
**Example**  
```js
_.isUndefined(void 0);
// => true

_.isUndefined(null);
// => false
```
<a name="_.flatten"></a>
###_.flatten(array, [isDeep]) ⇒ `Array`
Flattens a nested array. If `isDeep` is `true` the array is recursively
flattened, otherwise it is only flattened a single level.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to flatten. |
| \[isDeep=false\] | `boolean` | Specify a deep flatten. |

**Returns**: `Array` - Returns the new flattened array.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.flatten([1, [2], [3, [[4]]]]);
// => [1, 2, 3, [[4]]];

// using `isDeep`
_.flatten([1, [2], [3, [[4]]]], true);
// => [1, 2, 3, 4];
```
<a name="_.create"></a>
###_.create(prototype, [properties]) ⇒ `Object`
Creates an object that inherits from the given `prototype` object. If a
`properties` object is provided its own enumerable properties are assigned
to the created object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| prototype | `Object` | The object to inherit from. |
| \[properties\] | `Object` | The properties to assign to the object. |

**Returns**: `Object` - Returns the new object.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, { 'constructor': Circle });

var circle = new Circle;
circle instanceof Circle;
// => true

circle instanceof Shape;
// => true
```
<a name="_.defaults"></a>
###_.defaults(object, [...sources]) ⇒ `Object`
Assigns own enumerable properties of source object(s) to the destination
object for all destination properties that resolve to `undefined`. Once a
property is set, additional defaults of the same property are ignored.

**Note:** See the [documentation example of `_.partialRight`](http://lodash.com/docs#partialRight)
for a deep version of this method.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The destination object. |
| \[...sources\] | `Object` | The source objects. |

**Returns**: `Object` - Returns the destination object.  
**Example**  
```js
_.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred', 'employer': 'slate' });
// => { 'user': 'barney', 'age': 36, 'employer': 'slate' }
```
<a name="_.findKey"></a>
###_.findKey(object, [predicate], [thisArg]) ⇒ `string | undefined`
This method is like `_.findIndex` except that it returns the key of the
first element `predicate` returns truthy for, instead of the element itself.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to search. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `string` | `undefined` - Returns the key of the matched element, else `undefined`.  
**Example**  
```js
var users = {
  'barney': { 'age': 36 },
  'fred': { 'age': 40, 'blocked': true },
  'pebbles': { 'age': 1 }
};

_.findKey(users, function(chr) {
  return chr.age < 40;
});
// => 'barney' (iteration order is not guaranteed)

// using "_.where" callback shorthand
_.findKey(users, { 'age': 1 });
// => 'pebbles'

// using "_.pluck" callback shorthand
_.findKey(users, 'blocked');
// => 'fred'
```
<a name="_.findLastKey"></a>
###_.findLastKey(object, [predicate], [thisArg]) ⇒ `string | undefined`
This method is like `_.findKey` except that it iterates over elements of
a collection in the opposite order.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to search. |
| \[predicate=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `string` | `undefined` - Returns the key of the matched element, else `undefined`.  
**Example**  
```js
var users = {
  'barney': { 'age': 36, 'blocked': true },
  'fred': { 'age': 40 },
  'pebbles': { 'age': 1, 'blocked': true }
};

_.findLastKey(users, function(chr) {
  return chr.age < 40;
});
// => returns `pebbles`, assuming `_.findKey` returns `barney`

// using "_.where" callback shorthand
_.findLastKey(users, { 'age': 40 });
// => 'fred'

// using "_.pluck" callback shorthand
_.findLastKey(users, 'blocked');
// => 'pebbles'
```
<a name="_.forIn"></a>
###_.forIn(object, [iteratee], [thisArg]) ⇒ `Object`
Iterates over own and inherited enumerable properties of an object invoking
`iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
with three arguments; (value, key, object). Iterator functions may exit
iteration early by explicitly returning `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to iterate over. |
| \[iteratee=identity\] | `function` | The function invoked per iteration. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Object` - Returns `object`.  
**Example**  
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.z = 0;

_.forIn(new Shape, function(value, key) {
  console.log(key);
});
// => logs 'x', 'y', and 'z' (iteration order is not guaranteed)
```
<a name="_.forInRight"></a>
###_.forInRight(object, [iteratee], [thisArg]) ⇒ `Object`
This method is like `_.forIn` except that it iterates over properties of
`object` in the opposite order.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to iterate over. |
| \[iteratee=identity\] | `function` | The function invoked per iteration. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Object` - Returns `object`.  
**Example**  
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.z = 0;

_.forInRight(new Shape, function(value, key) {
  console.log(key);
});
// => logs 'z', 'y', and 'x' assuming `_.forIn ` logs 'x', 'y', and 'z'
```
<a name="_.forOwn"></a>
###_.forOwn(object, [iteratee], [thisArg]) ⇒ `Object`
Iterates over own enumerable properties of an object invoking `iteratee`
for each property. The `iteratee` is bound to `thisArg` and invoked with
three arguments; (value, key, object). Iterator functions may exit iteration
early by explicitly returning `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to iterate over. |
| \[iteratee=identity\] | `function` | The function invoked per iteration. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Object` - Returns `object`.  
**Example**  
```js
_.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(n, key) {
  console.log(key);
});
// => logs '0', '1', and 'length' (iteration order is not guaranteed)
```
<a name="_.forOwnRight"></a>
###_.forOwnRight(object, [iteratee], [thisArg]) ⇒ `Object`
This method is like `_.forOwn` except that it iterates over properties of
`object` in the opposite order.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to iterate over. |
| \[iteratee=identity\] | `function` | The function invoked per iteration. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Object` - Returns `object`.  
**Example**  
```js
_.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function(n, key) {
  console.log(key);
});
// => logs 'length', '1', and '0' assuming `_.forOwn` logs '0', '1', and 'length'
```
<a name="_.methods"></a>
###_.methods(object) ⇒ `Array`
Creates an array of function property names from all enumerable properties,
own and inherited, of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to inspect. |

**Returns**: `Array` - Returns the new array of property names.  
**Example**  
```js
_.functions(_);
// => ['all', 'any', 'bind', ...]
```
<a name="_.has"></a>
###_.has(object, key) ⇒ `boolean`
Checks if the specified property name exists as a direct property of `object`,
instead of an inherited property.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to inspect. |
| key | `string` | The name of the property to check. |

**Returns**: `boolean` - Returns `true` if key is a direct property, else `false`.  
**Example**  
```js
_.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
// => true
```
<a name="_.invert"></a>
###_.invert(object, [multiValue]) ⇒ `Object`
Creates an object composed of the inverted keys and values of the given
object. If the given object contains duplicate values, subsequent values
overwrite property assignments of previous values unless `multiValue`
is `true`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to invert. |
| \[multiValue=false\] | `boolean` | Allow multiple values per key. |

**Returns**: `Object` - Returns the new inverted object.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.invert({ 'first': 'fred', 'second': 'barney' });
// => { 'fred': 'first', 'barney': 'second' }

// without `multiValue`
_.invert({ 'first': 'fred', 'second': 'barney', 'third': 'fred' });
// => { 'fred': 'third', 'barney': 'second' }

// with `multiValue`
_.invert({ 'first': 'fred', 'second': 'barney', 'third': 'fred' }, true);
// => { 'fred': ['first', 'third'], 'barney': ['second'] }
```
<a name="_.flattenDeep"></a>
###_.flattenDeep(array) ⇒ `Array`
Recursively flattens a nested array.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to recursively flatten. |

**Returns**: `Array` - Returns the new flattened array.  
**Example**  
```js
_.flattenDeep([1, [2], [3, [[4]]]]);
// => [1, 2, 3, 4];
```
<a name="_.keysIn"></a>
###_.keysIn(object) ⇒ `Array`
Creates an array of the own and inherited enumerable property names of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to inspect. |

**Returns**: `Array` - Returns the array of property names.  
**Example**  
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.z = 0;

_.keysIn(new Shape);
// => ['x', 'y', 'z'] (iteration order is not guaranteed)
```
<a name="_.mapValues"></a>
###_.mapValues(object, [iteratee], [thisArg]) ⇒ `Object`
Creates an object with the same keys as `object` and values generated by
running each own enumerable property of `object` through `iteratee`. The
iteratee function is bound to `thisArg` and invoked with three arguments;
(value, key, object).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to iterate over. |
| \[iteratee=identity\] | `function` \| `Object` \| `string` | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Object` - Returns the new mapped object.  
**Example**  
```js
_.mapValues({ 'a': 1, 'b': 2, 'c': 3} , function(n) { return n * 3; });
// => { 'a': 3, 'b': 6, 'c': 9 }

var users = {
  'fred': { 'user': 'fred', 'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

// using "_.pluck" callback shorthand
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 }
```
<a name="_.indexOf"></a>
###_.indexOf(array, value, [fromIndex]) ⇒ `number`
Gets the index at which the first occurrence of `value` is found in `array`
using `SameValueZero` for equality comparisons. If `fromIndex` is negative,
it is used as the offset from the end of the collection. If `array` is
sorted providing `true` for `fromIndex` performs a faster binary search.

**Note:** `SameValueZero` is like strict equality, e.g. `===`, except that
`NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to search. |
| value | `*` | The value to search for. |
| \[fromIndex=0\] | `boolean` \| `number` | The index to search from or `true`  to perform a binary search on a sorted array. |

**Returns**: `number` - Returns the index of the matched value, else `-1`.  
**Example**  
```js
_.indexOf([1, 2, 3, 1, 2, 3], 2);
// => 1

// using `fromIndex`
_.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
// => 4

// performing a binary search
_.indexOf([4, 4, 5, 5, 6, 6], 5, true);
// => 2
```
<a name="_.omit"></a>
###_.omit(object, [predicate], [thisArg]) ⇒ `Object`
Creates a shallow clone of `object` excluding the specified properties.
Property names may be specified as individual arguments or as arrays of
property names. If `predicate` is provided it is invoked for each property
of `object` omitting the properties `predicate` returns truthy for. The
predicate is bound to `thisArg` and invoked with three arguments;
(value, key, object).

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The source object. |
| \[predicate\] | `string` | The function invoked per  iteration or property names to omit, specified as individual property  names or arrays of property names. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Object` - Returns the new object.  
**Example**  
```js
_.omit({ 'user': 'fred', 'age': 40 }, 'age');
// => { 'user': 'fred' }

_.omit({ 'user': 'fred', 'age': 40 }, function(value) {
  return typeof value == 'number';
});
// => { 'user': 'fred' }
```
<a name="_.pairs"></a>
###_.pairs(object) ⇒ `Array`
Creates a two dimensional array of a given object's key-value pairs,
e.g. `[[key1, value1], [key2, value2]]`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to inspect. |

**Returns**: `Array` - Returns the new array of key-value pairs.  
**Example**  
```js
_.pairs({ 'barney': 36, 'fred': 40 });
// => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
```
<a name="_.pick"></a>
###_.pick(object, [predicate], [thisArg]) ⇒ `Object`
Creates a shallow clone of `object` composed of the specified properties.
Property names may be specified as individual arguments or as arrays of
property names. If `predicate` is provided it is invoked for each property
of `object` picking the properties `predicate` returns truthy for. The
predicate is bound to `thisArg` and invoked with three arguments;
(value, key, object).

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The source object. |
| \[predicate\] | `string` | The function invoked per  iteration or property names to pick, specified as individual property  names or arrays of property names. |
| \[thisArg\] | `*` | The `this` binding of `predicate`. |

**Returns**: `Object` - Returns the new object.  
**Example**  
```js
_.pick({ 'user': 'fred', '_userid': 'fred1' }, 'user');
// => { 'user': 'fred' }

_.pick({ 'user': 'fred', '_userid': 'fred1' }, function(value, key) {
  return key.charAt(0) != '_';
});
// => { 'user': 'fred' }
```
<a name="_.transform"></a>
###_.transform(object, [iteratee], [accumulator], [thisArg]) ⇒ `*`
An alternative to `_.reduce`; this method transforms `object` to a new
`accumulator` object which is the result of running each of its own
enumerable properties through `iteratee`, with each invocation potentially
mutating the `accumulator` object. The `iteratee` is bound to `thisArg`
and invoked with four arguments; (accumulator, value, key, object). Iterator
functions may exit iteration early by explicitly returning `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Array` \| `Object` | The object to iterate over. |
| \[iteratee=identity\] | `function` | The function invoked per iteration. |
| \[accumulator\] | `*` | The custom accumulator value. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `*` - Returns the accumulated value.  
**Example**  
```js
var squares = _.transform([1, 2, 3, 4, 5, 6], function(result, n) {
  n *= n;
  if (n % 2) {
    return result.push(n) < 3;
  }
});
// => [1, 9, 25]

var mapped = _.transform({ 'a': 1, 'b': 2, 'c': 3 }, function(result, n, key) {
  result[key] = n * 3;
});
// => { 'a': 3, 'b': 6, 'c': 9 }
```
<a name="_.values"></a>
###_.values(object) ⇒ `Array`
Creates an array of the own enumerable property values of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to inspect. |

**Returns**: `Array` - Returns the array of property values.  
**Example**  
```js
function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.z = 0;

_.values(new Shape(2, 1));
// => [2, 1] (iteration order is not guaranteed)
```
<a name="_.valuesIn"></a>
###_.valuesIn(object) ⇒ `Array`
Creates an array of the own and inherited enumerable property values
of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to inspect. |

**Returns**: `Array` - Returns the array of property values.  
**Example**  
```js
function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.z = 0;

_.valuesIn(new Shape(2, 1));
// => [2, 1, 0] (iteration order is not guaranteed)
```
<a name="_.initial"></a>
###_.initial(array) ⇒ `Array`
Gets all but the last element of `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |

**Returns**: `Array` - Returns the slice of `array`.  
**Example**  
```js
_.initial([1, 2, 3]);
// => [1, 2]
```
<a name="_.capitalize"></a>
###_.capitalize([string]) ⇒ `string`
Capitalizes the first character of `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to capitalize. |

**Returns**: `string` - Returns the capitalized string.  
**Example**  
```js
_.capitalize('fred');
// => 'Fred'
```
<a name="_.deburr"></a>
###_.deburr([string]) ⇒ `string`
Deburrs `string` by converting latin-1 supplementary letters to basic latin letters.
See [Wikipedia](http://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to deburr. |

**Returns**: `string` - Returns the beburred string.  
**Example**  
```js
_.deburr('déjà vu');
// => 'deja vu'
```
<a name="_.endsWith"></a>
###_.endsWith([string], [target], [position]) ⇒ `boolean`
Checks if `string` ends with a given target string.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to search. |
| \[target\] | `string` | The string to search for. |
| \[position=string.length\] | `number` | The position to search from. |

**Returns**: `boolean` - Returns `true` if the given string ends with the
 target string, else `false`.  
**Example**  
```js
_.endsWith('abc', 'c');
// => true

_.endsWith('abc', 'b');
// => false

_.endsWith('abc', 'b', 2);
// => true
```
<a name="_.escape"></a>
###_.escape([string]) ⇒ `string`
Converts the characters "&", "<", ">", '"', "'", and '`', in `string` to
their corresponding HTML entities.

**Note:** No other characters are escaped. To escape additional characters
use a third-party library like [_he_](http://mths.be/he).

When working with HTML you should always quote attribute values to reduce
XSS vectors. See [Ryan Grove's article](http://wonko.com/post/html-escaping)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to escape. |

**Returns**: `string` - Returns the escaped string.  
**Example**  
```js
_.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'
```
<a name="_.escapeRegExp"></a>
###_.escapeRegExp([string]) ⇒ `string`
Escapes the `RegExp` special characters "\", "^", "$", ".", "|", "?", "*",
"+", "(", ")", "[", "]", "{" and "}" in `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to escape. |

**Returns**: `string` - Returns the escaped string.  
**Example**  
```js
_.escapeRegExp('[lodash](http://lodash.com/)');
// => '\[lodash\]\(http://lodash\.com/\)'
```
<a name="_.intersection"></a>
###_.intersection([...arrays]) ⇒ `Array`
Creates an array of unique values present in all provided arrays using
`SameValueZero` for equality comparisons.

**Note:** `SameValueZero` is like strict equality, e.g. `===`, except that
`NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...arrays\] | `Array` | The arrays to inspect. |

**Returns**: `Array` - Returns the new array of shared values.  
**Example**  
```js
_.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
// => [1, 2]
```
<a name="_.pad"></a>
###_.pad([string], [length], [chars]) ⇒ `string`
Pads `string` on the left and right sides if it is shorter then the given
padding length. The `chars` string may be truncated if the number of padding
characters can't be evenly divided by the padding length.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to pad. |
| \[length=0\] | `number` | The padding length. |
| \[chars=' '\] | `string` | The string used as padding. |

**Returns**: `string` - Returns the padded string.  
**Example**  
```js
_.pad('abc', 8);
// => '  abc   '

_.pad('abc', 8, '_-');
// => '_-abc_-_'

_.pad('abc', 3);
// => 'abc'
```
<a name="_.padLeft"></a>
###_.padLeft([string], [length], [chars]) ⇒ `string`
Pads `string` on the left side if it is shorter then the given padding
length. The `chars` string may be truncated if the number of padding
characters exceeds the padding length.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to pad. |
| \[length=0\] | `number` | The padding length. |
| \[chars=' '\] | `string` | The string used as padding. |

**Returns**: `string` - Returns the padded string.  
**Example**  
```js
_.padLeft('abc', 6);
// => '   abc'

_.padLeft('abc', 6, '_-');
// => '_-_abc'

_.padLeft('abc', 3);
// => 'abc'
```
<a name="_.padRight"></a>
###_.padRight([string], [length], [chars]) ⇒ `string`
Pads `string` on the right side if it is shorter then the given padding
length. The `chars` string may be truncated if the number of padding
characters exceeds the padding length.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to pad. |
| \[length=0\] | `number` | The padding length. |
| \[chars=' '\] | `string` | The string used as padding. |

**Returns**: `string` - Returns the padded string.  
**Example**  
```js
_.padRight('abc', 6);
// => 'abc   '

_.padRight('abc', 6, '_-');
// => 'abc_-_'

_.padRight('abc', 3);
// => 'abc'
```
<a name="_.repeat"></a>
###_.repeat([string], [n]) ⇒ `string`
Repeats the given string `n` times.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to repeat. |
| \[n=0\] | `number` | The number of times to repeat the string. |

**Returns**: `string` - Returns the repeated string.  
**Example**  
```js
_.repeat('*', 3);
// => '***'

_.repeat('abc', 2);
// => 'abcabc'

_.repeat('abc', 0);
// => ''
```
<a name="_.last"></a>
###_.last(array) ⇒ `*`
Gets the last element of `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to query. |

**Returns**: `*` - Returns the last element of `array`.  
**Example**  
```js
_.last([1, 2, 3]);
// => 3
```
<a name="_.startsWith"></a>
###_.startsWith([string], [target], [position]) ⇒ `boolean`
Checks if `string` starts with a given target string.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to search. |
| \[target\] | `string` | The string to search for. |
| \[position=0\] | `number` | The position to search from. |

**Returns**: `boolean` - Returns `true` if the given string starts with the
 target string, else `false`.  
**Example**  
```js
_.startsWith('abc', 'a');
// => true

_.startsWith('abc', 'b');
// => false

_.startsWith('abc', 'b', 1);
// => true
```
<a name="_.template"></a>
###_.template([string], [options]) ⇒ `function`
Creates a compiled template function that can interpolate data properties
in "interpolate" delimiters, HTML-escape interpolated data properties in
"escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
properties may be accessed as free variables in the template. If a setting
object is provided it overrides `_.templateSettings` for the template.

**Note:** In the development build `_.template` utilizes sourceURLs for easier debugging.
See the [HTML5 Rocks article on sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
for more details.

For more information on precompiling templates see
[Lo-Dash's custom builds documentation](http://lodash.com/custom-builds).

For more information on Chrome extension sandboxes see
[Chrome's extensions documentation](http://developer.chrome.com/stable/extensions/sandboxingEval.html).

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The template string. |
| \[options\] | `Object` | The options object. |
| \[options.escape\] | `RegExp` | The HTML "escape" delimiter. |
| \[options.evaluate\] | `RegExp` | The "evaluate" delimiter. |
| \[options.imports\] | `Object` | An object to import into the template as free variables. |
| \[options.interpolate\] | `RegExp` | The "interpolate" delimiter. |
| \[options.sourceURL\] | `string` | The sourceURL of the template's compiled source. |
| \[options.variable\] | `string` | The data object variable name. |

**Returns**: `function` - Returns the compiled template function.  
**param-**: {Object} [otherOptions] Enables the legacy &#x60;options&#x60; param signature.  
**Example**  
```js
// using the "interpolate" delimiter to create a compiled template
var compiled = _.template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'

// using the HTML "escape" delimiter to escape data property values
var compiled = _.template('<b><%- value %></b>');
compiled({ 'value': '<script>' });
// => '<b>&lt;script&gt;</b>'

// using the "evaluate" delimiter to execute JavaScript and generate HTML
var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// using the internal `print` function in "evaluate" delimiters
var compiled = _.template('<% print("hello " + user); %>!');
compiled({ 'user': 'barney' });
// => 'hello barney!'

// using the ES6 delimiter as an alternative to the default "interpolate" delimiter
var compiled = _.template('hello ${ user }!');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'

// using custom template delimiters
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var compiled = _.template('hello {{ user }}!');
compiled({ 'user': 'mustache' });
// => 'hello mustache!'

// using backslashes to treat delimiters as plain text
var compiled = _.template('<%= "\\<%- value %\\>" %>');
compiled({ 'value': 'ignored' });
// => '<%- value %>'

// using the `imports` option to import `jQuery` as `jq`
var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// using the `sourceURL` option to specify a custom sourceURL for the template
var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
compiled(data);
// => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector

// using the `variable` option to ensure a with-statement isn't used in the compiled template
var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
compiled.source;
// => function(data) {
  var __t, __p = '';
  __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
  return __p;
}

// using the `source` property to inline compiled templates for meaningful
// line numbers in error messages and a stack trace
fs.writeFileSync(path.join(cwd, 'jst.js'), '\
  var JST = {\
    "main": ' + _.template(mainText).source + '\
  };\
');
```
<a name="_.trim"></a>
###_.trim([string], [chars]) ⇒ `string`
Removes leading and trailing whitespace or specified characters from `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to trim. |
| \[chars=whitespace\] | `string` | The characters to trim. |

**Returns**: `string` - Returns the trimmed string.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.trim('  fred  ');
// => 'fred'

_.trim('-_-fred-_-', '_-');
// => 'fred'
```
<a name="_.trimLeft"></a>
###_.trimLeft([string], [chars]) ⇒ `string`
Removes leading whitespace or specified characters from `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to trim. |
| \[chars=whitespace\] | `string` | The characters to trim. |

**Returns**: `string` - Returns the trimmed string.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.trimLeft('  fred  ');
// => 'fred  '

_.trimLeft('-_-fred-_-', '_-');
// => 'fred-_-'
```
<a name="_.trimRight"></a>
###_.trimRight([string], [chars]) ⇒ `string`
Removes trailing whitespace or specified characters from `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to trim. |
| \[chars=whitespace\] | `string` | The characters to trim. |

**Returns**: `string` - Returns the trimmed string.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.trimRight('  fred  ');
// => '  fred'

_.trimRight('-_-fred-_-', '_-');
// => '-_-fred'
```
<a name="_.trunc"></a>
###_.trunc([string], [options]) ⇒ `string`
Truncates `string` if it is longer than the given maximum string length.
The last characters of the truncated string are replaced with the omission
string which defaults to "...".

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to truncate. |
| \[options\] | `Object` \| `number` | The options object or maximum string length. |
| \[options.length=30\] | `number` | The maximum string length. |
| \[options.omission='...'\] | `string` | The string to indicate text is omitted. |
| \[options.separator\] | `RegExp` \| `string` | The separator pattern to truncate to. |

**Returns**: `string` - Returns the truncated string.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.trunc('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'

_.trunc('hi-diddly-ho there, neighborino', 24);
// => 'hi-diddly-ho there, n...'

_.trunc('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' });
// => 'hi-diddly-ho there,...'

_.trunc('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ });
//=> 'hi-diddly-ho there...'

_.trunc('hi-diddly-ho there, neighborino', { 'omission': ' [...]' });
// => 'hi-diddly-ho there, neig [...]'
```
<a name="_.unescape"></a>
###_.unescape([string]) ⇒ `string`
The inverse of `_.escape`; this method converts the HTML entities
`&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
corresponding characters.

**Note:** No other HTML entities are unescaped. To unescape additional HTML
entities use a third-party library like [_he_](http://mths.be/he).

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to unescape. |

**Returns**: `string` - Returns the unescaped string.  
**Example**  
```js
_.unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'
```
<a name="_.words"></a>
###_.words([string], [pattern]) ⇒ `Array`
Splits `string` into an array of its words.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | `string` | The string to inspect. |
| \[pattern\] | `RegExp` \| `string` | The pattern to match words. |

**Returns**: `Array` - Returns the words of `string`.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']

_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
```
<a name="_.attempt"></a>
###_.attempt(func) ⇒ `*`
Attempts to invoke `func`, returning either the result or the caught
error object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | `*` | The function to attempt. |

**Returns**: `*` - Returns the `func` result or error object.  
**Example**  
```js
// avoid throwing errors for invalid selectors
var elements = _.attempt(function() {
  return document.querySelectorAll(selector);
});

if (_.isError(elements)) {
  elements = [];
}
```
<a name="_.iteratee"></a>
###_.iteratee([func], [thisArg]) ⇒ `function`
Creates a function bound to an optional `thisArg`. If `func` is a property
name the created callback returns the property value for a given element.
If `func` is an object the created callback returns `true` for elements
that contain the equivalent object properties, otherwise it returns `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[func=identity\] | `*` | The value to convert to a callback. |
| \[thisArg\] | `*` | The `this` binding of the created callback. |

**Returns**: `function` - Returns the new function.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// wrap to create custom callback shorthands
_.callback = _.wrap(_.callback, function(callback, func, thisArg) {
  var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
  if (!match) {
    return callback(func, thisArg);
  }
  return function(object) {
    return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
  };
});

_.filter(users, 'age__gt38');
// => [{ 'user': 'fred', 'age': 40 }]
```
<a name="_.constant"></a>
###_.constant(value) ⇒ `function`
Creates a function that returns `value`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | The value to return from the new function. |

**Returns**: `function` - Returns the new function.  
**Example**  
```js
var object = { 'user': 'fred' };
var getter = _.constant(object);
getter() === object;
// => true
```
<a name="_.identity"></a>
###_.identity(value) ⇒ `*`
This method returns the first argument provided to it.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `*` | Any value. |

**Returns**: `*` - Returns `value`.  
**Example**  
```js
var object = { 'user': 'fred' };
_.identity(object) === object;
// => true
```
<a name="_.matches"></a>
###_.matches(source) ⇒ `function`
Creates a "_.where" style predicate function which performs a deep comparison
between a given object and the `source` object, returning `true` if the given
object has equivalent property values, else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| source | `Object` | The object of property values to match. |

**Returns**: `function` - Returns the new function.  
**Example**  
```js
var users = [
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

var matchesAge = _.matches({ 'age': 36 });

_.filter(users, matchesAge);
// => [{ 'user': 'barney', 'age': 36 }]

_.find(users, matchesAge);
// => { 'user': 'barney', 'age': 36 }
```
<a name="_.mixin"></a>
###_.mixin([object], source, [options]) ⇒ `function | Object`
Adds all own enumerable function properties of a source object to the
destination object. If `object` is a function then methods are added to
its prototype as well.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[object=this\] | `function` \| `Object` | object The destination object. |
| source | `Object` | The object of functions to add. |
| \[options\] | `Object` | The options object. |
| \[options.chain=true\] | `boolean` | Specify whether the functions added  are chainable. |

**Returns**: `function` | `Object` - Returns `object`.  
**Example**  
```js
function vowels(string) {
  return _.filter(string, function(v) {
    return /[aeiou]/i.test(v);
  });
}

_.mixin({ 'vowels': vowels });
_.vowels('fred');
// => ['e']

_('fred').vowels().value();
// => ['e']

_.mixin({ 'vowels': vowels }, { 'chain': false });
_('fred').vowels();
// => ['e']
```
<a name="_.noConflict"></a>
###_.noConflict() ⇒ `function`
Reverts the `_` variable to its previous value and returns a reference to
the `lodash` function.

**Returns**: `function` - Returns the `lodash` function.  
**Example**  
```js
var lodash = _.noConflict();
```
<a name="_.noop"></a>
###_.noop()
A no-operation function.

**Example**  
```js
var object = { 'user': 'fred' };
_.noop(object) === undefined;
// => true
```
<a name="_.lastIndexOf"></a>
###_.lastIndexOf(array, value, [fromIndex]) ⇒ `number`
This method is like `_.indexOf` except that it iterates over elements of
`array` from right to left.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | `Array` | The array to search. |
| value | `*` | The value to search for. |
| \[fromIndex=array.length-1\] | `boolean` \| `number` | The index to search from  or `true` to perform a binary search on a sorted array. |

**Returns**: `number` - Returns the index of the matched value, else `-1`.  
**Example**  
```js
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// => 4

// using `fromIndex`
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
// => 1

// performing a binary search
_.lastIndexOf([4, 4, 5, 5, 6, 6], 5, true);
// => 3
```
<a name="_.parseInt"></a>
###_.parseInt(value, [radix]) ⇒ `number`
Converts `value` to an integer of the specified radix. If `radix` is
`undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
in which case a `radix` of `16` is used.

**Note:** This method avoids differences in native ES3 and ES5 `parseInt`
implementations. See the [ES5 spec](http://es5.github.io/#E) for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | `string` | The value to parse. |
| \[radix\] | `number` | The radix to interpret `value` by. |

**Returns**: `number` - Returns the converted integer.  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.parseInt('08');
// => 8
```
<a name="_.property"></a>
###_.property(key) ⇒ `function`
Creates a "_.pluck" style function which returns the `key` value of a
given object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| key | `string` | The name of the property to retrieve. |

**Returns**: `function` - Returns the new function.  
**Example**  
```js
var users = [
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

var getName = _.property('user');

_.map(users, getName);
// => ['barney', 'fred']

_.sortBy(users, getName);
// => [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred',   'age': 40 }]
```
<a name="_.random"></a>
###_.random([min], [max], [floating]) ⇒ `number`
Produces a random number between `min` and `max` (inclusive). If only one
argument is provided a number between `0` and the given number is returned.
If `floating` is `true`, or either `min` or `max` are floats, a floating-point
number is returned instead of an integer.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[min=0\] | `number` | The minimum possible value. |
| \[max=1\] | `number` | The maximum possible value. |
| \[floating=false\] | `boolean` | Specify returning a floating-point number. |

**Returns**: `number` - Returns the random number.  
**Example**  
```js
_.random(0, 5);
// => an integer between 0 and 5

_.random(5);
// => also an integer between 0 and 5

_.random(5, true);
// => a floating-point number between 0 and 5

_.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
```
<a name="_.range"></a>
###_.range([start], end, [step]) ⇒ `Array`
Creates an array of numbers (positive and/or negative) progressing from
`start` up to but not including `end`. If `start` is less than `stop` a
zero-length range is created unless a negative `step` is specified.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[start=0\] | `number` | The start of the range. |
| end | `number` | The end of the range. |
| \[step=1\] | `number` | The value to increment or decrement by. |

**Returns**: `Array` - Returns the new array of numbers.  
**Example**  
```js
_.range(4);
// => [0, 1, 2, 3]

_.range(1, 5);
// => [1, 2, 3, 4]

_.range(0, 20, 5);
// => [0, 5, 10, 15]

_.range(0, -4, -1);
// => [0, -1, -2, -3]

_.range(1, 4, 0);
// => [1, 1, 1]

_.range(0);
// => []
```
<a name="_.result"></a>
###_.result(object, key, [defaultValue]) ⇒ `*`
Resolves the value of property `key` on `object`. If `key` is a function
it is invoked with the `this` binding of `object` and its result returned,
else the property value is returned. If `object` is `null` or `undefined`
then `undefined` is returned. If a default value is provided it is returned
if the property value resolves to `undefined`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | `Object` | The object to inspect. |
| key | `string` | The name of the property to resolve. |
| \[defaultValue\] | `*` | The value returned if the property value  resolves to `undefined`. |

**Returns**: `*` - Returns the resolved value.  
**Example**  
```js
var object = {
  'user': 'fred',
  'age': function() {
    return 40;
  }
};

_.result(object, 'user');
// => 'fred'

_.result(object, 'age');
// => 40

_.result(object, 'employer', 'slate');
// => 'slate'
```
<a name="_.times"></a>
###_.times(n, [iteratee], [thisArg]) ⇒ `Array`
Invokes the iteratee function `n` times, returning an array of the results
of each invocation. The `iteratee` is bound to `thisArg` and invoked with
one argument; (index).

| Param | Type | Description |
| ----- | ---- | ----------- |
| n | `number` | The number of times to invoke `iteratee`. |
| \[iteratee=identity\] | `function` | The function invoked per iteration. |
| \[thisArg\] | `*` | The `this` binding of `iteratee`. |

**Returns**: `Array` - Returns the array of results.  
**Example**  
```js
var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
// => [3, 6, 4]

_.times(3, function(n) { mage.castSpell(n); });
// => invokes `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively

_.times(3, function(n) { this.cast(n); }, mage);
// => also invokes `mage.castSpell(n)` three times
```
<a name="_.uniqueId"></a>
###_.uniqueId([prefix]) ⇒ `string`
Generates a unique ID. If `prefix` is provided the ID is appended to it.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[prefix\] | `string` | The value to prefix the ID with. |

**Returns**: `string` - Returns the unique ID.  
**Example**  
```js
_.uniqueId('contact_');
// => 'contact_104'

_.uniqueId();
// => '105'
```
