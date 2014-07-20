var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("function", function(options){
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
};
