##Summary
| Module | Description |
| ------ | ----------- |
| [cjs/animals](#module_cjs/animals) | exports animals |
| [cjs/class](#module_cjs/class) | exports a class |
| [cjs/falias-obj](#module_cjs/falias-obj) | exports a pointer to a function |
| [cjs/function-alias](#module_cjs/function-alias) | exports a pointer to a function |
| [cjs/human](#module_cjs/human) | exports a class |
| [linkMod](#module_linkMod) | A module. Refer to it using {@link module:linkMod|this link}. |
| [cjs/object-alias](#module_cjs/object-alias) | a module exporting an object |
| [cjs/object](#module_cjs/object) | a module exporting `exports` directly |

##Global
* [class: GlobalClass](#GlobalClass)
  * [new GlobalClass(one, two)](#new_GlobalClass_new)
  * _instance_
    * [.propOne](#GlobalClass#propOne)
    * [.methodOne()](#GlobalClass#methodOne)
    * [.methodTwo()](#GlobalClass#methodTwo)
  * _static_
    * [.propTwo](#GlobalClass.propTwo)
  * _overridden from_
    * [new GlobalClass(one, two)](#new_GlobalClass_new)
    * [.propOne](#GlobalClass#propOne)
    * [.propTwo](#GlobalClass.propTwo)
    * [.methodOne()](#GlobalClass#methodOne)
    * [.methodTwo()](#GlobalClass#methodTwo)
* [class: GlobalChildClass](#GlobalChildClass)
  * _instance_
    * [.propThree](#GlobalChildClass#propThree)
    * [.methodTwo()](#GlobalChildClass#methodTwo)
  * _overridden from_
    * [.propThree](#GlobalChildClass#propThree)
    * [.methodTwo()](#GlobalChildClass#methodTwo)
  * _inherited from_
    * [.propOne](#GlobalChildClass#propOne)
    * [.methodOne()](#GlobalChildClass#methodOne)
* [customTagged](#customTagged)
* [class: customClass](#customClass)
  * [new customClass()](#new_customClass_new)
  * _overridden from_
    * [new customClass()](#new_customClass_new)
* [customFunction()](#customFunction)
* [defaultedOne](#defaultedOne) → <code>object</code>
* [defaultedTwo](#defaultedTwo) → <code>function</code>
* ["docletEvent"](#event_docletEvent)
* [exampleVar](#exampleVar) → <code>string</code>
* [class: EncryptedRequest](#EncryptedRequest)
  * [new EncryptedRequest()](#new_EncryptedRequest_new)
  * _overridden from_
    * [new EncryptedRequest()](#new_EncryptedRequest_new)
* [cliveExternal](#cliveExternal) → <code>[Clive](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String)</code>
* [stringExternal](#stringExternal) → <code>[String](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String)</code>
* [fileVar](#fileVar)
* [firesError()](#firesError)
* [firesMany()](#firesMany)
* [firesDefinedEvent()](#firesDefinedEvent)
* [functionObj()](#functionObj)
  * [.extra()](#functionObj.extra)
* [globalFunction(one, two)](#globalFunction)
* [class: LendsClass](#LendsClass)
  * _static_
    * [.say()](#LendsClass.say)
  * _overridden from_
    * [.say()](#LendsClass.say)
* [class: LendsClass2](#LendsClass2)
  * _instance_
    * [.say()](#LendsClass2#say)
  * _overridden from_
    * [.say()](#LendsClass2#say)
* [EventfulClass()](#EventfulClass)
* [mixin: Eventful](#Eventful)
  * [.on(eventName, handler)](#Eventful.on)
  * [.fire(eventName, eventData)](#Eventful.fire)
* [mixin: phantom](#phantom)
* [Documents](#Documents)
  * [.Newspaper](#Documents.Newspaper)
* [config](#config)
* [globalFunction()](#globalFunction) ⇒ <code>string</code> \| <code>object</code> \| <code>function</code>
* [returnsSomething()](#returnsSomething) ⇒ <code>string</code>
* [seeableVar](#seeableVar)
* [seefoo()](#seefoo)
* [seebar()](#seebar)
* [throwingFunction()](#throwingFunction)
* [todoFunction1()](#todoFunction1)
* [todoFunction2()](#todoFunction2)
* [todoFunction3()](#todoFunction3)
* [returnsArrayOfType](#returnsArrayOfType) ⇒ <code>[Array.&lt;Human&gt;](#exp_module_cjs/human--Human)</code>
* [returnsArrayOfType2](#returnsArrayOfType2) ⇒ <code>[Array.&lt;Human&gt;](#exp_module_cjs/human--Human)</code>
* [nullableNumber](#nullableNumber) ⇒ <code>number</code>
* [nonNullableNumber](#nonNullableNumber) ⇒ <code>number</code>
* [objectType](#objectType) → <code>Object</code>
* [nullableArrayTypeParam(one)](#nullableArrayTypeParam)
* [globalVar](#globalVar) → <code>string</code>


<a name="module_cjs/animals"></a>
##cjs/animals
exports animals


* [cjs/animals](#module_cjs/animals)
  * [.cat](#module_cjs/animals.cat) → <code>Animal</code>
  * [.dog](#module_cjs/animals.dog) → <code>Animal</code>
  * [class: ~Animal](#module_cjs/animals..Animal)
    * _instance_
      * [.type](#module_cjs/animals..Animal#type) → <code>Quadroped</code>
    * _overridden from_
      * [class: ~Quadroped](#module_cjs/animals..Animal..Quadroped)
        * _instance_
          * [.legs](#module_cjs/animals..Animal..Quadroped#legs)
        * _overridden from_
          * [.legs](#module_cjs/animals..Animal..Quadroped#legs)
      * [.type](#module_cjs/animals..Animal#type) → <code>Quadroped</code>
    * _inner_
      * [class: ~Quadroped](#module_cjs/animals..Animal..Quadroped)
        * _instance_
          * [.legs](#module_cjs/animals..Animal..Quadroped#legs)
        * _overridden from_
          * [.legs](#module_cjs/animals..Animal..Quadroped#legs)

<a name="module_cjs/animals.cat"></a>
###cjs/animals.cat → <code>Animal</code>
the exported cat

<a name="module_cjs/animals.dog"></a>
###cjs/animals.dog → <code>Animal</code>
the exported dog

<a name="module_cjs/animals..Animal"></a>
###class: cjs/animals~Animal
**Scope**: inner class of <code>[cjs/animals](#module_cjs/animals)</code>  

* [class: ~Animal](#module_cjs/animals..Animal)
  * _instance_
    * [.type](#module_cjs/animals..Animal#type) → <code>Quadroped</code>
  * _overridden from_
    * [class: ~Quadroped](#module_cjs/animals..Animal..Quadroped)
      * _instance_
        * [.legs](#module_cjs/animals..Animal..Quadroped#legs)
      * _overridden from_
        * [.legs](#module_cjs/animals..Animal..Quadroped#legs)
    * [.type](#module_cjs/animals..Animal#type) → <code>Quadroped</code>
  * _inner_
    * [class: ~Quadroped](#module_cjs/animals..Animal..Quadroped)
      * _instance_
        * [.legs](#module_cjs/animals..Animal..Quadroped#legs)
      * _overridden from_
        * [.legs](#module_cjs/animals..Animal..Quadroped#legs)

<a name="module_cjs/animals..Animal..Quadroped"></a>
####class: Animal~Quadroped
**Scope**: inner class of <code>[Animal](#module_cjs/animals..Animal)</code>  
<a name="module_cjs/animals..Animal..Quadroped#legs"></a>
#####quadroped.legs
leg count

<a name="module_cjs/animals..Animal#type"></a>
####animal.type → <code>Quadroped</code>
animal type

<a name="module_cjs/class"></a>
##cjs/class
exports a class


* [cjs/class](#module_cjs/class)
  * [class: ExportedClass](#exp_module_cjs/class--ExportedClass) ⏏
    * [new ExportedClass()](#new_module_cjs/class--ExportedClass_new)
    * _instance_
      * [.prop](#module_cjs/class--ExportedClass#prop)
    * _static_
      * [.staticProp](#module_cjs/class--ExportedClass.staticProp)
    * _overridden from_
      * [new ExportedClass()](#new_module_cjs/class--ExportedClass_new)
      * [.prop](#module_cjs/class--ExportedClass#prop)
      * [.staticProp](#module_cjs/class--ExportedClass.staticProp)
      * [~innerProp](#module_cjs/class--ExportedClass..innerProp)
    * _inner_
      * [~innerProp](#module_cjs/class--ExportedClass..innerProp)

<a name="exp_module_cjs/class--ExportedClass"></a>
###class: ExportedClass ⏏
the exported class

<a name="new_module_cjs/class--ExportedClass_new"></a>
####new ExportedClass()
the exported contructor

<a name="module_cjs/class--ExportedClass#prop"></a>
####exportedClass.prop
instance property

<a name="module_cjs/class--ExportedClass.staticProp"></a>
####ExportedClass.staticProp
a static property for the exported class

<a name="module_cjs/class--ExportedClass..innerProp"></a>
####ExportedClass~innerProp
inner module property

**Scope**: inner member of <code>[ExportedClass](#exp_module_cjs/class--ExportedClass)</code>  
<a name="module_cjs/falias-obj"></a>
##cjs/falias-obj
exports a pointer to a function


* [cjs/falias-obj](#module_cjs/falias-obj)
  * [sum()](#exp_module_cjs/falias-obj--sum) ⏏
    * [.extra()](#module_cjs/falias-obj--sum.extra)

<a name="exp_module_cjs/falias-obj--sum"></a>
###sum() ⏏
the function

<a name="module_cjs/falias-obj--sum.extra"></a>
####sum.extra()
a static method on the exported function

<a name="module_cjs/function-alias"></a>
##cjs/function-alias
exports a pointer to a function


* [cjs/function-alias](#module_cjs/function-alias)
  * [sum(one, two)](#exp_module_cjs/function-alias--sum) ⇒ <code>number</code> ⏏
    * [.sumthingStatic](#module_cjs/function-alias--sum.sumthingStatic)

<a name="exp_module_cjs/function-alias--sum"></a>
###sum(one, two) ⇒ <code>number</code> ⏏
the function

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>number</code> | the first number |
| two | <code>number</code> | the second number |

**Returns**: <code>number</code> - the calculation result  
<a name="module_cjs/function-alias--sum.sumthingStatic"></a>
####sum.sumthingStatic
an additional static property

<a name="module_cjs/human"></a>
##cjs/human
exports a class


* [cjs/human](#module_cjs/human)
  * [class: Human](#exp_module_cjs/human--Human) ⏏
    * [new Human()](#new_module_cjs/human--Human_new)
    * _instance_
      * [.liver](#module_cjs/human--Human#liver) → <code>[Organ](#module_cjs/human--Human..Organ)</code>
    * _overridden from_
      * [new Human()](#new_module_cjs/human--Human_new)
      * [class: ~Organ](#module_cjs/human--Human..Organ)
        * _instance_
          * [.redCell](#module_cjs/human--Human..Organ#redCell) → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
        * _overridden from_
          * [class: ~Cell](#module_cjs/human--Human..Organ..Cell)
          * [.redCell](#module_cjs/human--Human..Organ#redCell) → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
        * _inner_
          * [class: ~Cell](#module_cjs/human--Human..Organ..Cell)
      * [.liver](#module_cjs/human--Human#liver) → <code>[Organ](#module_cjs/human--Human..Organ)</code>
    * _inner_
      * [class: ~Organ](#module_cjs/human--Human..Organ)
        * _instance_
          * [.redCell](#module_cjs/human--Human..Organ#redCell) → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
        * _overridden from_
          * [class: ~Cell](#module_cjs/human--Human..Organ..Cell)
          * [.redCell](#module_cjs/human--Human..Organ#redCell) → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
        * _inner_
          * [class: ~Cell](#module_cjs/human--Human..Organ..Cell)

<a name="exp_module_cjs/human--Human"></a>
###class: Human ⏏
the exported class

<a name="new_module_cjs/human--Human_new"></a>
####new Human()
the exported contructor

<a name="module_cjs/human--Human..Organ"></a>
####class: Human~Organ
a class inside a class

**Scope**: inner class of <code>[Human](#exp_module_cjs/human--Human)</code>  

* [class: ~Organ](#module_cjs/human--Human..Organ)
  * _instance_
    * [.redCell](#module_cjs/human--Human..Organ#redCell) → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
  * _overridden from_
    * [class: ~Cell](#module_cjs/human--Human..Organ..Cell)
    * [.redCell](#module_cjs/human--Human..Organ#redCell) → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
  * _inner_
    * [class: ~Cell](#module_cjs/human--Human..Organ..Cell)

<a name="module_cjs/human--Human..Organ..Cell"></a>
#####class: Organ~Cell
a class inside a class inside a class

**Scope**: inner class of <code>[Organ](#module_cjs/human--Human..Organ)</code>  
<a name="module_cjs/human--Human..Organ#redCell"></a>
#####organ.redCell → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
an instance of Cell

<a name="module_cjs/human--Human#liver"></a>
####human.liver → <code>[Organ](#module_cjs/human--Human..Organ)</code>
an instance of Organ

<a name="module_linkMod"></a>
##linkMod
A module. Refer to it using [this link](#module_linkMod).


* [linkMod](#module_linkMod)
  * [external: ~Math](#external_Math)
  * [external: ~Date](#external_Date)
  * ["event:MyEvent"](#module_linkMod.event_MyEvent)
  * [class: ~linksYeah](#module_linkMod..linksYeah)
    * [new linksYeah()](#new_module_linkMod..linksYeah_new)
    * _overridden from_
      * [new linksYeah()](#new_module_linkMod..linksYeah_new)

<a name="external_Math"></a>
###external: linkMod~Math
The built in Math object. Refer to it with [Math](#external_Math).

**Scope**: inner external of <code>[linkMod](#module_linkMod)</code>  
**See**

- http://www.math.com

<a name="external_Date"></a>
###external: linkMod~Date
The built in Date object, it has no see tag. Refer to it with [Date](#external_Date).

**Scope**: inner external of <code>[linkMod](#module_linkMod)</code>  
<a name="module_linkMod.event_MyEvent"></a>
###event: "event:MyEvent"
An event. Refer to with [this link](#module_linkMod.event_MyEvent).

<a name="module_linkMod..linksYeah"></a>
###class: linkMod~linksYeah
**Extends:** <code>[Math](#external_Math)</code>  
**Scope**: inner class of <code>[linkMod](#module_linkMod)</code>  
**Emits**: <code>[event:MyEvent](#module_linkMod.event_MyEvent)</code>
<a name="new_module_linkMod..linksYeah_new"></a>
####new linksYeah()
this is from [linkMod](#module_linkMod).. it also references [Math](#external_Math)

<a name="module_cjs/object-alias"></a>
##cjs/object-alias
a module exporting an object

<a name="exp_module_cjs/object-alias--teams"></a>
###teams ⏏
the teams

<a name="module_cjs/object"></a>
##cjs/object
a module exporting `exports` directly


* [cjs/object](#module_cjs/object)
  * [.one](#module_cjs/object.one) → <code>number</code>
  * [.two()](#module_cjs/object.two)

<a name="module_cjs/object.one"></a>
###obj.one → <code>number</code>
the first property

<a name="module_cjs/object.two"></a>
###obj.two()
the second property, a function

**Example**  
this is the example
<a name="GlobalClass"></a>
##class: GlobalClass
a global class


* [class: GlobalClass](#GlobalClass)
  * [new GlobalClass(one, two)](#new_GlobalClass_new)
  * _instance_
    * [.propOne](#GlobalClass#propOne)
    * [.methodOne()](#GlobalClass#methodOne)
    * [.methodTwo()](#GlobalClass#methodTwo)
  * _static_
    * [.propTwo](#GlobalClass.propTwo)
  * _overridden from_
    * [new GlobalClass(one, two)](#new_GlobalClass_new)
    * [.propOne](#GlobalClass#propOne)
    * [.propTwo](#GlobalClass.propTwo)
    * [.methodOne()](#GlobalClass#methodOne)
    * [.methodTwo()](#GlobalClass#methodTwo)

<a name="new_GlobalClass_new"></a>
###new GlobalClass(one, two)
the global class constructor

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>number</code> | first param |
| two | <code>string</code> | second param |

<a name="GlobalClass#propOne"></a>
###globalClass.propOne
an instance property

<a name="GlobalClass.propTwo"></a>
###GlobalClass.propTwo
a static property

<a name="GlobalClass#methodOne"></a>
###globalClass.methodOne()
parent method one

<a name="GlobalClass#methodTwo"></a>
###globalClass.methodTwo()
parent method two

<a name="GlobalChildClass"></a>
##class: GlobalChildClass
the child of global class

**Extends:** <code>[GlobalClass](#GlobalClass)</code>  

* [class: GlobalChildClass](#GlobalChildClass)
  * _instance_
    * [.propThree](#GlobalChildClass#propThree)
    * [.methodTwo()](#GlobalChildClass#methodTwo)
  * _overridden from_
    * [.propThree](#GlobalChildClass#propThree)
    * [.methodTwo()](#GlobalChildClass#methodTwo)
  * _inherited from_
    * [.propOne](#GlobalChildClass#propOne)
    * [.methodOne()](#GlobalChildClass#methodOne)

<a name="GlobalChildClass#propThree"></a>
###globalChildClass.propThree
an instance property

<a name="GlobalChildClass#methodTwo"></a>
###globalChildClass.methodTwo()
overridden child methodTwo

<a name="GlobalChildClass#propOne"></a>
###globalChildClass.propOne
an instance property

<a name="GlobalChildClass#methodOne"></a>
###globalChildClass.methodOne()
parent method one

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
<a name="defaultedOne"></a>
##defaultedOne → <code>object</code>
**Default**: `{ one: 1, two: "yeah?" }`  
<a name="defaultedTwo"></a>
##defaultedTwo → <code>function</code>
**Default**: `function f(n){ return something(n); }`  
<a name="event_docletEvent"></a>
##event: "docletEvent"
an event defined in a doclet

<a name="exampleVar"></a>
##exampleVar → <code>string</code>
an example var

**Default**: `"something"`  
**Example**  
var thisVar = funtion(){
    return "a value";
};
<a name="EncryptedRequest"></a>
##class: EncryptedRequest
**Extends:** <code>[XMLHttpRequest](#external_XMLHttpRequest)</code>  
<a name="new_EncryptedRequest_new"></a>
###new EncryptedRequest()
Extends the built in XMLHttpRequest to send data encoded with a secret key.

<a name="cliveExternal"></a>
##cliveExternal → <code>[Clive](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String)</code>
<a name="stringExternal"></a>
##stringExternal → <code>[String](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String)</code>
<a name="fileVar"></a>
##fileVar
a variable in the file

<a name="firesError"></a>
##firesError()
**Emits**: <code>event:error</code>
<a name="firesMany"></a>
##firesMany()
**Emits**: <code>event:error</code>, <code>event:begin</code>, <code>event:end</code>
<a name="firesDefinedEvent"></a>
##firesDefinedEvent()
**Emits**: <code>[docletEvent](#event_docletEvent)</code>
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
| one | <code>number</code> | first param |
| two | <code>string</code> | second param |

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
| eventName | <code>string</code> | Name of the event. |
| handler | <code>function</code> | The handler to call. |

<a name="Eventful.fire"></a>
###Eventful.fire(eventName, eventData)
Fire an event, causing all handlers for that event name to run.

| Param | Type | Description |
| ----- | ---- | ----------- |
| eventName | <code>string</code> | Name of the event. |
| eventData | <code>Object</code> | The data provided to each handler. |

<a name="phantom"></a>
##mixin: phantom
phantom mixin

<a name="Documents"></a>
##Documents
<a name="Documents.Newspaper"></a>
###Documents.Newspaper
An ordinary newspaper.

<a name="config"></a>
##config
**Properties**

| Name | Type | Description |
| ---- | ---- | ----------- |
| defaults | <code>object</code> | The default values for parties. |
| defaults.players | <code>number</code> | The default number of players. |
| defaults.level | <code>string</code> | The default level for the party. |
| defaults.treasure | <code>object</code> | The default treasure. |
| defaults.treasure.gold | <code>number</code> | How much gold the party starts with. |

<a name="globalFunction"></a>
##globalFunction() ⇒ <code>string</code> \| <code>object</code> \| <code>function</code>
a global function returning multiple stuff

**Returns**: <code>string</code> - if something you get a string back<code>object</code> \| <code>function</code> - or an object, or function  
<a name="returnsSomething"></a>
##returnsSomething() ⇒ <code>string</code>
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

- [seebar](#seebar)
- bar

<a name="seebar"></a>
##seebar()
**See**

- [seefoo](#seefoo) for further information.
- [GitHub](http://github.com)

<a name="throwingFunction"></a>
##throwingFunction()
**Throws**:

- Will throw an error if the argument is null
- <code>InvalidArgumentException</code> 
- <code>DivideByZero</code> Argument x must be non-zero

<a name="todoFunction1"></a>
##todoFunction1()
**Todo**

- [ ] Write the documentation.
- [ ] Implement this function.

<a name="todoFunction2"></a>
##todoFunction2()
**Todo**

- [ ] Write the documentation.
- [ ] Implement this function.
- [x] this one is done
- [x] finished

<a name="todoFunction3"></a>
##todoFunction3()
**Todo**

- [x] this one is done
- [x] finished

<a name="returnsArrayOfType"></a>
##returnsArrayOfType ⇒ <code>[Array.&lt;Human&gt;](#exp_module_cjs/human--Human)</code>
<a name="returnsArrayOfType2"></a>
##returnsArrayOfType2 ⇒ <code>[Array.&lt;Human&gt;](#exp_module_cjs/human--Human)</code>
<a name="nullableNumber"></a>
##nullableNumber ⇒ <code>number</code>
<a name="nonNullableNumber"></a>
##nonNullableNumber ⇒ <code>number</code>
<a name="objectType"></a>
##objectType → <code>Object</code>
<a name="nullableArrayTypeParam"></a>
##nullableArrayTypeParam(one)
| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>[Array.&lt;cjs/human&gt;](#module_cjs/human)</code> |  |

<a name="globalVar"></a>
##globalVar → <code>string</code>
a global var

**Default**: `"something"`  
