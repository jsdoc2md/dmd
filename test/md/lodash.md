* * *
<a name="_"></a>
##class: _
**Category**: Chain  

* [class: _](#_)
  * [new _(value)](#new___new)
  * _static_
    * [.runInContext([context])](#_.runInContext) ⇒ <code>function</code>
      * [~Array](#_.runInContext..Array)
      * [~arrayProto](#_.runInContext..arrayProto)
      * [~document](#_.runInContext..document)
      * [~fnToString](#_.runInContext..fnToString)
      * [~hasOwnProperty](#_.runInContext..hasOwnProperty)
      * [~idCounter](#_.runInContext..idCounter)
      * [~oldDash](#_.runInContext..oldDash)
      * [~toString](#_.runInContext..toString)
      * [~reNative](#_.runInContext..reNative)
      * [~ArrayBuffer](#_.runInContext..ArrayBuffer)
      * [~Float64Array](#_.runInContext..Float64Array)
      * [~NEGATIVE_INFINITY](#_.runInContext..NEGATIVE_INFINITY)
      * [~MAX_ARRAY_LENGTH](#_.runInContext..MAX_ARRAY_LENGTH)
      * [~FLOAT64_BYTES_PER_ELEMENT](#_.runInContext..FLOAT64_BYTES_PER_ELEMENT)
      * [~MAX_SAFE_INTEGER](#_.runInContext..MAX_SAFE_INTEGER)
      * [~metaMap](#_.runInContext..metaMap)
      * [~ctorByClass](#_.runInContext..ctorByClass)
      * [~nonEnumProps](#_.runInContext..nonEnumProps)
    * [.support](#_.support) → <code>Object</code>
      * [.support.argsClass](#_.support.support.argsClass) → <code>boolean</code>
      * [.support.enumErrorProps](#_.support.support.enumErrorProps) → <code>boolean</code>
      * [.support.enumPrototypes](#_.support.support.enumPrototypes) → <code>boolean</code>
      * [.support.funcDecomp](#_.support.support.funcDecomp) → <code>boolean</code>
      * [.support.funcNames](#_.support.support.funcNames) → <code>boolean</code>
      * [.support.nodeClass](#_.support.support.nodeClass) → <code>boolean</code>
      * [.support.nonEnumStrings](#_.support.support.nonEnumStrings) → <code>boolean</code>
      * [.support.nonEnumShadows](#_.support.support.nonEnumShadows) → <code>boolean</code>
      * [.support.ownLast](#_.support.support.ownLast) → <code>boolean</code>
      * [.support.spliceObjects](#_.support.support.spliceObjects) → <code>boolean</code>
      * [.support.unindexedChars](#_.support.support.unindexedChars) → <code>boolean</code>
    * [.chunk(array, [size])](#_.chunk) ⇒ <code>Array</code>
    * [.compact(array)](#_.compact) ⇒ <code>Array</code>
    * [.difference(array, [...values])](#_.difference) ⇒ <code>Array</code>
    * [.drop(array, [n])](#_.drop) ⇒ <code>Array</code>
    * [.dropRight(array, [n])](#_.dropRight) ⇒ <code>Array</code>
    * [.dropRightWhile(array, [predicate], [thisArg])](#_.dropRightWhile) ⇒ <code>Array</code>
    * [.dropWhile(array, [predicate], [thisArg])](#_.dropWhile) ⇒ <code>Array</code>
    * [.findIndex(array, [predicate], [thisArg])](#_.findIndex) ⇒ <code>number</code>
    * [.findLastIndex(array, [predicate], [thisArg])](#_.findLastIndex) ⇒ <code>number</code>
    * [.head(array)](#_.head) ⇒ <code>\*</code>
    * [.flatten(array, [isDeep])](#_.flatten) ⇒ <code>Array</code>
    * [.flattenDeep(array)](#_.flattenDeep) ⇒ <code>Array</code>
    * [.indexOf(array, value, [fromIndex])](#_.indexOf) ⇒ <code>number</code>
    * [.initial(array)](#_.initial) ⇒ <code>Array</code>
    * [.intersection([...arrays])](#_.intersection) ⇒ <code>Array</code>
    * [.last(array)](#_.last) ⇒ <code>\*</code>
    * [.lastIndexOf(array, value, [fromIndex])](#_.lastIndexOf) ⇒ <code>number</code>
    * [.pull(array, [...values])](#_.pull) ⇒ <code>Array</code>
    * [.pullAt(array, [...indexes])](#_.pullAt) ⇒ <code>Array</code>
    * [.remove(array, [predicate], [thisArg])](#_.remove) ⇒ <code>Array</code>
    * [.tail(array)](#_.tail) ⇒ <code>Array</code>
    * [.slice(array, [start], [end])](#_.slice) ⇒ <code>Array</code>
    * [.sortedIndex(array, value, [iteratee], [thisArg])](#_.sortedIndex) ⇒ <code>number</code>
    * [.sortedLastIndex(array, value, [iteratee], [thisArg])](#_.sortedLastIndex) ⇒ <code>number</code>
    * [.take(array, [n])](#_.take) ⇒ <code>Array</code>
    * [.takeRight(array, [n])](#_.takeRight) ⇒ <code>Array</code>
    * [.takeRightWhile(array, [predicate], [thisArg])](#_.takeRightWhile) ⇒ <code>Array</code>
    * [.takeWhile(array, [predicate], [thisArg])](#_.takeWhile) ⇒ <code>Array</code>
    * [.union([...arrays])](#_.union) ⇒ <code>Array</code>
    * [.unique(array, [isSorted], [iteratee], [thisArg])](#_.unique) ⇒ <code>Array</code>
    * [.unzip(array)](#_.unzip) ⇒ <code>Array</code>
    * [.without(array, [...values])](#_.without) ⇒ <code>Array</code>
    * [.xor([...arrays])](#_.xor) ⇒ <code>Array</code>
    * [.zip([...arrays])](#_.zip) ⇒ <code>Array</code>
    * [.object(props, [values])](#_.object) ⇒ <code>Object</code>
    * [.chain(value)](#_.chain) ⇒ <code>Object</code>
    * [.tap(value, interceptor, [thisArg])](#_.tap) ⇒ <code>\*</code>
    * [.thru(value, interceptor, [thisArg])](#_.thru) ⇒ <code>\*</code>
    * [.chain](#_.chain) ⇒ <code>\*</code>
    * [.reverse](#_.reverse) ⇒ <code>Object</code>
    * [.toString](#_.toString) ⇒ <code>string</code>
    * [.value](#_.value) ⇒ <code>\*</code>
    * [.at(collection, [...props])](#_.at) ⇒ <code>Array</code>
    * [.countBy](#_.countBy) ⇒ <code>Object</code>
    * [.all(collection, [predicate], [thisArg])](#_.all) ⇒ <code>boolean</code>
    * [.select(collection, [predicate], [thisArg])](#_.select) ⇒ <code>Array</code>
    * [.detect(collection, [predicate], [thisArg])](#_.detect) ⇒ <code>\*</code>
    * [.findLast(collection, [predicate], [thisArg])](#_.findLast) ⇒ <code>\*</code>
    * [.findWhere(collection, source)](#_.findWhere) ⇒ <code>\*</code>
    * [.each(collection, [iteratee], [thisArg])](#_.each) ⇒ <code>Array</code> \| <code>Object</code> \| <code>string</code>
    * [.eachRight(collection, [iteratee], [thisArg])](#_.eachRight) ⇒ <code>Array</code> \| <code>Object</code> \| <code>string</code>
    * [.groupBy](#_.groupBy) ⇒ <code>Object</code>
    * [.indexBy](#_.indexBy) ⇒ <code>Object</code>
    * [.invoke(collection, methodName, [...args])](#_.invoke) ⇒ <code>Array</code>
    * [.collect(collection, [iteratee], [thisArg])](#_.collect) ⇒ <code>Array</code>
    * [.max(collection, [iteratee], [thisArg])](#_.max) ⇒ <code>\*</code>
    * [.min(collection, [iteratee], [thisArg])](#_.min) ⇒ <code>\*</code>
    * [.partition](#_.partition) ⇒ <code>Array</code>
    * [.pluck(collection, key)](#_.pluck) ⇒ <code>Array</code>
    * [.foldr(collection, [iteratee], [accumulator], [thisArg])](#_.foldr) ⇒ <code>\*</code>
    * [.reject(collection, [predicate], [thisArg])](#_.reject) ⇒ <code>Array</code>
    * [.sample(collection, [n])](#_.sample) ⇒ <code>\*</code>
    * [.shuffle(collection)](#_.shuffle) ⇒ <code>Array</code>
    * [.size(collection)](#_.size) ⇒ <code>number</code>
    * [.any(collection, [predicate], [thisArg])](#_.any) ⇒ <code>boolean</code>
    * [.sortBy(collection, [iteratee], [thisArg])](#_.sortBy) ⇒ <code>Array</code>
    * [.sortByAll(collection, ...props)](#_.sortByAll) ⇒ <code>Array</code>
    * [.toArray(collection)](#_.toArray) ⇒ <code>Array</code>
    * [.where(collection, source)](#_.where) ⇒ <code>Array</code>
    * [.now](#_.now)
    * [.after(n, func)](#_.after) ⇒ <code>function</code>
    * [.ary(func, [n])](#_.ary) ⇒ <code>function</code>
    * [.before(n, func)](#_.before) ⇒ <code>function</code>
    * [.bind(func, [thisArg], [...args])](#_.bind) ⇒ <code>function</code>
    * [.bindAll(object, [...methodNames])](#_.bindAll) ⇒ <code>Object</code>
    * [.bindKey(object, key, [...args])](#_.bindKey) ⇒ <code>function</code>
    * [.curry(func, [arity])](#_.curry) ⇒ <code>function</code>
    * [.curryRight(func, [arity])](#_.curryRight) ⇒ <code>function</code>
    * [.debounce(func, wait, [options])](#_.debounce) ⇒ <code>function</code>
    * [.defer(func, [...args])](#_.defer) ⇒ <code>number</code>
    * [.delay(func, wait, [...args])](#_.delay) ⇒ <code>number</code>
    * [.flow([...funcs])](#_.flow) ⇒ <code>function</code>
    * [.memoize(func, [resolver])](#_.memoize) ⇒ <code>function</code>
    * [.negate(predicate)](#_.negate) ⇒ <code>function</code>
    * [.once(func)](#_.once) ⇒ <code>function</code>
    * [.partial(func, [...args])](#_.partial) ⇒ <code>function</code>
    * [.partialRight(func, [...args])](#_.partialRight) ⇒ <code>function</code>
    * [.rearg(func, ...indexes)](#_.rearg) ⇒ <code>function</code>
    * [.throttle(func, wait, [options])](#_.throttle) ⇒ <code>function</code>
    * [.wrap(value, wrapper)](#_.wrap) ⇒ <code>function</code>
    * [.clone(value, [isDeep], [customizer], [thisArg])](#_.clone) ⇒ <code>\*</code>
    * [.cloneDeep(value, [customizer], [thisArg])](#_.cloneDeep) ⇒ <code>\*</code>
    * [.isArguments(value)](#_.isArguments) ⇒ <code>boolean</code>
    * [.isArray](#_.isArray) ⇒ <code>boolean</code>
    * [.isBoolean(value)](#_.isBoolean) ⇒ <code>boolean</code>
    * [.isDate(value)](#_.isDate) ⇒ <code>boolean</code>
    * [.isElement(value)](#_.isElement) ⇒ <code>boolean</code>
    * [.isEmpty(value)](#_.isEmpty) ⇒ <code>boolean</code>
    * [.isEqual(value, other, [customizer], [thisArg])](#_.isEqual) ⇒ <code>boolean</code>
    * [.isError(value)](#_.isError) ⇒ <code>boolean</code>
    * [.isFinite](#_.isFinite) ⇒ <code>boolean</code>
    * [.isFunction(value)](#_.isFunction) ⇒ <code>boolean</code>
    * [.isObject(value)](#_.isObject) ⇒ <code>boolean</code>
    * [.isMatch(source, source, [customizer], [thisArg])](#_.isMatch) ⇒ <code>boolean</code>
    * [.isNaN(value)](#_.isNaN) ⇒ <code>boolean</code>
    * [.isNative(value)](#_.isNative) ⇒ <code>boolean</code>
    * [.isNull(value)](#_.isNull) ⇒ <code>boolean</code>
    * [.isNumber(value)](#_.isNumber) ⇒ <code>boolean</code>
    * [.isPlainObject](#_.isPlainObject) ⇒ <code>boolean</code>
    * [.isRegExp(value)](#_.isRegExp) ⇒ <code>boolean</code>
    * [.isString(value)](#_.isString) ⇒ <code>boolean</code>
    * [.isUndefined(value)](#_.isUndefined) ⇒ <code>boolean</code>
    * [.extend](#_.extend) ⇒ <code>Object</code>
    * [.create(prototype, [properties])](#_.create) ⇒ <code>Object</code>
    * [.defaults(object, [...sources])](#_.defaults) ⇒ <code>Object</code>
    * [.findKey(object, [predicate], [thisArg])](#_.findKey) ⇒ <code>string</code> \| <code>undefined</code>
    * [.findLastKey(object, [predicate], [thisArg])](#_.findLastKey) ⇒ <code>string</code> \| <code>undefined</code>
    * [.forIn(object, [iteratee], [thisArg])](#_.forIn) ⇒ <code>Object</code>
    * [.forInRight(object, [iteratee], [thisArg])](#_.forInRight) ⇒ <code>Object</code>
    * [.forOwn(object, [iteratee], [thisArg])](#_.forOwn) ⇒ <code>Object</code>
    * [.forOwnRight(object, [iteratee], [thisArg])](#_.forOwnRight) ⇒ <code>Object</code>
    * [.methods(object)](#_.methods) ⇒ <code>Array</code>
    * [.has(object, key)](#_.has) ⇒ <code>boolean</code>
    * [.invert(object, [multiValue])](#_.invert) ⇒ <code>Object</code>
    * [.keys](#_.keys) ⇒ <code>Array</code>
    * [.keysIn(object)](#_.keysIn) ⇒ <code>Array</code>
    * [.mapValues(object, [iteratee], [thisArg])](#_.mapValues) ⇒ <code>Object</code>
    * [.merge](#_.merge) ⇒ <code>Object</code>
    * [.omit(object, [predicate], [thisArg])](#_.omit) ⇒ <code>Object</code>
    * [.pairs(object)](#_.pairs) ⇒ <code>Array</code>
    * [.pick(object, [predicate], [thisArg])](#_.pick) ⇒ <code>Object</code>
    * [.result(object, key, [defaultValue])](#_.result) ⇒ <code>\*</code>
    * [.transform(object, [iteratee], [accumulator], [thisArg])](#_.transform) ⇒ <code>\*</code>
    * [.values(object)](#_.values) ⇒ <code>Array</code>
    * [.valuesIn(object)](#_.valuesIn) ⇒ <code>Array</code>
    * [.random([min], [max], [floating])](#_.random) ⇒ <code>number</code>
    * [.camelCase](#_.camelCase) ⇒ <code>string</code>
    * [.capitalize([string])](#_.capitalize) ⇒ <code>string</code>
    * [.deburr([string])](#_.deburr) ⇒ <code>string</code>
    * [.endsWith([string], [target], [position])](#_.endsWith) ⇒ <code>boolean</code>
    * [.escape([string])](#_.escape) ⇒ <code>string</code>
    * [.escapeRegExp([string])](#_.escapeRegExp) ⇒ <code>string</code>
    * [.kebabCase](#_.kebabCase) ⇒ <code>string</code>
    * [.pad([string], [length], [chars])](#_.pad) ⇒ <code>string</code>
    * [.padLeft([string], [length], [chars])](#_.padLeft) ⇒ <code>string</code>
    * [.padRight([string], [length], [chars])](#_.padRight) ⇒ <code>string</code>
    * [.parseInt(string, [radix])](#_.parseInt) ⇒ <code>number</code>
    * [.repeat([string], [n])](#_.repeat) ⇒ <code>string</code>
    * [.snakeCase](#_.snakeCase) ⇒ <code>string</code>
    * [.startsWith([string], [target], [position])](#_.startsWith) ⇒ <code>boolean</code>
    * [.template([string], [options])](#_.template) ⇒ <code>function</code>
    * [.trim([string], [chars])](#_.trim) ⇒ <code>string</code>
    * [.trimLeft([string], [chars])](#_.trimLeft) ⇒ <code>string</code>
    * [.trimRight([string], [chars])](#_.trimRight) ⇒ <code>string</code>
    * [.trunc([string], [options])](#_.trunc) ⇒ <code>string</code>
    * [.unescape([string])](#_.unescape) ⇒ <code>string</code>
    * [.words([string], [pattern])](#_.words) ⇒ <code>Array</code>
    * [.attempt(func)](#_.attempt) ⇒ <code>\*</code>
    * [.iteratee([func], [thisArg])](#_.iteratee) ⇒ <code>function</code>
    * [.constant(value)](#_.constant) ⇒ <code>function</code>
    * [.identity(value)](#_.identity) ⇒ <code>\*</code>
    * [.matches(source)](#_.matches) ⇒ <code>function</code>
    * [.mixin([object], source, [options])](#_.mixin) ⇒ <code>function</code> \| <code>Object</code>
    * [.noConflict()](#_.noConflict) ⇒ <code>function</code>
    * [.noop()](#_.noop)
    * [.property(key)](#_.property) ⇒ <code>function</code>
    * [.propertyOf(object)](#_.propertyOf) ⇒ <code>function</code>
    * [.range([start], end, [step])](#_.range) ⇒ <code>Array</code>
    * [.times(n, [iteratee], [thisArg])](#_.times) ⇒ <code>Array</code>
    * [.uniqueId([prefix])](#_.uniqueId) ⇒ <code>string</code>

* * *
<a name="_.runInContext"></a>
###_.runInContext([context]) ⇒ <code>function</code>
Create a new pristine `lodash` function using the given `context` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[context=root\] | <code>Object</code> | The context object. |

**Returns**: <code>function</code> - Returns a new `lodash` function.  
**Category**: Utility  
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

* [.runInContext([context])](#_.runInContext) ⇒ <code>function</code>
  * [~Array](#_.runInContext..Array)
  * [~arrayProto](#_.runInContext..arrayProto)
  * [~document](#_.runInContext..document)
  * [~fnToString](#_.runInContext..fnToString)
  * [~hasOwnProperty](#_.runInContext..hasOwnProperty)
  * [~idCounter](#_.runInContext..idCounter)
  * [~oldDash](#_.runInContext..oldDash)
  * [~toString](#_.runInContext..toString)
  * [~reNative](#_.runInContext..reNative)
  * [~ArrayBuffer](#_.runInContext..ArrayBuffer)
  * [~Float64Array](#_.runInContext..Float64Array)
  * [~NEGATIVE_INFINITY](#_.runInContext..NEGATIVE_INFINITY)
  * [~MAX_ARRAY_LENGTH](#_.runInContext..MAX_ARRAY_LENGTH)
  * [~FLOAT64_BYTES_PER_ELEMENT](#_.runInContext..FLOAT64_BYTES_PER_ELEMENT)
  * [~MAX_SAFE_INTEGER](#_.runInContext..MAX_SAFE_INTEGER)
  * [~metaMap](#_.runInContext..metaMap)
  * [~ctorByClass](#_.runInContext..ctorByClass)
  * [~nonEnumProps](#_.runInContext..nonEnumProps)

* * *
<a name="_.runInContext..Array"></a>
####runInContext~Array
Native constructor references.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..arrayProto"></a>
####runInContext~arrayProto
Used for native method references.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..document"></a>
####runInContext~document
Used to detect DOM support.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..fnToString"></a>
####runInContext~fnToString
Used to resolve the decompiled source of functions.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..hasOwnProperty"></a>
####runInContext~hasOwnProperty
Used to check objects for own properties.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..idCounter"></a>
####runInContext~idCounter
Used to generate unique IDs.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..oldDash"></a>
####runInContext~oldDash
Used to restore the original `_` reference in `_.noConflict`.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..toString"></a>
####runInContext~toString
Used to resolve the internal `[[Class]]` of values.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..reNative"></a>
####runInContext~reNative
Used to detect if a method is native.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..ArrayBuffer"></a>
####runInContext~ArrayBuffer
Native method references.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..Float64Array"></a>
####runInContext~Float64Array
Used to clone array buffers.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..NEGATIVE_INFINITY"></a>
####runInContext~NEGATIVE_INFINITY
Used as references for `-Infinity` and `Infinity`.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..MAX_ARRAY_LENGTH"></a>
####runInContext~MAX_ARRAY_LENGTH
Used as references for the maximum length and index of an array.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..FLOAT64_BYTES_PER_ELEMENT"></a>
####runInContext~FLOAT64_BYTES_PER_ELEMENT
Used as the size, in bytes, of each `Float64Array` element.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..MAX_SAFE_INTEGER"></a>
####runInContext~MAX_SAFE_INTEGER
Used as the maximum length of an array-like value.
See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
for more details.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..metaMap"></a>
####runInContext~metaMap
Used to store function metadata.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..ctorByClass"></a>
####runInContext~ctorByClass
Used to lookup a built-in constructor by `[[Class]]`.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="_.runInContext..nonEnumProps"></a>
####runInContext~nonEnumProps
Used to avoid iterating over non-enumerable properties in IE < 9.

**Scope**: inner member of <code>_.runInContext</code>  
* * *
<a name="new___new"></a>
###new _(value)
Creates a `lodash` object which wraps `value` to enable intuitive chaining.
Methods that operate on and return arrays, collections, and functions can
be chained together. Methods that return a boolean or single value will
automatically end the chain returning the unwrapped value. Explicit chaining
may be enabled using `_.chain`. The execution of chained methods is lazy,
that is, execution is deferred until `_#value` is implicitly or explicitly
called.

Lazy evaluation allows several methods to support shortcut fusion. Shortcut
fusion is an optimization that merges iteratees to avoid creating intermediate
arrays and reduce the number of iteratee executions.

Chaining is supported in custom builds as long as the `_#value` method is
directly or indirectly included in the build.

In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
`concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
and `unshift`

The wrapper functons that support shortcut fusion are:
`drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`, `first`,
`initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`, `slice`,
`take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `where`

The chainable wrapper functions are:
`after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
`callback`, `chain`, `chunk`, `compact`, `concat`, `constant`, `countBy`,
`create`, `curry`, `debounce`, `defaults`, `defer`, `delay`, `difference`,
`drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`, `flatten`,
`flattenDeep`, `flow`, `flowRight`, `forEach`, `forEachRight`, `forIn`,
`forInRight`, `forOwn`, `forOwnRight`, `functions`, `groupBy`, `indexBy`,
`initial`, `intersection`, `invert`, `invoke`, `keys`, `keysIn`, `map`,
`mapValues`, `matches`, `memoize`, `merge`, `mixin`, `negate`, `noop`,
`omit`, `once`, `pairs`, `partial`, `partialRight`, `partition`, `pick`,
`pluck`, `property`, `propertyOf`, `pull`, `pullAt`, `push`, `range`,
`rearg`, `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
`sortBy`, `sortByAll`, `splice`, `take`, `takeRight`, `takeRightWhile`,
`takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `transform`,
`union`, `uniq`, `unshift`, `unzip`, `values`, `valuesIn`, `where`,
`without`, `wrap`, `xor`, `zip`, and `zipObject`

The wrapper functions that are **not** chainable by default are:
`attempt`, `camelCase`, `capitalize`, `clone`, `cloneDeep`, `deburr`,
`endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`,
`findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`, `has`,
`identity`, `includes`, `indexOf`, `isArguments`, `isArray`, `isBoolean`,
`isDate`, `isElement`, `isEmpty`, `isEqual`, `isError`, `isFinite`,
`isFunction`, `isMatch` , `isNative`, `isNaN`, `isNull`, `isNumber`,
`isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`,
`kebabCase`, `last`, `lastIndexOf`, `max`, `min`, `noConflict`, `now`, `pad`,
`padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
`repeat`, `result`, `runInContext`, `shift`, `size`, `snakeCase`, `some`,
`sortedIndex`, `sortedLastIndex`, `startsWith`, `template`, `trim`, `trimLeft`,
`trimRight`, `trunc`, `unescape`, `uniqueId`, `value`, and `words`

The wrapper function `sample` will return a wrapped value when `n` is provided,
otherwise an unwrapped value is returned.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to wrap in a `lodash` instance. |

**Returns**: <code>Object</code> - Returns a `lodash` instance.  
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
* * *
<a name="_.support"></a>
###_.support → <code>Object</code>
An object environment feature flags.


* [.support](#_.support) → <code>Object</code>
  * [.support.argsClass](#_.support.support.argsClass) → <code>boolean</code>
  * [.support.enumErrorProps](#_.support.support.enumErrorProps) → <code>boolean</code>
  * [.support.enumPrototypes](#_.support.support.enumPrototypes) → <code>boolean</code>
  * [.support.funcDecomp](#_.support.support.funcDecomp) → <code>boolean</code>
  * [.support.funcNames](#_.support.support.funcNames) → <code>boolean</code>
  * [.support.nodeClass](#_.support.support.nodeClass) → <code>boolean</code>
  * [.support.nonEnumStrings](#_.support.support.nonEnumStrings) → <code>boolean</code>
  * [.support.nonEnumShadows](#_.support.support.nonEnumShadows) → <code>boolean</code>
  * [.support.ownLast](#_.support.support.ownLast) → <code>boolean</code>
  * [.support.spliceObjects](#_.support.support.spliceObjects) → <code>boolean</code>
  * [.support.unindexedChars](#_.support.support.unindexedChars) → <code>boolean</code>

* * *
<a name="_.support.support.argsClass"></a>
####support.support.argsClass → <code>boolean</code>
Detect if the `[[Class]]` of `arguments` objects is resolvable
(all but Firefox < 4, IE < 9).

* * *
<a name="_.support.support.enumErrorProps"></a>
####support.support.enumErrorProps → <code>boolean</code>
Detect if `name` or `message` properties of `Error.prototype` are
enumerable by default (IE < 9, Safari < 5.1).

* * *
<a name="_.support.support.enumPrototypes"></a>
####support.support.enumPrototypes → <code>boolean</code>
Detect if `prototype` properties are enumerable by default.

Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
(if the prototype or a property on the prototype has been set)
incorrectly set the `[[Enumerable]]` value of a function's `prototype`
property to `true`.

* * *
<a name="_.support.support.funcDecomp"></a>
####support.support.funcDecomp → <code>boolean</code>
Detect if functions can be decompiled by `Function#toString`
(all but Firefox OS certified apps, older Opera mobile browsers, and
the PlayStation 3; forced `false` for Windows 8 apps).

* * *
<a name="_.support.support.funcNames"></a>
####support.support.funcNames → <code>boolean</code>
Detect if `Function#name` is supported (all but IE).

* * *
<a name="_.support.support.nodeClass"></a>
####support.support.nodeClass → <code>boolean</code>
Detect if the `[[Class]]` of DOM nodes is resolvable (all but IE < 9).

* * *
<a name="_.support.support.nonEnumStrings"></a>
####support.support.nonEnumStrings → <code>boolean</code>
Detect if string indexes are non-enumerable
(IE < 9, RingoJS, Rhino, Narwhal).

* * *
<a name="_.support.support.nonEnumShadows"></a>
####support.support.nonEnumShadows → <code>boolean</code>
Detect if properties shadowing those on `Object.prototype` are
non-enumerable.

In IE < 9 an object's own properties, shadowing non-enumerable ones,
are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).

* * *
<a name="_.support.support.ownLast"></a>
####support.support.ownLast → <code>boolean</code>
Detect if own properties are iterated after inherited properties (IE < 9).

* * *
<a name="_.support.support.spliceObjects"></a>
####support.support.spliceObjects → <code>boolean</code>
Detect if `Array#shift` and `Array#splice` augment array-like objects
correctly.

Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array `shift()`
and `splice()` functions that fail to remove the last element, `value[0]`,
of array-like objects even though the `length` property is set to `0`.
The `shift()` method is buggy in compatibility modes of IE 8, while `splice()`
is buggy regardless of mode in IE < 9.

* * *
<a name="_.support.support.unindexedChars"></a>
####support.support.unindexedChars → <code>boolean</code>
Detect lack of support for accessing string characters by index.

IE < 8 can't access characters by index. IE 8 can only access characters
by index on string literals, not string objects.

* * *
<a name="_.chunk"></a>
###_.chunk(array, [size]) ⇒ <code>Array</code>
Creates an array of elements split into groups the length of `size`.
If `collection` can't be split evenly, the final chunk will be the remaining
elements.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to process. |
| \[size=1\] | <code>numer</code> | The length of each chunk. |

**Returns**: <code>Array</code> - Returns the new array containing chunks.  
**Category**: Array  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
* * *
<a name="_.compact"></a>
###_.compact(array) ⇒ <code>Array</code>
Creates an array with all falsey values removed. The values `false`, `null`,
`0`, `""`, `undefined`, and `NaN` are all falsey.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to compact. |

**Returns**: <code>Array</code> - Returns the new array of filtered values.  
**Category**: Array  
**Example**  
```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
* * *
<a name="_.difference"></a>
###_.difference(array, [...values]) ⇒ <code>Array</code>
Creates an array excluding all values of the provided arrays using
`SameValueZero` for equality comparisons.

**Note:** `SameValueZero` comparisons are like strict equality comparisons,
e.g. `===`, except that `NaN` matches `NaN`. See the
[ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to inspect. |
| \[...values\] | <code>Array</code> | The arrays of values to exclude. |

**Returns**: <code>Array</code> - Returns the new array of filtered values.  
**Category**: Array  
**Example**  
```js
_.difference([1, 2, 3], [5, 2, 10]);
// => [1, 3]
```
* * *
<a name="_.drop"></a>
###_.drop(array, [n]) ⇒ <code>Array</code>
Creates a slice of `array` with `n` elements dropped from the beginning.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to query. |
| \[n=1\] | <code>number</code> | The number of elements to drop. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
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
* * *
<a name="_.dropRight"></a>
###_.dropRight(array, [n]) ⇒ <code>Array</code>
Creates a slice of `array` with `n` elements dropped from the end.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to query. |
| \[n=1\] | <code>number</code> | The number of elements to drop. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
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
* * *
<a name="_.dropRightWhile"></a>
###_.dropRightWhile(array, [predicate], [thisArg]) ⇒ <code>Array</code>
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
| array | <code>Array</code> | The array to query. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per element. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
**Example**  
```js
_.dropRightWhile([1, 2, 3], function(n) { return n > 1; });
// => [1]

var users = [
  { 'user': 'barney',  'status': 'busy', 'active': false },
  { 'user': 'fred',    'status': 'busy', 'active': true },
  { 'user': 'pebbles', 'status': 'away', 'active': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.dropRightWhile(users, 'active'), 'user');
// => ['barney']

// using "_.where" callback shorthand
_.pluck(_.dropRightWhile(users, { 'status': 'away' }), 'user');
// => ['barney', 'fred']
```
* * *
<a name="_.dropWhile"></a>
###_.dropWhile(array, [predicate], [thisArg]) ⇒ <code>Array</code>
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
| array | <code>Array</code> | The array to query. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per element. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
**Example**  
```js
_.dropWhile([1, 2, 3], function(n) { return n < 3; });
// => [3]

var users = [
  { 'user': 'barney',  'status': 'busy', 'active': true },
  { 'user': 'fred',    'status': 'busy', 'active': false },
  { 'user': 'pebbles', 'status': 'away', 'active': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.dropWhile(users, 'active'), 'user');
// => ['fred', 'pebbles']

// using "_.where" callback shorthand
_.pluck(_.dropWhile(users, { 'status': 'busy' }), 'user');
// => ['pebbles']
```
* * *
<a name="_.findIndex"></a>
###_.findIndex(array, [predicate], [thisArg]) ⇒ <code>number</code>
This method is like `_.find` except that it returns the index of the first
element `predicate` returns truthy for, instead of the element itself.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to search. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>number</code> - Returns the index of the found element, else `-1`.  
**Category**: Array  
**Example**  
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

_.findIndex(users, function(chr) { return chr.age < 40; });
// => 0

// using "_.where" callback shorthand
_.findIndex(users, { 'age': 1 });
// => 2

// using "_.pluck" callback shorthand
_.findIndex(users, 'active');
// => 1
```
* * *
<a name="_.findLastIndex"></a>
###_.findLastIndex(array, [predicate], [thisArg]) ⇒ <code>number</code>
This method is like `_.findIndex` except that it iterates over elements
of `collection` from right to left.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to search. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>number</code> - Returns the index of the found element, else `-1`.  
**Category**: Array  
**Example**  
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

_.findLastIndex(users, function(chr) { return chr.age < 40; });
// => 2

// using "_.where" callback shorthand
_.findLastIndex(users, { 'age': 40 });
// => 1

// using "_.pluck" callback shorthand
_.findLastIndex(users, 'active');
// => 0
```
* * *
<a name="_.head"></a>
###_.head(array) ⇒ <code>\*</code>
Gets the first element of `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to query. |

**Returns**: <code>\*</code> - Returns the first element of `array`.  
**Category**: Array  
**Example**  
```js
_.first([1, 2, 3]);
// => 1

_.first([]);
// => undefined
```
* * *
<a name="_.flatten"></a>
###_.flatten(array, [isDeep]) ⇒ <code>Array</code>
Flattens a nested array. If `isDeep` is `true` the array is recursively
flattened, otherwise it is only flattened a single level.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to flatten. |
| \[isDeep\] | <code>boolean</code> | Specify a deep flatten. |

**Returns**: <code>Array</code> - Returns the new flattened array.  
**Category**: Array  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.flatten([1, [2], [3, [[4]]]]);
// => [1, 2, 3, [[4]]];

// using `isDeep`
_.flatten([1, [2], [3, [[4]]]], true);
// => [1, 2, 3, 4];
```
* * *
<a name="_.flattenDeep"></a>
###_.flattenDeep(array) ⇒ <code>Array</code>
Recursively flattens a nested array.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to recursively flatten. |

**Returns**: <code>Array</code> - Returns the new flattened array.  
**Category**: Array  
**Example**  
```js
_.flattenDeep([1, [2], [3, [[4]]]]);
// => [1, 2, 3, 4];
```
* * *
<a name="_.indexOf"></a>
###_.indexOf(array, value, [fromIndex]) ⇒ <code>number</code>
Gets the index at which the first occurrence of `value` is found in `array`
using `SameValueZero` for equality comparisons. If `fromIndex` is negative,
it is used as the offset from the end of `array`. If `array` is sorted
providing `true` for `fromIndex` performs a faster binary search.

**Note:** `SameValueZero` comparisons are like strict equality comparisons,
e.g. `===`, except that `NaN` matches `NaN`. See the
[ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to search. |
| value | <code>\*</code> | The value to search for. |
| \[fromIndex=0\] | <code>boolean</code> \| <code>number</code> | The index to search from or `true`  to perform a binary search on a sorted array. |

**Returns**: <code>number</code> - Returns the index of the matched value, else `-1`.  
**Category**: Array  
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
* * *
<a name="_.initial"></a>
###_.initial(array) ⇒ <code>Array</code>
Gets all but the last element of `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to query. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
**Example**  
```js
_.initial([1, 2, 3]);
// => [1, 2]
```
* * *
<a name="_.intersection"></a>
###_.intersection([...arrays]) ⇒ <code>Array</code>
Creates an array of unique values in all provided arrays using `SameValueZero`
for equality comparisons.

**Note:** `SameValueZero` comparisons are like strict equality comparisons,
e.g. `===`, except that `NaN` matches `NaN`. See the
[ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...arrays\] | <code>Array</code> | The arrays to inspect. |

**Returns**: <code>Array</code> - Returns the new array of shared values.  
**Category**: Array  
**Example**  
```js
_.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
// => [1, 2]
```
* * *
<a name="_.last"></a>
###_.last(array) ⇒ <code>\*</code>
Gets the last element of `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to query. |

**Returns**: <code>\*</code> - Returns the last element of `array`.  
**Category**: Array  
**Example**  
```js
_.last([1, 2, 3]);
// => 3
```
* * *
<a name="_.lastIndexOf"></a>
###_.lastIndexOf(array, value, [fromIndex]) ⇒ <code>number</code>
This method is like `_.indexOf` except that it iterates over elements of
`array` from right to left.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to search. |
| value | <code>\*</code> | The value to search for. |
| \[fromIndex=array.length-1\] | <code>boolean</code> \| <code>number</code> | The index to search from  or `true` to perform a binary search on a sorted array. |

**Returns**: <code>number</code> - Returns the index of the matched value, else `-1`.  
**Category**: Array  
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
* * *
<a name="_.pull"></a>
###_.pull(array, [...values]) ⇒ <code>Array</code>
Removes all provided values from `array` using `SameValueZero` for equality
comparisons.

**Notes:**
 - Unlike `_.without`, this method mutates `array`.
 - `SameValueZero` comparisons are like strict equality comparisons, e.g. `===`,
   except that `NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
   for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to modify. |
| \[...values\] | <code>\*</code> | The values to remove. |

**Returns**: <code>Array</code> - Returns `array`.  
**Category**: Array  
**Example**  
```js
var array = [1, 2, 3, 1, 2, 3];
_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
```
* * *
<a name="_.pullAt"></a>
###_.pullAt(array, [...indexes]) ⇒ <code>Array</code>
Removes elements from `array` corresponding to the specified indexes and
returns an array of the removed elements. Indexes may be specified as an
array of indexes or as individual arguments.

**Note:** Unlike `_.at`, this method mutates `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to modify. |
| \[...indexes\] | <code>number</code> \| <code>Array.&lt;number&gt;</code> | The indexes of elements to remove,  specified as individual indexes or arrays of indexes. |

**Returns**: <code>Array</code> - Returns the new array of removed elements.  
**Category**: Array  
**Example**  
```js
var array = [5, 10, 15, 20];
var evens = _.pullAt(array, [1, 3]);

console.log(array);
// => [5, 15]

console.log(evens);
// => [10, 20]
```
* * *
<a name="_.remove"></a>
###_.remove(array, [predicate], [thisArg]) ⇒ <code>Array</code>
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
| array | <code>Array</code> | The array to modify. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Array</code> - Returns the new array of removed elements.  
**Category**: Array  
**Example**  
```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) { return n % 2 == 0; });

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
```
* * *
<a name="_.tail"></a>
###_.tail(array) ⇒ <code>Array</code>
Gets all but the first element of `array`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to query. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
**Example**  
```js
_.rest([1, 2, 3]);
// => [2, 3]
```
* * *
<a name="_.slice"></a>
###_.slice(array, [start], [end]) ⇒ <code>Array</code>
Creates a slice of `array` from `start` up to, but not including, `end`.

**Note:** This function is used instead of `Array#slice` to support node
lists in IE < 9 and to ensure dense arrays are returned.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to slice. |
| \[start=0\] | <code>number</code> | The start position. |
| \[end=array.length\] | <code>number</code> | The end position. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
* * *
<a name="_.sortedIndex"></a>
###_.sortedIndex(array, value, [iteratee], [thisArg]) ⇒ <code>number</code>
Uses a binary search to determine the lowest index at which `value` should
be inserted into `array` in order to maintain its sort order. If an iteratee
function is provided it is invoked for `value` and each element of `array`
to compute their sort ranking. The iteratee is bound to `thisArg` and
invoked with one argument; (value).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The sorted array to inspect. |
| value | <code>\*</code> | The value to evaluate. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>number</code> - Returns the index at which `value` should be inserted
 into `array`.  
**Category**: Array  
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
* * *
<a name="_.sortedLastIndex"></a>
###_.sortedLastIndex(array, value, [iteratee], [thisArg]) ⇒ <code>number</code>
This method is like `_.sortedIndex` except that it returns the highest
index at which `value` should be inserted into `array` in order to
maintain its sort order.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The sorted array to inspect. |
| value | <code>\*</code> | The value to evaluate. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>number</code> - Returns the index at which `value` should be inserted
 into `array`.  
**Category**: Array  
**Example**  
```js
_.sortedLastIndex([4, 4, 5, 5, 6, 6], 5);
// => 4
```
* * *
<a name="_.take"></a>
###_.take(array, [n]) ⇒ <code>Array</code>
Creates a slice of `array` with `n` elements taken from the beginning.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to query. |
| \[n=1\] | <code>number</code> | The number of elements to take. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
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
* * *
<a name="_.takeRight"></a>
###_.takeRight(array, [n]) ⇒ <code>Array</code>
Creates a slice of `array` with `n` elements taken from the end.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to query. |
| \[n=1\] | <code>number</code> | The number of elements to take. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
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
* * *
<a name="_.takeRightWhile"></a>
###_.takeRightWhile(array, [predicate], [thisArg]) ⇒ <code>Array</code>
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
| array | <code>Array</code> | The array to query. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per element. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
**Example**  
```js
_.takeRightWhile([1, 2, 3], function(n) { return n > 1; });
// => [2, 3]

var users = [
  { 'user': 'barney',  'status': 'busy', 'active': false },
  { 'user': 'fred',    'status': 'busy', 'active': true },
  { 'user': 'pebbles', 'status': 'away', 'active': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.takeRightWhile(users, 'active'), 'user');
// => ['fred', 'pebbles']

// using "_.where" callback shorthand
_.pluck(_.takeRightWhile(users, { 'status': 'away' }), 'user');
// => ['pebbles']
```
* * *
<a name="_.takeWhile"></a>
###_.takeWhile(array, [predicate], [thisArg]) ⇒ <code>Array</code>
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
| array | <code>Array</code> | The array to query. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per element. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Array</code> - Returns the slice of `array`.  
**Category**: Array  
**Example**  
```js
_.takeWhile([1, 2, 3], function(n) { return n < 3; });
// => [1, 2]

var users = [
  { 'user': 'barney',  'status': 'busy', 'active': true },
  { 'user': 'fred',    'status': 'busy', 'active': false },
  { 'user': 'pebbles', 'status': 'away', 'active': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.takeWhile(users, 'active'), 'user');
// => ['barney']

// using "_.where" callback shorthand
_.pluck(_.takeWhile(users, { 'status': 'busy' }), 'user');
// => ['barney', 'fred']
```
* * *
<a name="_.union"></a>
###_.union([...arrays]) ⇒ <code>Array</code>
Creates an array of unique values, in order, of the provided arrays using
`SameValueZero` for equality comparisons.

**Note:** `SameValueZero` comparisons are like strict equality comparisons,
e.g. `===`, except that `NaN` matches `NaN`. See the
[ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...arrays\] | <code>Array</code> | The arrays to inspect. |

**Returns**: <code>Array</code> - Returns the new array of combined values.  
**Category**: Array  
**Example**  
```js
_.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
// => [1, 2, 3, 5, 4]
```
* * *
<a name="_.unique"></a>
###_.unique(array, [isSorted], [iteratee], [thisArg]) ⇒ <code>Array</code>
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

**Note:** `SameValueZero` comparisons are like strict equality comparisons,
e.g. `===`, except that `NaN` matches `NaN`. See the
[ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to inspect. |
| \[isSorted\] | <code>boolean</code> | Specify the array is sorted. |
| \[iteratee\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked per iteration.  If a property name or object is provided it is used to create a "_.pluck"  or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Array</code> - Returns the new duplicate-value-free array.  
**Category**: Array  
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
* * *
<a name="_.unzip"></a>
###_.unzip(array) ⇒ <code>Array</code>
This method is like `_.zip` except that it accepts an array of grouped
elements and creates an array regrouping the elements to their pre `_.zip`
configuration.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array of grouped elements to process. |

**Returns**: <code>Array</code> - Returns the new array of regrouped elements.  
**Category**: Array  
**Example**  
```js
var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]

_.unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]
```
* * *
<a name="_.without"></a>
###_.without(array, [...values]) ⇒ <code>Array</code>
Creates an array excluding all provided values using `SameValueZero` for
equality comparisons.

**Note:** `SameValueZero` comparisons are like strict equality comparisons,
e.g. `===`, except that `NaN` matches `NaN`. See the
[ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| array | <code>Array</code> | The array to filter. |
| \[...values\] | <code>\*</code> | The values to exclude. |

**Returns**: <code>Array</code> - Returns the new array of filtered values.  
**Category**: Array  
**Example**  
```js
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]
```
* * *
<a name="_.xor"></a>
###_.xor([...arrays]) ⇒ <code>Array</code>
Creates an array that is the symmetric difference of the provided arrays.
See [Wikipedia](http://en.wikipedia.org/wiki/Symmetric_difference) for
more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...arrays\] | <code>Array</code> | The arrays to inspect. |

**Returns**: <code>Array</code> - Returns the new array of values.  
**Category**: Array  
**Example**  
```js
_.xor([1, 2, 3], [5, 2, 1, 4]);
// => [3, 5, 4]

_.xor([1, 2, 5], [2, 3, 5], [3, 4, 5]);
// => [1, 4, 5]
```
* * *
<a name="_.zip"></a>
###_.zip([...arrays]) ⇒ <code>Array</code>
Creates an array of grouped elements, the first of which contains the first
elements of the given arrays, the second of which contains the second elements
of the given arrays, and so on.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...arrays\] | <code>Array</code> | The arrays to process. |

**Returns**: <code>Array</code> - Returns the new array of grouped elements.  
**Category**: Array  
**Example**  
```js
_.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
```
* * *
<a name="_.object"></a>
###_.object(props, [values]) ⇒ <code>Object</code>
Creates an object composed from arrays of property names and values. Provide
either a single two dimensional array, e.g. `[[key1, value1], [key2, value2]]`
or two arrays, one of property names and one of corresponding values.

| Param | Type | Description |
| ----- | ---- | ----------- |
| props | <code>Array</code> | The property names. |
| \[values=[]\] | <code>Array</code> | The property values. |

**Returns**: <code>Object</code> - Returns the new object.  
**Category**: Array  
**Example**  
```js
_.zipObject(['fred', 'barney'], [30, 40]);
// => { 'fred': 30, 'barney': 40 }
```
* * *
<a name="_.chain"></a>
###_.chain(value) ⇒ <code>Object</code>
Creates a `lodash` object that wraps `value` with explicit method
chaining enabled.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to wrap. |

**Returns**: <code>Object</code> - Returns the new `lodash` object.  
**Category**: Chain  
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
* * *
<a name="_.tap"></a>
###_.tap(value, interceptor, [thisArg]) ⇒ <code>\*</code>
This method invokes `interceptor` and returns `value`. The interceptor is
bound to `thisArg` and invoked with one argument; (value). The purpose of
this method is to "tap into" a method chain in order to perform operations
on intermediate results within the chain.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to provide to `interceptor`. |
| interceptor | <code>function</code> | The function to invoke. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `interceptor`. |

**Returns**: <code>\*</code> - Returns `value`.  
**Category**: Chain  
**Example**  
```js
_([1, 2, 3])
 .tap(function(array) { array.pop(); })
 .reverse()
 .value();
// => [2, 1]
```
* * *
<a name="_.thru"></a>
###_.thru(value, interceptor, [thisArg]) ⇒ <code>\*</code>
This method is like `_.tap` except that it returns the result of `interceptor`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to provide to `interceptor`. |
| interceptor | <code>function</code> | The function to invoke. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `interceptor`. |

**Returns**: <code>\*</code> - Returns the result of `interceptor`.  
**Category**: Chain  
**Example**  
```js
_([1, 2, 3])
 .last()
 .thru(function(value) { return [value]; })
 .value();
// => [3]
```
* * *
<a name="_.chain"></a>
###_.chain ⇒ <code>\*</code>
Enables explicit method chaining on the wrapper object.

**Returns**: <code>\*</code> - Returns the `lodash` object.  
**Category**: Chain  
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
  .pick('user')
  .value();
// => { 'user': 'barney' }
```
* * *
<a name="_.reverse"></a>
###_.reverse ⇒ <code>Object</code>
Reverses the wrapped array so the first element becomes the last, the
second element becomes the second to last, and so on.

**Note:** This method mutates the wrapped array.

**Returns**: <code>Object</code> - Returns the new reversed `lodash` object.  
**Category**: Chain  
**Example**  
```js
var array = [1, 2, 3];

_(array).reverse().value()
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```
* * *
<a name="_.toString"></a>
###_.toString ⇒ <code>string</code>
Produces the result of coercing the unwrapped value to a string.

**Returns**: <code>string</code> - Returns the coerced string value.  
**Category**: Chain  
**Example**  
```js
_([1, 2, 3]).toString();
// => '1,2,3'
```
* * *
<a name="_.value"></a>
###_.value ⇒ <code>\*</code>
Executes the chained sequence to extract the unwrapped value.

**Returns**: <code>\*</code> - Returns the resolved unwrapped value.  
**Category**: Chain  
**Example**  
```js
_([1, 2, 3]).value();
// => [1, 2, 3]
```
* * *
<a name="_.at"></a>
###_.at(collection, [...props]) ⇒ <code>Array</code>
Creates an array of elements corresponding to the specified keys, or indexes,
of `collection`. Keys may be specified as individual arguments or as arrays
of keys.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[...props\] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> | The property names  or indexes of elements to pick, specified individually or in arrays. |

**Returns**: <code>Array</code> - Returns the new array of picked elements.  
**Category**: Collection  
**Example**  
```js
_.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
// => ['a', 'c', 'e']

_.at(['fred', 'barney', 'pebbles'], 0, 2);
// => ['fred', 'pebbles']
```
* * *
<a name="_.countBy"></a>
###_.countBy ⇒ <code>Object</code>
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
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Object</code> - Returns the composed aggregate object.  
**Category**: Collection  
**Example**  
```js
_.countBy([4.3, 6.1, 6.4], function(n) { return Math.floor(n); });
// => { '4': 1, '6': 2 }

_.countBy([4.3, 6.1, 6.4], function(n) { return this.floor(n); }, Math);
// => { '4': 1, '6': 2 }

_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```
* * *
<a name="_.all"></a>
###_.all(collection, [predicate], [thisArg]) ⇒ <code>boolean</code>
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
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>boolean</code> - Returns `true` if all elements pass the predicate check,
 else `false`.  
**Category**: Collection  
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
* * *
<a name="_.select"></a>
###_.select(collection, [predicate], [thisArg]) ⇒ <code>Array</code>
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
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Array</code> - Returns the new filtered array.  
**Category**: Collection  
**Example**  
```js
var evens = _.filter([1, 2, 3, 4], function(n) { return n % 2 == 0; });
// => [2, 4]

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.filter(users, 'active'), 'user');
// => ['fred']

// using "_.where" callback shorthand
_.pluck(_.filter(users, { 'age': 36 }), 'user');
// => ['barney']
```
* * *
<a name="_.detect"></a>
###_.detect(collection, [predicate], [thisArg]) ⇒ <code>\*</code>
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
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to search. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>\*</code> - Returns the matched element, else `undefined`.  
**Category**: Collection  
**Example**  
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

_.result(_.find(users, function(chr) { return chr.age < 40; }), 'user');
// => 'barney'

// using "_.where" callback shorthand
_.result(_.find(users, { 'age': 1 }), 'user');
// => 'pebbles'

// using "_.pluck" callback shorthand
_.result(_.find(users, 'active'), 'user');
// => 'fred'
```
* * *
<a name="_.findLast"></a>
###_.findLast(collection, [predicate], [thisArg]) ⇒ <code>\*</code>
This method is like `_.find` except that it iterates over elements of
`collection` from right to left.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to search. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>\*</code> - Returns the matched element, else `undefined`.  
**Category**: Collection  
**Example**  
```js
_.findLast([1, 2, 3, 4], function(n) { return n % 2 == 1; });
// => 3
```
* * *
<a name="_.findWhere"></a>
###_.findWhere(collection, source) ⇒ <code>\*</code>
Performs a deep comparison between each element in `collection` and the
source object, returning the first element that has equivalent property
values.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to search. |
| source | <code>Object</code> | The object of property values to match. |

**Returns**: <code>\*</code> - Returns the matched element, else `undefined`.  
**Category**: Collection  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36, 'status': 'busy' },
  { 'user': 'fred',   'age': 40, 'status': 'busy' }
];

_.result(_.findWhere(users, { 'status': 'busy' }), 'user');
// => 'barney'

_.result(_.findWhere(users, { 'age': 40 }), 'user');
// => 'fred'
```
* * *
<a name="_.each"></a>
###_.each(collection, [iteratee], [thisArg]) ⇒ <code>Array</code> \| <code>Object</code> \| <code>string</code>
Iterates over elements of `collection` invoking `iteratee` for each element.
The `iteratee` is bound to `thisArg` and invoked with three arguments;
(value, index|key, collection). Iterator functions may exit iteration early
by explicitly returning `false`.

**Note:** As with other "Collections" methods, objects with a `length` property
are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
may be used for object iteration.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> | The function invoked per iteration. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Array</code> \| <code>Object</code> \| <code>string</code> - Returns `collection`.  
**Category**: Collection  
**Example**  
```js
_([1, 2, 3]).forEach(function(n) { console.log(n); });
// => logs each value from left to right and returns the array

_.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(n, key) { console.log(n, key); });
// => logs each value-key pair and returns the object (iteration order is not guaranteed)
```
* * *
<a name="_.eachRight"></a>
###_.eachRight(collection, [iteratee], [thisArg]) ⇒ <code>Array</code> \| <code>Object</code> \| <code>string</code>
This method is like `_.forEach` except that it iterates over elements of
`collection` from right to left.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> | The function invoked per iteration. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Array</code> \| <code>Object</code> \| <code>string</code> - Returns `collection`.  
**Category**: Collection  
**Example**  
```js
_([1, 2, 3]).forEachRight(function(n) { console.log(n); }).join(',');
// => logs each value from right to left and returns the array
```
* * *
<a name="_.groupBy"></a>
###_.groupBy ⇒ <code>Object</code>
Creates an object composed of keys generated from the results of running
each element of `collection` through `iteratee`. The corresponding value
of each key is an array of the elements responsible for generating the key.
The `iteratee` is bound to `thisArg` and invoked with three arguments;
(value, index|key, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Object</code> - Returns the composed aggregate object.  
**Category**: Collection  
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
* * *
<a name="_.indexBy"></a>
###_.indexBy ⇒ <code>Object</code>
Creates an object composed of keys generated from the results of running
each element of `collection` through `iteratee`. The corresponding value
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
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Object</code> - Returns the composed aggregate object.  
**Category**: Collection  
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
* * *
<a name="_.invoke"></a>
###_.invoke(collection, methodName, [...args]) ⇒ <code>Array</code>
Invokes the method named by `methodName` on each element in `collection`,
returning an array of the results of each invoked method. Any additional
arguments are provided to each invoked method. If `methodName` is a function
it is invoked for, and `this` bound to, each element in `collection`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| methodName | <code>function</code> \| <code>string</code> | The name of the method to invoke or  the function invoked per iteration. |
| \[...args\] | <code>\*</code> | The arguments to invoke the method with. |

**Returns**: <code>Array</code> - Returns the array of results.  
**Category**: Collection  
**Example**  
```js
_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]

_.invoke([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```
* * *
<a name="_.collect"></a>
###_.collect(collection, [iteratee], [thisArg]) ⇒ <code>Array</code>
Creates an array of values by running each element in `collection` through
`iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
arguments; (value, index|key, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Array</code> - Returns the new mapped array.  
**Category**: Collection  
**Example**  
```js
_.map([1, 2, 3], function(n) { return n * 3; });
// => [3, 6, 9]

_.map({ 'one': 1, 'two': 2, 'three': 3 }, function(n) { return n * 3; });
// => [3, 6, 9] (iteration order is not guaranteed)

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// using "_.pluck" callback shorthand
_.map(users, 'user');
// => ['barney', 'fred']
```
* * *
<a name="_.max"></a>
###_.max(collection, [iteratee], [thisArg]) ⇒ <code>\*</code>
Retrieves the maximum value of `collection`. If `collection` is empty or
falsey `-Infinity` is returned. If an iteratee function is provided it is
invoked for each value in `collection` to generate the criterion by which
the value is ranked. The `iteratee` is bound to `thisArg` and invoked with
three arguments; (value, index, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked per iteration.  If a property name or object is provided it is used to create a "_.pluck"  or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>\*</code> - Returns the maximum value.  
**Category**: Collection  
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
* * *
<a name="_.min"></a>
###_.min(collection, [iteratee], [thisArg]) ⇒ <code>\*</code>
Retrieves the minimum value of `collection`. If `collection` is empty or
falsey `Infinity` is returned. If an iteratee function is provided it is
invoked for each value in `collection` to generate the criterion by which
the value is ranked. The `iteratee` is bound to `thisArg` and invoked with
three arguments; (value, index, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked per iteration.  If a property name or object is provided it is used to create a "_.pluck"  or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>\*</code> - Returns the minimum value.  
**Category**: Collection  
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
* * *
<a name="_.partition"></a>
###_.partition ⇒ <code>Array</code>
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
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Array</code> - Returns the array of grouped elements.  
**Category**: Collection  
**Example**  
```js
_.partition([1, 2, 3], function(n) { return n % 2; });
// => [[1, 3], [2]]

_.partition([1.2, 2.3, 3.4], function(n) { return this.floor(n) % 2; }, Math);
// => [[1, 3], [2]]

var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

// using "_.where" callback shorthand
_.map(_.partition(users, { 'age': 1 }), function(array) { return _.pluck(array, 'user'); });
// => [['pebbles'], ['barney', 'fred']]

// using "_.pluck" callback shorthand
_.map(_.partition(users, 'active'), function(array) { return _.pluck(array, 'user'); });
// => [['fred'], ['barney', 'pebbles']]
```
* * *
<a name="_.pluck"></a>
###_.pluck(collection, key) ⇒ <code>Array</code>
Retrieves the value of a specified property from all elements in `collection`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| key | <code>string</code> | The name of the property to pluck. |

**Returns**: <code>Array</code> - Returns the property values.  
**Category**: Collection  
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
* * *
<a name="_.foldr"></a>
###_.foldr(collection, [iteratee], [accumulator], [thisArg]) ⇒ <code>\*</code>
This method is like `_.reduce` except that it iterates over elements of
`collection` from right to left.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> | The function invoked per iteration. |
| \[accumulator\] | <code>\*</code> | The initial value. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>\*</code> - Returns the accumulated value.  
**Category**: Collection  
**Example**  
```js
var array = [[0, 1], [2, 3], [4, 5]];
_.reduceRight(array, function(flattened, other) { return flattened.concat(other); }, []);
// => [4, 5, 2, 3, 0, 1]
```
* * *
<a name="_.reject"></a>
###_.reject(collection, [predicate], [thisArg]) ⇒ <code>Array</code>
The opposite of `_.filter`; this method returns the elements of `collection`
that `predicate` does **not** return truthy for.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Array</code> - Returns the new filtered array.  
**Category**: Collection  
**Example**  
```js
var odds = _.reject([1, 2, 3, 4], function(n) { return n % 2 == 0; });
// => [1, 3]

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

// using "_.pluck" callback shorthand
_.pluck(_.reject(users, 'active'), 'user');
// => ['barney']

// using "_.where" callback shorthand
_.pluck(_.reject(users, { 'age': 36 }), 'user');
// => ['fred']
```
* * *
<a name="_.sample"></a>
###_.sample(collection, [n]) ⇒ <code>\*</code>
Retrieves a random element or `n` random elements from a collection.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to sample. |
| \[n\] | <code>number</code> | The number of elements to sample. |

**Returns**: <code>\*</code> - Returns the random sample(s).  
**Category**: Collection  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.sample([1, 2, 3, 4]);
// => 2

_.sample([1, 2, 3, 4], 2);
// => [3, 1]
```
* * *
<a name="_.shuffle"></a>
###_.shuffle(collection) ⇒ <code>Array</code>
Creates an array of shuffled values, using a version of the Fisher-Yates
shuffle. See [Wikipedia](http://en.wikipedia.org/wiki/Fisher-Yates_shuffle)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to shuffle. |

**Returns**: <code>Array</code> - Returns the new shuffled array.  
**Category**: Collection  
**Example**  
```js
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```
* * *
<a name="_.size"></a>
###_.size(collection) ⇒ <code>number</code>
Gets the size of `collection` by returning `collection.length` for
array-like values or the number of own enumerable properties for objects.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to inspect. |

**Returns**: <code>number</code> - Returns `collection.length` or number of own enumerable properties.  
**Category**: Collection  
**Example**  
```js
_.size([1, 2]);
// => 2

_.size({ 'one': 1, 'two': 2, 'three': 3 });
// => 3

_.size('pebbles');
// => 7
```
* * *
<a name="_.any"></a>
###_.any(collection, [predicate], [thisArg]) ⇒ <code>boolean</code>
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
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>boolean</code> - Returns `true` if any element passes the predicate check,
 else `false`.  
**Category**: Collection  
**Example**  
```js
_.some([null, 0, 'yes', false], Boolean);
// => true

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

// using "_.pluck" callback shorthand
_.some(users, 'active');
// => true

// using "_.where" callback shorthand
_.some(users, { 'age': 1 });
// => false
```
* * *
<a name="_.sortBy"></a>
###_.sortBy(collection, [iteratee], [thisArg]) ⇒ <code>Array</code>
Creates an array of elements, sorted in ascending order by the results of
running each element in a collection through `iteratee`. This method performs
a stable sort, that is, it preserves the original sort order of equal elements.
The `iteratee` is bound to `thisArg` and invoked with three arguments;
(value, index|key, collection).

If a property name is provided for `iteratee` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `iteratee` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>Array</code> \| <code>function</code> \| <code>Object</code> \| <code>string</code> | The function  invoked per iteration. If a property name or an object is provided it is  used to create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Array</code> - Returns the new sorted array.  
**Category**: Collection  
**Example**  
```js
_.sortBy([1, 2, 3], function(n) { return Math.sin(n); });
// => [3, 1, 2]

_.sortBy([1, 2, 3], function(n) { return this.sin(n); }, Math);
// => [3, 1, 2]

var users = [
  { 'user': 'fred' },
  { 'user': 'pebbles' },
  { 'user': 'barney' }
];

// using "_.pluck" callback shorthand
_.pluck(_.sortBy(users, 'user'), 'user');
// => ['barney', 'fred', 'pebbles']
```
* * *
<a name="_.sortByAll"></a>
###_.sortByAll(collection, ...props) ⇒ <code>Array</code>
This method is like `_.sortBy` except that it sorts by property names
instead of an iteratee function.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to iterate over. |
| ...props | <code>string</code> \| <code>Array.&lt;string&gt;</code> | The property names to sort by,  specified as individual property names or arrays of property names. |

**Returns**: <code>Array</code> - Returns the new sorted array.  
**Category**: Collection  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 26 },
  { 'user': 'fred',   'age': 30 }
];

_.map(_.sortByAll(users, ['user', 'age']), _.values);
// => [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
```
* * *
<a name="_.toArray"></a>
###_.toArray(collection) ⇒ <code>Array</code>
Converts `collection` to an array.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to convert. |

**Returns**: <code>Array</code> - Returns the new converted array.  
**Category**: Collection  
**Example**  
```js
(function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
// => [2, 3, 4]
```
* * *
<a name="_.where"></a>
###_.where(collection, source) ⇒ <code>Array</code>
Performs a deep comparison between each element in `collection` and the
source object, returning an array of all elements that have equivalent
property values.

| Param | Type | Description |
| ----- | ---- | ----------- |
| collection | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The collection to search. |
| source | <code>Object</code> | The object of property values to match. |

**Returns**: <code>Array</code> - Returns the new filtered array.  
**Category**: Collection  
**Example**  
```js
var users = [
  { 'user': 'barney', 'age': 36, 'status': 'busy', 'pets': ['hoppy'] },
  { 'user': 'fred',   'age': 40, 'status': 'busy', 'pets': ['baby puss', 'dino'] }
];

_.pluck(_.where(users, { 'age': 36 }), 'user');
// => ['barney']

_.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
// => ['fred']

_.pluck(_.where(users, { 'status': 'busy' }), 'user');
// => ['barney', 'fred']
```
* * *
<a name="_.now"></a>
###_.now
Gets the number of milliseconds that have elapsed since the Unix epoch
(1 January 1970 00:00:00 UTC).

**Category**: Date  
**Example**  
```js
_.defer(function(stamp) { console.log(_.now() - stamp); }, _.now());
// => logs the number of milliseconds it took for the deferred function to be invoked
```
* * *
<a name="_.after"></a>
###_.after(n, func) ⇒ <code>function</code>
The opposite of `_.before`; this method creates a function that invokes
`func` once it is called `n` or more times.

| Param | Type | Description |
| ----- | ---- | ----------- |
| n | <code>number</code> | The number of calls before `func` is invoked. |
| func | <code>function</code> | The function to restrict. |

**Returns**: <code>function</code> - Returns the new restricted function.  
**Category**: Function  
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
* * *
<a name="_.ary"></a>
###_.ary(func, [n]) ⇒ <code>function</code>
Creates a function that accepts up to `n` arguments ignoring any
additional arguments.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to cap arguments for. |
| \[n=func.length\] | <code>number</code> | The arity cap. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Function  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.map(['6', '8', '10'], _.ary(parseInt, 1));
// => [6, 8, 10]
```
* * *
<a name="_.before"></a>
###_.before(n, func) ⇒ <code>function</code>
Creates a function that invokes `func`, with the `this` binding and arguments
of the created function, while it is called less than `n` times. Subsequent
calls to the created function return the result of the last `func` invocation.

| Param | Type | Description |
| ----- | ---- | ----------- |
| n | <code>number</code> | The number of calls at which `func` is no longer invoked. |
| func | <code>function</code> | The function to restrict. |

**Returns**: <code>function</code> - Returns the new restricted function.  
**Category**: Function  
**Example**  
```js
jQuery('#add').on('click', _.before(5, addContactToList));
// => allows adding up to 4 contacts to the list
```
* * *
<a name="_.bind"></a>
###_.bind(func, [thisArg], [...args]) ⇒ <code>function</code>
Creates a function that invokes `func` with the `this` binding of `thisArg`
and prepends any additional `_.bind` arguments to those provided to the
bound function.

The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
may be used as a placeholder for partially applied arguments.

**Note:** Unlike native `Function#bind` this method does not set the `length`
property of bound functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to bind. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `func`. |
| \[...args\] | <code>\*</code> | The arguments to be partially applied. |

**Returns**: <code>function</code> - Returns the new bound function.  
**Category**: Function  
**Example**  
```js
var greet = function(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
};

var object = { 'user': 'fred' };

var bound = _.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'

// using placeholders
var bound = _.bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'
```
* * *
<a name="_.bindAll"></a>
###_.bindAll(object, [...methodNames]) ⇒ <code>Object</code>
Binds methods of an object to the object itself, overwriting the existing
method. Method names may be specified as individual arguments or as arrays
of method names. If no method names are provided all enumerable function
properties, own and inherited, of `object` are bound.

**Note:** This method does not set the `length` property of bound functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to bind and assign the bound methods to. |
| \[...methodNames\] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | The object method names to bind,  specified as individual method names or arrays of method names. |

**Returns**: <code>Object</code> - Returns `object`.  
**Category**: Function  
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
* * *
<a name="_.bindKey"></a>
###_.bindKey(object, key, [...args]) ⇒ <code>function</code>
Creates a function that invokes the method at `object[key]` and prepends
any additional `_.bindKey` arguments to those provided to the bound function.

This method differs from `_.bind` by allowing bound functions to reference
methods that may be redefined or don't yet exist.
See [Peter Michaux's article](http://michaux.ca/articles/lazy-function-definition-pattern)
for more details.

The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
builds, may be used as a placeholder for partially applied arguments.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object the method belongs to. |
| key | <code>string</code> | The key of the method. |
| \[...args\] | <code>\*</code> | The arguments to be partially applied. |

**Returns**: <code>function</code> - Returns the new bound function.  
**Category**: Function  
**Example**  
```js
var object = {
  'user': 'fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};

var bound = _.bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'

object.greet = function(greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};

bound('!');
// => 'hiya fred!'

// using placeholders
var bound = _.bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!'
```
* * *
<a name="_.curry"></a>
###_.curry(func, [arity]) ⇒ <code>function</code>
Creates a function that accepts one or more arguments of `func` that when
called either invokes `func` returning its result, if all `func` arguments
have been provided, or returns a function that accepts one or more of the
remaining `func` arguments, and so on. The arity of `func` can be specified
if `func.length` is not sufficient.

The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
may be used as a placeholder for provided arguments.

**Note:** This method does not set the `length` property of curried functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to curry. |
| \[arity=func.length\] | <code>number</code> | The arity of `func`. |

**Returns**: <code>function</code> - Returns the new curried function.  
**Category**: Function  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// using placeholders
curried(1)(_, 3)(2);
// => [1, 2, 3]
```
* * *
<a name="_.curryRight"></a>
###_.curryRight(func, [arity]) ⇒ <code>function</code>
This method is like `_.curry` except that arguments are applied to `func`
in the manner of `_.partialRight` instead of `_.partial`.

The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
builds, may be used as a placeholder for provided arguments.

**Note:** This method does not set the `length` property of curried functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to curry. |
| \[arity=func.length\] | <code>number</code> | The arity of `func`. |

**Returns**: <code>function</code> - Returns the new curried function.  
**Category**: Function  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curryRight(abc);

curried(3)(2)(1);
// => [1, 2, 3]

curried(2, 3)(1);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// using placeholders
curried(3)(1, _)(2);
// => [1, 2, 3]
```
* * *
<a name="_.debounce"></a>
###_.debounce(func, wait, [options]) ⇒ <code>function</code>
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
| func | <code>function</code> | The function to debounce. |
| wait | <code>number</code> | The number of milliseconds to delay. |
| \[options\] | <code>Object</code> | The options object. |
| \[options.leading=false\] | <code>boolean</code> | Specify invoking on the leading  edge of the timeout. |
| \[options.maxWait\] | <code>number</code> | The maximum time `func` is allowed to be  delayed before it is invoked. |
| \[options.trailing=true\] | <code>boolean</code> | Specify invoking on the trailing  edge of the timeout. |

**Returns**: <code>function</code> - Returns the new debounced function.  
**Category**: Function  
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
* * *
<a name="_.defer"></a>
###_.defer(func, [...args]) ⇒ <code>number</code>
Defers invoking the `func` until the current call stack has cleared. Any
additional arguments are provided to `func` when it is invoked.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to defer. |
| \[...args\] | <code>\*</code> | The arguments to invoke the function with. |

**Returns**: <code>number</code> - Returns the timer id.  
**Category**: Function  
**Example**  
```js
_.defer(function(text) { console.log(text); }, 'deferred');
// logs 'deferred' after one or more milliseconds
```
* * *
<a name="_.delay"></a>
###_.delay(func, wait, [...args]) ⇒ <code>number</code>
Invokes `func` after `wait` milliseconds. Any additional arguments are
provided to `func` when it is invoked.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to delay. |
| wait | <code>number</code> | The number of milliseconds to delay invocation. |
| \[...args\] | <code>\*</code> | The arguments to invoke the function with. |

**Returns**: <code>number</code> - Returns the timer id.  
**Category**: Function  
**Example**  
```js
_.delay(function(text) { console.log(text); }, 1000, 'later');
// => logs 'later' after one second
```
* * *
<a name="_.flow"></a>
###_.flow([...funcs]) ⇒ <code>function</code>
Creates a function that returns the result of invoking the provided
functions with the `this` binding of the created function, where each
successive invocation is supplied the return value of the previous.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[...funcs\] | <code>function</code> | Functions to invoke. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Function  
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
* * *
<a name="_.memoize"></a>
###_.memoize(func, [resolver]) ⇒ <code>function</code>
Creates a function that memoizes the result of `func`. If `resolver` is
provided it determines the cache key for storing the result based on the
arguments provided to the memoized function. By default, the first argument
provided to the memoized function is coerced to a string and used as the
cache key. The `func` is invoked with the `this` binding of the memoized
function.

**Note:** The cache is exposed as the `cache` property on the memoized
function. Its creation may be customized by replacing the `_.memoize.Cache`
constructor with one whose instances implement the ES6 `Map` method interface
of `get`, `has`, and `set`. See the
[ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-map-prototype-object)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to have its output memoized. |
| \[resolver\] | <code>function</code> | The function to resolve the cache key. |

**Returns**: <code>function</code> - Returns the new memoizing function.  
**Category**: Function  
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

upperCase.cache.set('fred, 'BARNEY');
upperCase('fred');
// => 'BARNEY'
```
* * *
<a name="_.negate"></a>
###_.negate(predicate) ⇒ <code>function</code>
Creates a function that negates the result of the predicate `func`. The
`func` predicate is invoked with the `this` binding and arguments of the
created function.

| Param | Type | Description |
| ----- | ---- | ----------- |
| predicate | <code>function</code> | The predicate to negate. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Function  
**Example**  
```js
function isEven(n) {
  return n % 2 == 0;
}

_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]
```
* * *
<a name="_.once"></a>
###_.once(func) ⇒ <code>function</code>
Creates a function that is restricted to invoking `func` once. Repeat calls
to the function return the value of the first call. The `func` is invoked
with the `this` binding of the created function.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to restrict. |

**Returns**: <code>function</code> - Returns the new restricted function.  
**Category**: Function  
**Example**  
```js
var initialize = _.once(createApplication);
initialize();
initialize();
// `initialize` invokes `createApplication` once
```
* * *
<a name="_.partial"></a>
###_.partial(func, [...args]) ⇒ <code>function</code>
Creates a function that invokes `func` with `partial` arguments prepended
to those provided to the new function. This method is like `_.bind` except
it does **not** alter the `this` binding.

The `_.partial.placeholder` value, which defaults to `_` in monolithic
builds, may be used as a placeholder for partially applied arguments.

**Note:** This method does not set the `length` property of partially
applied functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to partially apply arguments to. |
| \[...args\] | <code>\*</code> | The arguments to be partially applied. |

**Returns**: <code>function</code> - Returns the new partially applied function.  
**Category**: Function  
**Example**  
```js
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

// using placeholders
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'
```
* * *
<a name="_.partialRight"></a>
###_.partialRight(func, [...args]) ⇒ <code>function</code>
This method is like `_.partial` except that partially applied arguments
are appended to those provided to the new function.

The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
builds, may be used as a placeholder for partially applied arguments.

**Note:** This method does not set the `length` property of partially
applied functions.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to partially apply arguments to. |
| \[...args\] | <code>\*</code> | The arguments to be partially applied. |

**Returns**: <code>function</code> - Returns the new partially applied function.  
**Category**: Function  
**Example**  
```js
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var greetFred = _.partialRight(greet, 'fred');
greetFred('hi');
// => 'hi fred'

// using placeholders
var sayHelloTo = _.partialRight(greet, 'hello', _);
sayHelloTo('fred');
// => 'hello fred'
```
* * *
<a name="_.rearg"></a>
###_.rearg(func, ...indexes) ⇒ <code>function</code>
Creates a function that invokes `func` with arguments arranged according
to the specified indexes where the argument value at the first index is
provided as the first argument, the argument value at the second index is
provided as the second argument, and so on.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>function</code> | The function to rearrange arguments for. |
| ...indexes | <code>number</code> \| <code>Array.&lt;number&gt;</code> | The arranged argument indexes,  specified as individual indexes or arrays of indexes. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Function  
**Example**  
```js
var rearged = _.rearg(function(a, b, c) {
  return [a, b, c];
}, 2, 0, 1);

rearged('b', 'c', 'a')
// => ['a', 'b', 'c']

var map = _.rearg(_.map, [1, 0]);
map(function(n) { return n * 3; }, [1, 2, 3]);
// => [3, 6, 9]
```
* * *
<a name="_.throttle"></a>
###_.throttle(func, wait, [options]) ⇒ <code>function</code>
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
| func | <code>function</code> | The function to throttle. |
| wait | <code>number</code> | The number of milliseconds to throttle invocations to. |
| \[options\] | <code>Object</code> | The options object. |
| \[options.leading=true\] | <code>boolean</code> | Specify invoking on the leading  edge of the timeout. |
| \[options.trailing=true\] | <code>boolean</code> | Specify invoking on the trailing  edge of the timeout. |

**Returns**: <code>function</code> - Returns the new throttled function.  
**Category**: Function  
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
* * *
<a name="_.wrap"></a>
###_.wrap(value, wrapper) ⇒ <code>function</code>
Creates a function that provides `value` to the wrapper function as its
first argument. Any additional arguments provided to the function are
appended to those provided to the wrapper function. The wrapper is invoked
with the `this` binding of the created function.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to wrap. |
| wrapper | <code>function</code> | The wrapper function. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Function  
**Example**  
```js
var p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'
```
* * *
<a name="_.clone"></a>
###_.clone(value, [isDeep], [customizer], [thisArg]) ⇒ <code>\*</code>
Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
otherwise they are assigned by reference. If `customizer` is provided it is
invoked to produce the cloned values. If `customizer` returns `undefined`
cloning is handled by the method instead. The `customizer` is bound to
`thisArg` and invoked with two argument; (value, index|key).

**Note:** This method is loosely based on the structured clone algorithm.
The enumerable properties of `arguments` objects and objects created by
constructors other than `Object` are cloned to plain `Object` objects. An
empty object is returned for uncloneable values such as functions, DOM nodes,
Maps, Sets, and WeakMaps. See the [HTML5 specification](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to clone. |
| \[isDeep\] | <code>boolean</code> | Specify a deep clone. |
| \[customizer\] | <code>function</code> | The function to customize cloning values. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `customizer`. |

**Returns**: <code>\*</code> - Returns the cloned value.  
**Category**: Lang  
**Example**  
```js
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
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
* * *
<a name="_.cloneDeep"></a>
###_.cloneDeep(value, [customizer], [thisArg]) ⇒ <code>\*</code>
Creates a deep clone of `value`. If `customizer` is provided it is invoked
to produce the cloned values. If `customizer` returns `undefined` cloning
is handled by the method instead. The `customizer` is bound to `thisArg`
and invoked with two argument; (value, index|key).

**Note:** This method is loosely based on the structured clone algorithm.
The enumerable properties of `arguments` objects and objects created by
constructors other than `Object` are cloned to plain `Object` objects. An
empty object is returned for uncloneable values such as functions, DOM nodes,
Maps, Sets, and WeakMaps. See the [HTML5 specification](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to deep clone. |
| \[customizer\] | <code>function</code> | The function to customize cloning values. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `customizer`. |

**Returns**: <code>\*</code> - Returns the deep cloned value.  
**Category**: Lang  
**Example**  
```js
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
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
* * *
<a name="_.isArguments"></a>
###_.isArguments(value) ⇒ <code>boolean</code>
Checks if `value` is classified as an `arguments` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is correctly classified, else `false`.  
**Category**: Lang  
**Example**  
```js
(function() { return _.isArguments(arguments); })();
// => true

_.isArguments([1, 2, 3]);
// => false
```
* * *
<a name="_.isArray"></a>
###_.isArray ⇒ <code>boolean</code>
Checks if `value` is classified as an `Array` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is correctly classified, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isArray([1, 2, 3]);
// => true

(function() { return _.isArray(arguments); })();
// => false
```
* * *
<a name="_.isBoolean"></a>
###_.isBoolean(value) ⇒ <code>boolean</code>
Checks if `value` is classified as a boolean primitive or object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is correctly classified, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isBoolean(false);
// => true

_.isBoolean(null);
// => false
```
* * *
<a name="_.isDate"></a>
###_.isDate(value) ⇒ <code>boolean</code>
Checks if `value` is classified as a `Date` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is correctly classified, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isDate(new Date);
// => true

_.isDate('Mon April 23 2012');
// => false
```
* * *
<a name="_.isElement"></a>
###_.isElement(value) ⇒ <code>boolean</code>
Checks if `value` is a DOM element.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is a DOM element, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isElement(document.body);
// => true

_.isElement('<body>');
// => false
```
* * *
<a name="_.isEmpty"></a>
###_.isEmpty(value) ⇒ <code>boolean</code>
Checks if a collection is empty. A value is considered empty unless it is
an array-like value with a length greater than `0` or an object with own
enumerable properties.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>Array</code> \| <code>Object</code> \| <code>string</code> | The value to inspect. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is empty, else `false`.  
**Category**: Lang  
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
* * *
<a name="_.isEqual"></a>
###_.isEqual(value, other, [customizer], [thisArg]) ⇒ <code>boolean</code>
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
| value | <code>\*</code> | The value to compare to `other`. |
| other | <code>\*</code> | The value to compare to `value`. |
| \[customizer\] | <code>function</code> | The function to customize comparing values. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `customizer`. |

**Returns**: <code>boolean</code> - Returns `true` if the values are equivalent, else `false`.  
**Category**: Lang  
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

_.isEqual(words, otherWords, function(value, other) {
  return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
});
// => true
```
* * *
<a name="_.isError"></a>
###_.isError(value) ⇒ <code>boolean</code>
Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
`SyntaxError`, `TypeError`, or `URIError` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is an error object, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isError(new Error);
// => true

_.isError(Error);
// => false
```
* * *
<a name="_.isFinite"></a>
###_.isFinite ⇒ <code>boolean</code>
Checks if `value` is a finite primitive number.

**Note:** This method is based on ES6 `Number.isFinite`. See the
[ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is a finite number, else `false`.  
**Category**: Lang  
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
* * *
<a name="_.isFunction"></a>
###_.isFunction(value) ⇒ <code>boolean</code>
Checks if `value` is classified as a `Function` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is correctly classified, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isFunction(_);
// => true

_.isFunction(/abc/);
// => false
```
* * *
<a name="_.isObject"></a>
###_.isObject(value) ⇒ <code>boolean</code>
Checks if `value` is the language type of `Object`.
(e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)

**Note:** See the [ES5 spec](http://es5.github.io/#x8) for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is an object, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isObject({});
// => true

_.isObject([1, 2, 3]);
// => true

_.isObject(1);
// => false
```
* * *
<a name="_.isMatch"></a>
###_.isMatch(source, source, [customizer], [thisArg]) ⇒ <code>boolean</code>
Performs a deep comparison between `object` and `source` to determine if
`object` contains equivalent property values. If `customizer` is provided
it is invoked to compare values. If `customizer` returns `undefined`
comparisons are handled by the method instead. The `customizer` is bound
to `thisArg` and invoked with three arguments; (value, other, key).

**Note:** This method supports comparing properties of arrays, booleans,
`Date` objects, numbers, `Object` objects, regexes, and strings. Functions
and DOM nodes are **not** supported. Provide a customizer function to extend
support for comparing other values.

| Param | Type | Description |
| ----- | ---- | ----------- |
| source | <code>Object</code> | The object to inspect. |
| source | <code>Object</code> | The object of property values to match. |
| \[customizer\] | <code>function</code> | The function to customize comparing values. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `customizer`. |

**Returns**: <code>boolean</code> - Returns `true` if `object` is a match, else `false`.  
**Category**: Lang  
**Example**  
```js
var object = { 'user': 'fred', 'age': 40 };

_.isMatch(object, { 'age': 40 });
// => true

_.isMatch(object, { 'age': 36 });
// => false

var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };

_.isMatch(object, source, function(value, other) {
  return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
});
// => true
```
* * *
<a name="_.isNaN"></a>
###_.isNaN(value) ⇒ <code>boolean</code>
Checks if `value` is `NaN`.

**Note:** This method is not the same as native `isNaN` which returns `true`
for `undefined` and other non-numeric values. See the [ES5 spec](http://es5.github.io/#x15.1.2.4)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is `NaN`, else `false`.  
**Category**: Lang  
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
* * *
<a name="_.isNative"></a>
###_.isNative(value) ⇒ <code>boolean</code>
Checks if `value` is a native function.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is a native function, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isNative(Array.prototype.push);
// => true

_.isNative(_);
// => false
```
* * *
<a name="_.isNull"></a>
###_.isNull(value) ⇒ <code>boolean</code>
Checks if `value` is `null`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is `null`, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isNull(null);
// => true

_.isNull(void 0);
// => false
```
* * *
<a name="_.isNumber"></a>
###_.isNumber(value) ⇒ <code>boolean</code>
Checks if `value` is classified as a `Number` primitive or object.

**Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
as numbers, use the `_.isFinite` method.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is correctly classified, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isNumber(8.4);
// => true

_.isNumber(NaN);
// => true

_.isNumber('8.4');
// => false
```
* * *
<a name="_.isPlainObject"></a>
###_.isPlainObject ⇒ <code>boolean</code>
Checks if `value` is an object created by the `Object` constructor or has
a `[[Prototype]]` of `null`.

**Note:** This method assumes objects created by the `Object` constructor
have no inherited enumerable properties.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is a plain object, else `false`.  
**Category**: Lang  
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
* * *
<a name="_.isRegExp"></a>
###_.isRegExp(value) ⇒ <code>boolean</code>
Checks if `value` is classified as a `RegExp` object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is correctly classified, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isRegExp(/abc/);
// => true

_.isRegExp('/abc/');
// => false
```
* * *
<a name="_.isString"></a>
###_.isString(value) ⇒ <code>boolean</code>
Checks if `value` is classified as a `String` primitive or object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is correctly classified, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isString('abc');
// => true

_.isString(1);
// => false
```
* * *
<a name="_.isUndefined"></a>
###_.isUndefined(value) ⇒ <code>boolean</code>
Checks if `value` is `undefined`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to check. |

**Returns**: <code>boolean</code> - Returns `true` if `value` is `undefined`, else `false`.  
**Category**: Lang  
**Example**  
```js
_.isUndefined(void 0);
// => true

_.isUndefined(null);
// => false
```
* * *
<a name="_.extend"></a>
###_.extend ⇒ <code>Object</code>
Assigns own enumerable properties of source object(s) to the destination
object. Subsequent sources overwrite property assignments of previous sources.
If `customizer` is provided it is invoked to produce the assigned values.
The `customizer` is bound to `thisArg` and invoked with five arguments;
(objectValue, sourceValue, key, object, source).

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The destination object. |
| \[...sources\] | <code>Object</code> | The source objects. |
| \[customizer\] | <code>function</code> | The function to customize assigning values. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `customizer`. |

**Returns**: <code>Object</code> - Returns the destination object.  
**Category**: Object  
**Example**  
```js
_.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred', 'status': 'busy' });
// => { 'user': 'fred', 'age': 40, 'status': 'busy' }

var defaults = _.partialRight(_.assign, function(value, other) {
  return typeof value == 'undefined' ? other : value;
});

defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred', 'status': 'busy' });
// => { 'user': 'barney', 'age': 36, 'status': 'busy' }
```
* * *
<a name="_.create"></a>
###_.create(prototype, [properties]) ⇒ <code>Object</code>
Creates an object that inherits from the given `prototype` object. If a
`properties` object is provided its own enumerable properties are assigned
to the created object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| prototype | <code>Object</code> | The object to inherit from. |
| \[properties\] | <code>Object</code> | The properties to assign to the object. |

**Returns**: <code>Object</code> - Returns the new object.  
**Category**: Object  
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
* * *
<a name="_.defaults"></a>
###_.defaults(object, [...sources]) ⇒ <code>Object</code>
Assigns own enumerable properties of source object(s) to the destination
object for all destination properties that resolve to `undefined`. Once a
property is set, additional defaults of the same property are ignored.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The destination object. |
| \[...sources\] | <code>Object</code> | The source objects. |

**Returns**: <code>Object</code> - Returns the destination object.  
**Category**: Object  
**Example**  
```js
_.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred', 'status': 'busy' });
// => { 'user': 'barney', 'age': 36, 'status': 'busy' }
```
* * *
<a name="_.findKey"></a>
###_.findKey(object, [predicate], [thisArg]) ⇒ <code>string</code> \| <code>undefined</code>
This method is like `_.findIndex` except that it returns the key of the
first element `predicate` returns truthy for, instead of the element itself.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to search. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>string</code> \| <code>undefined</code> - Returns the key of the matched element, else `undefined`.  
**Category**: Object  
**Example**  
```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findKey(users, function(chr) { return chr.age < 40; });
// => 'barney' (iteration order is not guaranteed)

// using "_.where" callback shorthand
_.findKey(users, { 'age': 1 });
// => 'pebbles'

// using "_.pluck" callback shorthand
_.findKey(users, 'active');
// => 'barney'
```
* * *
<a name="_.findLastKey"></a>
###_.findLastKey(object, [predicate], [thisArg]) ⇒ <code>string</code> \| <code>undefined</code>
This method is like `_.findKey` except that it iterates over elements of
a collection in the opposite order.

If a property name is provided for `predicate` the created "_.pluck" style
callback returns the property value of the given element.

If an object is provided for `predicate` the created "_.where" style callback
returns `true` for elements that have the properties of the given object,
else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to search. |
| \[predicate=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>string</code> \| <code>undefined</code> - Returns the key of the matched element, else `undefined`.  
**Category**: Object  
**Example**  
```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findLastKey(users, function(chr) { return chr.age < 40; });
// => returns `pebbles` assuming `_.findKey` returns `barney`

// using "_.where" callback shorthand
_.findLastKey(users, { 'age': 40 });
// => 'fred'

// using "_.pluck" callback shorthand
_.findLastKey(users, 'active');
// => 'pebbles'
```
* * *
<a name="_.forIn"></a>
###_.forIn(object, [iteratee], [thisArg]) ⇒ <code>Object</code>
Iterates over own and inherited enumerable properties of an object invoking
`iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
with three arguments; (value, key, object). Iterator functions may exit
iteration early by explicitly returning `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> | The function invoked per iteration. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Object</code> - Returns `object`.  
**Category**: Object  
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
* * *
<a name="_.forInRight"></a>
###_.forInRight(object, [iteratee], [thisArg]) ⇒ <code>Object</code>
This method is like `_.forIn` except that it iterates over properties of
`object` in the opposite order.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> | The function invoked per iteration. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Object</code> - Returns `object`.  
**Category**: Object  
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
* * *
<a name="_.forOwn"></a>
###_.forOwn(object, [iteratee], [thisArg]) ⇒ <code>Object</code>
Iterates over own enumerable properties of an object invoking `iteratee`
for each property. The `iteratee` is bound to `thisArg` and invoked with
three arguments; (value, key, object). Iterator functions may exit iteration
early by explicitly returning `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> | The function invoked per iteration. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Object</code> - Returns `object`.  
**Category**: Object  
**Example**  
```js
_.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(n, key) {
  console.log(key);
});
// => logs '0', '1', and 'length' (iteration order is not guaranteed)
```
* * *
<a name="_.forOwnRight"></a>
###_.forOwnRight(object, [iteratee], [thisArg]) ⇒ <code>Object</code>
This method is like `_.forOwn` except that it iterates over properties of
`object` in the opposite order.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> | The function invoked per iteration. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Object</code> - Returns `object`.  
**Category**: Object  
**Example**  
```js
_.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function(n, key) {
  console.log(key);
});
// => logs 'length', '1', and '0' assuming `_.forOwn` logs '0', '1', and 'length'
```
* * *
<a name="_.methods"></a>
###_.methods(object) ⇒ <code>Array</code>
Creates an array of function property names from all enumerable properties,
own and inherited, of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to inspect. |

**Returns**: <code>Array</code> - Returns the new array of property names.  
**Category**: Object  
**Example**  
```js
_.functions(_);
// => ['all', 'any', 'bind', ...]
```
* * *
<a name="_.has"></a>
###_.has(object, key) ⇒ <code>boolean</code>
Checks if the specified property name exists as a direct property of `object`,
instead of an inherited property.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to inspect. |
| key | <code>string</code> | The name of the property to check. |

**Returns**: <code>boolean</code> - Returns `true` if `key` is a direct property, else `false`.  
**Category**: Object  
**Example**  
```js
_.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
// => true
```
* * *
<a name="_.invert"></a>
###_.invert(object, [multiValue]) ⇒ <code>Object</code>
Creates an object composed of the inverted keys and values of `object`.
If `object` contains duplicate values, subsequent values overwrite property
assignments of previous values unless `multiValue` is `true`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to invert. |
| \[multiValue\] | <code>boolean</code> | Allow multiple values per key. |

**Returns**: <code>Object</code> - Returns the new inverted object.  
**Category**: Object  
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
* * *
<a name="_.keys"></a>
###_.keys ⇒ <code>Array</code>
Creates an array of the own enumerable property names of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to inspect. |

**Returns**: <code>Array</code> - Returns the array of property names.  
**Category**: Object  
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
* * *
<a name="_.keysIn"></a>
###_.keysIn(object) ⇒ <code>Array</code>
Creates an array of the own and inherited enumerable property names of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to inspect. |

**Returns**: <code>Array</code> - Returns the array of property names.  
**Category**: Object  
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
* * *
<a name="_.mapValues"></a>
###_.mapValues(object, [iteratee], [thisArg]) ⇒ <code>Object</code>
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
| object | <code>Object</code> | The object to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> \| <code>Object</code> \| <code>string</code> | The function invoked  per iteration. If a property name or object is provided it is used to  create a "_.pluck" or "_.where" style callback respectively. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Object</code> - Returns the new mapped object.  
**Category**: Object  
**Example**  
```js
_.mapValues({ 'a': 1, 'b': 2, 'c': 3} , function(n) { return n * 3; });
// => { 'a': 3, 'b': 6, 'c': 9 }

var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

// using "_.pluck" callback shorthand
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 }
```
* * *
<a name="_.merge"></a>
###_.merge ⇒ <code>Object</code>
Recursively merges own enumerable properties of the source object(s), that
don't resolve to `undefined` into the destination object. Subsequent sources
overwrite property assignments of previous sources. If `customizer` is
provided it is invoked to produce the merged values of the destination and
source properties. If `customizer` returns `undefined` merging is handled
by the method instead. The `customizer` is bound to `thisArg` and invoked
with five arguments; (objectValue, sourceValue, key, object, source).

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The destination object. |
| \[...sources\] | <code>Object</code> | The source objects. |
| \[customizer\] | <code>function</code> | The function to customize merging properties. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `customizer`. |

**Returns**: <code>Object</code> - Returns the destination object.  
**Category**: Object  
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
// => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
```
* * *
<a name="_.omit"></a>
###_.omit(object, [predicate], [thisArg]) ⇒ <code>Object</code>
The opposite of `_.pick`; this method creates an object composed of the
own and inherited enumerable properties of `object` that are not omitted.
Property names may be specified as individual arguments or as arrays of
property names. If `predicate` is provided it is invoked for each property
of `object` omitting the properties `predicate` returns truthy for. The
predicate is bound to `thisArg` and invoked with three arguments;
(value, key, object).

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The source object. |
| \[predicate\] | <code>string</code> | The function invoked per  iteration or property names to omit, specified as individual property  names or arrays of property names. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Object</code> - Returns the new object.  
**Category**: Object  
**Example**  
```js
var object = { 'user': 'fred', 'age': 40 };

_.omit(object, 'age');
// => { 'user': 'fred' }

_.omit(object, _.isNumber);
// => { 'user': 'fred' }
```
* * *
<a name="_.pairs"></a>
###_.pairs(object) ⇒ <code>Array</code>
Creates a two dimensional array of the key-value pairs for `object`,
e.g. `[[key1, value1], [key2, value2]]`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to inspect. |

**Returns**: <code>Array</code> - Returns the new array of key-value pairs.  
**Category**: Object  
**Example**  
```js
_.pairs({ 'barney': 36, 'fred': 40 });
// => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
```
* * *
<a name="_.pick"></a>
###_.pick(object, [predicate], [thisArg]) ⇒ <code>Object</code>
Creates an object composed of the picked `object` properties. Property
names may be specified as individual arguments or as arrays of property
names. If `predicate` is provided it is invoked for each property of `object`
picking the properties `predicate` returns truthy for. The predicate is
bound to `thisArg` and invoked with three arguments; (value, key, object).

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The source object. |
| \[predicate\] | <code>string</code> | The function invoked per  iteration or property names to pick, specified as individual property  names or arrays of property names. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `predicate`. |

**Returns**: <code>Object</code> - Returns the new object.  
**Category**: Object  
**Example**  
```js
var object = { 'user': 'fred', 'age': 40 };

_.pick(object, 'user');
// => { 'user': 'fred' }

_.pick(object, _.isString);
// => { 'user': 'fred' }
```
* * *
<a name="_.result"></a>
###_.result(object, key, [defaultValue]) ⇒ <code>\*</code>
Resolves the value of property `key` on `object`. If the value of `key` is
a function it is invoked with the `this` binding of `object` and its result
is returned, else the property value is returned. If the property value is
`undefined` the `defaultValue` is used in its place.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to query. |
| key | <code>string</code> | The name of the property to resolve. |
| \[defaultValue\] | <code>\*</code> | The value returned if the property value  resolves to `undefined`. |

**Returns**: <code>\*</code> - Returns the resolved value.  
**Category**: Object  
**Example**  
```js
var object = { 'user': 'fred', 'age': _.constant(40) };

_.result(object, 'user');
// => 'fred'

_.result(object, 'age');
// => 40

_.result(object, 'status', 'busy');
// => 'busy'

_.result(object, 'status', _.constant('busy'));
// => 'busy'
```
* * *
<a name="_.transform"></a>
###_.transform(object, [iteratee], [accumulator], [thisArg]) ⇒ <code>\*</code>
An alternative to `_.reduce`; this method transforms `object` to a new
`accumulator` object which is the result of running each of its own enumerable
properties through `iteratee`, with each invocation potentially mutating
the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
with four arguments; (accumulator, value, key, object). Iterator functions
may exit iteration early by explicitly returning `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Array</code> \| <code>Object</code> | The object to iterate over. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> | The function invoked per iteration. |
| \[accumulator\] | <code>\*</code> | The custom accumulator value. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>\*</code> - Returns the accumulated value.  
**Category**: Object  
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
* * *
<a name="_.values"></a>
###_.values(object) ⇒ <code>Array</code>
Creates an array of the own enumerable property values of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to query. |

**Returns**: <code>Array</code> - Returns the array of property values.  
**Category**: Object  
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
* * *
<a name="_.valuesIn"></a>
###_.valuesIn(object) ⇒ <code>Array</code>
Creates an array of the own and inherited enumerable property values
of `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to query. |

**Returns**: <code>Array</code> - Returns the array of property values.  
**Category**: Object  
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
* * *
<a name="_.random"></a>
###_.random([min], [max], [floating]) ⇒ <code>number</code>
Produces a random number between `min` and `max` (inclusive). If only one
argument is provided a number between `0` and the given number is returned.
If `floating` is `true`, or either `min` or `max` are floats, a floating-point
number is returned instead of an integer.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[min=0\] | <code>number</code> | The minimum possible value. |
| \[max=1\] | <code>number</code> | The maximum possible value. |
| \[floating\] | <code>boolean</code> | Specify returning a floating-point number. |

**Returns**: <code>number</code> - Returns the random number.  
**Category**: Number  
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
* * *
<a name="_.camelCase"></a>
###_.camelCase ⇒ <code>string</code>
Converts `string` to camel case.
See [Wikipedia](http://en.wikipedia.org/wiki/CamelCase) for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to camel case. |

**Returns**: <code>string</code> - Returns the camel cased string.  
**Category**: String  
**Example**  
```js
_.camelCase('Hello world');
// => 'helloWorld'

_.camelCase('--hello-world');
// => 'helloWorld'

_.camelCase('__hello_world__');
// => 'helloWorld'
```
* * *
<a name="_.capitalize"></a>
###_.capitalize([string]) ⇒ <code>string</code>
Capitalizes the first character of `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to capitalize. |

**Returns**: <code>string</code> - Returns the capitalized string.  
**Category**: String  
**Example**  
```js
_.capitalize('fred');
// => 'Fred'
```
* * *
<a name="_.deburr"></a>
###_.deburr([string]) ⇒ <code>string</code>
Deburrs `string` by converting latin-1 supplementary letters to basic latin letters.
See [Wikipedia](http://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to deburr. |

**Returns**: <code>string</code> - Returns the deburred string.  
**Category**: String  
**Example**  
```js
_.deburr('déjà vu');
// => 'deja vu'
```
* * *
<a name="_.endsWith"></a>
###_.endsWith([string], [target], [position]) ⇒ <code>boolean</code>
Checks if `string` ends with the given target string.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to search. |
| \[target\] | <code>string</code> | The string to search for. |
| \[position=string.length\] | <code>number</code> | The position to search from. |

**Returns**: <code>boolean</code> - Returns `true` if `string` ends with `target`, else `false`.  
**Category**: String  
**Example**  
```js
_.endsWith('abc', 'c');
// => true

_.endsWith('abc', 'b');
// => false

_.endsWith('abc', 'b', 2);
// => true
```
* * *
<a name="_.escape"></a>
###_.escape([string]) ⇒ <code>string</code>
Converts the characters "&", "<", ">", '"', "'", and '`', in `string` to
their corresponding HTML entities.

**Note:** No other characters are escaped. To escape additional characters
use a third-party library like [_he_](http://mths.be/he).

Though the ">" character is escaped for symmetry, characters like
">" and "/" don't require escaping in HTML and have no special meaning
unless they're part of a tag or unquoted attribute value.
See [Mathias Bynens's article](http://mathiasbynens.be/notes/ambiguous-ampersands)
(under "semi-related fun fact") for more details.

Backticks are escaped because in Internet Explorer < 9, they can break out
of attribute values or HTML comments. See [#102](http://html5sec.org/#102),
[#108](http://html5sec.org/#108), and [#133](http://html5sec.org/#133) of
the [HTML5 Security Cheatsheet](http://html5sec.org/) for more details.

When working with HTML you should always quote attribute values to reduce
XSS vectors. See [Ryan Grove's article](http://wonko.com/post/html-escaping)
for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to escape. |

**Returns**: <code>string</code> - Returns the escaped string.  
**Category**: String  
**Example**  
```js
_.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'
```
* * *
<a name="_.escapeRegExp"></a>
###_.escapeRegExp([string]) ⇒ <code>string</code>
Escapes the `RegExp` special characters "\", "^", "$", ".", "|", "?", "*",
"+", "(", ")", "[", "]", "{" and "}" in `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to escape. |

**Returns**: <code>string</code> - Returns the escaped string.  
**Category**: String  
**Example**  
```js
_.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'
```
* * *
<a name="_.kebabCase"></a>
###_.kebabCase ⇒ <code>string</code>
Converts `string` to kebab case (a.k.a. spinal case).
See [Wikipedia](http://en.wikipedia.org/wiki/Letter_case#Computers) for
more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to kebab case. |

**Returns**: <code>string</code> - Returns the kebab cased string.  
**Category**: String  
**Example**  
```js
_.kebabCase('Hello world');
// => 'hello-world'

_.kebabCase('helloWorld');
// => 'hello-world'

_.kebabCase('__hello_world__');
// => 'hello-world'
```
* * *
<a name="_.pad"></a>
###_.pad([string], [length], [chars]) ⇒ <code>string</code>
Pads `string` on the left and right sides if it is shorter then the given
padding length. The `chars` string may be truncated if the number of padding
characters can't be evenly divided by the padding length.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to pad. |
| \[length=0\] | <code>number</code> | The padding length. |
| \[chars=' '\] | <code>string</code> | The string used as padding. |

**Returns**: <code>string</code> - Returns the padded string.  
**Category**: String  
**Example**  
```js
_.pad('abc', 8);
// => '  abc   '

_.pad('abc', 8, '_-');
// => '_-abc_-_'

_.pad('abc', 3);
// => 'abc'
```
* * *
<a name="_.padLeft"></a>
###_.padLeft([string], [length], [chars]) ⇒ <code>string</code>
Pads `string` on the left side if it is shorter then the given padding
length. The `chars` string may be truncated if the number of padding
characters exceeds the padding length.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to pad. |
| \[length=0\] | <code>number</code> | The padding length. |
| \[chars=' '\] | <code>string</code> | The string used as padding. |

**Returns**: <code>string</code> - Returns the padded string.  
**Category**: String  
**Example**  
```js
_.padLeft('abc', 6);
// => '   abc'

_.padLeft('abc', 6, '_-');
// => '_-_abc'

_.padLeft('abc', 3);
// => 'abc'
```
* * *
<a name="_.padRight"></a>
###_.padRight([string], [length], [chars]) ⇒ <code>string</code>
Pads `string` on the right side if it is shorter then the given padding
length. The `chars` string may be truncated if the number of padding
characters exceeds the padding length.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to pad. |
| \[length=0\] | <code>number</code> | The padding length. |
| \[chars=' '\] | <code>string</code> | The string used as padding. |

**Returns**: <code>string</code> - Returns the padded string.  
**Category**: String  
**Example**  
```js
_.padRight('abc', 6);
// => 'abc   '

_.padRight('abc', 6, '_-');
// => 'abc_-_'

_.padRight('abc', 3);
// => 'abc'
```
* * *
<a name="_.parseInt"></a>
###_.parseInt(string, [radix]) ⇒ <code>number</code>
Converts `string` to an integer of the specified radix. If `radix` is
`undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
in which case a `radix` of `16` is used.

**Note:** This method aligns with the ES5 implementation of `parseInt`.
See the [ES5 spec](http://es5.github.io/#E) for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| string | <code>string</code> | The string to parse. |
| \[radix\] | <code>number</code> | The radix to interpret `value` by. |

**Returns**: <code>number</code> - Returns the converted integer.  
**Category**: String  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.parseInt('08');
// => 8
```
* * *
<a name="_.repeat"></a>
###_.repeat([string], [n]) ⇒ <code>string</code>
Repeats the given string `n` times.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to repeat. |
| \[n=0\] | <code>number</code> | The number of times to repeat the string. |

**Returns**: <code>string</code> - Returns the repeated string.  
**Category**: String  
**Example**  
```js
_.repeat('*', 3);
// => '***'

_.repeat('abc', 2);
// => 'abcabc'

_.repeat('abc', 0);
// => ''
```
* * *
<a name="_.snakeCase"></a>
###_.snakeCase ⇒ <code>string</code>
Converts `string` to snake case.
See [Wikipedia](http://en.wikipedia.org/wiki/Snake_case) for more details.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to snake case. |

**Returns**: <code>string</code> - Returns the snake cased string.  
**Category**: String  
**Example**  
```js
_.snakeCase('Hello world');
// => 'hello_world'

_.snakeCase('--hello-world');
// => 'hello_world'

_.snakeCase('helloWorld');
// => 'hello_world'
```
* * *
<a name="_.startsWith"></a>
###_.startsWith([string], [target], [position]) ⇒ <code>boolean</code>
Checks if `string` starts with the given target string.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to search. |
| \[target\] | <code>string</code> | The string to search for. |
| \[position=0\] | <code>number</code> | The position to search from. |

**Returns**: <code>boolean</code> - Returns `true` if `string` starts with `target`, else `false`.  
**Category**: String  
**Example**  
```js
_.startsWith('abc', 'a');
// => true

_.startsWith('abc', 'b');
// => false

_.startsWith('abc', 'b', 1);
// => true
```
* * *
<a name="_.template"></a>
###_.template([string], [options]) ⇒ <code>function</code>
Creates a compiled template function that can interpolate data properties
in "interpolate" delimiters, HTML-escape interpolated data properties in
"escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
properties may be accessed as free variables in the template. If a setting
object is provided it takes precedence over `_.templateSettings` values.

**Note:** In the development build `_.template` utilizes sourceURLs for easier debugging.
See the [HTML5 Rocks article on sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
for more details.

For more information on precompiling templates see
[Lo-Dash's custom builds documentation](https://lodash.com/custom-builds).

For more information on Chrome extension sandboxes see
[Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The template string. |
| \[options\] | <code>Object</code> | The options object. |
| \[options.escape\] | <code>RegExp</code> | The HTML "escape" delimiter. |
| \[options.evaluate\] | <code>RegExp</code> | The "evaluate" delimiter. |
| \[options.imports\] | <code>Object</code> | An object to import into the template as free variables. |
| \[options.interpolate\] | <code>RegExp</code> | The "interpolate" delimiter. |
| \[options.sourceURL\] | <code>string</code> | The sourceURL of the template's compiled source. |
| \[options.variable\] | <code>string</code> | The data object variable name. |

**Returns**: <code>function</code> - Returns the compiled template function.  
**Category**: String  
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
* * *
<a name="_.trim"></a>
###_.trim([string], [chars]) ⇒ <code>string</code>
Removes leading and trailing whitespace or specified characters from `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to trim. |
| \[chars=whitespace\] | <code>string</code> | The characters to trim. |

**Returns**: <code>string</code> - Returns the trimmed string.  
**Category**: String  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.trim('  fred  ');
// => 'fred'

_.trim('-_-fred-_-', '_-');
// => 'fred'
```
* * *
<a name="_.trimLeft"></a>
###_.trimLeft([string], [chars]) ⇒ <code>string</code>
Removes leading whitespace or specified characters from `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to trim. |
| \[chars=whitespace\] | <code>string</code> | The characters to trim. |

**Returns**: <code>string</code> - Returns the trimmed string.  
**Category**: String  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.trimLeft('  fred  ');
// => 'fred  '

_.trimLeft('-_-fred-_-', '_-');
// => 'fred-_-'
```
* * *
<a name="_.trimRight"></a>
###_.trimRight([string], [chars]) ⇒ <code>string</code>
Removes trailing whitespace or specified characters from `string`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to trim. |
| \[chars=whitespace\] | <code>string</code> | The characters to trim. |

**Returns**: <code>string</code> - Returns the trimmed string.  
**Category**: String  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.trimRight('  fred  ');
// => '  fred'

_.trimRight('-_-fred-_-', '_-');
// => '-_-fred'
```
* * *
<a name="_.trunc"></a>
###_.trunc([string], [options]) ⇒ <code>string</code>
Truncates `string` if it is longer than the given maximum string length.
The last characters of the truncated string are replaced with the omission
string which defaults to "...".

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to truncate. |
| \[options\] | <code>Object</code> \| <code>number</code> | The options object or maximum string length. |
| \[options.length=30\] | <code>number</code> | The maximum string length. |
| \[options.omission='...'\] | <code>string</code> | The string to indicate text is omitted. |
| \[options.separator\] | <code>RegExp</code> \| <code>string</code> | The separator pattern to truncate to. |

**Returns**: <code>string</code> - Returns the truncated string.  
**Category**: String  
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
* * *
<a name="_.unescape"></a>
###_.unescape([string]) ⇒ <code>string</code>
The inverse of `_.escape`; this method converts the HTML entities
`&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
corresponding characters.

**Note:** No other HTML entities are unescaped. To unescape additional HTML
entities use a third-party library like [_he_](http://mths.be/he).

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to unescape. |

**Returns**: <code>string</code> - Returns the unescaped string.  
**Category**: String  
**Example**  
```js
_.unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'
```
* * *
<a name="_.words"></a>
###_.words([string], [pattern]) ⇒ <code>Array</code>
Splits `string` into an array of its words.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[string=''\] | <code>string</code> | The string to inspect. |
| \[pattern\] | <code>RegExp</code> \| <code>string</code> | The pattern to match words. |

**Returns**: <code>Array</code> - Returns the words of `string`.  
**Category**: String  
**param-**: {Object} [guard] Enables use as a callback for functions like &#x60;_.map&#x60;.  
**Example**  
```js
_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']

_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
```
* * *
<a name="_.attempt"></a>
###_.attempt(func) ⇒ <code>\*</code>
Attempts to invoke `func`, returning either the result or the caught
error object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | <code>\*</code> | The function to attempt. |

**Returns**: <code>\*</code> - Returns the `func` result or error object.  
**Category**: Utility  
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
* * *
<a name="_.iteratee"></a>
###_.iteratee([func], [thisArg]) ⇒ <code>function</code>
Creates a function bound to an optional `thisArg`. If `func` is a property
name the created callback returns the property value for a given element.
If `func` is an object the created callback returns `true` for elements
that contain the equivalent object properties, otherwise it returns `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[func=[identity](#_.identity)\] | <code>\*</code> | The value to convert to a callback. |
| \[thisArg\] | <code>\*</code> | The `this` binding of the created callback. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Utility  
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

_.filter(users, 'age__gt36');
// => [{ 'user': 'fred', 'age': 40 }]
```
* * *
<a name="_.constant"></a>
###_.constant(value) ⇒ <code>function</code>
Creates a function that returns `value`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | The value to return from the new function. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Utility  
**Example**  
```js
var object = { 'user': 'fred' };
var getter = _.constant(object);
getter() === object;
// => true
```
* * *
<a name="_.identity"></a>
###_.identity(value) ⇒ <code>\*</code>
This method returns the first argument provided to it.

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | <code>\*</code> | Any value. |

**Returns**: <code>\*</code> - Returns `value`.  
**Category**: Utility  
**Example**  
```js
var object = { 'user': 'fred' };
_.identity(object) === object;
// => true
```
* * *
<a name="_.matches"></a>
###_.matches(source) ⇒ <code>function</code>
Creates a "_.where" style predicate function which performs a deep comparison
between a given object and `source`, returning `true` if the given object
has equivalent property values, else `false`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| source | <code>Object</code> | The object of property values to match. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Utility  
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
* * *
<a name="_.mixin"></a>
###_.mixin([object], source, [options]) ⇒ <code>function</code> \| <code>Object</code>
Adds all own enumerable function properties of a source object to the
destination object. If `object` is a function then methods are added to
its prototype as well.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[object=this\] | <code>function</code> \| <code>Object</code> | object The destination object. |
| source | <code>Object</code> | The object of functions to add. |
| \[options\] | <code>Object</code> | The options object. |
| \[options.chain=true\] | <code>boolean</code> | Specify whether the functions added  are chainable. |

**Returns**: <code>function</code> \| <code>Object</code> - Returns `object`.  
**Category**: Utility  
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
* * *
<a name="_.noConflict"></a>
###_.noConflict() ⇒ <code>function</code>
Reverts the `_` variable to its previous value and returns a reference to
the `lodash` function.

**Returns**: <code>function</code> - Returns the `lodash` function.  
**Category**: Utility  
**Example**  
```js
var lodash = _.noConflict();
```
* * *
<a name="_.noop"></a>
###_.noop()
A no-operation function.

**Category**: Utility  
**Example**  
```js
var object = { 'user': 'fred' };
_.noop(object) === undefined;
// => true
```
* * *
<a name="_.property"></a>
###_.property(key) ⇒ <code>function</code>
Creates a "_.pluck" style function which returns the property value
of `key` on a given object.

| Param | Type | Description |
| ----- | ---- | ----------- |
| key | <code>string</code> | The name of the property to retrieve. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Utility  
**Example**  
```js
var users = [
  { 'user': 'fred' },
  { 'user': 'barney' }
];

var getName = _.property('user');

_.map(users, getName);
// => ['fred', barney']

_.pluck(_.sortBy(users, getName), 'user');
// => ['barney', 'fred']
```
* * *
<a name="_.propertyOf"></a>
###_.propertyOf(object) ⇒ <code>function</code>
The inverse of `_.property`; this method creates a function which returns
the property value of a given key on `object`.

| Param | Type | Description |
| ----- | ---- | ----------- |
| object | <code>Object</code> | The object to inspect. |

**Returns**: <code>function</code> - Returns the new function.  
**Category**: Utility  
**Example**  
```js
var object = { 'user': 'fred', 'age': 40, 'active': true };
_.map(['active', 'user'], _.propertyOf(object));
// => [true, 'fred']

var object = { 'a': 3, 'b': 1, 'c': 2 };
_.sortBy(['a', 'b', 'c'], _.propertyOf(object));
// => ['b', 'c', 'a']
```
* * *
<a name="_.range"></a>
###_.range([start], end, [step]) ⇒ <code>Array</code>
Creates an array of numbers (positive and/or negative) progressing from
`start` up to, but not including, `end`. If `start` is less than `end` a
zero-length range is created unless a negative `step` is specified.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[start=0\] | <code>number</code> | The start of the range. |
| end | <code>number</code> | The end of the range. |
| \[step=1\] | <code>number</code> | The value to increment or decrement by. |

**Returns**: <code>Array</code> - Returns the new array of numbers.  
**Category**: Utility  
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
* * *
<a name="_.times"></a>
###_.times(n, [iteratee], [thisArg]) ⇒ <code>Array</code>
Invokes the iteratee function `n` times, returning an array of the results
of each invocation. The `iteratee` is bound to `thisArg` and invoked with
one argument; (index).

| Param | Type | Description |
| ----- | ---- | ----------- |
| n | <code>number</code> | The number of times to invoke `iteratee`. |
| \[iteratee=[identity](#_.identity)\] | <code>function</code> | The function invoked per iteration. |
| \[thisArg\] | <code>\*</code> | The `this` binding of `iteratee`. |

**Returns**: <code>Array</code> - Returns the array of results.  
**Category**: Utility  
**Example**  
```js
var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
// => [3, 6, 4]

_.times(3, function(n) { mage.castSpell(n); });
// => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2` respectively

_.times(3, function(n) { this.cast(n); }, mage);
// => also invokes `mage.castSpell(n)` three times
```
* * *
<a name="_.uniqueId"></a>
###_.uniqueId([prefix]) ⇒ <code>string</code>
Generates a unique ID. If `prefix` is provided the ID is appended to it.

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[prefix\] | <code>string</code> | The value to prefix the ID with. |

**Returns**: <code>string</code> - Returns the unique ID.  
**Category**: Utility  
**Example**  
```js
_.uniqueId('contact_');
// => 'contact_104'

_.uniqueId();
// => '105'
```
