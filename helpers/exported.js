var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("exported", function(options){
        var exported = a.findWhere(options.data.root, { "!kind": "module", name: this.longname });
        return exported || this;
    });
};
