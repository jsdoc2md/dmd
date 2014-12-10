var a = require("array-tools"),
    o = require('object-tools'),
    url = require('url');

module.exports = function (handlebars) {
    handlebars.registerHelper("linkify", function (text, options) {
        var linksRx = /(\[.+\])?\{@link\s+.*?\}/gmi,
            targetRx = /(?:\[(.+)\])?{@link(code|plain)?\s+?(?:(?:([^|]+)\|(.*))|(.+?)(?:\s+(.*))?)\}/mi,
            linkTags,
            links = {};
        if (!(linkTags = text.match(linksRx))) {
            return text;
        }
        linkTags.forEach(function (linkTag) {
            var parsedLink = linkTag.match(targetRx);
            var caption = parsedLink[1] || parsedLink[4] || parsedLink[6];
            var style = !!parsedLink[2];
            var target = parsedLink[3] || parsedLink[5];
            options.hash = o.extend({}, options.hash, {style: style, caption: caption});
            links[parsedLink[0]] = handlebars.helpers.linkTo.call(this, target, options);
        });
        for (var link in links) {
            if (links.hasOwnProperty(link)) {
                text = text.split(link).join(links[link]);
            }
        }
        return text;
    });
};
