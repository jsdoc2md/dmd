var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("identifiers", function(options){
        var parents = handlebars.helpers.parents(options);
        var grouped = handlebars.helpers.groupBySection(parents);
        return options.fn(grouped);
    });
};
