var a = require("array-tools");

/**
@module
*/
module.exports = function(handlebars){
    
    /**
    A block helper rendering the contained template in the context of the specified class. 
    
    @param options.hash {object} - A hash of args passed into the helper
    @param options.hash.name {string} - The class name to return
    @example
    This template

        {{#class name="dmd"~}}
            The name of this class is "{{name}}" and it documents {{members.length}} properties. 
        {{/class}}

    outputs:
    
        The name of this class is "Clive" and it documents 3 properties. 
    
    */
    function getClass(options){
        var selectedClass = a.findWhere(options.data.root, {
            kind: "class",
            name: new RegExp("^(module:)?" + options.hash.name + "$")
        });
        if (selectedClass){
            selectedClass.isConstructor = false;
            return options.fn(selectedClass);
        } else {
            return "ERROR: CLASS NOT FOUND"
        }
    }
    handlebars.registerHelper("class", getClass);
};
