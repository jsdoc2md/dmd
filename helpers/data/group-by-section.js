var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("groupBySection", function(data){
        if(!Array.isArray(data)) throw new Error("[groupBySection] requires an array as input");
        data = data.slice(0);
        var output = [];
        output = output.concat(a.extract(data, { kind: "module" }));
        output = output.concat(a.extract(data, { kind: "class" }));
        output = output.concat(a.extract(data, { kind: "namespace" }));
        output = output.concat(a.extract(data, { kind: "event" }));
        output = output.concat(a.extract(data, { kind: "function" }));
        output = output.concat(a.extract(data, { kind: "member" }));
        output = output.concat(a.extract(data, { kind: "typedef" }));
        output = output.concat(a.extract(data, { kind: "constant" }));
        output = output.concat(data);
        return output;
    });
};
