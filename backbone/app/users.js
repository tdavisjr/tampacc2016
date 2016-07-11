define(function(require){
    var Backbone = require("backbone");

    return Backbone.Collection.extend({
        url: 'https://api.github.com/users'
    });
    

});