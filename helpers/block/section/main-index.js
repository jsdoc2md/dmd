var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("mainIndex", function(options){
        var parents = handlebars.helpers.parents(options);
        if (parents.length >= (options.hash.minSize || 0)){
            parents.mainIndex = true;
            return options.fn(parents);
        }
    });
};
