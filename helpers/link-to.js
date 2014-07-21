var a = require("array-tools"),
    url = require('url'),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("linkTo", function linkTo(longname, options){
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
            
            var builtInType = /^(string|object|number|boolean|array)$/i.test(longname);
            
            if (builtInType){
                return "`" + (fullName || longname) + "`";
            } else {
                var linked = a.findWhere(options.data.root, { longname: longname }),
                    mask;
                if (linked){
                    linked.isConstructor = false;
                    if (fullName) fullName = fullName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    var linkText = fullName ? fullName.replace(longname, linked.name) : linked.name;
                    mask = options.monospace ? "`[%s](#%s)`" : "[%s](#%s)";
                    return util.format(mask, linkText, handlebars.helpers.anchorName.call(linked, options));
                } else {
                    if (url.parse(fullName || longname).protocol) {
                        switch (options.style) {
                            case 'code':
                                mask = '`[%s](%s)`';
                                break;
                            case 'plain':
                            default:
                                mask = '[%s](%s)';
                        }
                        return util.format(mask, options.caption || fullName || longname, fullName || longname);
                    }
                    return "`" + (fullName || longname) + "`";
                }
            }
        }
    });
};
