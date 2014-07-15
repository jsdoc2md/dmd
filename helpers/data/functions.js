var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("functions", function(options){
        return handlebars.helpers.kinds.call(this, "function", options);
    });
};
