<a name="module_helpers"></a>
#helpers
<a name="module_helpers..getClass"></a>
##helpers~getClass(name)
A block helper rendering the contained template in the context of the specified class.

**Params**

- name `string` - The class name to return  

**Scope**: inner function of [helpers](#module_helpers)  
**Example**  
This template

    {{#class name="dmd"~}}
        The name of this class is "{{name}}" and it documents {{members.length}} properties. 
    {{/class}}

outputs:

    The name of this class is "Clive" and it documents 3 properties. 

