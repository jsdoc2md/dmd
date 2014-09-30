##Modules
* [cjs/class](#module_cjs/class)
  * [class: ExportedClass](#exp_module_cjs/class^ExportedClass) ⏏
    * [new ExportedClass()](#new_module_cjs/class^ExportedClass_new)
    * [exportedClass.prop](#module_cjs/class^ExportedClass#prop)
    * [ExportedClass.staticProp](#module_cjs/class^ExportedClass.staticProp)
    * [ExportedClass~innerProp](#module_cjs/class^ExportedClass..innerProp)
* [cjs/falias-obj](#module_cjs/falias-obj)
  * [sum()](#exp_module_cjs/falias-obj^sum) ⏏
  * [cjs/falias-obj.extra()](#module_cjs/falias-obj.extra)
* [cjs/function-alias](#module_cjs/function-alias)
  * [sum(one, two)](#exp_module_cjs/function-alias^sum) ⇒ `number` ⏏
* [cjs/object-alias](#module_cjs/object-alias)
  * [teams](#exp_module_cjs/object-alias^teams) ⏏
* [cjs/object](#module_cjs/object)
  * [obj.one](#module_cjs/object.one) :`number`
  * [obj.two()](#module_cjs/object.two)

##Global
* [class: LendsClass](#LendsClass)
  * [LendsClass.say()](#LendsClass.say)
* [class: GlobalClass](#GlobalClass)
  * [new GlobalClass(one, two)](#new_GlobalClass_new)
  * [globalClass.propOne](#GlobalClass#propOne)
  * [GlobalClass.propTwo](#GlobalClass.propTwo)
* [class: customClass](#customClass)
  * [new customClass()](#new_customClass_new)
* [customFunction()](#customFunction)
* [exampleVar](#exampleVar) :`string`
* [firesError()](#firesError)
* [firesMany()](#firesMany)
* [firesDefinedEvent()](#firesDefinedEvent)
* [functionObj()](#functionObj)
  * [functionObj.extra()](#functionObj.extra)
* [globalFunction(one, two)](#globalFunction)
* [customTagged](#customTagged)
* [class: LendsClass2](#LendsClass2)
  * [lendsClass2.say()](#LendsClass2#say)
* [EventfulClass()](#EventfulClass)
* [mixin: Eventful](#Eventful)
  * [Eventful.on(eventName, handler)](#Eventful.on)
  * [Eventful.fire(eventName, eventData)](#Eventful.fire)
* [globalFunction()](#globalFunction) ⇒ `string | object | function`
* [returnsSomething()](#returnsSomething) ⇒ `string`
* [seeableVar](#seeableVar)
* [seefoo()](#seefoo)
* [seebar()](#seebar)
* [throwingFunction()](#throwingFunction)
* [globalVar](#globalVar) :`string`

##Misc
* [event: "docletEvent"](#event_docletEvent)
* [mixin: phantom](#phantom)

<a name="module_cjs/class"></a>
##cjs/class
exports a class


* [cjs/class](#module_cjs/class)
  * [class: ExportedClass](#exp_module_cjs/class^ExportedClass) ⏏
    * [new ExportedClass()](#new_module_cjs/class^ExportedClass_new)
    * [exportedClass.prop](#module_cjs/class^ExportedClass#prop)
    * [ExportedClass.staticProp](#module_cjs/class^ExportedClass.staticProp)
    * [ExportedClass~innerProp](#module_cjs/class^ExportedClass..innerProp)

<a name="exp_module_cjs/class^ExportedClass"></a>
###class: ExportedClass ⏏
the exported class

<a name="new_module_cjs/class^ExportedClass_new"></a>
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
<a name="module_cjs/falias-obj"></a>
##cjs/falias-obj
exports a pointer to a function


* [cjs/falias-obj](#module_cjs/falias-obj)
  * [sum()](#exp_module_cjs/falias-obj^sum) ⏏
  * [cjs/falias-obj.extra()](#module_cjs/falias-obj.extra)

<a name="exp_module_cjs/falias-obj^sum"></a>
###sum() ⏏
the function

<a name="module_cjs/falias-obj.extra"></a>
###cjs/falias-obj.extra()
a static method on the exported function

<a name="module_cjs/function-alias"></a>
##cjs/function-alias
exports a pointer to a function

<a name="exp_module_cjs/function-alias^sum"></a>
###sum(one, two) ⇒ `number` ⏏
the function

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | `number` | the first number |
| two | `number` | the second number |

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
  * [obj.one](#module_cjs/object.one) :`number`
  * [obj.two()](#module_cjs/object.two)

<a name="module_cjs/object.one"></a>
###obj.one :`number`
the first property

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
  * [new GlobalClass(one, two)](#new_GlobalClass_new)
  * [globalClass.propOne](#GlobalClass#propOne)
  * [GlobalClass.propTwo](#GlobalClass.propTwo)

<a name="new_GlobalClass_new"></a>
###new GlobalClass(one, two)
the global class constructor

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | `number` | first param |
| two | `string` | second param |

<a name="GlobalClass#propOne"></a>
###globalClass.propOne
an instance property

<a name="GlobalClass.propTwo"></a>
###GlobalClass.propTwo
a static property

<a name="customTagged"></a>
##customTagged
a global var with custom tags

**sitcom**: The Office  
**character**: Oggmeister  
<a name="customClass"></a>
##class: customClass
a class that has custom tags

**sitcom**: Only Fools  
**character**: Rodney Trotter  
<a name="new_customClass_new"></a>
###new customClass()
the constructor

<a name="customFunction"></a>
##customFunction()
a global function with custom tags

**sitcom**: Brass Eye  
**character**: Noel Edmonds  
<a name="event_docletEvent"></a>
##event: "docletEvent"
an event defined in a doclet

<a name="exampleVar"></a>
##exampleVar :`string`
an example var

**Default**: `"something"`  
**Example**  
var thisVar = funtion(){
    return "a value";
};
<a name="firesError"></a>
##firesError()
**Emits**: event:error
<a name="firesMany"></a>
##firesMany()
**Emits**: event:error, event:begin, event:end
<a name="firesDefinedEvent"></a>
##firesDefinedEvent()
**Emits**: event:docletEvent
<a name="functionObj"></a>
##functionObj()
the function

<a name="functionObj.extra"></a>
###functionObj.extra()
a static method on the function

<a name="globalFunction"></a>
##globalFunction(one, two)
a global function

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | `number` | first param |
| two | `string` | second param |

<a name="LendsClass"></a>
##class: LendsClass
<a name="LendsClass.say"></a>
###LendsClass.say()
say something

<a name="LendsClass2"></a>
##class: LendsClass2
<a name="LendsClass2#say"></a>
###lendsClass2.say()
say something

<a name="EventfulClass"></a>
##EventfulClass()
**Mixes**: Eventful
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

| Param | Type | Description |
| ----- | ---- | ----------- |
| eventName | `string` | Name of the event. |
| handler | `function` | The handler to call. |

<a name="Eventful.fire"></a>
###Eventful.fire(eventName, eventData)
Fire an event, causing all handlers for that event name to run.

| Param | Type | Description |
| ----- | ---- | ----------- |
| eventName | `string` | Name of the event. |
| eventData | `Object` | The data provided to each handler. |

<a name="globalFunction"></a>
##globalFunction() ⇒ `string | object | function`
a global function returning multiple stuff

**Returns**: `string` - if something you get a string back`object` | `function` - or an object, or function  
<a name="returnsSomething"></a>
##returnsSomething() ⇒ `string`
returns has no desc

<a name="seeableVar"></a>
##seeableVar
a global var with a @see

**See**

- something or other

<a name="seefoo"></a>
##seefoo()
Both of these will link to the bar function.

**See**

- {@link seebar}
- bar

<a name="seebar"></a>
##seebar()
**See**

- {@link seefoo} for further information.
- {@link http://github.com|GitHub}

<a name="throwingFunction"></a>
##throwingFunction()
**Throws**:

- throw three

<a name="globalVar"></a>
##globalVar :`string`
a global var

**Default**: `"something"`  
