var a = require("array-tools"),
    url = require("url"),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("linkTo", function linkTo(longname, options){
        if (!longname) return "";

        var re = /<(.*)>/;
        var fullName = "";
        if (Array.isArray(longname)){
            return longname.map(function(name){
                return linkTo(name, options);
            });
        } else {
            if (re.test(longname)){
                fullName = longname;
                longname = longname.match(re)[1];
            }

            var builtInType = /^(string|object|number|boolean|array|regexp|date)$/i.test(longname);

            if (builtInType){
                return options.hash.style !== "plain" ? "`" + (fullName || longname) + "`" : fullName || longname;
            } else {
                var linked = a.findWhere(options.data.root, { longname: longname }),
                    mask;
                if (linked){
                    linked.isConstructor = false;
                    if (fullName) fullName = fullName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    var linkText = fullName ? fullName.replace(longname, linked.name) : linked.name;
                    mask = options.hash.style === "code" ? "<code>[%s](#%s)</code>" : "[%s](#%s)";
                    return util.format(mask, linkText, handlebars.helpers.anchorName.call(linked, options));
                } else {
                    if (url.parse(fullName || longname).protocol) {
                        switch (options.hash.style) {
                            case "code":
                                mask = "<code>[%s](%s)</code>";
                                break;
                            case "plain":
                            default:
                                mask = "[%s](%s)";
                        }
                        return util.format(mask, options.hash.caption || fullName || longname, fullName || longname);
                    }
                    return options.hash.style !== "plain" ? "`" + (fullName || longname) + "`" : fullName || longname;
                }
            }
        }
    });
};
