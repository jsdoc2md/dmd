## Modules
<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#module_cjs/animals">cjs/animals</a></td>
    <td><p>exports animals</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/class">cjs/class</a></td>
    <td><p>exports a class</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/falias-obj">cjs/falias-obj</a></td>
    <td><p>exports a pointer to a function</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/function-alias">cjs/function-alias</a></td>
    <td><p>exports a pointer to a function</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/human">cjs/human</a></td>
    <td><p>exports a class</p>
</td>
    </tr>
<tr>
    <td><a href="#module_linkMod">linkMod</a></td>
    <td><p>A module. Refer to it using <a href="#module_linkMod">this link</a>.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/object-alias">cjs/object-alias</a></td>
    <td><p>a module exporting an object</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/object">cjs/object</a></td>
    <td><p>a module exporting <code>exports</code> directly</p>
</td>
    </tr>
</tbody>
</table>
## Classes
<dl>
<dt><a href="#Chainable">Chainable</a></dt>
<dd><p>has a chainable method</p>
</dd>
<dt><a href="#GlobalClass">GlobalClass</a></dt>
<dd><p>a global class</p>
</dd>
<dt><a href="#GlobalChildClass">GlobalChildClass</a> ⇐ <code><a href="#GlobalClass">GlobalClass</a></code></dt>
<dd><p>the child of global class</p>
</dd>
<dt><a href="#customClass">customClass</a></dt>
<dd><p>a class that has custom tags</p>
</dd>
<dt><a href="#EncryptedRequest">EncryptedRequest</a> ⇐ <code><a href="#external_XMLHttpRequest">XMLHttpRequest</a></code></dt>
<dd></dd>
<dt><a href="#LendsClass">LendsClass</a></dt>
<dd></dd>
<dt><a href="#LendsClass2">LendsClass2</a></dt>
<dd></dd>
<dt><a href="#EventfulClass">EventfulClass</a></dt>
<dd><p>a class which mixes in Eventful behaviour</p>
</dd>
</dl>
## Mixins
<dl>
<dt><a href="#Eventful">Eventful</a></dt>
<dd><p>This provides methods used for event handling. It&#39;s not meant to
be used directly.</p>
</dd>
<dt><a href="#phantom">phantom</a></dt>
<dd><p>phantom mixin</p>
</dd>
</dl>
## Members
<dl>
<dt><a href="#customTagged">customTagged</a></dt>
<dd><p>a global var with custom tags</p>
</dd>
<dt><a href="#defaultedOne">defaultedOne</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#defaultedTwo">defaultedTwo</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#exampleVar">exampleVar</a> : <code>string</code></dt>
<dd><p>an example var</p>
</dd>
<dt><a href="#cliveExternal">cliveExternal</a> : <code><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String">Clive</a></code></dt>
<dd></dd>
<dt><a href="#stringExternal">stringExternal</a> : <code><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String">String</a></code></dt>
<dd></dd>
<dt><a href="#fileVar">fileVar</a></dt>
<dd><p>a variable in the file</p>
</dd>
<dt><a href="#seeableVar">seeableVar</a></dt>
<dd><p>a global var with a @see</p>
</dd>
<dt><a href="#returnsArrayOfType">returnsArrayOfType</a> : <code><a href="#exp_module_cjs/human--Human">Array.&lt;Human&gt;</a></code></dt>
<dd></dd>
<dt><a href="#returnsArrayOfType2">returnsArrayOfType2</a> : <code><a href="#exp_module_cjs/human--Human">Array.&lt;Human&gt;</a></code></dt>
<dd></dd>
<dt><a href="#nullableNumber">nullableNumber</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#nonNullableNumber">nonNullableNumber</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#objectType">objectType</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#globalVar">globalVar</a> : <code>string</code></dt>
<dd><p>a global var</p>
</dd>
</dl>
## Objects
<dl>
<dt><a href="#Documents">Documents</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#config">config</a> : <code>object</code></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#customFunction">customFunction()</a></dt>
<dd><p>a global function with custom tags</p>
</dd>
<dt><a href="#firesError">firesError()</a></dt>
<dd></dd>
<dt><a href="#firesMany">firesMany()</a></dt>
<dd></dd>
<dt><a href="#firesDefinedEvent">firesDefinedEvent()</a></dt>
<dd></dd>
<dt><a href="#functionObj">functionObj()</a></dt>
<dd><p>the function</p>
</dd>
<dt><a href="#globalFunction">globalFunction(one, two, three, four)</a></dt>
<dd><p>a global function</p>
</dd>
<dt><a href="#globalFunction">globalFunction()</a> ⇒ <code>string</code> | <code>object</code> | <code>function</code></dt>
<dd><p>a global function returning multiple stuff</p>
</dd>
<dt><a href="#returnsSomething">returnsSomething()</a> ⇒ <code>string</code></dt>
<dd><p>returns has no desc</p>
</dd>
<dt><a href="#seefoo">seefoo()</a></dt>
<dd><p>Both of these will link to the bar function.</p>
</dd>
<dt><a href="#seebar">seebar()</a></dt>
<dd></dd>
<dt><a href="#throwingFunction">throwingFunction()</a></dt>
<dd></dd>
<dt><a href="#todoFunction1">todoFunction1()</a></dt>
<dd></dd>
<dt><a href="#todoFunction2">todoFunction2()</a></dt>
<dd></dd>
<dt><a href="#todoFunction3">todoFunction3()</a></dt>
<dd></dd>
<dt><a href="#nullableArrayTypeParam">nullableArrayTypeParam(one)</a></dt>
<dd></dd>
</dl>
## Events
<dl>
<dt><a href="#event_docletEvent">"docletEvent"</a></dt>
<dd><p>an event defined in a doclet</p>
</dd>
</dl>
## External
<dl>
<dt><a href="#external_jQuery.fn">jQuery.fn</a></dt>
<dd><p>The jQuery plugin namespace.</p>
</dd>
<dt><a href="#external_XMLHttpRequest">XMLHttpRequest</a></dt>
<dd><p>Namespace provided by the browser.</p>
</dd>
</dl>
<a name="module_cjs/animals"></a>
## cjs/animals
exports animals


* [cjs/animals](#module_cjs/animals)
  * _static_
    * [.cat](#module_cjs/animals.cat) : <code>Animal</code>
    * [.dog](#module_cjs/animals.dog) : <code>Animal</code>
  * _inner_
    * [~Animal](#module_cjs/animals..Animal)
      * _instance_
        * [.type](#module_cjs/animals..Animal#type) : <code>Quadroped</code>
      * _inner_
        * [~Quadroped](#module_cjs/animals..Animal..Quadroped)
          * [.legs](#module_cjs/animals..Animal..Quadroped#legs)

<a name="module_cjs/animals.cat"></a>
### cjs/animals.cat : <code>Animal</code>
the exported cat

**Kind**: static property of <code>[cjs/animals](#module_cjs/animals)</code>  
<a name="module_cjs/animals.dog"></a>
### cjs/animals.dog : <code>Animal</code>
the exported dog

**Kind**: static property of <code>[cjs/animals](#module_cjs/animals)</code>  
<a name="module_cjs/animals..Animal"></a>
### cjs/animals~Animal
**Kind**: inner class of <code>[cjs/animals](#module_cjs/animals)</code>  

  * [~Animal](#module_cjs/animals..Animal)
    * _instance_
      * [.type](#module_cjs/animals..Animal#type) : <code>Quadroped</code>
    * _inner_
      * [~Quadroped](#module_cjs/animals..Animal..Quadroped)
        * [.legs](#module_cjs/animals..Animal..Quadroped#legs)

<a name="module_cjs/animals..Animal#type"></a>
#### animal.type : <code>Quadroped</code>
animal type

**Kind**: instance property of <code>[Animal](#module_cjs/animals..Animal)</code>  
<a name="module_cjs/animals..Animal..Quadroped"></a>
#### Animal~Quadroped
**Kind**: inner class of <code>[Animal](#module_cjs/animals..Animal)</code>  
<a name="module_cjs/animals..Animal..Quadroped#legs"></a>
##### quadroped.legs
leg count

**Kind**: instance property of <code>[Quadroped](#module_cjs/animals..Animal..Quadroped)</code>  
<a name="module_cjs/class"></a>
## cjs/class
exports a class


* [cjs/class](#module_cjs/class)
  * [ExportedClass](#exp_module_cjs/class--ExportedClass) ⏏
    * [new ExportedClass()](#new_module_cjs/class--ExportedClass_new)
    * _instance_
      * [.prop](#module_cjs/class--ExportedClass#prop)
    * _static_
      * [.staticProp](#module_cjs/class--ExportedClass.staticProp)
    * _inner_
      * [~innerProp](#module_cjs/class--ExportedClass..innerProp)

<a name="exp_module_cjs/class--ExportedClass"></a>
### ExportedClass ⏏
the exported class

**Kind**: Exported class  
<a name="new_module_cjs/class--ExportedClass_new"></a>
#### new ExportedClass()
the exported contructor

<a name="module_cjs/class--ExportedClass#prop"></a>
#### exportedClass.prop
instance property

**Kind**: instance property of <code>[ExportedClass](#exp_module_cjs/class--ExportedClass)</code>  
<a name="module_cjs/class--ExportedClass.staticProp"></a>
#### ExportedClass.staticProp
a static property for the exported class

**Kind**: static property of <code>[ExportedClass](#exp_module_cjs/class--ExportedClass)</code>  
<a name="module_cjs/class--ExportedClass..innerProp"></a>
#### ExportedClass~innerProp
inner module property

**Kind**: inner property of <code>[ExportedClass](#exp_module_cjs/class--ExportedClass)</code>  
<a name="module_cjs/falias-obj"></a>
## cjs/falias-obj
exports a pointer to a function


* [cjs/falias-obj](#module_cjs/falias-obj)
  * [sum()](#exp_module_cjs/falias-obj--sum) ⏏
    * [.extra()](#module_cjs/falias-obj--sum.extra)

<a name="exp_module_cjs/falias-obj--sum"></a>
### sum() ⏏
the function

**Kind**: Exported function  
<a name="module_cjs/falias-obj--sum.extra"></a>
#### sum.extra()
a static method on the exported function

**Kind**: static method of <code>[sum](#exp_module_cjs/falias-obj--sum)</code>  
<a name="module_cjs/function-alias"></a>
## cjs/function-alias
exports a pointer to a function


* [cjs/function-alias](#module_cjs/function-alias)
  * [sum(one, two)](#exp_module_cjs/function-alias--sum) ⇒ <code>number</code> ⏏
    * [.sumthingStatic](#module_cjs/function-alias--sum.sumthingStatic)

<a name="exp_module_cjs/function-alias--sum"></a>
### sum(one, two) ⇒ <code>number</code> ⏏
the function

**Kind**: Exported function  
**Returns**: <code>number</code> - the calculation result  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>number</code> | the first number |
| two | <code>number</code> | the second number |

<a name="module_cjs/function-alias--sum.sumthingStatic"></a>
#### sum.sumthingStatic
an additional static property

**Kind**: static property of <code>[sum](#exp_module_cjs/function-alias--sum)</code>  
<a name="module_cjs/human"></a>
## cjs/human
exports a class


* [cjs/human](#module_cjs/human)
  * [Human](#exp_module_cjs/human--Human) ⏏
    * [new Human()](#new_module_cjs/human--Human_new)
    * _instance_
      * [.liver](#module_cjs/human--Human#liver) : <code>[Organ](#module_cjs/human--Human..Organ)</code>
    * _inner_
      * [~Organ](#module_cjs/human--Human..Organ)
        * _instance_
          * [.redCell](#module_cjs/human--Human..Organ#redCell) : <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
        * _inner_
          * [~Cell](#module_cjs/human--Human..Organ..Cell)

<a name="exp_module_cjs/human--Human"></a>
### Human ⏏
the exported class

**Kind**: Exported class  
<a name="new_module_cjs/human--Human_new"></a>
#### new Human()
the exported contructor

<a name="module_cjs/human--Human#liver"></a>
#### human.liver : <code>[Organ](#module_cjs/human--Human..Organ)</code>
an instance of Organ

**Kind**: instance property of <code>[Human](#exp_module_cjs/human--Human)</code>  
<a name="module_cjs/human--Human..Organ"></a>
#### Human~Organ
a class inside a class

**Kind**: inner class of <code>[Human](#exp_module_cjs/human--Human)</code>  

  * [~Organ](#module_cjs/human--Human..Organ)
    * _instance_
      * [.redCell](#module_cjs/human--Human..Organ#redCell) : <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
    * _inner_
      * [~Cell](#module_cjs/human--Human..Organ..Cell)

<a name="module_cjs/human--Human..Organ#redCell"></a>
##### organ.redCell : <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
an instance of Cell

**Kind**: instance property of <code>[Organ](#module_cjs/human--Human..Organ)</code>  
<a name="module_cjs/human--Human..Organ..Cell"></a>
##### Organ~Cell
a class inside a class inside a class

**Kind**: inner class of <code>[Organ](#module_cjs/human--Human..Organ)</code>  
<a name="module_linkMod"></a>
## linkMod
A module. Refer to it using [this link](#module_linkMod).


* [linkMod](#module_linkMod)
  * _static_
    * ["event:MyEvent"](#module_linkMod.event_MyEvent)
  * _inner_
    * [~linksYeah](#module_linkMod..linksYeah) ⇐ <code>[Math](#external_Math)</code>
      * [new linksYeah()](#new_module_linkMod..linksYeah_new)
    * [~Math](#external_Math)
    * [~Date](#external_Date)

<a name="module_linkMod.event_MyEvent"></a>
### "event:MyEvent"
An event. Refer to with [this link](#module_linkMod.event_MyEvent).

**Kind**: event emitted by <code>[linkMod](#module_linkMod)</code>  
<a name="module_linkMod..linksYeah"></a>
### linkMod~linksYeah ⇐ <code>[Math](#external_Math)</code>
**Extends:** <code>[Math](#external_Math)</code>  
**Kind**: inner class of <code>[linkMod](#module_linkMod)</code>  
**Emits**: <code>[event:MyEvent](#module_linkMod.event_MyEvent)</code>  
<a name="new_module_linkMod..linksYeah_new"></a>
#### new linksYeah()
this is from [linkMod](#module_linkMod).. it also references [Math](#external_Math)

<a name="external_Math"></a>
### linkMod~Math
The built in Math object. Refer to it with [Math](#external_Math).

**Kind**: inner external of <code>[linkMod](#module_linkMod)</code>  
**See**: http://www.math.com  
<a name="external_Date"></a>
### linkMod~Date
The built in Date object, it has no see tag. Refer to it with [Date](#external_Date).

**Kind**: inner external of <code>[linkMod](#module_linkMod)</code>  
<a name="module_cjs/object-alias"></a>
## cjs/object-alias
a module exporting an object

<a name="exp_module_cjs/object-alias--teams"></a>
### teams ⏏
the teams

**Kind**: Exported member  
<a name="module_cjs/object"></a>
## cjs/object
a module exporting `exports` directly


* [cjs/object](#module_cjs/object)
  * [.one](#module_cjs/object.one) : <code>number</code>
  * [.two()](#module_cjs/object.two)

<a name="module_cjs/object.one"></a>
### obj.one : <code>number</code>
the first property

**Kind**: static property of <code>[cjs/object](#module_cjs/object)</code>  
<a name="module_cjs/object.two"></a>
### obj.two()
the second property, a function

**Kind**: static method of <code>[cjs/object](#module_cjs/object)</code>  
**Example**  
this is the example

<a name="Chainable"></a>
## Chainable
has a chainable method

**Kind**: global class  
<a name="Chainable#method"></a>
### chainable.method() ↩︎
returns itself

**Chainable**  
**Kind**: instance method of <code>[Chainable](#Chainable)</code>  
<a name="GlobalClass"></a>
## GlobalClass
a global class

**Kind**: global class  

* [GlobalClass](#GlobalClass)
  * [new GlobalClass(one, two)](#new_GlobalClass_new)
  * _instance_
    * [.propOne](#GlobalClass#propOne)
    * [.methodOne()](#GlobalClass#methodOne)
    * [.methodTwo()](#GlobalClass#methodTwo)
  * _static_
    * [.propTwo](#GlobalClass.propTwo)

<a name="new_GlobalClass_new"></a>
### new GlobalClass(one, two)
the global class constructor


| Param | Type | Description |
| --- | --- | --- |
| one | <code>number</code> | first param |
| two | <code>string</code> | second param |

<a name="GlobalClass#propOne"></a>
### globalClass.propOne
an instance property

**Kind**: instance property of <code>[GlobalClass](#GlobalClass)</code>  
<a name="GlobalClass#methodOne"></a>
### globalClass.methodOne()
parent method one

**Kind**: instance method of <code>[GlobalClass](#GlobalClass)</code>  
<a name="GlobalClass#methodTwo"></a>
### globalClass.methodTwo()
parent method two

**Kind**: instance method of <code>[GlobalClass](#GlobalClass)</code>  
<a name="GlobalClass.propTwo"></a>
### GlobalClass.propTwo
a static property

**Kind**: static property of <code>[GlobalClass](#GlobalClass)</code>  
<a name="GlobalChildClass"></a>
## GlobalChildClass ⇐ <code>[GlobalClass](#GlobalClass)</code>
the child of global class

**Extends:** <code>[GlobalClass](#GlobalClass)</code>  
**Kind**: global class  

* [GlobalChildClass](#GlobalChildClass) ⇐ <code>[GlobalClass](#GlobalClass)</code>
  * [.propThree](#GlobalChildClass#propThree)
  * [.propOne](#GlobalClass#propOne)
  * [.methodTwo()](#GlobalChildClass#methodTwo)
  * [.methodOne()](#GlobalClass#methodOne)

<a name="GlobalChildClass#propThree"></a>
### globalChildClass.propThree
an instance property

**Kind**: instance property of <code>[GlobalChildClass](#GlobalChildClass)</code>  
<a name="GlobalChildClass#methodTwo"></a>
### globalChildClass.methodTwo()
overridden child methodTwo

**Kind**: instance method of <code>[GlobalChildClass](#GlobalChildClass)</code>  
**Overrides:** <code>[methodTwo](#GlobalClass#methodTwo)</code>  
<a name="customClass"></a>
## customClass
a class that has custom tags

**Kind**: global class  
**sitcom**: Only Fools  
**character**: Rodney Trotter  
<a name="new_customClass_new"></a>
### new customClass()
the constructor

<a name="EncryptedRequest"></a>
## EncryptedRequest ⇐ <code>[XMLHttpRequest](#external_XMLHttpRequest)</code>
**Extends:** <code>[XMLHttpRequest](#external_XMLHttpRequest)</code>  
**Kind**: global class  
<a name="new_EncryptedRequest_new"></a>
### new EncryptedRequest()
Extends the built in XMLHttpRequest to send data encoded with a secret key.

<a name="LendsClass"></a>
## LendsClass
**Kind**: global class  
<a name="LendsClass.say"></a>
### LendsClass.say()
say something

**Kind**: static method of <code>[LendsClass](#LendsClass)</code>  
<a name="LendsClass2"></a>
## LendsClass2
**Kind**: global class  
<a name="LendsClass2#say"></a>
### lendsClass2.say()
say something

**Kind**: instance method of <code>[LendsClass2](#LendsClass2)</code>  
<a name="EventfulClass"></a>
## EventfulClass
a class which mixes in Eventful behaviour

**Mixes**: <code>[Eventful](#Eventful)</code>  
**Kind**: global class  

* [EventfulClass](#EventfulClass)
  * [.on(eventName, handler)](#EventfulClass#on)
  * [.fire(eventName, eventData)](#EventfulClass#fire)

<a name="EventfulClass#on"></a>
### eventfulClass.on(eventName, handler)
Register a handler function to be called whenever this event is fired.

**Mixes**: <code>[on](#Eventful.on)</code>  
**Kind**: instance method of <code>[EventfulClass](#EventfulClass)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| handler | <code>function</code> | The handler to call. |

<a name="EventfulClass#fire"></a>
### eventfulClass.fire(eventName, eventData)
Fire an event, causing all handlers for that event name to run.

**Mixes**: <code>[fire](#Eventful.fire)</code>  
**Kind**: instance method of <code>[EventfulClass](#EventfulClass)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| eventData | <code>Object</code> | The data provided to each handler. |

<a name="Eventful"></a>
## Eventful
This provides methods used for event handling. It's not meant to
be used directly.

**Kind**: global mixin  

* [Eventful](#Eventful)
  * [.on(eventName, handler)](#Eventful.on)
  * [.fire(eventName, eventData)](#Eventful.fire)

<a name="Eventful.on"></a>
### Eventful.on(eventName, handler)
Register a handler function to be called whenever this event is fired.

**Kind**: static method of <code>[Eventful](#Eventful)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| handler | <code>function</code> | The handler to call. |

<a name="Eventful.fire"></a>
### Eventful.fire(eventName, eventData)
Fire an event, causing all handlers for that event name to run.

**Kind**: static method of <code>[Eventful](#Eventful)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| eventData | <code>Object</code> | The data provided to each handler. |

<a name="phantom"></a>
## phantom
phantom mixin

**Kind**: global mixin  
<a name="customTagged"></a>
## customTagged
a global var with custom tags

**Kind**: global member  
**sitcom**: The Office  
**character**: Oggmeister  
<a name="defaultedOne"></a>
## defaultedOne : <code>object</code>
**Default**: <code>{ one: 1, two: &quot;yeah?&quot; }</code>  
**Kind**: global member  
<a name="defaultedTwo"></a>
## defaultedTwo : <code>function</code>
**Default**: <code>function f(n){ return something(n); }</code>  
**Kind**: global member  
<a name="exampleVar"></a>
## exampleVar : <code>string</code>
an example var

**Default**: <code>&quot;\&quot;something\&quot;&quot;</code>  
**Kind**: global member  
**Example**  
var thisVar = funtion(){
    return "a value";
};

<a name="cliveExternal"></a>
## cliveExternal : <code>[Clive](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String)</code>
**Kind**: global member  
<a name="stringExternal"></a>
## stringExternal : <code>[String](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String)</code>
**Kind**: global member  
<a name="fileVar"></a>
## fileVar
a variable in the file

**Kind**: global member  
<a name="seeableVar"></a>
## seeableVar
a global var with a @see

**Kind**: global member  
**See**: something or other  
<a name="returnsArrayOfType"></a>
## returnsArrayOfType : <code>[Array.&lt;Human&gt;](#exp_module_cjs/human--Human)</code>
**Kind**: global member  
<a name="returnsArrayOfType2"></a>
## returnsArrayOfType2 : <code>[Array.&lt;Human&gt;](#exp_module_cjs/human--Human)</code>
**Kind**: global member  
<a name="nullableNumber"></a>
## nullableNumber : <code>number</code>
**Kind**: global member  
<a name="nonNullableNumber"></a>
## nonNullableNumber : <code>number</code>
**Kind**: global member  
<a name="objectType"></a>
## objectType : <code>Object</code>
**Kind**: global member  
<a name="globalVar"></a>
## globalVar : <code>string</code>
a global var

**Default**: <code>&quot;something&quot;</code>  
**Kind**: global member  
<a name="Documents"></a>
## Documents : <code>object</code>
**Kind**: global namespace  
<a name="Documents.Newspaper"></a>
### Documents.Newspaper
An ordinary newspaper.

**Kind**: static property of <code>[Documents](#Documents)</code>  
<a name="config"></a>
## config : <code>object</code>
**Kind**: global namespace  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| defaults | <code>object</code> | The default values for parties. |
| defaults.players | <code>number</code> | The default number of players. |
| defaults.level | <code>string</code> | The default level for the party. |
| defaults.treasure | <code>object</code> | The default treasure. |
| defaults.treasure.gold | <code>number</code> | How much gold the party starts with. |

<a name="customFunction"></a>
## customFunction()
a global function with custom tags

**Kind**: global function  
**sitcom**: Brass Eye  
**character**: Noel Edmonds  
<a name="firesError"></a>
## firesError()
**Kind**: global function  
**Emits**: <code>event:error</code>  
<a name="firesMany"></a>
## firesMany()
**Kind**: global function  
**Emits**: <code>event:error</code>, <code>event:begin</code>, <code>event:end</code>  
<a name="firesDefinedEvent"></a>
## firesDefinedEvent()
**Kind**: global function  
**Emits**: <code>[docletEvent](#event_docletEvent)</code>  
<a name="functionObj"></a>
## functionObj()
the function

**Kind**: global function  
<a name="functionObj.extra"></a>
### functionObj.extra()
a static method on the function

**Kind**: static method of <code>[functionObj](#functionObj)</code>  
<a name="globalFunction"></a>
## globalFunction(one, two, three, four)
a global function

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>number</code> | first param |
| two | <code>string</code> | second param |
| three | <code>number</code> \| <code>string</code> | third |
| four | <code>Array.&lt;(Number\|String)&gt;</code> | fourth |

<a name="globalFunction"></a>
## globalFunction() ⇒ <code>string</code> \| <code>object</code> \| <code>function</code>
a global function returning multiple stuff

**Kind**: global function  
**Returns**: <code>string</code> - if something you get a string back<code>object</code> \| <code>function</code> - or an object, or function  
<a name="returnsSomething"></a>
## returnsSomething() ⇒ <code>string</code>
returns has no desc

**Kind**: global function  
<a name="seefoo"></a>
## seefoo()
Both of these will link to the bar function.

**Kind**: global function  
**See**

- [seebar](#seebar)
- bar

<a name="seebar"></a>
## seebar()
**Kind**: global function  
**See**

- [seefoo](#seefoo) for further information.
- [GitHub](http://github.com)

<a name="throwingFunction"></a>
## throwingFunction()
**Kind**: global function  
**Throws**:

- Will throw an error if the argument is null
- <code>InvalidArgumentException</code> 
- <code>DivideByZero</code> Argument x must be non-zero

<a name="todoFunction1"></a>
## todoFunction1()
**Kind**: global function  
**Todo**

- [ ] Write the documentation.
- [ ] Implement this function.

<a name="todoFunction2"></a>
## todoFunction2()
**Kind**: global function  
**Todo**

- [ ] Write the documentation.
- [ ] Implement this function.
- [x] this one is done
- [x] finished

<a name="todoFunction3"></a>
## todoFunction3()
**Kind**: global function  
**Todo**

- [x] this one is done
- [x] finished

<a name="nullableArrayTypeParam"></a>
## nullableArrayTypeParam(one)
**Kind**: global function  

| Param | Type |
| --- | --- |
| one | <code>[Array.&lt;cjs/human&gt;](#module_cjs/human)</code> | 

<a name="event_docletEvent"></a>
## "docletEvent"
an event defined in a doclet

**Kind**: event emitted  
<a name="external_jQuery.fn"></a>
## jQuery.fn
The jQuery plugin namespace.

**Kind**: global external  
**See**: [The jQuery Plugin Guide](http://docs.jquery.com/Plugins/Authoring)  
<a name="external_jQuery.fn.starfairy"></a>
### jQuery.fn.starfairy()
A jQuery plugin to make stars fly around your home page.

**Kind**: static method of <code>[jQuery.fn](#external_jQuery.fn)</code>  
<a name="external_XMLHttpRequest"></a>
## XMLHttpRequest
Namespace provided by the browser.

**Kind**: global external  
**See**: https://developer.mozilla.org/en/xmlhttprequest  
