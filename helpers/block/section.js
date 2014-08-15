var a = require("array-tools");

/**
@module helpers
*/
module.exports = function(handlebars){
    
    /**
    A block helper rendering the contained template in the context of the specified class. 
    
    @param name {string} - The class name to return
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
    
    handlebars.registerHelper("function", function getFunction(options){
        var query = {
            kind: "function",
            name: options.hash.name
        };
        if (options.hash.scope) query.scope = options.hash.scope;
        
        var selectedFunction = a.findWhere(options.data.root, query);
        if (selectedFunction){
            return options.fn(selectedFunction);
        } else {
            return "ERROR: FUNCTION NOT FOUND"
        }
    });
    
    handlebars.registerHelper("mainIndex", function getMainIndex(options){
        var parents = handlebars.helpers.parents(options);
        if (parents.length >= (options.hash.minSize || 0)){
            parents.mainIndex = true;
            return options.fn(parents);
        }
    });
    
    handlebars.registerHelper("module", function(options){
        var selectedModule = a.findWhere(options.data.root, {
            kind: "module",
            name: new RegExp("^(module:)?" + options.hash.name + "$")
        });
        if (selectedModule){
            return options.fn(selectedModule);
        } else {
            return "ERROR: MODULE NOT FOUND"
        }
    });
    
};
