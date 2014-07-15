var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("classes", function(options){
        return handlebars.helpers.kinds.call(this, "class", options);
    });
};
