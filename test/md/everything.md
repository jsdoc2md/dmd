##Modules
* [cjs/class](#module_cjs/class)
  * [class: ExportedClass](#exp_module_cjs/class^ExportedClass) ⏏
    * [new ExportedClass()](#new_module_cjs/class^ExportedClass_new)
    * _instance_
      * [.prop](#module_cjs/class^ExportedClass#prop)
    * _static_
      * [.staticProp](#module_cjs/class^ExportedClass.staticProp)
    * _inner_
      * [~innerProp](#module_cjs/class^ExportedClass..innerProp)
* [cjs/falias-obj](#module_cjs/falias-obj)
  * [sum()](#exp_module_cjs/falias-obj^sum) ⏏
    * [.extra()](#module_cjs/falias-obj^sum.extra)
* [cjs/function-alias](#module_cjs/function-alias)
  * [sum(one, two)](#exp_module_cjs/function-alias^sum) ⇒ `number` ⏏
* [cjs/object-alias](#module_cjs/object-alias)
  * [teams](#exp_module_cjs/object-alias^teams) ⏏
* [cjs/object](#module_cjs/object)
  * [.one](#module_cjs/object.one) → `number`
  * [.two()](#module_cjs/object.two)

##Global
* [class: SOmething](#SOmething)
  * _instance_
    * [.yeah()](#SOmething#yeah)
* [class: GlobalClass](#GlobalClass)
  * [new GlobalClass(one, two)](#new_GlobalClass_new)
  * _instance_
    * [.propOne](#GlobalClass#propOne)
  * _static_
    * [.propTwo](#GlobalClass.propTwo)
* [class: customClass](#customClass)
  * [new customClass()](#new_customClass_new)
* [customFunction()](#customFunction)
* ["docletEvent"](#event_docletEvent)
* [exampleVar](#exampleVar) → `string`
* [external: String](#external_String)
  * [.rot13()](#external_String#rot13)
* [external: jQuery.fn](#external_jQuery.fn)
  * [.starfairy()](#external_jQuery.fn.starfairy)
* [external: XMLHttpRequest](#external_XMLHttpRequest)
* [class: EncryptedRequest](#EncryptedRequest)
  * [new EncryptedRequest()](#new_EncryptedRequest_new)
* [fileVar](#fileVar)
* [firesError()](#firesError)
* [firesMany()](#firesMany)
* [firesDefinedEvent()](#firesDefinedEvent)
* [functionObj()](#functionObj)
  * [.extra()](#functionObj.extra)
* [globalFunction(one, two)](#globalFunction)
* [htmlGlobal](#htmlGlobal)
* [customTagged](#customTagged)
* [headVar](#headVar) → `number`
* [headObj](#headObj)
* [bodyGlobal](#bodyGlobal)
* [class: LendsClass](#LendsClass)
  * _static_
    * [.say()](#LendsClass.say)
* [class: LendsClass2](#LendsClass2)
  * _instance_
    * [.say()](#LendsClass2#say)
* [EventfulClass()](#EventfulClass)
* [mixin: phantom](#phantom)
* [mixin: Eventful](#Eventful)
  * [.on(eventName, handler)](#Eventful.on)
  * [.fire(eventName, eventData)](#Eventful.fire)
* [config](#config)
* [globalFunction()](#globalFunction) ⇒ `string | object | function`
* [returnsSomething()](#returnsSomething) ⇒ `string`
* [seeableVar](#seeableVar)
* [seefoo()](#seefoo)
* [seebar()](#seebar)
* [throwingFunction()](#throwingFunction)
* [todoFunction()](#todoFunction)
* [globalVar](#globalVar) → `string`


<a name="module_cjs/class"></a>
##cjs/class
exports a class


* [cjs/class](#module_cjs/class)
  * [class: ExportedClass](#exp_module_cjs/class^ExportedClass) ⏏
    * [new ExportedClass()](#new_module_cjs/class^ExportedClass_new)
    * _instance_
      * [.prop](#module_cjs/class^ExportedClass#prop)
    * _static_
      * [.staticProp](#module_cjs/class^ExportedClass.staticProp)
    * _inner_
      * [~innerProp](#module_cjs/class^ExportedClass..innerProp)

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
    * [.extra()](#module_cjs/falias-obj^sum.extra)

<a name="exp_module_cjs/falias-obj^sum"></a>
###sum() ⏏
the function

<a name="module_cjs/falias-obj^sum.extra"></a>
####sum.extra()
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
  * [.one](#module_cjs/object.one) → `number`
  * [.two()](#module_cjs/object.two)

<a name="module_cjs/object.one"></a>
###obj.one → `number`
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
  * _instance_
    * [.propOne](#GlobalClass#propOne)
  * _static_
    * [.propTwo](#GlobalClass.propTwo)

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
##exampleVar → `string`
an example var

**Default**: `"something"`  
**Example**  
var thisVar = funtion(){
    return "a value";
};
<a name="external_String"></a>
##external: String
The built in string object.

**See**

- {@link https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String String}

<a name="external_String#rot13"></a>
###string.rot13()
Adds a new method to the built-in string.

**Example**  
var greeting = new String('hello world');
console.log( greeting.rot13() ); // uryyb jbeyq
<a name="external_jQuery.fn"></a>
##external: jQuery.fn
The jQuery plugin namespace.

**See**

- {@link http://docs.jquery.com/Plugins/Authoring The jQuery Plugin Guide}

<a name="external_jQuery.fn.starfairy"></a>
###jQuery.fn.starfairy()
A jQuery plugin to make stars fly around your home page.

<a name="external_XMLHttpRequest"></a>
##external: XMLHttpRequest
Namespace provided by the browser.

**See**

- https://developer.mozilla.org/en/xmlhttprequest

<a name="EncryptedRequest"></a>
##class: EncryptedRequest
**Extends**: `external:XMLHttpRequest`  
<a name="new_EncryptedRequest_new"></a>
###new EncryptedRequest()
Extends the built in XMLHttpRequest to send data encoded with a secret key.

<a name="fileVar"></a>
##fileVar
a variable in the file

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

<a name="htmlGlobal"></a>
##htmlGlobal
inline global

<a name="SOmething"></a>
##class: SOmething
a class

<a name="SOmething#yeah"></a>
###sOmething.yeah()
a method yo

<a name="headVar"></a>
##headVar → `number`
something in the head

<a name="headObj"></a>
##headObj
a head obj

**Properties**

- name `string`  
- age `number`  

<a name="bodyGlobal"></a>
##bodyGlobal
body global

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
  * [.on(eventName, handler)](#Eventful.on)
  * [.fire(eventName, eventData)](#Eventful.fire)

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

<a name="config"></a>
##config
**Properties**

- defaults `object` - The default values for parties.  
  - defaults.players `number` - The default number of players.  
  - defaults.level `string` - The default level for the party.  
  - defaults.treasure `object` - The default treasure.  
  - defaults.treasure.gold `number` - How much gold the party starts with.  

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

<a name="todoFunction"></a>
##todoFunction()
**Todo**

- [ ] Write the documentation.
- [ ] Implement this function.
- [x] this one is done
- [x] finished

<a name="globalVar"></a>
##globalVar → `string`
a global var

**Default**: `"something"`  
