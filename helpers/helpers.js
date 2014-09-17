var dataHelpers = require("../helpers2/data");
var blockHelpers = require("../helpers2/block");
var varHelpers = require("../helpers2/vars");

module.exports = function(handlebars){
    require("./constructor-has-docs.js")(handlebars);
    require("./depth.js")(handlebars);
    require("./link-to.js")(handlebars);
    require("./linkify.js")(handlebars);
    require("./or.js")(handlebars);
    require("./parent.js")(handlebars);
    require("./data/all-members.js")(handlebars);
    require("./data/classes.js")(handlebars);
    require("./data/constants.js")(handlebars);
    require("./data/exported.js")(handlebars);
    require("./data/events.js")(handlebars);
    require("./data/functions.js")(handlebars);
    require("./data/globals.js")(handlebars);
    require("./data/group-by-kind.js")(handlebars);
    require("./data/group-by-scope.js")(handlebars);
    require("./data/group-by-section.js")(handlebars);
    require("./data/inner-scope.js")(handlebars);
    require("./data/instance-scope.js")(handlebars);
    require("./data/is-class.js")(handlebars);
    require("./data/kinds.js")(handlebars);
    require("./data/members.js")(handlebars);
    require("./data/modules.js")(handlebars);
    require("./data/namespaces.js")(handlebars);
    require("./data/no-scope.js")(handlebars);
    require("./data/set.js")(handlebars);
    require("./data/static-scope.js")(handlebars);
    require("./data/typedefs.js")(handlebars);
    require("./block/collection/parents-grouped.js")(handlebars);
    require("./block/section/class.js")(handlebars);
    require("./block/section/function.js")(handlebars);
    require("./block/section/main-index.js")(handlebars);
    require("./block/section/module.js")(handlebars);
    
    for (var helper in dataHelpers){
        handlebars.registerHelper(helper, dataHelpers[helper]);
    }
    for (var helper in blockHelpers){
        handlebars.registerHelper(helper, blockHelpers[helper]);
    }
    for (var helper in varHelpers){
        handlebars.registerHelper(helper, varHelpers[helper]);
    }
};
