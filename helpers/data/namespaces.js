var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("namespaces", function(options){
        return handlebars.helpers.kinds.call(this, "namespace", options);
    });
};
