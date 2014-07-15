var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("events", function(options){
        return handlebars.helpers.kinds.call(this, "event", options);
    });
};
