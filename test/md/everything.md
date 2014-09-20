##Modules
* cjs/class
  * class: ExportedClass ⏏
    * new ExportedClass()
    * exportedClass.prop
    * ExportedClass.staticProp
    * ExportedClass~innerProp
* functionAlias
  * pointerFunction() ⏏
* cjs/function
  * $~prop
* teams
  * teams ⏏
* cjs/object
  * obj.one
  * obj.two()

##Globals
* class: GlobalClass
  * new GlobalClass(one, two)
  * globalClass.propOne
  * GlobalClass.propTwo
* globalFunction(one, two)
* Eventful
  * Eventful.on(eventName, handler)
  * Eventful.fire(eventName, eventData)
* globalVar



<a name="module_cjs/class"></a>
##cjs/class
exports a class

<a name="exp_module_cjs/class^ExportedClass"></a>
###class: ExportedClass ⏏
the exported class

<a name="new_module_cjs/class^ExportedClass◊"></a>
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

<a name="module_functionAlias"></a>
##functionAlias
exports a pointer to a function

<a name="exp_module_functionAlias^pointerFunction"></a>
###pointerFunction() ⏏
the function


<a name="module_cjs/function"></a>
##cjs/function
module two exports a function

<a name="module_cjs/function..prop"></a>
###$~prop
inner property

**Scope**: inner member of [cjs/function](#module_cjs/function)  

<a name="module_teams"></a>
##teams
module one

<a name="exp_module_teams^teams"></a>
###teams ⏏
the teams


<a name="module_cjs/object"></a>
##cjs/object
module one

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
<a name="new_GlobalClass◊"></a>
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


<a name="globalFunction"></a>
##globalFunction(one, two)
a global function

**Params**

- one `number` - first param  
- two `string` - second param  


<a name="phantom"></a>
##phantom
phantom mixin


<a name="Eventful"></a>
##Eventful
This provides methods used for event handling. It's not meant to
be used directly.

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


<a name="globalVar"></a>
##globalVar
a global var

**Type**: `string`  
**Default**: `"something"`  
