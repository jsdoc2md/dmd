var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("constants", function(options){
        return handlebars.helpers.kinds.call(this, "constant", options);
    });
};
