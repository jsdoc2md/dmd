module.exports = function(handlebars){
    handlebars.registerHelper("heading-depth", function(options){
        return options.data.root.options._headingDepth + (options.data.root.options["heading-depth"]);
    });

    handlebars.registerHelper("heading-depth-set", function(depth, options){
        options.data.root.options._headingDepth = depth;
    });

    handlebars.registerHelper("heading-depth-reset", function(options){
        options.data.root.options._headingDepth = 0;
    });

    handlebars.registerHelper("heading-depth-bump", function(options){
        options.data.root.options._headingDepth++;
    });

    handlebars.registerHelper("heading-depth-drop", function(options){
        options.data.root.options._headingDepth--;
    });
    
    handlebars.registerHelper("index-depth", function(options){
        return options.data.root.options._indexDepth;
    });

    handlebars.registerHelper("index-depth-reset", function(options){
        options.data.root.options._indexDepth = 0;
    });

    handlebars.registerHelper("≥", function(options){
        options.data.root.options._indexDepth++;
    });

    handlebars.registerHelper("≤", function(options){
        options.data.root.options._indexDepth--;
    });

};
