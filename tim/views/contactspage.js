window.contactspage = Backbone.View.extend({
    className: "row",
    initialize: function () {
        this.render();
    },
    render:function(){
        this.$el.html(this.template());
    }
})