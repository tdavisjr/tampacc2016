define(function (require) {
    var Backbone = require("backbone");
    var _        = require("underscore");

    return Backbone.View.extend({
        tagName: 'div',
        className: 'col-sm-1',

        template: _.template($('#user-row').html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });
});