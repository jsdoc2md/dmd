var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("class", function(options){
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
    });
};
