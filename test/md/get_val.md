<a name="module_get_val"></a>
##get_val
Provides class for getting value by key

**See**

- {@link https://github.com/unclechu/js-useful-umd-modules/|GitHub}
- {@link https://github.com/unclechu/js-useful-umd-modules/blob/master/AGPLv3-LICENSE|License}

**Version**: r10  
**Author:** Viacheslav Lotsmanov  
**License**: AGPLv3  

* [get_val](#module_get_val)
  * [class: ~GetVal](#module_get_val..GetVal)
    * [new GetVal(values, [required])](#new_module_get_val..GetVal_new)
    * _inner_
      * [type: ~valuesArg](#GetVal..valuesArg) → <code>Object.&lt;(Object|Array)&gt;</code>
      * [~exceptions](#GetVal..exceptions) → <code>Object.&lt;Error&gt;</code>
      * [~_values](#GetVal.._values) → <code>Object.&lt;*&gt;</code> ℗
      * [~_required](#GetVal.._required) → <code>Array.&lt;string&gt;</code> ℗
      * [~super](#GetVal..super) → <code>GetVal</code>
      * [~_check-required()](#GetVal.._check-required) ℗
      * [~set(key, val)](#GetVal..set)
      * [~get(key, ignoreRequired)](#GetVal..get) ⇒ <code>*</code>

<a name="module_get_val..GetVal"></a>
###class: get_val~GetVal
**Scope**: inner class of <code>[get_val](#module_get_val)</code>  
**Throws**:

- <code>GetVal~IncorrectArgument</code> 
- <code>GetVal~RequiredArgumentKey</code> 


  * [class: ~GetVal](#module_get_val..GetVal)
    * [new GetVal(values, [required])](#new_module_get_val..GetVal_new)
    * _inner_
      * [type: ~valuesArg](#GetVal..valuesArg) → <code>Object.&lt;(Object|Array)&gt;</code>
      * [~exceptions](#GetVal..exceptions) → <code>Object.&lt;Error&gt;</code>
      * [~_values](#GetVal.._values) → <code>Object.&lt;*&gt;</code> ℗
      * [~_required](#GetVal.._required) → <code>Array.&lt;string&gt;</code> ℗
      * [~super](#GetVal..super) → <code>GetVal</code>
      * [~_check-required()](#GetVal.._check-required) ℗
      * [~set(key, val)](#GetVal..set)
      * [~get(key, ignoreRequired)](#GetVal..get) ⇒ <code>*</code>

<a name="new_module_get_val..GetVal_new"></a>
####new GetVal(values, [required])
| Param | Type | Description |
| ----- | ---- | ----------- |
| values | <code>[valuesArg](#GetVal..valuesArg)</code> | Key-value object of values |
| \[required\] | <code>Object.&lt;*&gt;</code> | Key-value object to set required values at instance creating |

**Returns**: <code>function</code> - "get" method wrapper (you can get value from example of class directly as by function)  
<a name="GetVal..exceptions"></a>
####GetVal~exceptions → <code>Object.&lt;Error&gt;</code>
Exceptions

**Properties**

-  `GetVal~IncorrectArgument` - Incorrect argument type for constructor  
-  `GetVal~RequiredArgumentKey` - Required argument key is not set or has incorrect type (for constructor)  
-  `GetVal~IncorrectKey` - Incorrect key type for get/set methods  
-  `GetVal~KeyIsNotExists` - Value not found by key  
-  `GetVal~RequiredIsNotSet` - Attempt to get value before all required values sets  
-  `GetVal~NoKeyInRequiredList` - Attempt to set required value by key that not in required list  

**Scope**: inner member of <code>[GetVal](#module_get_val..GetVal)</code>  
**Read only**: true  
<a name="GetVal.._values"></a>
####GetVal~_values → <code>Object.&lt;*&gt;</code> ℗
**Scope**: inner member of <code>[GetVal](#module_get_val..GetVal)</code>  
**Access:** private  
<a name="GetVal.._required"></a>
####GetVal~_required → <code>Array.&lt;string&gt;</code> ℗
**Scope**: inner member of <code>[GetVal](#module_get_val..GetVal)</code>  
**Access:** private  
<a name="GetVal..super"></a>
####GetVal~super → <code>GetVal</code>
Link to class example for "get" method wrapper

**Scope**: inner member of <code>[GetVal](#module_get_val..GetVal)</code>  
<a name="GetVal.._check-required"></a>
####GetVal~_check-required() ℗
**Scope**: inner function of <code>[GetVal](#module_get_val..GetVal)</code>  
**Throws**:

- <code>GetVal~RequiredIsNotSet</code> 

**Access:** private  
<a name="GetVal..set"></a>
####GetVal~set(key, val)
Set value by key
(only for "required" keys)

| Param | Type | Description |
| ----- | ---- | ----------- |
| key | <code>string</code> | Key that in "required" list |
| val | <code>*</code> | Value that can be got in the future by "key" |

**Scope**: inner function of <code>[GetVal](#module_get_val..GetVal)</code>  
**Throws**:

- <code>GetVal~IncorrectKey</code> 
- <code>GetVal~NoKeyInRequiredList</code> 

<a name="GetVal..get"></a>
####GetVal~get(key, ignoreRequired) ⇒ <code>*</code>
Get value by key

| Param | Type | Description |
| ----- | ---- | ----------- |
| key | <code>string</code> | Get value by this key |
| ignoreRequired | <code>boolean</code> | Get value even if all required values is not setted yet |

**Scope**: inner function of <code>[GetVal](#module_get_val..GetVal)</code>  
**Returns**: <code>*</code> - Value by key  
**Throws**:

- <code>GetVal~RequiredIsNotSet</code> 
- <code>GetVal~IncorrectKey</code> 
- <code>GetVal~KeyIsNotExists</code> 

<a name="GetVal..valuesArg"></a>
####type: GetVal~valuesArg → <code>Object.&lt;(Object|Array)&gt;</code>
**Properties**

- values `Object.<*>` - Values key-val object  
- required `Array.<string>` - Array of required keys  

**Scope**: inner typedef of <code>[GetVal](#module_get_val..GetVal)</code>  
