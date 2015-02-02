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

## Globals
<dl>
<dt><a href="#Chainable">class: Chainable</a></dt>
<dd><p>has a chainable method</p>
</dd>
<dt><a href="#GlobalClass">class: GlobalClass</a></dt>
<dd><p>a global class</p>
</dd>
<dt><a href="#GlobalChildClass">class: GlobalChildClass</a> ⇐ <code><a href="#GlobalClass">GlobalClass</a></code></dt>
<dd><p>the child of global class</p>
</dd>
<dt><a href="#customClass">class: customClass</a></dt>
<dd><p>a class that has custom tags</p>
</dd>
<dt><a href="#EncryptedRequest">class: EncryptedRequest</a> ⇐ <code><a href="#external_XMLHttpRequest">XMLHttpRequest</a></code></dt>
<dd></dd>
<dt><a href="#LendsClass">class: LendsClass</a></dt>
<dd></dd>
<dt><a href="#LendsClass2">class: LendsClass2</a></dt>
<dd></dd>
<dt><a href="#EventfulClass">class: EventfulClass</a></dt>
<dd><p>a class which mixes in Eventful behaviour</p>
</dd>
<dt><a href="#Eventful">mixin: Eventful</a></dt>
<dd><p>This provides methods used for event handling. It&#39;s not meant to
be used directly.</p>
</dd>
<dt><a href="#phantom">mixin: phantom</a></dt>
<dd><p>phantom mixin</p>
</dd>
<dt><a href="#customTagged">customTagged</a></dt>
<dd><p>a global var with custom tags</p>
</dd>
<dt><a href="#defaultedOne">defaultedOne</a> → <code>object</code></dt>
<dd></dd>
<dt><a href="#defaultedTwo">defaultedTwo</a> → <code>function</code></dt>
<dd></dd>
<dt><a href="#exampleVar">exampleVar</a> → <code>string</code></dt>
<dd><p>an example var</p>
</dd>
<dt><a href="#cliveExternal">cliveExternal</a> → <code><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String">Clive</a></code></dt>
<dd></dd>
<dt><a href="#stringExternal">stringExternal</a> → <code><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String">String</a></code></dt>
<dd></dd>
<dt><a href="#fileVar">fileVar</a></dt>
<dd><p>a variable in the file</p>
</dd>
<dt><a href="#seeableVar">seeableVar</a></dt>
<dd><p>a global var with a @see</p>
</dd>
<dt><a href="#returnsArrayOfType">returnsArrayOfType</a> ⇒ <code><a href="#exp_module_cjs/human--Human">Array.<Human></a></code></dt>
<dd></dd>
<dt><a href="#returnsArrayOfType2">returnsArrayOfType2</a> ⇒ <code><a href="#exp_module_cjs/human--Human">Array.<Human></a></code></dt>
<dd></dd>
<dt><a href="#nullableNumber">nullableNumber</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#nonNullableNumber">nonNullableNumber</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#objectType">objectType</a> → <code>Object</code></dt>
<dd></dd>
<dt><a href="#globalVar">globalVar</a> → <code>string</code></dt>
<dd><p>a global var</p>
</dd>
<dt><a href="#Documents">Documents</a> → <code>object</code></dt>
<dd></dd>
<dt><a href="#config">config</a> → <code>object</code></dt>
<dd></dd>
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
<dt><a href="#event_docletEvent">"docletEvent"</a></dt>
<dd><p>an event defined in a doclet</p>
</dd>
<dt><a href="#external_jQuery.fn">external: jQuery.fn</a></dt>
<dd><p>The jQuery plugin namespace.</p>
</dd>
<dt><a href="#external_XMLHttpRequest">external: XMLHttpRequest</a></dt>
<dd><p>Namespace provided by the browser.</p>
</dd>
</dl>
<a name="module_cjs/animals"></a>
## cjs/animals
exports animals


* [cjs/animals](#module_cjs/animals)
  * [.cat](#module_cjs/animals.cat) → <code>Animal</code>
  * [.dog](#module_cjs/animals.dog) → <code>Animal</code>
  * [class: ~Animal](#module_cjs/animals..Animal)
    * _instance_
      * [.type](#module_cjs/animals..Animal#type) → <code>Quadroped</code>
    * _inner_
      * [class: ~Quadroped](#module_cjs/animals..Animal..Quadroped)
        * _instance_
          * [.legs](#module_cjs/animals..Animal..Quadroped#legs)

<a name="module_cjs/animals.cat"></a>
### cjs/animals.cat → <code>Animal</code>
the exported cat

<a name="module_cjs/animals.dog"></a>
### cjs/animals.dog → <code>Animal</code>
the exported dog

<a name="module_cjs/animals..Animal"></a>
### class: cjs/animals~Animal

* [class: ~Animal](#module_cjs/animals..Animal)
  * _instance_
    * [.type](#module_cjs/animals..Animal#type) → <code>Quadroped</code>
  * _inner_
    * [class: ~Quadroped](#module_cjs/animals..Animal..Quadroped)
      * _instance_
        * [.legs](#module_cjs/animals..Animal..Quadroped#legs)

<a name="module_cjs/animals..Animal#type"></a>
#### animal.type → <code>Quadroped</code>
animal type

<a name="module_cjs/animals..Animal..Quadroped"></a>
#### class: Animal~Quadroped
<a name="module_cjs/animals..Animal..Quadroped#legs"></a>
##### quadroped.legs
leg count

<a name="module_cjs/class"></a>
## cjs/class
exports a class


* [cjs/class](#module_cjs/class)
  * [class: ExportedClass](#exp_module_cjs/class--ExportedClass) ⏏
    * [new ExportedClass()](#new_module_cjs/class--ExportedClass_new)
    * _instance_
      * [.prop](#module_cjs/class--ExportedClass#prop)
    * _static_
      * [.staticProp](#module_cjs/class--ExportedClass.staticProp)
    * _inner_
      * [~innerProp](#module_cjs/class--ExportedClass..innerProp)

<a name="exp_module_cjs/class--ExportedClass"></a>
### class: ExportedClass ⏏
the exported class

<a name="new_module_cjs/class--ExportedClass_new"></a>
#### new ExportedClass()
the exported contructor

<a name="module_cjs/class--ExportedClass#prop"></a>
#### exportedClass.prop
instance property

<a name="module_cjs/class--ExportedClass.staticProp"></a>
#### ExportedClass.staticProp
a static property for the exported class

<a name="module_cjs/class--ExportedClass..innerProp"></a>
#### ExportedClass~innerProp
inner module property

<a name="module_cjs/falias-obj"></a>
## cjs/falias-obj
exports a pointer to a function


* [cjs/falias-obj](#module_cjs/falias-obj)
  * [sum()](#exp_module_cjs/falias-obj--sum) ⏏
    * [.extra()](#module_cjs/falias-obj--sum.extra)

<a name="exp_module_cjs/falias-obj--sum"></a>
### sum() ⏏
the function

<a name="module_cjs/falias-obj--sum.extra"></a>
#### sum.extra()
a static method on the exported function

<a name="module_cjs/function-alias"></a>
## cjs/function-alias
exports a pointer to a function


* [cjs/function-alias](#module_cjs/function-alias)
  * [sum(one, two)](#exp_module_cjs/function-alias--sum) ⇒ <code>number</code> ⏏
    * [.sumthingStatic](#module_cjs/function-alias--sum.sumthingStatic)

<a name="exp_module_cjs/function-alias--sum"></a>
### sum(one, two) ⇒ <code>number</code> ⏏
the function

**Returns**: <code>number</code> - the calculation result  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>number</code> | the first number |
| two | <code>number</code> | the second number |

<a name="module_cjs/function-alias--sum.sumthingStatic"></a>
#### sum.sumthingStatic
an additional static property

<a name="module_cjs/human"></a>
## cjs/human
exports a class


* [cjs/human](#module_cjs/human)
  * [class: Human](#exp_module_cjs/human--Human) ⏏
    * [new Human()](#new_module_cjs/human--Human_new)
    * _instance_
      * [.liver](#module_cjs/human--Human#liver) → <code>[Organ](#module_cjs/human--Human..Organ)</code>
    * _inner_
      * [class: ~Organ](#module_cjs/human--Human..Organ)
        * _instance_
          * [.redCell](#module_cjs/human--Human..Organ#redCell) → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
        * _inner_
          * [class: ~Cell](#module_cjs/human--Human..Organ..Cell)

<a name="exp_module_cjs/human--Human"></a>
### class: Human ⏏
the exported class

<a name="new_module_cjs/human--Human_new"></a>
#### new Human()
the exported contructor

<a name="module_cjs/human--Human#liver"></a>
#### human.liver → <code>[Organ](#module_cjs/human--Human..Organ)</code>
an instance of Organ

<a name="module_cjs/human--Human..Organ"></a>
#### class: Human~Organ
a class inside a class


* [class: ~Organ](#module_cjs/human--Human..Organ)
  * _instance_
    * [.redCell](#module_cjs/human--Human..Organ#redCell) → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
  * _inner_
    * [class: ~Cell](#module_cjs/human--Human..Organ..Cell)

<a name="module_cjs/human--Human..Organ#redCell"></a>
##### organ.redCell → <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
an instance of Cell

<a name="module_cjs/human--Human..Organ..Cell"></a>
##### class: Organ~Cell
a class inside a class inside a class

<a name="module_linkMod"></a>
## linkMod
A module. Refer to it using [this link](#module_linkMod).


* [linkMod](#module_linkMod)
  * ["event:MyEvent"](#module_linkMod.event_MyEvent)
  * [class: ~linksYeah](#module_linkMod..linksYeah) ⇐ <code>[Math](#external_Math)</code>
    * [new linksYeah()](#new_module_linkMod..linksYeah_new)
  * [external: ~Math](#external_Math)
  * [external: ~Date](#external_Date)

<a name="module_linkMod.event_MyEvent"></a>
### event: "event:MyEvent"
An event. Refer to with [this link](#module_linkMod.event_MyEvent).

<a name="module_linkMod..linksYeah"></a>
### class: linkMod~linksYeah ⇐ <code>[Math](#external_Math)</code>
**Extends:** <code>[Math](#external_Math)</code>  
**Emits**: <code>[event:MyEvent](#module_linkMod.event_MyEvent)</code>  
<a name="new_module_linkMod..linksYeah_new"></a>
#### new linksYeah()
this is from [linkMod](#module_linkMod).. it also references [Math](#external_Math)

<a name="external_Math"></a>
### external: linkMod~Math
The built in Math object. Refer to it with [Math](#external_Math).

**See**: http://www.math.com  
<a name="external_Date"></a>
### external: linkMod~Date
The built in Date object, it has no see tag. Refer to it with [Date](#external_Date).

<a name="module_cjs/object-alias"></a>
## cjs/object-alias
a module exporting an object

<a name="exp_module_cjs/object-alias--teams"></a>
### teams ⏏
the teams

<a name="module_cjs/object"></a>
## cjs/object
a module exporting `exports` directly


* [cjs/object](#module_cjs/object)
  * [.one](#module_cjs/object.one) → <code>number</code>
  * [.two()](#module_cjs/object.two)

<a name="module_cjs/object.one"></a>
### obj.one → <code>number</code>
the first property

<a name="module_cjs/object.two"></a>
### obj.two()
the second property, a function

**Example**  
this is the example

<a name="Chainable"></a>
## class: Chainable
has a chainable method

<a name="Chainable#method"></a>
### chainable.method() ↩︎
returns itself

**Chainable**  
<a name="GlobalClass"></a>
## class: GlobalClass
a global class


* [class: GlobalClass](#GlobalClass)
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

<a name="GlobalClass#methodOne"></a>
### globalClass.methodOne()
parent method one

<a name="GlobalClass#methodTwo"></a>
### globalClass.methodTwo()
parent method two

<a name="GlobalClass.propTwo"></a>
### GlobalClass.propTwo
a static property

<a name="GlobalChildClass"></a>
## class: GlobalChildClass ⇐ <code>[GlobalClass](#GlobalClass)</code>
the child of global class

**Extends:** <code>[GlobalClass](#GlobalClass)</code>  

* [class: GlobalChildClass](#GlobalChildClass) ⇐ <code>[GlobalClass](#GlobalClass)</code>
  * _instance_
    * [.propThree](#GlobalChildClass#propThree)
  * _overrides_
    * [.methodTwo()](#GlobalChildClass#methodTwo)
  * _inherits_
    * [.propOne](#GlobalClass#propOne)
    * [.methodOne()](#GlobalClass#methodOne)

<a name="GlobalChildClass#propThree"></a>
### globalChildClass.propThree
an instance property

<a name="GlobalChildClass#methodTwo"></a>
### globalChildClass.methodTwo()
overridden child methodTwo

<a name="customClass"></a>
## class: customClass
a class that has custom tags

**sitcom**: Only Fools  
**character**: Rodney Trotter  
<a name="new_customClass_new"></a>
### new customClass()
the constructor

<a name="EncryptedRequest"></a>
## class: EncryptedRequest ⇐ <code>[XMLHttpRequest](#external_XMLHttpRequest)</code>
**Extends:** <code>[XMLHttpRequest](#external_XMLHttpRequest)</code>  
<a name="new_EncryptedRequest_new"></a>
### new EncryptedRequest()
Extends the built in XMLHttpRequest to send data encoded with a secret key.

<a name="LendsClass"></a>
## class: LendsClass
<a name="LendsClass.say"></a>
### LendsClass.say()
say something

<a name="LendsClass2"></a>
## class: LendsClass2
<a name="LendsClass2#say"></a>
### lendsClass2.say()
say something

<a name="EventfulClass"></a>
## class: EventfulClass
a class which mixes in Eventful behaviour

**Mixes**: <code>[Eventful](#Eventful)</code>  

* [class: EventfulClass](#EventfulClass)
  * _instance_
    * [.on(eventName, handler)](#EventfulClass#on)
    * [.fire(eventName, eventData)](#EventfulClass#fire)

<a name="EventfulClass#on"></a>
### eventfulClass.on(eventName, handler)
Register a handler function to be called whenever this event is fired.

**Mixes**: <code>[on](#Eventful.on)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| handler | <code>function</code> | The handler to call. |

<a name="EventfulClass#fire"></a>
### eventfulClass.fire(eventName, eventData)
Fire an event, causing all handlers for that event name to run.

**Mixes**: <code>[fire](#Eventful.fire)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| eventData | <code>Object</code> | The data provided to each handler. |

<a name="Eventful"></a>
## mixin: Eventful
This provides methods used for event handling. It's not meant to
be used directly.


* [mixin: Eventful](#Eventful)
  * [.on(eventName, handler)](#Eventful.on)
  * [.fire(eventName, eventData)](#Eventful.fire)

<a name="Eventful.on"></a>
### Eventful.on(eventName, handler)
Register a handler function to be called whenever this event is fired.


| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| handler | <code>function</code> | The handler to call. |

<a name="Eventful.fire"></a>
### Eventful.fire(eventName, eventData)
Fire an event, causing all handlers for that event name to run.


| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| eventData | <code>Object</code> | The data provided to each handler. |

<a name="phantom"></a>
## mixin: phantom
phantom mixin

<a name="customTagged"></a>
## customTagged
a global var with custom tags

**sitcom**: The Office  
**character**: Oggmeister  
<a name="defaultedOne"></a>
## defaultedOne → <code>object</code>
**Default**: <code>"{ one: 1, two: \"yeah?\" }"</code>  
<a name="defaultedTwo"></a>
## defaultedTwo → <code>function</code>
**Default**: <code>"function f(n){ return something(n); }"</code>  
<a name="exampleVar"></a>
## exampleVar → <code>string</code>
an example var

**Default**: <code>"\"something\""</code>  
**Example**  
var thisVar = funtion(){
    return "a value";
};

<a name="cliveExternal"></a>
## cliveExternal → <code>[Clive](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String)</code>
<a name="stringExternal"></a>
## stringExternal → <code>[String](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String)</code>
<a name="fileVar"></a>
## fileVar
a variable in the file

<a name="seeableVar"></a>
## seeableVar
a global var with a @see

**See**: something or other  
<a name="returnsArrayOfType"></a>
## returnsArrayOfType ⇒ <code>[Array.<Human>](#exp_module_cjs/human--Human)</code>
<a name="returnsArrayOfType2"></a>
## returnsArrayOfType2 ⇒ <code>[Array.<Human>](#exp_module_cjs/human--Human)</code>
<a name="nullableNumber"></a>
## nullableNumber ⇒ <code>number</code>
<a name="nonNullableNumber"></a>
## nonNullableNumber ⇒ <code>number</code>
<a name="objectType"></a>
## objectType → <code>Object</code>
<a name="globalVar"></a>
## globalVar → <code>string</code>
a global var

**Default**: <code>"\"something\""</code>  
<a name="Documents"></a>
## Documents → <code>object</code>
<a name="Documents.Newspaper"></a>
### Documents.Newspaper
An ordinary newspaper.

<a name="config"></a>
## config → <code>object</code>
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

**sitcom**: Brass Eye  
**character**: Noel Edmonds  
<a name="firesError"></a>
## firesError()
**Emits**: <code>event:error</code>  
<a name="firesMany"></a>
## firesMany()
**Emits**: <code>event:error</code>, <code>event:begin</code>, <code>event:end</code>  
<a name="firesDefinedEvent"></a>
## firesDefinedEvent()
**Emits**: <code>[docletEvent](#event_docletEvent)</code>  
<a name="functionObj"></a>
## functionObj()
the function

<a name="functionObj.extra"></a>
### functionObj.extra()
a static method on the function

<a name="globalFunction"></a>
## globalFunction(one, two, three, four)
a global function


| Param | Type | Description |
| --- | --- | --- |
| one | <code>number</code> | first param |
| two | <code>string</code> | second param |
| three | <code>number</code> \| <code>string</code> | third |
| four | <code>Array.<(Number\|String)></code> | fourth |

<a name="globalFunction"></a>
## globalFunction() ⇒ <code>string</code> \| <code>object</code> \| <code>function</code>
a global function returning multiple stuff

**Returns**: <code>string</code> - if something you get a string back<code>object</code> \| <code>function</code> - or an object, or function  
<a name="returnsSomething"></a>
## returnsSomething() ⇒ <code>string</code>
returns has no desc

<a name="seefoo"></a>
## seefoo()
Both of these will link to the bar function.

**See**

- [seebar](#seebar)
- bar

<a name="seebar"></a>
## seebar()
**See**

- [seefoo](#seefoo) for further information.
- [GitHub](http://github.com)

<a name="throwingFunction"></a>
## throwingFunction()
**Throws**:

- Will throw an error if the argument is null
- <code>InvalidArgumentException</code> 
- <code>DivideByZero</code> Argument x must be non-zero

<a name="todoFunction1"></a>
## todoFunction1()
**Todo**

- [ ] Write the documentation.
- [ ] Implement this function.

<a name="todoFunction2"></a>
## todoFunction2()
**Todo**

- [ ] Write the documentation.
- [ ] Implement this function.
- [x] this one is done
- [x] finished

<a name="todoFunction3"></a>
## todoFunction3()
**Todo**

- [x] this one is done
- [x] finished

<a name="nullableArrayTypeParam"></a>
## nullableArrayTypeParam(one)

| Param | Type |
| --- | --- |
| one | <code>[Array.<cjs/human>](#module_cjs/human)</code> | 

<a name="event_docletEvent"></a>
## event: "docletEvent"
an event defined in a doclet

<a name="external_jQuery.fn"></a>
## external: jQuery.fn
The jQuery plugin namespace.

**See**: [The jQuery Plugin Guide](http://docs.jquery.com/Plugins/Authoring)  
<a name="external_jQuery.fn.starfairy"></a>
### jQuery.fn.starfairy()
A jQuery plugin to make stars fly around your home page.

<a name="external_XMLHttpRequest"></a>
## external: XMLHttpRequest
Namespace provided by the browser.

**See**: https://developer.mozilla.org/en/xmlhttprequest  
