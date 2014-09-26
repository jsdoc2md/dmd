##Modules
* [cjs/class](#module_cjs/class)
  * [class: ExportedClass ⏏](#exp_module_cjs/class^ExportedClass)
    * [new ExportedClass()](#new_module_cjs/class^ExportedClass())
    * [exportedClass.prop](#module_cjs/class^ExportedClass#prop)
    * [ExportedClass.staticProp](#module_cjs/class^ExportedClass.staticProp)
    * [ExportedClass~innerProp](#module_cjs/class^ExportedClass..innerProp)
* [cjs/function-alias](#module_cjs/function-alias)
  * [sum(one, two) -> `number` ⏏](#exp_module_cjs/function-alias^sum)
* [cjs/object-alias](#module_cjs/object-alias)
  * [teams ⏏](#exp_module_cjs/object-alias^teams)
* [cjs/object](#module_cjs/object)
  * [obj.one](#module_cjs/object.one)
  * [obj.two()](#module_cjs/object.two)

##Global
* [class: GlobalClass](#GlobalClass)
  * [new GlobalClass(one, two)](#new_GlobalClass())
  * [globalClass.propOne](#GlobalClass#propOne)
  * [GlobalClass.propTwo](#GlobalClass.propTwo)
* [exampleVar](#exampleVar)
* [globalFunction(one, two)](#globalFunction)
* [mixin: Eventful](#Eventful)
  * [Eventful.on(eventName, handler)](#Eventful.on)
  * [Eventful.fire(eventName, eventData)](#Eventful.fire)
* [globalFunction() -> `string`](#globalFunction)
* [globalVar](#globalVar)

<a name="module_cjs/class"></a>
##cjs/class
exports a class

* [cjs/class](#module_cjs/class)
  * [class: ExportedClass ⏏](#exp_module_cjs/class^ExportedClass)
    * [new ExportedClass()](#new_module_cjs/class^ExportedClass())
    * [exportedClass.prop](#module_cjs/class^ExportedClass#prop)
    * [ExportedClass.staticProp](#module_cjs/class^ExportedClass.staticProp)
    * [ExportedClass~innerProp](#module_cjs/class^ExportedClass..innerProp)

<a name="exp_module_cjs/class^ExportedClass"></a>
###class: ExportedClass ⏏
the exported class

<a name="new_module_cjs/class^ExportedClass()"></a>
####new ExportedClass()
the exported contructor

<a name="module_cjs/class^ExportedClass#prop"></a>
####exportedClass.prop
instance property

<a name="module_cjs/class^ExportedClass.staticProp"></a>
####ExportedClass.staticProp
a static property for the exported class

<a name="module_cjs/class^ExportedClass..innerProp"></a>
####ExportedClass~innerProp
inner module property

**Scope**: inner member of [ExportedClass](#exp_module_cjs/class^ExportedClass)  
<a name="module_cjs/function-alias"></a>
##cjs/function-alias
exports a pointer to a function

<a name="exp_module_cjs/function-alias^sum"></a>
###sum(one, two) -> `number` ⏏
the function

**Params**

- one `number` - the first number  
- two `number` - the second number  

**Returns**: `number` - the calculation result  
<a name="module_cjs/object-alias"></a>
##cjs/object-alias
a module exporting an object

<a name="exp_module_cjs/object-alias^teams"></a>
###teams ⏏
the teams

<a name="module_cjs/object"></a>
##cjs/object
a module exporting `exports` directly

* [cjs/object](#module_cjs/object)
  * [obj.one](#module_cjs/object.one)
  * [obj.two()](#module_cjs/object.two)

<a name="module_cjs/object.one"></a>
###obj.one
the first property

**Type**: `number`  
<a name="module_cjs/object.two"></a>
###obj.two()
the second property, a function

**Example**  
this is the example
<a name="GlobalClass"></a>
##class: GlobalClass
a global class

**Extends**: `String`  
* [class: GlobalClass](#GlobalClass)
  * [new GlobalClass(one, two)](#new_GlobalClass())
  * [globalClass.propOne](#GlobalClass#propOne)
  * [GlobalClass.propTwo](#GlobalClass.propTwo)

<a name="new_GlobalClass()"></a>
###new GlobalClass(one, two)
the global class constructor

**Params**

- one `number` - first param  
- two `string` - second param  

<a name="GlobalClass#propOne"></a>
###globalClass.propOne
an instance property

<a name="GlobalClass.propTwo"></a>
###GlobalClass.propTwo
a static property

<a name="exampleVar"></a>
##exampleVar
an example var

**Type**: `string`  
**Default**: `"something"`  
**Example**  
var thisVar = funtion(){
    return "a value";
};
<a name="globalFunction"></a>
##globalFunction(one, two)
a global function

**Params**

- one `number` - first param  
- two `string` - second param  

<a name="phantom"></a>
##mixin: phantom
phantom mixin

<a name="Eventful"></a>
##mixin: Eventful
This provides methods used for event handling. It's not meant to
be used directly.

* [mixin: Eventful](#Eventful)
  * [Eventful.on(eventName, handler)](#Eventful.on)
  * [Eventful.fire(eventName, eventData)](#Eventful.fire)

<a name="Eventful.on"></a>
###Eventful.on(eventName, handler)
Register a handler function to be called whenever this event is fired.

**Params**

- eventName `string` - Name of the event.  
- handler `function` - The handler to call.  

<a name="Eventful.fire"></a>
###Eventful.fire(eventName, eventData)
Fire an event, causing all handlers for that event name to run.

**Params**

- eventName `string` - Name of the event.  
- eventData `Object` - The data provided to each handler.  

<a name="globalFunction"></a>
##globalFunction() -> `string`
a global function returning multiple stuff

**Returns**: `string` - if something you get a string back`object` | `function` - or an object, or function  
<a name="globalVar"></a>
##globalVar
a global var

**Type**: `string`  
**Default**: `"something"`  
