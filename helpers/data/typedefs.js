var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("typedefs", function(options){
        return handlebars.helpers.kinds.call(this, "typedef", options);
    });
};
