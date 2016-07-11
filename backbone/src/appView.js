define(function(require){
    var Backbone = require("backbone");
    var UserView = require("userView");
    
    return Backbone.View.extend({
        el: '#app',

        events: {

        },

        initialize: function () {
            this.$list = $('.row');

            this.listenTo(this.collection, 'sync', this._onFetchComplete);

            this.collection.fetch();
        },

        _onFetchComplete: function () {
            this.$el.find('.loader').remove();

            this.collection.each(this.renderUser,this);
        },

        renderUser: function (user) {
            var aUser = new UserView({model: user});
            var html = aUser.render().el;

            this.$list.append(html);
        },
    });
    
});