define(function (require, exports, module) {
    var Backbone = require("backbone");
    var _        = require("underscore");

    module.exports = Backbone.View.extend({
        tagName: 'div',
        className: 'col-md-1',

        template: _.template($('#user-row').html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });
});