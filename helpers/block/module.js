var a = require("array-tools");

module.exports = function(handlebars){
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
