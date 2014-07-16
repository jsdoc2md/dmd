var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("groupByScope", function(data){
        if(!Array.isArray(data)) throw new Error("[groupByScope] requires an array as input");
        var output = [];
        output = output.concat(a.extract(data, { scope: "instance" }));
        output = output.concat(a.extract(data, { scope: "static" }));
        output = output.concat(a.extract(data, { scope: "inner" }));
        output = output.concat(a.extract(data, { scope: undefined }));
        output = output.concat(data);
        return output;
    });
};
