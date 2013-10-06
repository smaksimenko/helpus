window.navigation = Backbone.View.extend({

    initialize: function () {
        this.render();
    },
    render:function(){
        this.$el.html(this.template({model: this.model}));
    }
})