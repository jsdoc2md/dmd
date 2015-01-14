#API Reference
<a name="module_get_val"></a>
##get_val
Provides class for getting value by key

**See**

- [GitHub](https://github.com/unclechu/js-useful-umd-modules/)
- [License](https://github.com/unclechu/js-useful-umd-modules/blob/master/AGPLv3-LICENSE)

**Version**: r11  
**Author:** Viacheslav Lotsmanov  
**License**: GNU/AGPLv3  

* [get_val](#module_get_val)
  * [class: ~GetVal](#module_get_val..GetVal)
    * [new GetVal(values, [required])](#new_module_get_val..GetVal_new)

<a name="module_get_val..GetVal"></a>
###class: get_val~GetVal
**Access:** public  
<a name="new_module_get_val..GetVal_new"></a>
####new GetVal(values, [required])
| Param | Type | Description |
| ----- | ---- | ----------- |
| values | <code>[valuesArg](#GetVal..valuesArg)</code> | Key-value object of values |
| \[required\] | <code>Object.&lt;\*&gt;</code> | Key-value object to set required values at instance creating |

**Returns**: <code>function</code> - "get" method wrapper (you can get value from example of class directly as by function)  
**Throws**:

- <code>GetVal~IncorrectArgument</code> 
- <code>GetVal~RequiredArgumentKey</code> 

