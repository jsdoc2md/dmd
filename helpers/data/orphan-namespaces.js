var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("orphanNamespaces", function(options){
        var array = options.hash.in || options.data.root;
        return array.filter(function(item){
            var parent = a.findWhere(options.data.root, { longname: item.memberof });
            return item.kind === "namespace" && !parent && !/module:/.test(item.longname) && item.scope !== "global";
        });
    });
};
