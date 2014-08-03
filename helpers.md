<a name="module_block/section/class"></a>
#block/section/class
<a name="module_block/section/class..getClass"></a>
##block/section/class~getClass(options)
A block helper rendering the contained template in the context of the specified class.

**Params**

- options `object` - Helper options  
  - hash `object` - A hash of args passed into the helper  
  - name `string` - The class name to return  

**Scope**: inner function of [block/section/class](#module_block/section/class)  
**Example**  
This template

    {{#class name="dmd"~}}
        The name of this class is "{{name}}" and it documents {{members.length}} properties. 
    {{/class}}

outputs:

    The name of this class is "Clive" and it documents 3 properties. 

