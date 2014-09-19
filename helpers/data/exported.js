var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("exportedClass", function(options){
        return a.findWhere(options.data.root, { id: this.id, kind: "class" });
    });

    handlebars.registerHelper("exportedFunction", function(options){
        return a.findWhere(options.data.root, { id: this.id, kind: "function" });
    });
};
